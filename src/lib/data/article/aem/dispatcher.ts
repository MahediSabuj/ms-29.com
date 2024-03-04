import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BASIC_HTTP_AUTHENTICATION: IArticleItem = {
  title: "Restricting AEM Dispatcher Access in Lower Environments",
  description: `AEM&apos;s dispatcher  is not restricted and is publicly accessible by default. While unrestricted access is
    suitable for production environments, it&apos;s recommended to restrict access in lower environments such as
    dev and stage to your organization or specific users. This can be achieved through IP Allow Lists or Basic Authentication.`,
  url: "/aem/dispatcher/restrict-aem-dispatcher-access-in-lower-environments",
  publishDate: "March 02, 2024",
  modifiedDate: "March 02, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
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
