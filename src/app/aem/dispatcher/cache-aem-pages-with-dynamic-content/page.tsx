import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CACHE_AEM_DYNAMIC_CONTENT as ARTICLE } from "@/lib/data/article/aem/dispatcher";

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
        </div>  
      </article>
    </div>
  );
}
