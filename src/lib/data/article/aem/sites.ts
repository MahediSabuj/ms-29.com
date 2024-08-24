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
  description: `Multi Site Manager and its Live Copy features allow to use the same site content in multiple locations. MSM maintains 
    the live relationship between the source and its live copies, ensuring that changes made to the source are also reflected in the live 
    copies. Aditionally, You can adjust the content of the live copies by disconnecting the live relationship for individual subpages, or components, 
    or both. By doing this, changes to the source are no longer applied to the live copy.`,
  url: "/aem/sites/multi-site-manager-in-aem",
  publishDate: "May 24, 2024",
  modifiedDate: "May 24, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const AEM_USER_PERMISSION: IArticleItem = {
  title: "Managing User Permissions and Access Control in AEM",
  description: `Adobe Experience Manager (AEM) is a content management system managing content authoring across multiple 
    sites with multiple content creators. User Permissions enforces strict governance over user actions like read, create, 
    modify, delete, publish contents. This mechanism ensures that only authorized users can perform these specific actions.`,
  url: "/aem/sites/aem-user-permission",
  publishDate: "September 05, 2024",
  modifiedDate: "September 05, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: false
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
  title: "AEM Sling Model Injectors Annotations",
  description: `In AEM, various annotations are provide for use in Java Sling Models. Sling Model enables 
    injector-specific annotations, used to inject values. For each injector there is a specialized annotation 
    available.`,
  url: "/aem/sites/sling-model-injectors-annotations",
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: false
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
  title: "Custom OSGi Configuration in AEM",
  description: `OSGi Configuration allow us to configure run-mode specific properties. All the out-of-the-box OSGi configurations
    are available at /system/console/configMgr while custom configurations can be created as per business requirements.`,
  url: "/aem/sites/custom-osgi-configuration-in-aem",
  publishDate: "June 28, 2024",
  modifiedDate: "June 28, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: false
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
  active: false
}

