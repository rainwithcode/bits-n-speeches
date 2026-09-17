import { NextResponse } from "next/server";

import { sendEmail } from "@/lib/email/sendEmail";
import { contactSchema } from "@/lib/validations/contact";
import validateFormData from "@/lib/validations/validate-form-data";

export async function POST(request: Request) {
  const formData = await request.formData();

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validation = validateFormData(contactSchema, rawData);

  if (!validation.success) {
    return validation.response;
  }

  const { fullName, email, subject, message } = validation.data;

  const { data, error } = await sendEmail({
    subject: `BNS Inquiry — ${subject}`,
    html: `     
    <h2>New BNS Inquiry</h2>

    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>

    <h3>Message</h3>
    <p>${message}</p>`,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
