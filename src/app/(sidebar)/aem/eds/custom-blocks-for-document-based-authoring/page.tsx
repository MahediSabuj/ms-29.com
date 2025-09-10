import Article from "@/components/article/article";
import { Metadata } from "next";

import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import { CUSTOM_BLOCKS_FOR_DOCUMENT_BASED_AUTHORING as ARTICLE } from "@/lib/data/article/aem/eds";
import Link from "next/link";

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
            Document based authoring allows content creators to use familiar tools like Microsoft Word or Google Docs to write and
            structure content. Although Adobe provides a <Link href="https://github.com/adobe/aem-block-collection/tree/main/blocks" target="_blank" className="text-blue-600">wide range of pre-built blocks</Link>, custom
            blocks are often required to address specific business requirements. In this article, we will explore how to create custom blocks for document based authoring.
          </section>
        </div>
      </article>
    </div>
  );
}
