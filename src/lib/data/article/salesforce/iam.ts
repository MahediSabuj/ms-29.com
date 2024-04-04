import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SALESFORCE_HEADLESS_AUTHENTICATION: IArticleItem = {
    title: "Setting Up Headless Authentication with Salesforce",
    description: ``,
    url: "/salesforce/iam/salesforce-headless-authentication",
    publishDate: "April 18, 2024",
    modifiedDate: "April 18, 2024",
    topics: [ TOPICS.SF_IAM ],
    active: false
}

export const SF_IAM: IArticleItem[] = [
    SALESFORCE_HEADLESS_AUTHENTICATION
].filter(m => m.active);
