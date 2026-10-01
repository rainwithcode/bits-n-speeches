import { Resend } from "resend";

import { siteConfig } from "@/data/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailOptions = {
  to: string[];
  replyTo: string[];
  subject: string;
  html: string;
};

export async function sendEmail({
  to,
  replyTo,
  subject,
  html,
}: SendEmailOptions) {
  return resend.emails.send({
    from: `${siteConfig.name} Website <website@${siteConfig.domain}>`,
    to,
    replyTo,
    subject: subject,
    html: html,
  });
}
