import { NextResponse } from "next/server";
import { Resend } from "resend";

import { formatDateTime, getMeetingById } from "@/lib/meetings";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const meetingId = formData.get("meeting");
  const message = formData.get("message");

  const meeting =
    typeof meetingId === "string" ? await getMeetingById(meetingId) : null;

  const { data, error } = await resend.emails.send({
    from: "BNS Website <onboarding@resend.dev>",
    to: "delivered@resend.dev",
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
