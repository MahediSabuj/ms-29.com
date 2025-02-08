import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CODE_COVERAGE_OSGI_CONFIGURATION: IArticleItem = {
  title: "Code Coverage for OSGI Configuration",
  description: `Custom OSGi configurations are often required based on project needs. In a previous article, we discussed how to implement 
    custom OSGi configurations; now, we will share how to write code coverage for them.`,
  url: "/aem/code-coverage/osgi-configuration",
  publishDate: "February 10, 2025",
  modifiedDate: "February 10, 2025",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: false
}

export const MOCK_STATIC_METHODS_MOCKITO: IArticleItem = {
  title: "Mock Static Methods with Mockito",
  description: `In the pursuit of clean object-oriented code, the need to mock static methods may suggest design flaws or code smells, 
    prompting consideration for refactoring. Nevertheless, there are situations where mocking static methods remains crucial 
    despite refactoring efforts.`,
  url: "/aem/code-coverage/mock-static-methods-with-mockito",
  publishDate: "April 25, 2024",
  modifiedDate: "April 25, 2024",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: true
}

export const CODE_COVERAGE: IArticleItem[] = [
  CODE_COVERAGE_OSGI_CONFIGURATION,
  MOCK_STATIC_METHODS_MOCKITO
].filter(m => m.active);
