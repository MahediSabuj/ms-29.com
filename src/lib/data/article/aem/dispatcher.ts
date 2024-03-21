import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BASIC_HTTP_AUTHENTICATION: IArticleItem = {
  title: "Restricting AEM Dispatcher Access in Lower Environments",
  description: `AEM&apos;s dispatcher  is not restricted and is publicly accessible by default. While unrestricted access is
    suitable for production environments, it&apos;s recommended to restrict access in lower environments such as
    dev and stage to your organization or specific users. This can be achieved through IP Allow Lists or Basic Authentication.`,
  url: "/aem/dispatcher/restrict-aem-dispatcher-access-in-lower-environments",
  publishDate: "March 05, 2024",
  modifiedDate: "March 05, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
}

export const CACHE_AEM_GATED_PAGES: IArticleItem = {
  title: "Cache AEM Gated Pages",
  description: `In General, requests containing authentication information are not cached because the cached document is 
    served to the client without authentication. However, if the requirements permit the caching of authenticated documents, 
    this can be activated by setting the /allowAuthorized property to "1". Additionally, need to implement the AuthChecker module, 
    which verifies users access permissions for a page before delivering the cached content.`,
  url: "/aem/dispatcher/cache-aem-gated-pages",
  publishDate: "March 21, 2024",
  modifiedDate: "March 21, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
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
