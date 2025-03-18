import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { SETTING_UP_DATALAYER_GTM_SYNC_WITH_BIGQUERY as ARTICLE } from "@/lib/data/article/analytics/google";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const DATA_LAYER =
`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  eventType: 'pageview',
  eventLabel: 'Home Page',
  eventAction: 'pageload'
});`;

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
          <section className="pt-3">
            The <strong>datalayer</strong> is a JavaScript object that stores and transfers information from your website to GTM.
            It acts as a central repository where you can push custom data based on user interactions. By defining a data layer,
            it becomes easier to manage and track events across your website, ensuring consistent data collection and accurate reporting.
          </section>
          <section className="pt-3">
            A typical datalayer consists of key-value pairs like below:
            <Highlight code={DATA_LAYER} language="javascript" path=""/>
            <div className="pt-1">
              In this example, when a user loads the home page, an event (<code className="code-inline background">pageview</code>) will be pushed to the data layer.
            </div>
          </section>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
