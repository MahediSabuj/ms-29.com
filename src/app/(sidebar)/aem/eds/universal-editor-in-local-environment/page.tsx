import Article from "@/components/article/article";
import { Metadata } from "next";

import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import { UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT as ARTICLE } from "@/lib/data/article/aem/eds";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title:TOPICS.EDGE_DELIVERY_SERVICE.title,
    url: TOPICS.EDGE_DELIVERY_SERVICE.url
  }],
  current: ARTICLE.title
}

export default function UniversalEditorInLocalEnvironment() {
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
            Universal Editor is a versatile visual editor that is part of Adobe Experience Manager Sites. It enables authors to
            perform WYSIWYG editing of any headless or headful experience.
          </section>
        </div>
      </article>
    </div>
  );
}
