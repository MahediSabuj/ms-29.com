import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const PROJECT_LOMBOK_IN_AEM_SLING_MODELS: IArticleItem = {
  title: "Project Lombok in AEM Sling Models",
  description: ``,
  url: "/aem/sites/project-lombok-in-aem-sling-models",
  publishDate: "March 16, 2024",
  modifiedDate: "March 16, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const MULTI_SITE_MANAGER: IArticleItem = {
  title: "Multi Site Manager (MSM) in AEM",
  description: ``,
  url: "/aem/sites/multi-site-manager-in-aem",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const AEM_USER_PERMISSION: IArticleItem = {
  title: "AEM User Permission",
  description: ``,
  url: "/aem/sites/aem-user-permission",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const FETCH_MULTIFIELD_SLING_MODEL: IArticleItem = {
  title: "Fetch Multifield Values using Sling Model",
  description: `In accordance with specific project requirements, there might be a need to incorporate Multifield within the
    component dialog. Let&apos;s explore how to retrieve Multifield data and effectively utilize it in HTL.`,
  url: "/aem/sites/fetch-multifield-values-using-sling-model",
  publishDate: "March 14, 2024",
  modifiedDate: "March 14, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SLING_MODEL_INJECTORS_ANNOTATIONS: IArticleItem = {
  title: "Sling Model Injectors Annotations",
  description: ``,
  url: "/aem/sites/sling-model-injectors-annotations",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const QUERY_BUILDER_CHEATSHEET: IArticleItem = {
  title: "Query Builder CheatSheet",
  description: `Query Builder offers an easy way of querying the content repository of AEM. The API is
  built using the JCR API. AEM includes a Query Debugger tool that allows you to execute  search queries 
  on the JCR (Java Content Repository). Utilize this tool to perform a dry run of the AEM queries, optimize 
  them, and then implement them into your code.`,
  url: "/aem/sites/query-builder-cheatsheet",
  publishDate: "February 21, 2024",
  modifiedDate: "February 21, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const CUSTOM_OSGI_CONFIGURATION: IArticleItem = {
  title: "Custom OSGI Configuration in AEM",
  description: ``,
  url: "/aem/sites/custom-osgi-configuration-in-aem",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const INTEGRATE_ADAPTIVE_FORMS_IN_AEM_SITES: IArticleItem = {
  title: "Integrate Adaptive Forms in AEM Sites",
  description: `There are two potential scenarios for integrating Adaptive forms into AEM Sites: one for new projects
    and another for existing projects. Adobe has developed the aem-core-forms-components which can be used to 
    incorporate forms standard components into AEM Sites.`,
  url: "/aem/sites/integrate-adaptive-forms-in-aem-sites",
  publishDate: "February 29, 2024",
  modifiedDate: "March 01, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const AEM_COMPONENT_DIALOG_CHEATSHEET: IArticleItem = {
  title: "AEM Component Dialog CheatSheet",
  url: "/aem/sites/component-dialog-cheatsheet",
  publishDate: "February 13, 2024",
  modifiedDate: "February 28, 2024",
  description: `Granite UI provides a large range of the basic components needed to create component 
      dialog on the authoring environment. These components are constructed using Coral UI-based elements.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG: IArticleItem = {
  title: "Setting Default Values in AEM Component Dialog",
  url: "/aem/sites/default-value-in-component-dialog",
  publishDate: "February 04, 2024",
  modifiedDate: "February 10, 2024",
  description: `In AEM components, it&apos;s often necessary to establish default values. 
      This ensures that when components are dragged onto the page, they display predefined initial values.
      This functionality is achievable through the utilization of cq:template and cq:templatePath.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const AEM_SITES : IArticleItem[] = [
  PROJECT_LOMBOK_IN_AEM_SLING_MODELS,
  MULTI_SITE_MANAGER,
  AEM_USER_PERMISSION,
  FETCH_MULTIFIELD_SLING_MODEL,
  SLING_MODEL_INJECTORS_ANNOTATIONS,
  QUERY_BUILDER_CHEATSHEET,
  CUSTOM_OSGI_CONFIGURATION,
  INTEGRATE_ADAPTIVE_FORMS_IN_AEM_SITES,
  AEM_COMPONENT_DIALOG_CHEATSHEET,
  DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG
].filter(m => m.active);
