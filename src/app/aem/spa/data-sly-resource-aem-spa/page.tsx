import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DATA_SLY_RESOURCE_IN_AEM_SPA as ARTICLE } from "@/lib/data/article/aem/spa";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM SPA",
    url: "/aem/spa"
  }],
  current: ARTICLE.title
}

export default function DataSlyResourceInSPA() {
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
            In traditional AEM development, composite components are built by combining several atomic components 
            through the data-sly-resource statement. For instance, Teaser component is built using image, text, and 
            button components. However, in the SPA paradigm, neither React nor Angular implementations offer direct 
            alternatives for this approach.
          </section>
        </div>  
      </article>
    </div>
  );
}
