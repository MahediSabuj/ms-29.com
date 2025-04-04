import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_LIGHTNING_WEB_COMPONENT: IArticleItem = {
  title: "Custom Lightning Web Component (LWC) in Salesforce",
  description: `Lightning Web Components is a modern web programming model introduced by Salesforce to build fast, reusable
    and lightweight UI components for the Salesforce platform. Although Salesforce provides a wide range of standard Lightning 
    Web Components, custom components are often required to address specific business requirements.`,
  url: "/salesforce/lwc/custom-lightning-web-component-in-salesforce",
  publishDate: "April 10, 2025",
  modifiedDate: "April 10, 2025",
  topics: [ TOPICS.SF_LWC ],
  active: false
}

export const SETUP_LWC_LOCAL_DEVELOPMENT_ENVIRONMENT: IArticleItem = {
  title: "Setup LWC Local Development Environment",
  description: `While Salesforce provides an online development environment, setting up a local development environment can enhance 
    productivity, enable faster testing, and allow integration with version control systems. This allows developers to build, debug, 
    and validate LWC applications before pushing them to Salesforce org.`,
  url: "/salesforce/lwc/setup-lwc-local-development-environment",
  publishDate: "April 04, 2025",
  modifiedDate: "April 04, 2025",
  topics: [ TOPICS.SF_LWC ],
  active: true
}

export const SF_LWC: IArticleItem[] = [
  CUSTOM_LIGHTNING_WEB_COMPONENT,
  SETUP_LWC_LOCAL_DEVELOPMENT_ENVIRONMENT
].filter(m => m.active);
