import { NextResponse } from "next/server";

import { sendEmail } from "@/lib/email/sendEmail";
import { formatDateTime, getMeetingById } from "@/lib/meetings";
import { guestRegistrationSchema } from "@/lib/validations/guest-registration";
import validateFormData from "@/lib/validations/validate-form-data";

export async function POST(request: Request) {
  const formData = await request.formData();

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    meetingId: formData.get("meeting"),
    message: formData.get("message"),
  };

  // Validate form data
  const validation = validateFormData(guestRegistrationSchema, rawData);

  if (!validation.success) {
    return validation.response;
  }

  const {
    fullName,
    email,
    phone,
    meeting: meetingId,
    message,
  } = validation.data;

  const meeting =
    typeof meetingId === "string" ? await getMeetingById(meetingId) : null;

  const { data, error } = await sendEmail({
    subject: `New Guest — ${fullName} would like to attend a BNS meeting`,
    html: `
    <h2>New Guest — ${fullName} would like to attend a BNS meeting</h2>

    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

    <h3>I would like to attend:</h3>
    <p>
      <strong>
        ${formatDateTime(meeting.starts_at, { format: "date" })}
      </strong>
      — ${meeting.title}
    </p>
    
    <p><strong>Message:</strong> ${message || "None"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
