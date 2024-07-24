import Image from "next/image";
import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DISPATCHER_CACHE_FLUSH_STRATEGIES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

import aem_content_publish_replication_agent from './assets/aem-content-publish-replication-agent.png';
import aem_dispatcher_invalidate_cache_flush_agent from './assets/aem-dispatcher-invalidate-cache-flush-agent.png';
import aem_dispatcher_invalidate_cache_flush_headers from './assets/aem-dispatcher-invalidate-cache-flush-headers.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Dispatcher",
    url: "/aem/dispatcher"
  }],
  current: ARTICLE.title
}

export default function DispatcherCache() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            When caching is implemented for your website, it&apos;s essential to clear the dispatcher cache after publishing pages 
            to ensure the most recent content is displayed to end users. Once the cache is cleared, the dispatcher forwards the next 
            request to the publisher to generate recent content, which is then added to the dispatcher cache. Subsequent requests are 
            delivered from the dispatcher cache.
          </section>
          <Image className="py-3" src={aem_content_publish_replication_agent}
             width={500} alt="AEM Content Publish Replication Agent">
          </Image>
          <div className="md:flex">
            <div className="md:w-1/2 w-full">
              <Image className="py-3" src={aem_dispatcher_invalidate_cache_flush_agent}
                 alt="AEM Dispatcher Invalidate Cache FLush Agent">
              </Image>
            </div>
            <div className="md:w-1/2 w-full md:pt-0 pt-4 mx-4">
              <Image className="py-3" src={aem_dispatcher_invalidate_cache_flush_headers}
                 alt="AEM Dispatcher Invalidate Cache Flush Headers">
              </Image>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
