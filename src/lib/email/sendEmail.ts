import { Resend } from "resend";

import { siteConfig } from "@/data/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailOptions = {
  to: string[];
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  return resend.emails.send({
    from: `${siteConfig.name} Website <website@${siteConfig.domain}>`,
    to,
    replyTo: siteConfig.contact.email.address,
    subject: subject,
    html: html,
  });
}
