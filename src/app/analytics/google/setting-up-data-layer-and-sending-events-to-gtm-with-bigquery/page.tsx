import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { SETTING_UP_DATALAYER_GTM_SYNC_WITH_BIGQUERY as ARTICLE } from "@/lib/data/article/analytics/google";

import GTM_CUSTOM_VARIABLE from './assets/gtm-custom-variable.png';
import GTM_TRIGGER from './assets/gtm-trigger.png';

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
  event: 'pageView',
  eventType: 'buttonClick',
  eventLabel: 'Home Page',
  eventAction: 'pageLoad'
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
              In this example, when a user loads the home page, an event (<code className="code-inline background">pageView</code>) will be pushed to the data layer.
            </div>
          </section>
          <section className="pt-4">
            To link these variables with GTM, you need to configure the corresponding data layer variables in GTM. Follow the steps below:
            <ol className="list-decimal ml-6 pt-1 pl-2.5">
              <li>Log in to your Google Tag Manager account and select the desired container.</li>
              <li>Navigate to <strong>Variables</strong> tab and click on <strong>New</strong>.</li>
              <li>Choose <strong>Variable Configuration</strong> and select <strong>Data Layer Variable</strong>.</li>
              <li>Enter the <strong>Variable Name</strong> as <code className="code-inline background">eventType</code>.</li>
              <li>Click on <strong>Save</strong> to create the variable.</li>
            </ol>
            <Image src={GTM_CUSTOM_VARIABLE} className="border mt-2"
                alt="GM Custom Variable">
            </Image>
            <div className="pt-2">
              Follow the same steps to create variables for <code className="code-inline background">eventLabel</code> and <code className="code-inline background">eventAction</code>.
            </div>
          </section>
          <section className="pt-4">
            Once the data layer variables are set up, you need to create trigger and tag in GTM to fire events based on user interactions.
            To create a trigger, follow these steps:
            <ol className="list-decimal ml-6 pt-1 pl-2.5">
              <li>Navigate to <strong>Triggers</strong> tab and click on <strong>New</strong>.</li>
              <li>Choose <strong>Trigger Configuration</strong> and select <strong>Custom Event</strong>.</li>
              <li>Enter the <strong>Event Name</strong> as <code className="code-inline background">pageView</code>.</li>
              <li>Choose the triggers firing for <strong>All Custom Events</strong>.</li>
              <li>Click on <strong>Save</strong> to create the trigger.</li>
            </ol>
            <Image src={GTM_TRIGGER} className="border mt-2"
                alt="GTM Trigger Configuration">
            </Image>
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
