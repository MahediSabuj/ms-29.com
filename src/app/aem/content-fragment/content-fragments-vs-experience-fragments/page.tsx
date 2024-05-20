import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CONTENT_FRAGMENTS_VS_EXPERIENCE_FRAGMENTS as ARTICLE } from "@/lib/data/article/aem/content-fragment";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Content Fragment",
    url: "/aem/content-fragment"
  }],
  current: ARTICLE.title
}

export default function CFvsXF() {
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
            Adobe Experience Manager (AEM) provides powerful tools for managing and delivering content efficiently. Two essential 
            components in AEM are Content Fragments (CF) and Experience Fragments (XF). While both are used to create reusable content, 
            each serves a distinct purpose and offers unique capabilities.
          </section>
          <h2 id="content-fragments" className="text-xl mt-4">
            <strong>Content Fragments</strong>
          </h2>
          <div>
            Content Fragments are structured content based on a Content Fragment Model (CFM). In the database paradigm, CFM acts as a 
            table, while CFs play the role of rows.
          </div>
          <div className="pt-3">
            Content Fragments can be delivered across channels using the AEM Headless GraphQL API. It is content-centric, allowing AEM 
            itself and third-party channels to adjust the design and layout according on their requirements.
          </div>
          <h2 id="experience-fragments" className="text-xl mt-4">
            <strong>Experience Fragments</strong>
          </h2>
          <div>
            Experience Fragments are comprised of one or more AEM Components, enabling content authors to reuse the same content across 
            multiple pages within AEM Sites.
          </div>
        </div>
      </article>
    </div>
  );
}
