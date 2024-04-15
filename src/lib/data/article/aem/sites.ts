import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const PROJECT_LOMBOK_IN_AEM_PROJECTS: IArticleItem = {
  title: "Project Lombok in AEM Projects",
  description: `In AEM backend Java development, Sling Models are utilized to retrieve dialog values using annotations. However, 
    writing boilerplate code such as getter methods for passing these values to HTL can be tedious. To simplify this 
    process, Project Lombok can be integrated, automatically generating the necessary boilerplate code 
    with annotations like @Getter. This streamlines development tasks by eliminating the need for manual getter method creation.`,
  url: "/aem/sites/project-lombok-in-aem-projects",
  publishDate: "March 17, 2024",
  modifiedDate: "March 17, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const MULTI_SITE_MANAGER: IArticleItem = {
  title: "Multi Site Manager (MSM) in AEM",
  description: ``,
  url: "/aem/sites/multi-site-manager-in-aem",
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const AEM_USER_PERMISSION: IArticleItem = {
  title: "AEM User Permission",
  description: ``,
  url: "/aem/sites/aem-user-permission",
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
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
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const QUERY_BUILDER_CHEATSHEET: IArticleItem = {
  title: "Query Builder CheatSheet",
  description: `Query Builder offers an easy way of querying the content repository of AEM. The API is
    built using the JCR API. AEM includes a Query Debugger tool that allows you to execute  search queries 
    on the JCR (Java Content Repository). Utilize this tool to perform a dry run of the AEM queries, optimize 
    them, and then implement them into your code.`,
  url: "/aem/sites/query-builder-cheatsheet",
  publishDate: "February 21, 2024",
  modifiedDate: "March 17, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const CUSTOM_OSGI_CONFIGURATION: IArticleItem = {
  title: "Custom OSGI Configuration in AEM",
  description: ``,
  url: "/aem/sites/custom-osgi-configuration-in-aem",
  publishDate: "May 30, 2024",
  modifiedDate: "May 30, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
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

export const ADAPTIVE_IMAGE_SERVLET_FOR_CUSTOM_COMPONENTS: IArticleItem = {
  title: "Adaptive Image Servlet for Custom Components",
  url: "/aem/sites/adaptive-image-servlet-for-custom-components",
  publishDate: "May 10, 2024",
  modifiedDate: "May 10, 2024",
  description: `Adaptive Image identifies the end user's screen size and dynamically serves the 
    appropriate version of the image, delivering smaller sizes for small screens and larger ones 
    for larger screens. This optimization significantly improves website performance and user 
    experience by minimizing bandwidth consumption and reducing load times.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION: IArticleItem = {
  title: "Best Practice Analysis for AEMaaCS Migration",
  url: "/aem/sites/best-practice-analysis-for-aemaacs-migration",
  publishDate: "May 14, 2024",
  modifiedDate: "May 14, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const CONTEXT_AWARE_CONFIGURATION : IArticleItem = {
  title: "Context Aware Configuration",
  url: "/aem/sites/context-aware-configuration",
  publishDate: "May 18, 2024",
  modifiedDate: "May 18, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const EXPAND_CORE_SEARCH_COMPONENT_SCOPE : IArticleItem = {
  title: "Expanding Search Depth for AEM Core Quick Search Component",
  url: "/aem/sites/expand-search-depth-for-aem-core-quick-search-component",
  publishDate: "May 02, 2024",
  modifiedDate: "May 02, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const HTL_SPECIFICATION_CHEATSHEET : IArticleItem = {
  title: "HTL Specification CheatSheet",
  url: "/aem/sites/htl-specification-cheatsheet",
  publishDate: "May 28, 2024",
  modifiedDate: "May 28, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SLING_MODEL_DELEGATION_PATTERN : IArticleItem = {
  title: "Sling Model Delegation Pattern",
  url: "/aem/sites/sling-model-delegation-pattern",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT : IArticleItem = {
  title: "SonarQube Setup for AEM Development",
  url: "/aem/sites/sonarqube-setup-for-aem-development",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS : IArticleItem = {
  title: "Web Optimized Image Delivery for Custom Components",
  url: "/aem/sites/web-optimized-image-delivery-for-custom-component",
  publishDate: "April 09, 2024",
  modifiedDate: "April 09, 2024",
  description: `Web Optimized Image Delivery feature of AEM as a Cloud service delivers image assets from
    the DAM in WebP format. WebP can reduce the download size of an image by about 25% on average, which
    results in faster page loading.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const EXTEND_AEM_PAGE_PROPERTIES : IArticleItem = {
  title: "Extend AEM Page Properties",
  url: "/aem/sites/extend-aem-page-properties",
  publishDate: "April 30, 2024",
  modifiedDate: "April 30, 2024",
  description: `Page properties in AEM serve as metadata that provide essential information about a webpage. While AEM 
    provides a standard set of properties to meet basic web project needs, organizations often enhance them with extra 
    functionalities or custom data fields to effectively address more complex or unique requirements in content management.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const APACHE_SLING_SITEMAP_GENERATOR: IArticleItem = {
  title: "Apache Sling Site Generator for AEM",
  url: "/aem/sites/apache-sling-sitemap-generator",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SAML_AUTHENTICATION : IArticleItem = {
  title: "SAML SSO Authentication between AEM and Salesforce",
  url: "/aem/sites/saml-sso-authentication-aem-salesforce",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION : IArticleItem = {
  title: "Show/Hide AEM Dialog Fields on Dropdown Selection in AEM",
  url: "/aem/sites/show-hide-aem-dialog-fields-on-dropdown-selection",
  publishDate: "April 10, 2024",
  modifiedDate: "April 10, 2024",
  description: `Enabling Show/Hide functionality for AEM dialog fields improves user experience by allowing content authors to 
    focus on relevant fields, thereby making the authoring process more efficient and less error-prone.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SETTING_UP_ERROR_PAGES_IN_AEM : IArticleItem = {
  title: "Setting Up Error Pages in AEM",
  url: "/aem/sites/setup-error-page-in-aem",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const START_AEM_AS_DEBUG_MODE : IArticleItem = {
  title: "Start AEM as Debug Mode",
  url: "/aem/sites/start-aem-as-debug-mode",
  publishDate: "April 23, 2024",
  modifiedDate: "April 23, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const AEM_SITES : IArticleItem[] = [
  PROJECT_LOMBOK_IN_AEM_PROJECTS,
  MULTI_SITE_MANAGER,
  AEM_USER_PERMISSION,
  FETCH_MULTIFIELD_SLING_MODEL,
  SLING_MODEL_INJECTORS_ANNOTATIONS,
  QUERY_BUILDER_CHEATSHEET,
  CUSTOM_OSGI_CONFIGURATION,
  INTEGRATE_ADAPTIVE_FORMS_IN_AEM_SITES,
  AEM_COMPONENT_DIALOG_CHEATSHEET,
  DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG,
  ADAPTIVE_IMAGE_SERVLET_FOR_CUSTOM_COMPONENTS,
  BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION,
  CONTEXT_AWARE_CONFIGURATION,
  EXPAND_CORE_SEARCH_COMPONENT_SCOPE,
  HTL_SPECIFICATION_CHEATSHEET,
  SLING_MODEL_DELEGATION_PATTERN,
  SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT,
  WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS,
  EXTEND_AEM_PAGE_PROPERTIES,
  APACHE_SLING_SITEMAP_GENERATOR,
  SAML_AUTHENTICATION,
  SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION,
  SETTING_UP_ERROR_PAGES_IN_AEM,
  START_AEM_AS_DEBUG_MODE
].filter(m => m.active);
