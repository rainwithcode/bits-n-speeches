import { NextResponse } from "next/server";

import { escapeHtml } from "@/lib/email/escapeHtml";
import { sendEmail } from "@/lib/email/sendEmail";
import { subscribeToNewsletter } from "@/lib/newsletter/subscribe";
import { contactSchema } from "@/lib/validations/contact";
import validateFormData from "@/lib/validations/validate-form-data";

export async function POST(request: Request) {
  const formData = await request.formData();

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    newsletterOptIn: formData.get("newsletterOptIn") ?? undefined,
  };

  const validation = validateFormData(contactSchema, rawData);

  if (!validation.success) {
    return validation.response;
  }

  const { fullName, email, subject, message, newsletterOptIn } =
    validation.data;

  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const { data, error } = await sendEmail({
    subject: `BNS Message — ${safeSubject}`,
    html: `
    <h2>New BNS Message</h2>

    <h3>Sender</h3>
    <p>
      <strong>Name:</strong> ${safeFullName}<br />
      <strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a><br />
      <strong>Subject:</strong> ${safeSubject}<br />
      <strong>Newsletter:</strong> ${newsletterOptIn ? "Subscribed" : "Not subscribed"}
    </p>

    <h3>Message</h3>
    <p>${safeMessage}</p>
  `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  if (newsletterOptIn) {
    try {
      await subscribeToNewsletter({ email, name: fullName });
    } catch (error) {
      console.error("Newsletter subscription failed: ", error);
    }
  }

  return NextResponse.json({ success: true, data });
}
