import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CODE_COVERAGE_OSGI_CONFIGURATION: IArticleItem = {
  title: "Code Coverage for OSGI Configuration",
  description: ``,
  url: "/aem/code-coverage/osgi-configuration",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_CODE_COVERAGE ]
}

export const CODE_COVERAGE: IArticleItem[] = [
  CODE_COVERAGE_OSGI_CONFIGURATION
].filter(m => m.active);
