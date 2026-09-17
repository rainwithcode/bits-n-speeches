import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailOptions = {
  subject: string;
  html: string;
};

export async function sendEmail({ subject, html }: SendEmailOptions) {
  return await resend.emails.send({
    from: "BNS Website <onboarding@resend.dev>",
    to: "delivered@resend.dev",
    subject: subject,
    html: html,
  });
}
