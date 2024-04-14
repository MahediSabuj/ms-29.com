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
  title: "AEM Gated Pages Caching Strategies",
  description: `In General, requests containing authentication information are not cached because the cached document is 
    served to the client without authentication. However, if the requirements permit the caching of authenticated documents, 
    this can be activated by setting the /allowAuthorized property to "1". Additionally, need to implement the AuthChecker module, 
    which verifies users access permissions for a page before delivering the cached content.`,
  url: "/aem/dispatcher/aem-gated-pages-caching-strategies",
  publishDate: "March 21, 2024",
  modifiedDate: "March 21, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
}

export const CACHE_AEM_DYNAMIC_CONTENT: IArticleItem = {
  title: "Cache AEM Pages with Dynamic Content",
  description: `In general, when a page is retrieved from cache, all users view identical content. However, websites with gated 
    or authenticated pages, certain sections — such as displaying a logged-in user's name or a login button for anonymous 
    users — must remain dynamic and not be cached. Considering this scenario, Sling Dynamic Include (SDI) in AEM supports the 
    dynamic generation of specific components, while also enabling the retrieval of others from cache.`,
  url: "/aem/dispatcher/cache-aem-pages-with-dynamic-content",
  publishDate: "April 28, 2024",
  modifiedDate: "April 28, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
}

export const DISPATCHER_CACHE_FLUSH_STRATEGIES: IArticleItem = {
  title: "AEM Dispatcher Cache Flush Strategies",
  description: `When caching is implemented for your website, it's essential to clear the dispatcher cache after publishing pages 
    to ensure the most recent content is displayed to end users. Once the cache is cleared, the dispatcher forwards the next request 
    to the publisher to generate recent content, which is then added to the dispatcher cache. Subsequent requests are delivered 
    from the dispatcher cache.`,
  url: "/aem/dispatcher/aem-dispatcher-cache-flush-strategies",
  publishDate: "May 02, 2024",
  modifiedDate: "May 02, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: true
}

export const AEM_LOG_INVESTIGATION : IArticleItem = {
  title: "AEM Log Investigation",
  description: ``,
  url: "/aem/dispatcher/aem-log-investigation",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ]
}

export const AEM_DISPATCHER: IArticleItem[] = [
  BASIC_HTTP_AUTHENTICATION,
  CACHE_AEM_GATED_PAGES,
  CACHE_AEM_DYNAMIC_CONTENT,
  DISPATCHER_CACHE_FLUSH_STRATEGIES,
  AEM_LOG_INVESTIGATION
].filter(m => m.active);
