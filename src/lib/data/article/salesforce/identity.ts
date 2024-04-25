import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SALESFORCE_HEADLESS_AUTHENTICATION: IArticleItem = {
    title: "Setting Up Headless Authentication with Salesforce",
    description: `With headless authentication, backend authentication can be segregated from frontend identity experiences, 
      enhancing faster login experience. It enables each channel to provide unique UI experiences according to their brand guidelines.`,
    url: "/salesforce/identity/salesforce-headless-authentication",
    publishDate: "May 10, 2024",
    modifiedDate: "May 10, 2024",
    topics: [ TOPICS.SF_IDENTITY ],
    active: false
}

export const SF_IDENTITY: IArticleItem[] = [
    SALESFORCE_HEADLESS_AUTHENTICATION
].filter(m => m.active);
