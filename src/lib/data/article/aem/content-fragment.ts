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
  description: `In the modern era,  users often interact across multiple channels, spanning from websites to mobile apps. 
    Streamlining content management and delivery from a centralized platform can simplify this process. Content Fragments, 
    independent of layout, have the capability to deliver content to AEM Sites using Core Component or distribute it to 
    downstream channels in a headless manner through GraphQL.`,
  url: "/aem/content-fragment/cross-channel-content-delivery-using-content-fragments",
  publishDate: "October 05, 2024",
  modifiedDate: "October 05, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: false
}

export const CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS : IArticleItem = {
  title: "Content Fragments vs Experience Fragments",
  description: `Adobe Experience Manager (AEM) provides powerful tools for managing and delivering content efficiently. Two essential 
    components in AEM are Content Fragments (CF) and Experience Fragments (XF). While both are used to create reusable content, 
    each serves a distinct purpose and offers unique capabilities.`,
  url: "/aem/content-fragment/content-fragments-vs-experience-fragments",
  publishDate: "May 22, 2024",
  modifiedDate: "May 22, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: true
}

export const COMPOSITE_MULTIFIELD_FOR_CONTENT_FRAGMENT: IArticleItem = {
  title: "Composite Multifield for Content Fragment",
  description: ``,
  url: "/aem/content-fragment/composite-multifield-for-content-fragment",
  publishDate: "September 21, 2024",
  modifiedDate: "September 21, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ],
  active: false
}

export const CONTENT_FRAGMENT: IArticleItem[] = [
  CONTENT_FRAGMENT_PROGRAMMATICALLY,
  CROSS_CHANNEL_CONTENT_DELIVERY,
  CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS,
  COMPOSITE_MULTIFIELD_FOR_CONTENT_FRAGMENT
].filter(m => m.active);
