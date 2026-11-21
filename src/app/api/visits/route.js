import { z } from "zod";
import { siteContact } from "@/content/site";

export const runtime = "nodejs";

const optionalText = (max) =>
  z.string().trim().max(max).optional().or(z.literal(""));

const visitSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  telephone: optionalText(40),
  childAgeGroup: z.enum(["babies", "toddlers", "preschool"]),
  approximateStartDate: optionalText(20),
  preferredVisitDate: optionalText(20),
  preferredVisitTime: optionalText(100),
  message: optionalText(1500),
  consent: z.literal(true),
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

function displayAgeGroup(value) {
  return {
    babies: "Babies room",
    toddlers: "Toddlers room",
    preschool: "Preschool room"
  }[value] || value;
}

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
      { success: false, message: "We couldn't read your request. Please check the form and try again." },
      { status: 400 }
    );
  }

  const parsed = visitSchema.safeParse(body);
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

  // Quietly accept automated submissions caught by the honeypot.
  if (data.companyWebsite) {
    return Response.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.VISIT_NOTIFICATION_EMAIL || siteContact.email;

  if (!apiKey || !fromEmail) {
    return Response.json(
      {
        success: false,
        message:
          "The online visit request service is not connected yet. Please call the nursery on 0116 254 2253 or email asha.patel@beanstalkdaynursery.co.uk."
      },
      { status: 503 }
    );
  }

  const fields = [
    ["Parent / carer", data.name],
    ["Email", data.email],
    ["Telephone", data.telephone || "Not provided"],
    ["Child's age group", displayAgeGroup(data.childAgeGroup)],
    ["Approximate start date", data.approximateStartDate || "Not provided"],
    ["Preferred visit date", data.preferredVisitDate || "Not provided"],
    ["Preferred visit time", data.preferredVisitTime || "Not provided"],
    ["Message", data.message || "No additional message"]
  ];

  const htmlRows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:10px 14px;border-bottom:1px solid #e8e4d8;color:#53645d;font-size:13px;">${escapeHtml(label)}</th><td style="padding:10px 14px;border-bottom:1px solid #e8e4d8;color:#193a31;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const textBody = [
    "New Beanstalk Day Nursery visit request",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "This is a visit request, not a confirmed appointment. Please contact the parent to agree a time."
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
        subject: `New nursery visit request — ${data.name.replace(/[\r\n]+/g, " ")}`,
        html: `
          <div style="margin:0 auto;max-width:680px;padding:28px 18px;font-family:Arial,sans-serif;color:#193a31;">
            <p style="color:#b94d40;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Beanstalk Day Nursery</p>
            <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:normal;">New visit request</h1>
            <p style="font-size:14px;line-height:1.7;color:#66766e;">A parent or carer has requested a nursery visit. Please contact them to agree a time. The visit is not confirmed until the nursery replies.</p>
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
            "We couldn't send your request just now. Please call the nursery on 0116 254 2253 or try again shortly."
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Your visit request has been sent."
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
