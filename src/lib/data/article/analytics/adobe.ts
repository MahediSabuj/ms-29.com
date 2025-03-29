import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const ADOBE_ANALYTICS_INTEGRATION_WITH_AEM: IArticleItem = {
  title: "Adobe Analytics Integration with AEM",
  description: ``,
  url: "/analytics/adobe/adobe-analytics-integration-with-aem",
  publishDate: "May 13, 2025",
  modifiedDate: "May 17, 2025",
  topics: [ TOPICS.ADOBE_ANALYTICS ],
  active: false
}

export const ADOBE_ANALYTICS: IArticleItem[] = [
  ADOBE_ANALYTICS_INTEGRATION_WITH_AEM
].filter(m => m.active);
