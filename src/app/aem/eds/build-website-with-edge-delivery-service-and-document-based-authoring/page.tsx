import Article from "@/components/article/article";
import { Metadata } from "next";

import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import {
  BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING as ARTICLE
} from "@/lib/data/article/aem/eds";

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

export default function DocumentSite() {
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
            Edge Delivery Services provides different options for authoring content via WYSIWYG authoring, headless authoring, or document based authoring.
            This article solely focuses on document based authoring that enables content creators to use familiar tools like Microsoft Word or Google Docs
            to write and structure content.
          </section>
          <section className="pt-4">
            This approach is particularly well suited for basic static websites and micro sites. By leveraging document based
            authoring, teams can maintain content workflows within their preferred writing tools while benefiting from AEM&apos;s scalable and fast delivery via Edge Services.
          </section>
        </div>
      </article>
    </div>
  );
}
