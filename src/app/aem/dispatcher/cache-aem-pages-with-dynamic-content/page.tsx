import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CACHE_AEM_DYNAMIC_CONTENT as ARTICLE } from "@/lib/data/article/aem/dispatcher";

import SLING_DYNAMIC_INCLUDE_HTML_IMAGE from './assets/Sling-Dynamic-Include-HTML.webp';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SLING_DYNAMIC_INCLUDE = 
`<dependency>
  <groupId>org.apache.sling</groupId>
  <artifactId>org.apache.sling.dynamic-include</artifactId>
  <version>3.3.0</version>
</dependency>`;

const ALL_POM_XML = 
`<embedded>
  <groupId>org.apache.sling</groupId>
  <artifactId>org.apache.sling.dynamic-include</artifactId>
  <type>jar</type>
  <target>/apps/aem-demo-packages/application/install</target>
</embedded>

<dependency>
  <groupId>org.apache.sling</groupId>
  <artifactId>org.apache.sling.dynamic-include</artifactId>
</dependency>`;

const SDI_OSGI_CONFIGURATION = 
`{
  "include-filter.config.enabled": true,
  "include-filter.config.appendSuffix": true,
  "include-filter.config.add_comment": true,
  "include-filter.config.disableIgnoreUrlParams": false,
  "include-filter.config.extension": "html",
  "include-filter.config.ignoreUrlParams": [""],
  "include-filter.config.include-type": "SSI",
  "include-filter.config.resource-types": [
    "aem-demo/components/usernavigation",
    "aem-demo/components/megamenu"
  ],
  "include-filter.config.rewrite": false,
  "include-filter.config.path": "/content/experience-fragments/aem-demo",
  "include-filter.config.selector": "nocache",
  "include-filter.config.required_header": "Server-Agent=Communique-Dispatcher",
  "include-filter.config.ttl": ""
}`;

const SSI_DISPATCHER_CONFIGURATION = 
`<Directory "\${PUBLISH_DOCROOT}">
  Options Indexes FollowSymLinks Includes
  AddOutputFilter INCLUDES .html
  AllowOverride None
  Require all granted
</Directory>`;

const DISPATCHER_NO_CACHE =
`/disable-nocache
{
  /glob "*.nocache.html*"
  /type "deny"
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Dispatcher",
    url: "/aem/dispatcher"
  }],
  current: ARTICLE.title
}

export default function CacheDynamicContent() {
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
            In general, when a page is retrieved from cache, all users view identical content. However, websites with gated 
            or authenticated pages, certain sections — such as displaying a logged-in user&apos;s name or a login button for
            anonymous users — must remain dynamic and not be cached. Considering this scenario, Sling Dynamic Include (SDI) in 
            AEM supports the dynamic generation of specific components, while also enabling the retrieval of others from cache.
          </section>
          <section className="pt-3">
            As AEM transitions to the cloud, the immutable nature of the Publish instance prompts bundle installation through code 
            deployment. To install Sling Dynamic Include, make the following updates to the pom.xml files.
          </section>
          <Highlight code={SLING_DYNAMIC_INCLUDE} language="xml" path="pom.xml"/>
          <Highlight code={ALL_POM_XML} language="xml" path="all / pom.xml"/>
          <section className="pt-2">
            Upon deploying your code with the mentioned modifications, you can verify the installation through System Console. 
            Subsequently, proceed to configure the SDI OSGi Configuration with the components you want to load dynamically.
          </section>
          <Highlight code={SDI_OSGI_CONFIGURATION} language="json" path="config.publish / org.apache.sling.dynamicinclude.Configuration~aem-demo.cfg.json"/>
          <section className="pt-2">
            If you inspect the cached file from the dispatcher or inspect the HTML, you&apos;ll find something similar as shown below. 
          </section>
          <Image src={SLING_DYNAMIC_INCLUDE_HTML_IMAGE} className="border py-1 my-1"
            alt="HTML View of Sling Dynamic Include Implementation">
          </Image>
          <section className="pt-1">
            If you closely review the HTML above, you&apos;ll notice a comment that provides details about the content path and component resource type. Additionally, 
            there&apos;s an include tag with a virtual attribute, using the content path as its value.
          </section>
          <section className="pt-3">
            The next step is to ensure the dispatcher retrieves actual content
            from the publisher which requires configuring the Includes module in the vhost file and disabling caching for requests containing <code className="code-inline">*nocache.html*</code>.
            This involves adding the <code className="code-inline">Includes</code> option to the <code className="code-inline">Options</code> directive and <code className="code-inline">AddOutputFilter 
            INCLUDES .html</code> in your virtual configuration host. 
          </section>
          <Highlight code={SSI_DISPATCHER_CONFIGURATION} language="apache" path="conf.d / available_vhosts / aemdemo.com.vhost"/>
          <section className="pt-2">
            Additionally, disable the caching for <code className="code-inline">.nocache.html</code> files in the cache rules to ensure responses always come through the publisher and provide the latest content.
          </section>
          <Highlight code={DISPATCHER_NO_CACHE} language="apache" path="conf.dispatcher.d / cache / client_publish_cache.any"/>
          <section className="pt-4">
            With the above setup, usernavigation and megamenu component within AEM-Demo Experience Fragments will be dynamically loaded, while other sections of the page will 
            be served from the cache. After successfully implementing the Sling Dynamic Include, you can expect a significant improvement in performance.
          </section>
        </div>  
      </article>
    </div>
  );
}
