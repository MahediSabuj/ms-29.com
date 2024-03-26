import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_AEM_WORKFLOW_PROCESS: IArticleItem = {
  title: "Custom AEM Workflow Process",
  description: ``,
  url: "/aem/workflow/custom-aem-workflow-process",
  publishDate: "June 01, 2024",
  modifiedDate: "June 01, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: false
}

export const CUSTOM_RENDITIONS_FOR_IMAGES: IArticleItem = {
  title: "Custom Renditions for Images in AEM",
  description: ``,
  url: "/aem/workflow/custom-renditions-for-images-in-aem",
  publishDate: "June 05, 2024",
  modifiedDate: "June 05, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: false
}

export const CUSTOM_AEM_WORKFLOW_STEP: IArticleItem = {
  title: "Custom AEM Workflow Step",
  description: ``,
  url: "/aem/workflow/custom-aem-workflow-step",
  publishDate: "June 15, 2024",
  modifiedDate: "June 15, 2024",
  topics: [ TOPICS.AEM_WORKFLOW ],
  active: false
}

export const AEM_WORKFLOW: IArticleItem[] = [
  CUSTOM_AEM_WORKFLOW_PROCESS,
  CUSTOM_RENDITIONS_FOR_IMAGES,
  CUSTOM_AEM_WORKFLOW_STEP
].filter(m => m.active);
