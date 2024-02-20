import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_LIGHTNING_WEB_COMPONENT: IArticleItem = {
  title: "Custom Lightning Web Component (LWC)",
  description: ``,
  url: "/salesforce/lwc/custom-lightning-web-component",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.SF_LWC ]
}

export const SF_LWC: IArticleItem[] = [
  CUSTOM_LIGHTNING_WEB_COMPONENT
]
