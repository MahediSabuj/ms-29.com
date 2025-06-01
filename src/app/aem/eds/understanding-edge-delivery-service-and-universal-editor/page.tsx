import Article from "@/components/article/article";
import { Metadata } from "next";
import Link from "next/link";

import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import { UNDERSTANDING_EDGE_DELIVERY_SERVICE_AND_UNIVERSAL_EDITOR as ARTICLE } from "@/lib/data/article/aem/eds";

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

export default function EdgeDeliveryServiceUniversalEditor() {
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

          </section>
        </div>
      </article>
    </div>
  );
}
