import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import { SETTING_UP_DATALAYER_GTM_SYNC_WITH_BIGQUERY as ARTICLE } from "@/lib/data/article/analytics/google";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.GOOGLE_ANALYTICS.title,
    url: TOPICS.GOOGLE_ANALYTICS.url
  }],
  current: ARTICLE.title
}

export default function DataLayer() {
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
            In today&apos;s data-driven world, tracking user interactions is essential for optimizing digital experiences.
            By implementing data layer and integrating Google Tag Manager (GTM) with BigQuery, businesses can efficiently
            collect, structure, and analyze granular event data at scale, unlocking actionable insights for advanced analytics.
            This guide walks you through setting up a data layer, sending events to GTM, and syncing data with BigQuery.
          </section>
        </div>  
      </article>
    </div>
  );
}
