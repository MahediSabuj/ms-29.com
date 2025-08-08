import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CODE_COVERAGE_OSGI_CONFIGURATION: IArticleItem = {
  title: "Code Coverage for OSGi Configuration",
  description: `Custom OSGi configurations are often required based on project needs. In a previous article, we discussed how to implement 
    custom OSGi configurations. Now, we will cover how to write unit tests and ensure code coverage for these configurations using JUnit 5, OSGi Mocks, and Mockito.`,
  url: "/aem/code-coverage/osgi-configuration",
  publishDate: "February 10, 2025",
  modifiedDate: "February 10, 2025",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: true
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

export const MOCK_SLING_MODEL_INJECTORS_ANNOTATIONS: IArticleItem = {
  title: "Mock Sling Model Injectors Annotations",
  description: ``,
  url: "/aem/code-coverage/mock-sling-model-injectors-annotations",
  publishDate: "May 31, 2025",
  modifiedDate: "May 31, 2025",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: false
}

export const CODE_COVERAGE_SLING_MODEL_DELEGATION_PATTERN: IArticleItem = {
  title: "Unit Test for Sling Model Delegation Pattern",
  description: `The Sling Model Delegation pattern allows extending Core Components functionality while maintaining the original API 
  contract. In a previous article, we discussed how to implement Sling Model delegation pattern. Now, we will cover how to write 
  comprehensive unit tests and ensure code coverage for these delegated Sling Models using JUnit 5, AEM Mocks.`,
  url: "/aem/code-coverage/sling-model-delegation-pattern",
  publishDate: "August 15, 2025",
  modifiedDate: "August 15, 2025",
  topics: [ TOPICS.AEM_CODE_COVERAGE ],
  active: true  
}

export const CODE_COVERAGE: IArticleItem[] = [
  CODE_COVERAGE_OSGI_CONFIGURATION,
  MOCK_STATIC_METHODS_MOCKITO,
  MOCK_SLING_MODEL_INJECTORS_ANNOTATIONS,
  CODE_COVERAGE_SLING_MODEL_DELEGATION_PATTERN
].filter(m => m.active);
