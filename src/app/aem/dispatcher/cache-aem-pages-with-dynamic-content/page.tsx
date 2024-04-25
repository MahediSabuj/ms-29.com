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

const sling_dynamic_include = 
`<dependency>
  <groupId>org.apache.sling</groupId>
  <artifactId>org.apache.sling.dynamic-include</artifactId>
  <version>3.3.0</version>
</dependency>`;

const all_pom_xml = 
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
          <Highlight code={sling_dynamic_include} language="xml" path="pom.xml"/>
          <Highlight code={all_pom_xml} language="xml" path="all / pom.xml"/>
        </div>  
      </article>
    </div>
  );
}
