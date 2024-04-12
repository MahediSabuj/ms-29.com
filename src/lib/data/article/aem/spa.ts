import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_AEM_SPA_COMPONENT: IArticleItem = {
  title: "Custom AEM SPA Component",
  description: ``,
  url: "/aem/spa/custom-spa-component",
  publishDate: "April 28, 2024",
  modifiedDate: "April 28, 2024",
  topics: [ TOPICS.AEM_SPA ],
  active: false
}

export const DATA_SLY_RESOURCE_IN_AEM_SPA : IArticleItem = {
  title: "Replicate data-sly-resource in AEM SPA Component",
  description: `In traditional AEM development, composite components are built by combining several atomic components 
    through the data-sly-resource statement. For instance, Teaser component is built using image, text, and 
    button components. However, in the SPA paradigm, neither React nor Angular implementations offer direct 
    alternatives for this approach.`,
  url: "/aem/spa/data-sly-resource-aem-spa",
  publishDate: "April 20, 2024",
  modifiedDate: "April 20, 2024",
  topics: [ TOPICS.AEM_SPA ],
  active: true
}

export const AEM_SPA: IArticleItem[] = [
  CUSTOM_AEM_SPA_COMPONENT,
  DATA_SLY_RESOURCE_IN_AEM_SPA
].filter(m => m.active);
