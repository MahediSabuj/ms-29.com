import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SALESFORCE_HEADLESS_AUTHENTICATION: IArticleItem = {
    title: "Setting Up Headless Authentication with Salesforce",
    description: ``,
    url: "/salesforce/iam/salesforce-headless-authentication",
    publishDate: "February 20, 2024",
    modifiedDate: "February 20, 2024",
    topics: [ TOPICS.SF_IAM ]
}

export const SF_IAM: IArticleItem[] = [
    SALESFORCE_HEADLESS_AUTHENTICATION
].filter(m => m.active);
