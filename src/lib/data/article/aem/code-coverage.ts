import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CODE_COVERAGE_OSGI_CONFIGURATION: IArticleItem = {
  title: "Code Coverage for OSGI Configuration",
  description: ``,
  url: "/aem/code-coverage/osgi-configuration",
  publishDate: "April 02, 2024",
  modifiedDate: "April 02, 2024",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: false
}

export const CODE_COVERAGE: IArticleItem[] = [
  CODE_COVERAGE_OSGI_CONFIGURATION
].filter(m => m.active);
