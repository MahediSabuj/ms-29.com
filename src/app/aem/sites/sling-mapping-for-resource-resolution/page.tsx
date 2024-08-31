import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SLING_MAPPING_FOR_RESOURCE_RESOLUTION as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ContextAwareConfiguration() {
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
            Context-aware configurations  are related to a content resource, allows different configs for different 
            content resources. Parameters within nested contexts allow hierarchical based inheritance and global fallback 
            values when required. Leveraging the Context-Aware Configuration Java API, one can retrieve the appropriate 
            configuration for each content resource without concerning  where it is stored or how the inheritance works. 
          </section>
        </div>  
      </article>
    </div>
  );
}
