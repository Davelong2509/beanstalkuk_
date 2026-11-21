"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";
import { childcareOptions, enquiryTopics } from "@/content/admissions";

const initialValues = {
  name: "",
  email: "",
  telephone: "",
  childAge: "",
  preferredStartDate: "",
  topic: "",
  childcareNeed: "",
  message: "",
  consent: false,
  companyWebsite: ""
};

const controlClass =
  "min-h-11 w-full rounded-lg border border-[#ded8c7] bg-[#fffdf7] px-3.5 py-2.5 text-sm text-forest outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/65 hover:border-forest/35 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10 disabled:cursor-not-allowed disabled:opacity-60";

function Field({ label, htmlFor, required = false, hint, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[0.66rem] font-semibold text-forest">
        {label}
        {required ? <span className="ml-1 text-terracotta" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-[0.62rem] leading-5 text-muted">{hint}</p> : null}
    </div>
  );
}

export default function EnquiryForm({ intent = "enquiry", endpoint = "/api/admissions" }) {
  const initialFormValues = {
    ...initialValues,
    topic: intent === "register" ? "registration" : ""
  };
  const [values, setValues] = useState(initialFormValues);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, intent })
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedback(
          result.message ||
            "We couldn't send your enquiry just now. Please call the nursery or try again."
        );
        return;
      }

      setStatus("success");
      setFeedback(
        intent === "register"
          ? "Thank you. Your registration interest has been sent. The nursery will contact you to guide you through the next steps."
          : "Thank you. Your enquiry has been sent. The nursery will get back to you as soon as possible."
      );
      setValues(initialFormValues);
    } catch {
      setStatus("error");
      setFeedback(
        "We couldn't connect to the nursery just now. Please call 0116 254 2253 or try again."
      );
    }
  }

  const isSending = status === "sending";
  const isRegistering = intent === "register";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(25,58,49,0.09)] sm:p-7 lg:p-8">
      <div className="mb-5">
        <h3 className="font-display text-2xl leading-tight text-forest sm:text-[1.8rem]">
          {isRegistering ? "Register your interest" : "Make an enquiry"}
        </h3>
        <p className="mt-2 max-w-xl text-[0.72rem] leading-[1.7] text-muted sm:text-xs">
          {isRegistering
            ? "Already visited, or know this is the right place? Tell us you would like to register and we will guide you through the next steps."
            : "Ask us anything about places, funded hours or what a day looks like. We will reply as soon as we can."}
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="mb-5 flex gap-3 rounded-xl border border-forest/15 bg-sage p-4"
        >
          <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={20} aria-hidden="true" />
          <p className="text-sm leading-6 text-forest">{feedback}</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div role="alert" className="mb-5 rounded-xl border border-terracotta/20 bg-[#fff4ef] p-4 text-sm leading-6 text-[#8f3d32]">
          {feedback}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Your name" htmlFor="admissions-name" required>
            <input
              id="admissions-name"
              className={controlClass}
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={updateField}
              maxLength={100}
              required
              disabled={isSending}
            />
          </Field>

          <Field label="Email" htmlFor="admissions-email" required>
            <input
              id="admissions-email"
              className={controlClass}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={updateField}
              maxLength={254}
              required
              disabled={isSending}
            />
          </Field>

          <Field label="Telephone" htmlFor="admissions-telephone" required>
            <input
              id="admissions-telephone"
              className={controlClass}
              name="telephone"
              type="tel"
              autoComplete="tel"
              value={values.telephone}
              onChange={updateField}
              maxLength={40}
              required
              disabled={isSending}
            />
          </Field>

          <Field
            label="Child's age or date of birth"
            htmlFor="admissions-child-age"
            required
            hint="For example, 14 months, or 02/03/2025. An expected due date is fine too."
          >
            <input
              id="admissions-child-age"
              className={controlClass}
              name="childAge"
              type="text"
              placeholder="e.g. 14 months or 02/03/2025"
              value={values.childAge}
              onChange={updateField}
              maxLength={80}
              required
              disabled={isSending}
            />
          </Field>

          <Field label="Preferred start date" htmlFor="admissions-start-date">
            <input
              id="admissions-start-date"
              className={controlClass}
              name="preferredStartDate"
              type="date"
              value={values.preferredStartDate}
              onChange={updateField}
              disabled={isSending}
            />
          </Field>

          <Field label="What would you like to ask about?" htmlFor="admissions-topic">
            <select
              id="admissions-topic"
              className={controlClass}
              name="topic"
              value={values.topic}
              onChange={updateField}
              disabled={isSending}
            >
              <option value="">Choose a topic</option>
              {enquiryTopics.map((topic) => (
                <option key={topic.value} value={topic.value}>
                  {topic.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Childcare you need" className="sm:col-span-2">
            <div role="group" aria-label="Childcare you need" className="flex flex-wrap gap-2">
              {childcareOptions.map((option) => {
                const selected = values.childcareNeed === option.value;
                return (
                  <label
                    key={option.value}
                    className={`inline-flex min-h-10 cursor-pointer items-center rounded-full border px-4 text-xs font-semibold transition-all duration-200 ${
                      selected
                        ? "border-forest bg-forest text-white shadow-sm"
                        : "border-[#ded8c7] bg-[#fffdf7] text-forest hover:border-forest/50 hover:bg-sage"
                    }`}
                  >
                    <input
                      className="sr-only"
                      type="radio"
                      name="childcareNeed"
                      value={option.value}
                      checked={selected}
                      onChange={updateField}
                      disabled={isSending}
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </Field>

          <Field label="Message (optional)" htmlFor="admissions-message" className="sm:col-span-2">
            <textarea
              id="admissions-message"
              className={`${controlClass} min-h-24 resize-y`}
              name="message"
              rows={4}
              placeholder="Tell us a little more, if you would like to."
              value={values.message}
              onChange={updateField}
              maxLength={1500}
              disabled={isSending}
            />
          </Field>
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="admissions-consent"
            className="mt-0.5 size-4 shrink-0 accent-[#103c30]"
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={updateField}
            required
            disabled={isSending}
          />
          <label htmlFor="admissions-consent" className="text-[0.64rem] leading-[1.55] text-muted">
            I agree to Beanstalk Day Nursery using these details to reply to my enquiry.
            We only use them for this purpose. Read our{" "}
            <Link
              href="/privacy-notice"
              className="font-semibold text-forest underline decoration-forest/35 underline-offset-2 hover:text-terracotta"
            >
              privacy notice
            </Link>.
          </label>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="admissions-company-website">Leave this field empty</label>
          <input
            id="admissions-company-website"
            tabIndex={-1}
            autoComplete="off"
            name="companyWebsite"
            value={values.companyWebsite}
            onChange={updateField}
          />
        </div>

        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap">
          <Button type="submit" disabled={isSending || !values.consent}>
            {isSending ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Sending enquiry
              </>
            ) : (
              <>
                {isRegistering ? "Register your interest" : "Send enquiry"}
                <ArrowRight aria-hidden="true" />
              </>
            )}
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${siteContact.phoneHref}`}>
              <Phone aria-hidden="true" />
              Or call {siteContact.phoneDisplay}
            </a>
          </Button>
        </div>
      </form>
    </div>
  );
}
