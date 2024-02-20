import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const FORM_SUBMISSION_AUTHOR_INSTANCE: IArticleItem = {
  title: "Form Submission from Publish to Author Instance",
  description: ``,
  url: "/aem/forms/form-submission-from-publish-to-author-instance",
  publishDate: "February 16, 2024",
  modifiedDate: "February 16, 2024",
  topics: [ TOPICS.AEM_FORMS ]
}

export const GOOGLE_RECAPTCHA_AEM_FORMS: IArticleItem = {
  title: "Google Recaptcha in AEM Forms",
  description: ``,
  url: "/aem/forms/google-recaptcha-in-aem-forms",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_FORMS ]
}

export const INVOKE_AEM_WORKFLOW_FROM_SUBMISSION: IArticleItem = {
  title: "Invoke AEM Workflow on AEM Forms Submission",
  description: ``,
  url: "/aem/forms/invoke-aem-workflow-on-aem-forms-submission",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_FORMS ]
}

export const INTEGRATE_AEM_FORMS_IN_AEM_SITES: IArticleItem = {
  title: "Integrate AEM Forms in AEM Sites",
  description: ``,
  url: "/aem/forms/integrate-aem-forms-in-aem-sites",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_FORMS ]
}

export const AEM_FORMS: IArticleItem[] = [
  INTEGRATE_AEM_FORMS_IN_AEM_SITES,
  INVOKE_AEM_WORKFLOW_FROM_SUBMISSION,
  GOOGLE_RECAPTCHA_AEM_FORMS,
  FORM_SUBMISSION_AUTHOR_INSTANCE
].filter(m => m.active);
