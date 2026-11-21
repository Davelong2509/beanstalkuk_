import { z } from "zod";
import { siteContact } from "@/content/site";

export const runtime = "nodejs";

const optionalText = (max) =>
  z.string().trim().max(max).optional().or(z.literal(""));

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  telephone: z.string().trim().min(5, "Please enter a valid telephone number.").max(40),
  childAge: z.string().trim().min(1, "Please tell us your child's age or date of birth.").max(80),
  preferredStartDate: optionalText(20),
  topic: z.enum([
    "",
    "places",
    "funded-hours",
    "daily-routine",
    "fees",
    "settling-in",
    "registration",
    "other"
  ]),
  childcareNeed: z.enum(["", "full-time", "part-time", "funded-hours", "not-sure-yet"]),
  message: optionalText(1500),
  consent: z.literal(true),
  intent: z.enum(["enquiry", "register"]).optional(),
  companyWebsite: optionalText(200)
});

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

const topicLabels = {
  places: "Places and availability",
  "funded-hours": "Funded hours",
  "daily-routine": "What a day looks like",
  fees: "Fees",
  "settling-in": "Settling in",
  registration: "Registration",
  other: "Something else"
};

const childcareLabels = {
  "full-time": "Full time",
  "part-time": "Part time",
  "funded-hours": "Funded hours",
  "not-sure-yet": "Not sure yet"
};

export async function POST(request) {
  let body;

  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 12_000) {
      return Response.json(
        { success: false, message: "Your message is too large. Please shorten it and try again." },
        { status: 413 }
      );
    }
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "We couldn't read your enquiry. Please check the form and try again." },
      { status: 400 }
    );
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      {
        success: false,
        message: "Please check the required fields and make sure your details are correct.",
        errors: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.companyWebsite) {
    return Response.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL || siteContact.email;

  if (!apiKey || !fromEmail) {
    return Response.json(
      {
        success: false,
        message:
          "The online enquiry service is not connected yet. Please call the nursery on 0116 254 2253 or email asha.patel@beanstalkdaynursery.co.uk."
      },
      { status: 503 }
    );
  }

  const intent = data.intent === "register" ? "Registration interest" : "General enquiry";
  const fields = [
    ["Enquiry type", intent],
    ["Parent / carer", data.name],
    ["Email", data.email],
    ["Telephone", data.telephone],
    ["Child's age or date of birth", data.childAge],
    ["Preferred start date", data.preferredStartDate || "Not provided"],
    ["Topic", topicLabels[data.topic] || "Not selected"],
    ["Childcare needed", childcareLabels[data.childcareNeed] || "Not selected"],
    ["Message", data.message || "No additional message"]
  ];

  const htmlRows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:10px 14px;border-bottom:1px solid #e8e4d8;color:#53645d;font-size:13px;">${escapeHtml(label)}</th><td style="padding:10px 14px;border-bottom:1px solid #e8e4d8;color:#193a31;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const textBody = [
    `New Beanstalk Day Nursery ${intent.toLowerCase()}`,
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`)
  ].join("\n");

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `New nursery ${intent.toLowerCase()} — ${data.name.replace(/[\r\n]+/g, " ")}`,
        html: `
          <div style="margin:0 auto;max-width:680px;padding:28px 18px;font-family:Arial,sans-serif;color:#193a31;">
            <p style="color:#b94d40;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Beanstalk Day Nursery</p>
            <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:normal;">New ${escapeHtml(intent.toLowerCase())}</h1>
            <p style="font-size:14px;line-height:1.7;color:#66766e;">A parent or carer has sent a message through the admissions page.</p>
            <table style="width:100%;border-collapse:collapse;background:#fffdf7;">${htmlRows}</table>
          </div>
        `,
        text: textBody
      })
    });

    if (!emailResponse.ok) {
      return Response.json(
        {
          success: false,
          message:
            "We couldn't send your enquiry just now. Please call the nursery on 0116 254 2253 or try again shortly."
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Your enquiry has been sent."
    });
  } catch {
    return Response.json(
      {
        success: false,
        message:
          "We couldn't connect to the nursery just now. Please call 0116 254 2253 or try again."
      },
      { status: 502 }
    );
  }
}
