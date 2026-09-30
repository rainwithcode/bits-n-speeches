import { NextResponse } from "next/server";

import { meetingInfo } from "@/data/meetings";
import { siteConfig } from "@/data/site-config";
import { escapeHtml } from "@/lib/email/escapeHtml";
import { sendEmail } from "@/lib/email/sendEmail";
import {
  formatDateTime,
  getMeetingById,
  getMeetingEndsAt,
} from "@/lib/meetings/meetings";
import { subscribeToNewsletter } from "@/lib/newsletter/subscribe";
import { guestRegistrationSchema } from "@/lib/validations/guest-registration";
import validateFormData from "@/lib/validations/validate-form-data";

export async function POST(request: Request) {
  const formData = await request.formData();

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    meeting: formData.get("meeting"),
    message: formData.get("message"),
    newsletterOptIn: formData.get("newsletterOptIn") ?? undefined,
  };

  // Validate form data
  const validation = validateFormData(guestRegistrationSchema, rawData);

  if (!validation.success) {
    return validation.response;
  }

  const { fullName, email, phone, meeting, message, newsletterOptIn } =
    validation.data;

  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);

  const preferredMeeting =
    typeof meeting === "string" ? await getMeetingById(meeting) : null;

  if (!preferredMeeting) {
    return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
  }

  const safeMeetingTitle = escapeHtml(preferredMeeting.title);
  const startsAt = new Date(preferredMeeting.starts_at);
  const endsAt = new Date(getMeetingEndsAt(startsAt, preferredMeeting.ends_at));

  // Notify club
  const { data, error } = await sendEmail({
    to: [siteConfig.contact.email.address],
    subject: `New Guest Registration — ${fullName}`,
    html: `
    <h2>New Guest Registration</h2>

    <h3>Guest</h3>
    <p>
      <strong>Name:</strong> ${safeFullName}<br />
      <strong>Email:</strong>
      <a href="mailto:${safeEmail}">${safeEmail}</a><br />
      <strong>Phone:</strong> ${safePhone || "Not provided"}<br />
      <strong>Newsletter:</strong>
      ${newsletterOptIn ? "Subscribed" : "Not subscribed"}
    </p>

    <h3>Meeting</h3>
    <p>
      <strong>
        ${formatDateTime(startsAt, { format: "date" })}
      </strong><br />
      ${safeMeetingTitle}
    </p>

    <h3>Message</h3>
    <p>${safeMessage || "None"}</p>
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

  // Send confirmation to guest

  try {
    await sendEmail({
      to: [email],
      subject: `You're registered for ${preferredMeeting.title}`,
      html: `
    <h2>You're registered!</h2>

    <p>Hi ${safeFullName},</p>

    <p>
      Thanks for registering to visit ${siteConfig.name}! We're excited
      to welcome you to our meeting.
    </p>

    <h3>Your Meeting</h3>

    <p>
      <strong>${safeMeetingTitle}</strong><br />
      ${formatDateTime(startsAt, { format: "date" })}<br />
      ${formatDateTime(startsAt, { format: "time" })} – ${formatDateTime(
        endsAt,
        { format: "time", includeTimeZone: true },
      )}
    </p>

    <p>
      <a href=${meetingInfo.meetingUrl}>
        Join the meeting
      </a>
    </p>

    <p>
      No Toastmasters experience is required. Just come as you are,
      meet the club, and enjoy the meeting.
    </p>

    <p>
      See you there!<br />
      <strong>${siteConfig.name} Toastmasters</strong>
    </p>
  `,
    });
  } catch (error) {
    console.error("Guest confirmation email failed: ", error);
  }

  return NextResponse.json({ success: true, data });
}