export const BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION: IArticleItem = {
  title: "Best Practices Analyzer for AEMaaCS Migration",
  url: "/aem/sites/best-practices-analyzer-for-aemaacs-migration",
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  description: `Best Practices Analyzer (BPA) evaluates the current AEM implementation, identifying 
    areas not in alignment with AEM best practices and offering guidance on how to improve. It also 
    expedites the assessment of readiness for transitioning from an existing Adobe Experience Manager 
    (AEM) deployment to AEM as a Cloud Service. This tool generates a report pinpointing potential 
    areas for refactoring, marking the initial phase of migrating to AEM as a Cloud Service.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const CONTEXT_AWARE_CONFIGURATION : IArticleItem = {
  title: "Apache Sling Context Aware Configuration in AEM",
  url: "/aem/sites/context-aware-configuration",
  publishDate: "May 18, 2024",
  modifiedDate: "May 18, 2024",
  description: `Context-aware configurations  are related to a content resource, allows different configs for 
    different content resources. Parameters within nested contexts allow hierarchical based inheritance and 
    global fallback values when required. Leveraging the Context-Aware Configuration Java API, one can retrieve 
    the appropriate configuration for each content resource without concerning  where it is stored or how the inheritance works.`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
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

export const DYNAMICALLY_POPULATE_SELECT_OPTIONS_IN_AEM_COMPONENT_DIALOG : IArticleItem = {
  title: "Dynamically Populate Select Options in AEM Component Dialog",
  url: "/aem/sites/dynamically-populate-select-options-in-aem-component-dialog",
  publishDate: "August 30, 2024",
  modifiedDate: "August 30, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const HTL_SPECIFICATION_CHEATSHEET : IArticleItem = {
  title: "HTL Specification CheatSheet",
  url: "/aem/sites/htl-specification-cheatsheet",
  publishDate: "May 28, 2024",
  modifiedDate: "May 28, 2024",
  description: `HTML Template Language (HTL), formerly known as Sightly, is the preferred and recommended server-side 
    template system for HTML in AEM, preferred over JSP (JavaServer Pages) for new projects. However, moving to HTL is not 
    necessarily an all-or-nothing choice, as HTL components can harmoniously coexist with JSP within the same project.`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const SLING_MODEL_DELEGATION_PATTERN : IArticleItem = {
  title: "Sling Model Delegation Pattern with Lombok",
  url: "/aem/sites/sling-model-delegation-pattern",
  publishDate: "June 30, 2024",
  modifiedDate: "June 30, 2024",
  description: `AEM Core Components are a standard set components to be used with AEM. Built with Adobe's best practices and 
    standards, Core Components provide a baseline set of functionality for any Sites implementation. However, it's often necessary 
    to customize the functionality of core components to address project-specific requirements. The business logic for the core components 
    is implemented in Sling Models, which can be customized using the delegation pattern.`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT : IArticleItem = {
  title: "SonarQube Setup for AEM Development",
  url: "/aem/sites/sonarqube-setup-for-aem-development",
  publishDate: "June 21, 2024",
  modifiedDate: "June 21, 2024",
  description: `In AEM development, prioritizing code quality is essential. Even during deployment via Cloud Manager, it's 
    crucial to meet specific metrics for security, reliability, maintainability, and code coverage. SonarQube enables continuous 
    code inspections, identifying issues early in the development lifecycle that could affect these metrics. Though integration, 
    developers can ensure the maintenance of clean, efficient, and secure code throughout the AEM development process.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS : IArticleItem = {
  title: "Web Optimized Image Delivery for AEM Custom Components",
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
  publishDate: "May 18, 2024",
  modifiedDate: "May 18, 2024",
  description: `Page properties in AEM serve as metadata that provide essential information about a webpage. While AEM 
    provides a standard set of properties to meet basic web project needs, organizations often enhance them with extra 
    functionalities or custom data fields to effectively address more complex or unique requirements in content management.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const APACHE_SLING_SITEMAP_GENERATOR: IArticleItem = {
  title: "Apache Sling Sitemap Generator for AEM",
  url: "/aem/sites/apache-sling-sitemap-generator",
  publishDate: "June 04, 2024",
  modifiedDate: "June 04, 2024",
  description: `Sitemap is essential for any website, an XML file that provides the pages of the website, allowing search engines 
    like Google to efficiently crawl and index web pages. AEM offers Apache Sling Sitemap Generator, dynamically generating XML 
    sitemap based on the content structure and updating them with any page creation, deletion, or modification.`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const SAML_AUTHENTICATION : IArticleItem = {
  title: "SAML SSO Authentication between AEM and Salesforce",
  url: "/aem/sites/saml-sso-authentication-aem-salesforce",
  publishDate: "May 26, 2024",
  modifiedDate: "May 26, 2024",
  description: `Single Sign-On (SSO) simplifies the login experience by requiring users to manage credentials once for access to multiple 
    websites, reducing the need of managing multiple passwords and security questions. Moreover, SAML enables secure exchanges of authentication 
    and authorization data between parties: Identity Provider (IdP) and Service Provider (SP).`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION : IArticleItem = {
  title: "Show/Hide AEM Dialog Fields on Dropdown Selection",
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
  publishDate: "July 03, 2024",
  modifiedDate: "July 03, 2024",
  description: `Customizing error pages in AEM is crucial for ensuring seamless user experience and brand consistency. Error pages 
    act as backups when requested resources cannot be found or unexpected errors occur, such as the commonly encountered 404 and 500
    HTTP status codes. By tailoring these pages with informative and user-friendly content, you can ensure users able to navigate smoothly
    and continue browsing the website.`,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const START_AEM_IN_DEBUG_MODE : IArticleItem = {
  title: "Start AEM in Debug Mode",
  url: "/aem/sites/start-aem-in-debug-mode",
  publishDate: "August 18, 2024",
  modifiedDate: "August 18, 2024",
  description: `Troubleshooting and debugging are crucial aspects of working with AEM, allowing developers to identify, analyze, and fix issues 
    in their code. Since AEM projects often involve extensive custom code for Models, Services, Servlets, and Schedulers, debugging allows real-time 
    inspection and provides valuable insights into the root cause, enabling effective fixes. To debug an AEM application, you can use Java Remote Debugging.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const UPDATE_JAVA_JDK_V11_FOR_AEM_CLOUD : IArticleItem = {
  title: "Update Java JDK to v11 for AEM Cloud",
  url: "/aem/sites/update-java-jdk-v11-for-aem-cloud",
  publishDate: "August 25, 2024",
  modifiedDate: "August 25, 2024",
  description: `By default, projects are built by the Cloud Manager build process using the Oracle 8 JDK, but AEM Cloud Service customers are strongly advised 
  to set the JDK version used to execute Maven to 11 for improved performance, security, and support over earlier versions.`,
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const REPOSITORY_MODERNIZER: IArticleItem = {
  title: "Update AEM Archetype using Repository Modernizer",
  description: `AEM Project Archetype is a Maven template creates a minimal, best-practices-based AEM project. Over the years, AEM Project 
    Archetype has been revolutionized with significant advancements, introducing many new features and possibilities into AEM projects. The 
    latest Archetype emphasizing the separation of content and code into discrete subpackages to maintain the distinction between mutable and 
    immutable content. To align existing projects with AEM’s Cloud Service structure, the Repository Modernizer tool can be used to refactor and 
    reorganize project packages, separating content and code into the appropriate packages.`,
  url: "/aem/sites/repository-modernizer-update-archetype",
  publishDate: "August 11, 2024",
  modifiedDate: "August 11, 2024",
  topics: [ TOPICS.AEM_SITES ],
  active: true
}

export const SETUP_LOCAL_AEM_DEVELOPMENT_ENVIRONMENT : IArticleItem = {
  title: "Setup Local AEM Development Environment",
  url: "/aem/sites/set-up-local-aem-development-environment",
  publishDate: "August 28, 2024",
  modifiedDate: "August 28, 2024",
  description: ``,
  topics: [ TOPICS.AEM_SITES ],
  active: false
}

export const SLING_RESOURCE_MERGER : IArticleItem = {
  title: "Sling Resource Merger in AEM",
  url: "/aem/sites/sling-resource-merger",
  publishDate: "August 28, 2024",
  modifiedDate: "August 28, 2024",
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
  START_AEM_IN_DEBUG_MODE,
  REPOSITORY_MODERNIZER,
  UPDATE_JAVA_JDK_V11_FOR_AEM_CLOUD,
  SETUP_LOCAL_AEM_DEVELOPMENT_ENVIRONMENT,
  SLING_RESOURCE_MERGER,
  DYNAMICALLY_POPULATE_SELECT_OPTIONS_IN_AEM_COMPONENT_DIALOG
].filter(m => m.active);
