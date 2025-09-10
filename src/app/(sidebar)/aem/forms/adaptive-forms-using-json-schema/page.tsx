import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { ADAPTIVE_FORMS_USING_JSON_SCHEMA as ARTICLE } from "@/lib/data/article/aem/forms";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Forms",
    url: "/aem/forms"
  }],
  current: ARTICLE.title
}

export default function AdaptiveForms() {
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
            Adobe Experience Manager Forms supports creation of an adaptive form by using an existing JSON Schema 
            as the form model. This JSON Schema reflects how data is produced or consumed by the back-end system 
            in your organization.
          </section>  
        </div>  
      </article>
    </div>
  );
}
