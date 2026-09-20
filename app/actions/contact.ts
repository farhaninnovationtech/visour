"use server";

import { Resend } from "resend";
import { ISSUE_TYPES } from "@/lib/data/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "issueType" | "message", string>>;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const issueType = String(formData.get("issueType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!email || !isValidEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!issueType || !ISSUE_TYPES.includes(issueType as (typeof ISSUE_TYPES)[number])) {
    fieldErrors.issueType = "Please select an issue type.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Please provide a bit more detail (10+ characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the errors below and try again.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_EMAIL environment variables."
    );
    return {
      status: "error",
      message:
        "Sorry, the contact form isn't configured yet. Please try again later.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const submittedAt = new Date().toISOString();

    const { error } = await resend.emails.send({
      from: "VISOUR Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `[VISOUR Contact] ${issueType} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Issue type: ${issueType}`,
        `Submitted: ${submittedAt}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message:
          "We couldn't send your message right now. Please try again in a moment.",
      };
    }

    return {
      status: "success",
      message:
        "Thanks — your message has been sent. We'll get back to you soon.",
    };
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please try again.",
    };
  }
}
