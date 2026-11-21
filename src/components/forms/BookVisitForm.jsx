"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/content/site";

const ageGroups = [
  { value: "babies", label: "Babies room" },
  { value: "toddlers", label: "Toddlers room" },
  { value: "preschool", label: "Preschool room" }
];

const initialValues = {
  name: "",
  email: "",
  telephone: "",
  childAgeGroup: "",
  approximateStartDate: "",
  preferredVisitDate: "",
  preferredVisitTime: "",
  message: "",
  consent: false,
  companyWebsite: ""
};

function Field({ label, required = false, hint, children, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[0.66rem] font-semibold text-forest">
        {label}
        {required ? <span className="ml-1 text-terracotta" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-[0.62rem] leading-5 text-muted">{hint}</p> : null}
    </div>
  );
}

const controlClass =
  "min-h-11 w-full rounded-lg border border-[#ded8c7] bg-[#fffdf7] px-3.5 py-2.5 text-sm text-forest outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/65 hover:border-forest/35 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10 disabled:cursor-not-allowed disabled:opacity-60";

export default function BookVisitForm() {
  const [values, setValues] = useState(initialValues);
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
      const response = await fetch("/api/visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedback(
          result.message ||
            "We couldn't send your request just now. Please call the nursery or try again."
        );
        return;
      }

      setStatus("success");
      setFeedback(
        "Thank you. Your visit request has been sent. The nursery will contact you to agree a time. Your visit is confirmed only when we reply."
      );
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback(
        "We couldn't connect to the nursery just now. Please call us on 0116 254 2253 or try again."
      );
    }
  }

  const isSending = status === "sending";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(25,58,49,0.09)] sm:p-7 lg:p-8">
      <div className="mb-5">
        <p className="font-display text-2xl leading-tight text-forest sm:text-[1.8rem]">
          Request a visit
        </p>
        <p className="mt-2 max-w-xl text-[0.72rem] leading-[1.7] text-muted sm:text-xs">
          Tell us when suits you and we will contact you to agree a time. A visit
          request is not a confirmed appointment until we reply. We do not show
          or hold time slots online.
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
        <div
          role="alert"
          className="mb-5 rounded-xl border border-terracotta/20 bg-[#fff4ef] p-4 text-sm leading-6 text-[#8f3d32]"
        >
          {feedback}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Your name" required>
            <input
              className={controlClass}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={values.name}
              onChange={updateField}
              maxLength={100}
              required
              disabled={isSending}
            />
          </Field>

          <Field label="Email" required>
            <input
              className={controlClass}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={updateField}
              maxLength={254}
              required
              disabled={isSending}
            />
          </Field>

          <Field label="Telephone (optional)">
            <input
              className={controlClass}
              name="telephone"
              type="tel"
              autoComplete="tel"
              placeholder="Your phone number"
              value={values.telephone}
              onChange={updateField}
              maxLength={40}
              disabled={isSending}
            />
          </Field>

          <Field label="Child's age group" required>
            <select
              className={controlClass}
              name="childAgeGroup"
              value={values.childAgeGroup}
              onChange={updateField}
              required
              disabled={isSending}
            >
              <option value="">Choose an age group</option>
              {ageGroups.map((group) => (
                <option key={group.value} value={group.value}>
                  {group.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Approximate start date">
            <input
              className={controlClass}
              name="approximateStartDate"
              type="date"
              value={values.approximateStartDate}
              onChange={updateField}
              disabled={isSending}
            />
          </Field>

          <Field label="Preferred visit date">
            <input
              className={controlClass}
              name="preferredVisitDate"
              type="date"
              value={values.preferredVisitDate}
              onChange={updateField}
              disabled={isSending}
            />
          </Field>

          <Field
            label="Preferred visit time"
            className="sm:col-span-2"
            hint="For example, mornings, or after 3pm. We will confirm a time with you."
          >
            <input
              className={controlClass}
              name="preferredVisitTime"
              type="text"
              placeholder="e.g. Mornings or after 3pm"
              value={values.preferredVisitTime}
              onChange={updateField}
              maxLength={100}
              disabled={isSending}
            />
          </Field>

          <Field label="Message (optional)" className="sm:col-span-2">
            <textarea
              className={`${controlClass} min-h-24 resize-y`}
              name="message"
              placeholder="Is there anything you would like us to know?"
              value={values.message}
              onChange={updateField}
              maxLength={1500}
              rows={4}
              disabled={isSending}
            />
          </Field>
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="visit-consent"
            className="mt-0.5 size-4 shrink-0 accent-[#103c30]"
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={updateField}
            required
            disabled={isSending}
          />
          <label htmlFor="visit-consent" className="text-[0.64rem] leading-[1.55] text-muted">
            I agree to Beanstalk Day Nursery using these details to reply to my
            visit request. We only use them for this purpose. Read our{" "}
            <Link
              href="/privacy-notice"
              className="font-semibold text-forest underline decoration-forest/35 underline-offset-2 hover:text-terracotta"
            >
              privacy notice
            </Link>.
          </label>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="visit-company-website">Leave this field empty</label>
          <input
            id="visit-company-website"
            tabIndex={-1}
            autoComplete="off"
            name="companyWebsite"
            value={values.companyWebsite}
            onChange={updateField}
          />
        </div>

        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap">
          <Button type="submit" disabled={isSending || !values.consent} size="default">
            {isSending ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Sending request
              </>
            ) : (
              <>
                Send visit request <ArrowRight aria-hidden="true" />
              </>
            )}
          </Button>
          <Button asChild variant="outline" size="default">
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
