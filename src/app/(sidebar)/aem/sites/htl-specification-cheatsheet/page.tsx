import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { HTL_SPECIFICATION_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function HtlSpecification() {
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
            HTML Template Language (HTL), formerly known as Sightly, is the preferred and recommended server-side 
            template system for HTML in AEM, preferred over JSP (JavaServer Pages) for new projects. However, moving
            to HTL is not necessarily an all-or-nothing choice, as HTL components can harmoniously coexist with JSP 
            within the same project.
          </section>
        </div>  
      </article>
    </div>
  );
}
