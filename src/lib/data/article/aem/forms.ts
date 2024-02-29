import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const FORM_SUBMISSION_AUTHOR_INSTANCE: IArticleItem = {
  title: "Form Submission from Publish to Author Instance",
  description: `In General, when an end user submits a form, the request is routed to the publish 
    environment. Any modifications made at the CRX/DE during the execution of the post request are 
    stored in the publish environment. However, a request may arise where upon form submission, 
    certain data such as a content fragment needs to be created on the author instance. Following approval 
    from business-level users, the content will be published to the publish environment, making it publicly
    accessible on the internet.`,
  url: "/aem/forms/form-submission-from-publish-to-author-instance",
  publishDate: "March 01, 2024",
  modifiedDate: "March 01, 2024",
  topics: [ TOPICS.AEM_FORMS ],
  active: true
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
  description: `There are two potential approaches for integrating AEM forms into AEM Sites: one for new projects
    and another for existing projects. Adobe has developed the aem-core-forms-components which can be used to 
    incorporate forms standard components into AEM Sites.`,
  url: "/aem/forms/integrate-aem-forms-in-aem-sites",
  publishDate: "February 29, 2024",
  modifiedDate: "February 29, 2024",
  topics: [ TOPICS.AEM_FORMS ],
  active: true
}

export const AEM_FORMS: IArticleItem[] = [
  INTEGRATE_AEM_FORMS_IN_AEM_SITES,
  INVOKE_AEM_WORKFLOW_FROM_SUBMISSION,
  GOOGLE_RECAPTCHA_AEM_FORMS,
  FORM_SUBMISSION_AUTHOR_INSTANCE
].filter(m => m.active);
