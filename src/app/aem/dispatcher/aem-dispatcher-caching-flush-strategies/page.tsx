import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { DISPATCHER_CACHE_FLUSH_STRATEGIES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

import aem_content_publish_replication_agent from "./assets/aem-content-publish-replication-agent.png";
import aem_content_publish_replication_agent_settings from './assets/aem-content-publish-replication-agent-settings.png';
import aem_dispatcher_invalidate_cache_flush_agent from "./assets/aem-dispatcher-invalidate-cache-flush-agent.png";
import aem_dispatcher_invalidate_cache_flush_headers from "./assets/aem-dispatcher-invalidate-cache-flush-headers.png";
import aem_dispatcher_caching_strategies from './assets/aem-dispatcher-caching-strategies.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const publish_flush_farm =
`/virtualhosts {
  "flush"
}`;

const aem_flush_vhost =
`ServerAlias  flush`;

const publish_invalidate_allowed =
`/01 {
  /glob "\${PUBLISH_IP}"
  /type "allow"
}`;

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
            to ensure the most recent content is displayed to end users. To reflect changes made by authors, we need to configure
            Replication Agent on Author instance to push changes to the Publish instance and Dispatcher Flush Agent on Publisher
            instance to invalidate the Dispatcher cache. Once the cache is invalidated, next request will be served from the publisher,
            and the response will be added to the cache; subsequent requests will be served from the cache without interacting with the publisher.
          </section>
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
          <section>
            On the <Link className="text-blue-600" href="http://localhost:4503/etc/replication.html" target="_blank">Replication</Link> page, navigate to <strong>Agents on
            Publish</strong>. Configure the Dispatcher Flush (flush) agent by updating the URI in the Transport tab to match your dispatcher settings and add <code className="code-inline background">
            Host: flush</code> to the HTTP Headers in the Extended tab. After making these updates, use the <strong>Test Connection</strong> option to verify that the Dispatcher Flush is working correctly.
          </section>
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
          <section>
            In case the dispatcher flush fails, ensure that <code className="code-inline">flush</code> is added as a host in the dispatcher configuration, as shown below.
          </section>
          <div className="md:flex mt-2">
            <div className="md:w-1/2 w-full">
              <Highlight code={publish_flush_farm} language="apache" path="available_farms / publish_flush_farm.any"/>
            </div>
            <div className="md:w-1/2 w-full md:pt-0 pt-4 mx-4">
              <Highlight code={aem_flush_vhost} language="apache" path="available_vhosts / aem_flush.vhost"/>
            </div>
          </div>
          <section className="pt-3">
            Additionally, allow the publish IP address to trigger cache invalidation.
          </section>
          <Highlight code={publish_invalidate_allowed} language="apache" path="cache / publish_invalidate_allowed.any"/>
          <section className="pt-3">
            With this configuration, any time the author publishes new changes, the end user will see the latest content. However, you can adjust the Dispatcher
            Cache settings based on your specific requirements to achieve optimal results.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Dispatcher Cache Configuration</strong>
          </h2>
          <section>
            The Dispatcher has two primary methods for updating the cache content when changes are made to the website: Content Updates and Auto-Invalidation.
            Content Updates remove the pages that have changed, and files that are directly associated with them, while Auto-Invalidation automatically flags sections
            of the cache that might be outdated following an update.
          </section>
          <Image className="py-3" src={aem_dispatcher_caching_strategies} height="500"
             alt="AEM Dispatcher Caching Strategies">
          </Image>
        </div>
      </article>
    </div>
  );
}
