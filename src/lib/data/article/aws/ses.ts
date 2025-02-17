import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETUP_SMTP_CONFIG_USING_AWS_SES: IArticleItem = {
  title: "Setup SMTP Configuration using AWS SES",
  description: ``,
  url: "/aws/ses/setup-smtp-config-using-aws-ses",
  publishDate: "February 23, 2025",
  modifiedDate: "February 23, 2025",
  topics: [ TOPICS.AWS_SES ],
  active: false
}

export const AWS_SES: IArticleItem[] = [
  SETUP_SMTP_CONFIG_USING_AWS_SES
].filter(m => m.active);
