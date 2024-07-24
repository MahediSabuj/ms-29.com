import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import { AEM_DISPATCHER_CACHING_STRATEGIES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

import aem_dispatcher_cache_strategies from "./assets/aem-dispatcher-cache-strategy.png";
import aem_content_publish_replication_agent from "./assets/aem-content-publish-replication-agent.png";
import aem_content_publish_replication_agent_settings from './assets/aem-content-publish-replication-agent-settings.png';
import aem_dispatcher_invalidate_cache_flush_agent from "./assets/aem-dispatcher-invalidate-cache-flush-agent.png";
import aem_dispatcher_invalidate_cache_flush_headers from "./assets/aem-dispatcher-invalidate-cache-flush-headers.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

export default function DispatcherCachingStrategies() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          When implementing caching for your website, it's crucial to ensure that the most recent content is displayed to end users.
          To reflect changes made by authors, configure the Replication Agent on the Author instance and the Dispatcher Flush Agent
          on the Publisher instance to invalidate the Dispatcher cache. The next request will be served from the publisher, and the
          response will be added to the cache; subsequent requests will be served from the cache without interacting with the publisher.
          This setup works well for static pages, but there are scenarios such as pages behind login and sections that need dynamic generation.
          In this article, we will explore all scenarios and provide a step-by-step process to achieve these requirements.
        </section>
        <Image className="py-3" src={aem_dispatcher_cache_strategies}
           alt="AEM Dispatcher Cache Strategies">
        </Image>
        <h2 className="text-xl mt-4">
          <strong>Configure Replication Agent on Author instance</strong>
        </h2>
        <section>
          From <strong>Tools</strong>, select <strong>Deployment</strong>, and click on <strong>Replication</strong>. On the <Link className="text-blue-600" href="http://localhost:4502/etc/replication.html" target="_blank">Replication</Link> page,
          click on <strong>Agents on author</strong>. Configure the Default Agent (publish) Replication Agent by updating the URI, User, and Password in the
          Transport tab according to the Publisher instance configuration. After updating the values, use the <strong>Test Connection</strong> option to ensure
          the Replication Agent is working correctly.
        </section>
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <Image className="py-3" src={aem_content_publish_replication_agent_settings}
               alt="AEM Dispatcher Invalidate Cache FLush Agent">
            </Image>
          </div>
          <div className="md:w-1/2 w-full md:pt-0 pt-4 mx-4">
            <Image className="py-3" src={aem_content_publish_replication_agent}
               alt="AEM Dispatcher Invalidate Cache Flush Headers">
            </Image>
          </div>
        </div>
        <h2 className="text-xl mt-4">
          <strong>Configure Dispatcher Flush Agent on Publisher instance</strong>
        </h2>
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
        <h2 className="text-xl mt-4">
          <strong>Setup Gated Pages and Permission</strong>
        </h2>
        <h2 className="text-xl mt-4">
          <strong>Setup Auth Checker on Dispatcher to verify User Permission</strong>
        </h2>
        <h2 className="text-xl mt-4">
          <strong>Setup Sling Dynamic Include for Dynamic Content and Experience Fragment caching</strong>
        </h2>
      </article>
    </div>
  );
}
