import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETTING_UP_DATALAYER_GTM_SYNC_WITH_BIGQUERY: IArticleItem = {
    title: "Setting Up Data Layer and Sending Events to GTM with BigQuery",
    description: `In today's data-driven world, tracking user interactions is essential for optimizing digital experiences. 
      By implementing a data layer and integrating Google Tag Manager (GTM) with BigQuery, businesses can efficiently collect, 
      structure, and analyze granular event data at scale, unlocking actionable insights for advanced analytics.`,
    url: "/analytics/google/setting-up-data-layer-and-sending-events-to-gtm-with-bigquery",
    publishDate: "February 13, 2025",
    modifiedDate: "February 13, 2025",
    topics: [ TOPICS.GOOGLE_ANALYTICS ],
    active: false
}

export const GOOGLE_ANALYTICS: IArticleItem[] = [
  SETTING_UP_DATALAYER_GTM_SYNC_WITH_BIGQUERY
].filter(m => m.active);
