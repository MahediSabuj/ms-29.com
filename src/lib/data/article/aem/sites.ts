import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

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
  description: ``,
  url: "/aem/sites/fetch-multifield-values-using-sling-model",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
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
  description: ``,
  url: "/aem/sites/query-builder-cheatsheet",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const CUSTOM_OSGI_CONFIGURATION: IArticleItem = {
  title: "Custom OSGI Configuration in AEM",
  description: ``,
  url: "/aem/sites/custom-osgi-configuration-in-aem",
  publishDate: "February 20, 2024",
  modifiedDate: "February 20, 2024",
  topics: [ TOPICS.AEM_SITES ]
}

export const AEM_COMPONENT_DIALOG_CHEATSHEET: IArticleItem = {
  title: "AEM Component Dialog CheatSheet",
  url: "/aem/sites/component-dialog-cheatsheet",
  publishDate: "February 13, 2024",
  modifiedDate: "February 13, 2024",
  description: `Granite UI provides a large range of the basic components needed to create component 
      dialog on the authoring environment. These components are constructed using Coral UI-based elements.`,
  topics: [ TOPICS.AEM_SITES ]
}

export const DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG: IArticleItem = {
  title: "Setting Default Values in AEM Component Dialog",
  url: "/aem/sites/default-value-in-component-dialog",
  publishDate: "February 04, 2024",
  modifiedDate: "February 10, 2024",
  description: `In AEM components, it&apos;s often necessary to establish default values. 
      This ensures that when components are dragged onto the page, they display predefined initial values.
      This functionality is achievable through the utilization of cq:template and cq:templatePath.`,
  topics: [ TOPICS.AEM_SITES ]
}

export const AEM_SITES : IArticleItem[] = [
  MULTI_SITE_MANAGER,
  AEM_USER_PERMISSION,
  FETCH_MULTIFIELD_SLING_MODEL,
  SLING_MODEL_INJECTORS_ANNOTATIONS,
  QUERY_BUILDER_CHEATSHEET,
  CUSTOM_OSGI_CONFIGURATION,
  AEM_COMPONENT_DIALOG_CHEATSHEET,
  DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG
]
