import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BASIC_HTTP_AUTHENTICATION: IArticleItem = {
  title: "Basic HTTP Authentication in AEM Dispatcher",
  description: ``,
  url: "/aem/dispatcher/basic-http-authentication-in-aem-dispatcher",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ]
}

export const CACHE_AEM_GATED_PAGES: IArticleItem = {
  title: "Cache AEM Gated Pages",
  description: ``,
  url: "/aem/dispatcher/cache-gated-pages",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ]
}

export const CACHE_AEM_DYNAMIC_CONTENT: IArticleItem = {
  title: "Cache AEM Dynamic Content",
  description: ``,
  url: "/aem/dispatcher/cache-dynamic-content",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ]
}

export const AEM_DISPATCHER: IArticleItem[] = [
  BASIC_HTTP_AUTHENTICATION,
  CACHE_AEM_GATED_PAGES,
  CACHE_AEM_DYNAMIC_CONTENT
].filter(m => m.active);
