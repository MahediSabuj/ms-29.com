import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_AEM_SPA_COMPONENT: IArticleItem = {
  title: "Custom AEM SPA Component",
  description: ``,
  url: "/aem/spa/custom-spa-component",
  publishDate: "March 28, 2024",
  modifiedDate: "March 28, 2024",
  topics: [ TOPICS.AEM_SPA ],
  active: false
}

export const AEM_SPA: IArticleItem[] = [
  CUSTOM_AEM_SPA_COMPONENT
].filter(m => m.active);
