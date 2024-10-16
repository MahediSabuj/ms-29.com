import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_AEM_WORKFLOW_PROCESS: IArticleItem = {
  title: "AEM Workflow Custom Process",
  description: `AEM provides a set of pre-defined workflow process that cover common scenarios, but sometimes 
    these built-in features may not fully handle the complexities of specific workflows. In such cases, AEM allows 
    developers to create custom processes, enhancing the functionality of standard workflows to meet unique requirements.`,
  url: "/aem/workflow/aem-workflow-custom-process",
  publishDate: "May 11, 2024",
  modifiedDate: "May 11, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: true
}

export const CUSTOM_RENDITIONS_FOR_IMAGES: IArticleItem = {
  title: "Custom Renditions for Images in AEM",
  description: ``,
  url: "/aem/workflow/custom-renditions-for-images-in-aem",
  publishDate: "April 23, 2024",
  modifiedDate: "April 23, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: false
}

export const CUSTOM_AEM_WORKFLOW_STEP: IArticleItem = {
  title: "Custom AEM Workflow Step",
  description: ``,
  url: "/aem/workflow/custom-aem-workflow-step",
  publishDate: "October 28, 2024",
  modifiedDate: "October 28, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: false
}

export const AEM_WORKFLOW: IArticleItem[] = [
  CUSTOM_AEM_WORKFLOW_PROCESS,
  CUSTOM_RENDITIONS_FOR_IMAGES,
  CUSTOM_AEM_WORKFLOW_STEP
].filter(m => m.active);
