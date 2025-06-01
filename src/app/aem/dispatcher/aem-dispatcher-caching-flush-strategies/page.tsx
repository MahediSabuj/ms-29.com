import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { DISPATCHER_CACHE_FLUSH_STRATEGIES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

import aem_content_publish_replication_agent from "./assets/aem-content-publish-replication-agent.png";
import aem_content_publish_replication_agent_settings from "./assets/aem-content-publish-replication-agent-settings.png";
import aem_dispatcher_invalidate_cache_flush_agent from "./assets/aem-dispatcher-invalidate-cache-flush-agent.png";
import aem_dispatcher_invalidate_cache_flush_headers from "./assets/aem-dispatcher-invalidate-cache-flush-headers.png";
import aem_dispatcher_caching_strategies from "./assets/aem-dispatcher-caching-strategies.png";

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
`/0001 {
  /glob "\${PUBLISH_IP}"
  /type "allow"
}`;

const cache_rules =
`/0000 { /glob "*" /type "allow" }
/0001 { /glob "*/private/*" /type "deny" }`;

const invalidate_cache =
`/cache {
  /docroot "/mnt/var/www/html"
  /statfileslevel "6"
  
  /rules {
    $include "/etc/httpd/conf.dispatcher.d/cache/publish_cache.any"
  }
  
  /invalidate {
    /0000  { /glob "*" /type "deny" }
    /0001  { /glob "*.html" /type "allow" }
  }
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
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
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
            <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
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
            <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
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
            <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
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
          <section className="pt-3">
            During a content update, when one or more AEM contents are modified and activated, the AEM Dispatcher is notified and receives an activation event. For instance, if <code className="code-inline background">/content/aem-demo/us/en/mobile</code> is activated,
            Dispatcher removes <code className="code-inline break-all background">/content/aem-demo/us/en/mobile.*</code> files and <code className="code-inline background">/content/aem-demo/us/en/mobile/_jcr_content</code> folder from the cache.
          </section>
          <section className="pt-3">
            Auto-Invalidation invalidates parts of the cache - without physically deleting any files. At every content update, statfile (<code className="code-inline">.stat</code>) is touched, so its timestamp reflects the last content update.
            For example: if you set the <code className="code-inline">statfileslevel</code> property to 6 and a file is invalidated at level 5 then every <code className="code-inline">.stat</code> file from <code className="code-inline">docroot</code> to 5 are touched.
            Continuing with this example, if a file is invalidated at level 7 then every stat file from <code className="code-inline">docroot</code> to 6 are touched (since <code className="code-inline">/statfileslevel = &quot;6&quot;</code>).
          </section>
          <Highlight code={invalidate_cache} language="apache" path="available_farms / publish_farm.any"/>
          <section className="pt-3">
            The <code className="code-inline">/rules</code> property controls which documents are cacheable according to the document path.
          </section>
          <Highlight code={cache_rules} language="apache" path="cache / publish_cache.any"/>
          <section className="pt-3">
            This Dispatcher configuration is solely for open and static pages. For gated pages requiring authentication, refer to this <Link className="text-blue-600" href="/aem/dispatcher/aem-gated-pages-caching-strategies" target="_blank">resource</Link>, and for dynamic content, check out this <Link className="text-blue-600" href="/aem/dispatcher/cache-aem-pages-with-dynamic-content" target="_blank">article</Link>.
          </section>
          <h2 className="text-xl mt-4">
            <strong>How Dispatcher returns Contents</strong>
          </h2>
          <section>
            When an end user requests content, it&apos;s served from the Dispatcher cache if available, cacheable, and up-to-date; otherwise, the request is forwarded to the publish instance.
            The following diagram outlines the steps involved in serving content from a Dispatcher caching enabled site.
          </section>
          <Image className="py-3" src={aem_dispatcher_caching_strategies} height="500"
             alt="AEM Dispatcher Caching Strategies">
          </Image>
          <section>
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <strong>Request Cacheable: </strong> Whether content is cacheable is determined by the <code className="code-inline">/rules</code> defined in the <code className="code-inline">/cache</code> section. If the content is not cacheable, the request is
                forwarded to the AEM publish instance and the response is sent back to the user.
              </li>
              <li>
                <strong>Content is Cached: </strong> The requested content path is combined with the <code className="code-inline">/docroot</code> specified in the <code className="code-inline">/cache</code> section to verify if the resulting path exists in the Dispatcher.
                For instance, when <code className="code-inline background">/content/aem-demo/us/en/mobile.html</code> is requested and <code className="code-inline">/docroot</code> is set to <code className="code-inline background">/mnt/var/www/html</code>, the Dispatcher looks for the file at <code className="code-inline break-all background">/mnt/var/www/html/content/aem-demo/us/en/mobile.html</code>.
              </li>
              <li>
                <strong>Content is Up to Date: </strong> During content publishing, the <code className="code-inline">.stat</code> file&apos;s modification date is updated based on the <code className="code-inline">statfileslevel</code> value. When content is later requested,
                the modification date of the <code className="code-inline">.stat</code> file and the requested file are compared. If the <code className="code-inline">.stat</code> file&apos;s modification date is newer, the content is fetched from the publish instance. For debugging, you
                can check the modification date using <code className="code-inline background">date -r &#123;filename&#125;</code>, adjusting the filename as needed based on your current directory.
              </li>
            </ul>
          </section>
          <section className="pt-3">
            If you&apos;ve followed along, you should now understand how to configure agents to push changes from author to publisher and dispatcher, as well as how the dispatcher invalidates and serves the latest content to users. Happy learning!
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
