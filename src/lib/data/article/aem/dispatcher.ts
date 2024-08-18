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
  title: "Caching AEM Pages with Dynamic Content",
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
  title: "AEM Dispatcher Caching Flush Strategies",
  description: `When caching is implemented for your website, it's essential to clear the dispatcher cache after publishing pages 
    to ensure the most recent content is displayed to end users. To reflect changes made by authors, we need to configure Replication 
    Agent on Author instance and Dispatcher Flush Agent on Publisher instance to invalidate the Dispatcher cache. The next request 
    will be served from the publisher, and the response will be added to the cache; subsequent requests will be served from the cache 
    without interacting with the publisher.`,
  url: "/aem/dispatcher/aem-dispatcher-caching-flush-strategies",
  publishDate: "August 21, 2024",
  modifiedDate: "August 21, 2024",
  topics: [ TOPICS.AEM_DISPATCHER ],
  active: false
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
