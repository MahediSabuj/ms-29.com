import { IArticleItem } from "@/types/article";
import TOPICS from "@/data/article/topics";

export const AEM_PERFORMANCE_OPTIMIZATION_CASE_STUDY: IArticleItem = {
  title: "AEM Performance Optimization & Improvement",
  url: "/case-studies/aem-performance-optimization-enterprise-website",
  publishDate: "December 15, 2024",
  modifiedDate: "December 15, 2024",
  description: `A comprehensive case study detailing how we improved page load times by 75% and reduced server response times by 60% for a large enterprise AEM website serving 2M+ monthly visitors. Includes performance bottleneck analysis, caching strategies, dispatcher optimization, and infrastructure improvements.`,
  topics: [TOPICS.AEM_SITES, TOPICS.AEM_DISPATCHER],
  active: true
}

export const AEM_PERFORMANCE_CASE_STUDIES: IArticleItem[] = [
  AEM_PERFORMANCE_OPTIMIZATION_CASE_STUDY
];