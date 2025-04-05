import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_SMTP_CONFIG_USING_AWS_SES: IArticleItem = {
  title: "Setup SMTP Configuration using AWS SES",
  description: `AWS Simple Email Service (SES) is a cloud-based SASS platform that allows you to send emails to your customers.
    Amazon SES sends email using SMTP, which is the most common email protocol on the internet. It allows sending large volumes of email in minutes.`,
  url: "/aws/ses/setup-smtp-config-using-aws-ses",
  publishDate: "April 08, 2025",
  modifiedDate: "April 08, 2025",
  topics: [ TOPICS.AWS_SES ],
  active: false
}

export const VERIFY_IDENTITIES_IN_AWS_SES: IArticleItem = {
  title: "Email and Domain Identity Verification in AWS SES",
  description: `In AWS SES, verified identity is a domain or email address that you use to send email. Before sending emails with Amazon SES, 
  you must create and verify each identity used as the "From" address. Identity verification ensures ownership and prevents unauthorized use.`,
  url: "/aws/ses/email-and-domain-identity-verification-in-aws-ses",
  publishDate: "April 02, 2025",
  modifiedDate: "April 02, 2025",
  topics: [ TOPICS.AWS_SES ],
  active: true
}

export const AWS_SES: IArticleItem[] = [
  SETUP_SMTP_CONFIG_USING_AWS_SES,
  VERIFY_IDENTITIES_IN_AWS_SES
].filter(m => m.active);
