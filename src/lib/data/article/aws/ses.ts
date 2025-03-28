import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_SMTP_CONFIG_USING_AWS_SES: IArticleItem = {
  title: "Setup SMTP Configuration using AWS SES",
  description: `AWS Simple Email Service (SES) is a cloud-based SASS platform that allows you to send emails to your customers.
    Amazon SES sends email using SMTP, which is the most common email protocol on the internet.`,
  url: "/aws/ses/setup-smtp-config-using-aws-ses",
  publishDate: "April 04, 2025",
  modifiedDate: "April 04, 2025",
  topics: [ TOPICS.AWS_SES ],
  active: true
}

export const AWS_SES: IArticleItem[] = [
  SETUP_SMTP_CONFIG_USING_AWS_SES
].filter(m => m.active);
