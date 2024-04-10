import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CONTENT_FRAGMENT_PROGRAMMATICALLY: IArticleItem = {
  title: "Create Content Fragment Programmatically",
  description: `Creating a content fragment programmatically requires setting up a system user with Read 
      permission for the content fragment model and Read, Modify, Create permissions for the asset folder where
      the content fragment will be stored. Additionally, ensure the content fragment model and asset folder are
      created for saving the content fragment.`,
  url: "/aem/content-fragment/create-content-fragment-programmatically",
  publishDate: "February 16, 2024",
  modifiedDate: "February 16, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: true
}

export const CROSS_CHANNEL_CONTENT_DELIVERY: IArticleItem = {
  title: "Cross Channel Content Delivery using Content Fragment",
  description: ``,
  url: "/aem/content-fragment/cross-channel-content-delivery-using-content-fragments",
  publishDate: "April 16, 2024",
  modifiedDate: "April 16, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: false
}

export const CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS : IArticleItem = {
  title: "Content Fragments vs Experience Fragments",
  description: `Adobe Experience Manager (AEM) provides powerful tools for managing and delivering content efficiently. Two essential 
    components in AEM are Content Fragments (CF) and Experience Fragments (XF). While both are used to create reusable content, 
    each serves a distinct purpose and offers unique capabilities.`,
  url: "/aem/content-fragment/content-fragments-vs-experience-fragments",
  publishDate: "April 11, 2024",
  modifiedDate: "April 11, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: true
}

export const CONTENT_FRAGMENT: IArticleItem[] = [
  CONTENT_FRAGMENT_PROGRAMMATICALLY,
  CROSS_CHANNEL_CONTENT_DELIVERY,
  CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS
].filter(m => m.active);
