import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_AEM_SPA_COMPONENT: IArticleItem = {
  title: "Custom AEM SPA Component",
  description: ``,
  url: "/aem/spa/custom-spa-component",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SPA ]
}

export const AEM_SPA: IArticleItem[] = [
  CUSTOM_AEM_SPA_COMPONENT
].filter(m => m.active);
