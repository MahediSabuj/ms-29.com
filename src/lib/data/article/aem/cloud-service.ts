import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BEST_PRACTICE_ANALYSER_FOR_AEMAACS_MIGRATION: IArticleItem = {
  title: "Best Practices Analyzer for AEMaaCS Migration",
  url: "/aem/cloud-service/best-practices-analyzer-for-aemaacs-migration",
  publishDate: "May 20, 2024",
  modifiedDate: "May 20, 2024",
  description: `Best Practices Analyzer (BPA) evaluates the current AEM implementation, identifying 
    areas not in alignment with AEM best practices and offering guidance on how to improve. It also 
    expedites the assessment of readiness for transitioning from an existing Adobe Experience Manager 
    (AEM) deployment to AEM as a Cloud Service. This tool generates a report pinpointing potential 
    areas for refactoring, marking the initial phase of migrating to AEM as a Cloud Service.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const ENVIRONMENT_VARIABLES_AND_SECRETS : IArticleItem = {
  title: "Environment Variables and Secrets in AEMaaCS",
  url: "/aem/cloud-service/environment-variables-and-secrets-in-aemaacs",
  publishDate: "September 03, 2024",
  modifiedDate: "September 03, 2024",
  description: `Environment variables allow AEM code and applications to adapt based on context, enabling different configurations 
    for development, production, or staging environments. They can be updated or deleted as needed, no code changes or deployments 
    required. By separating code from configuration, they enhance security and keep sensitive information out of version control.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const TAILING_LOGS_ON_AEM_AS_CLOUD_SERVICE : IArticleItem = {
  title: "Tailing logs on AEM as Cloud Service",
  description: `Tailing logs is a very basic need that every developer performs daily, as logs serve as the frontline for debugging 
    AEM applications. While AEM 6.5 allows tailing logs via the System Console or SSH into AEM servers, AEM Cloud Service no longer
    provides this access. Instead, Adobe Cloud Manager supports accessing AEMaaCS logs via Adobe I/O CLI with Cloud Manager plugin, 
    which allows for downloading and tailing logs. Additionally, Adobe Cloud Manager allows for the download of logs, by day, via 
    environment's Download Logs action.`,
  url: "/aem/cloud-service/tailing-logs-on-aem-as-cloud-service",
  publishDate: "September 09, 2024",
  modifiedDate: "September 09, 2024",
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const PRIVATE_GITHUB_REPOSITORIES_IN_CLOUD_MANAGER : IArticleItem = {
  title: "Integrating Private GitHub Repositories in AEM Cloud Manager",
  url: "/aem/cloud-service/private-github-repositories-in-cloud-manager",
  publishDate: "October 03, 2024",
  modifiedDate: "October 03, 2024",
  description: ``,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: false
}

export const WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS : IArticleItem = {
  title: "Web Optimized Image Delivery for AEM Custom Components",
  url: "/aem/cloud-service/web-optimized-image-delivery-for-aem-custom-component",
  publishDate: "April 09, 2024",
  modifiedDate: "April 09, 2024",
  description: `Web Optimized Image Delivery feature of AEM as a Cloud service delivers image assets from
    the DAM in WebP format. WebP can reduce the download size of an image by about 25% on average, which
    results in faster page loading.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const UPDATE_JAVA_JDK_V11_FOR_AEM_CLOUD : IArticleItem = {
  title: "Update Java JDK to v11 for AEM Cloud",
  url: "/aem/cloud-service/update-java-jdk-v11-for-aem-cloud",
  publishDate: "August 25, 2024",
  modifiedDate: "August 25, 2024",
  description: `By default, AEM projects are built by Cloud Manager build process using Oracle 8 JDK, but AEM Cloud Service customers are strongly advised 
    to set the JDK version used to execute Maven to 11 for improved performance, security, and support over earlier versions.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const REPOSITORY_MODERNIZER: IArticleItem = {
  title: "Update AEM Archetype using Repository Modernizer",
  description: `AEM Project Archetype is a Maven template creates a minimal, best-practices-based AEM project. Over the years, AEM Project 
    Archetype has been revolutionized with significant advancements, introducing many new features and possibilities into AEM projects. The 
    latest Archetype emphasizing the separation of content and code into discrete subpackages to maintain the distinction between mutable and 
    immutable content. To align existing projects with AEM’s Cloud Service structure, the Repository Modernizer tool can be used to refactor and 
    reorganize project packages, separating content and code into the appropriate packages.`,
  url: "/aem/cloud-service/repository-modernizer-update-archetype",
  publishDate: "August 11, 2024",
  modifiedDate: "August 11, 2024",
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const SETUP_LOCAL_AEM_DEVELOPMENT_ENVIRONMENT : IArticleItem = {
  title: "Setup Local AEM Development Environment",
  url: "/aem/cloud-service/set-up-local-aem-development-environment",
  publishDate: "September 12, 2024",
  modifiedDate: "September 12, 2024",
  description: ``,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: false
}

export const CONTENT_TRANSFER_TOOL : IArticleItem = {
  title: "Content Migration AMS to AEMaaCS",
  url: "/aem/cloud-service/content-migration-ams-to-aemaacs",
  publishDate: "October 03, 2024",
  modifiedDate: "October 03, 2024",
  description: `Content transfer is a crucial step when migrating AEM projects to AEMaaCS, especially with large volumes of content. 
    To streamline this process, Adobe provides Content Transfer Tool (CTT), which can be used to initiate the migration of existing 
    content from a source AEM instance (on-premise or AMS) to the target AEM Cloud Service instance.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const CUSTOM_RUN_MODES_ON_AEMAACS : IArticleItem = {
  title: "Custom Run Modes on AEMaaCS",
  url: "/aem/cloud-service/custom-run-modes-on-aemaacs",
  publishDate: "September 12, 2024",
  modifiedDate: "September 12, 2024",
  description: `In AEM 6.5, you can use arbitrary run modes to apply OSGi configs to specific instances. However, AEMaaCS 
    supports an exact set of run modes.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: false
}

export const SETTING_UP_CUSTOM_DOMAIN_AEM_CLOUD : IArticleItem = {
  title: "Setting Up Custom Domain in AEM Cloud",
  url: "/aem/cloud-service/setting-up-custom-domain-aem-cloud",
  publishDate: "September 18, 2024",
  modifiedDate: "September 18, 2024",
  description: `It is good practice to have a Domain for your site that is memorable for customer and reflects your brand's identity.
    Adding a custom domain name in AEMaaCS requires interaction between DNS service and Cloud Manager. A user must be a member of Business 
    Owner or Deployment Manager role to complete this task.`,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const DEDICATED_IP_FOR_AEMAACS : IArticleItem = {
  title: "Dedicated egress IP using Advanced Networking in AEMaaCS",
  url: "/aem/cloud-service/dedicated-egress-ip-using-advanced-networking",
  publishDate: "October 15, 2024",
  modifiedDate: "October 15, 2024",
  description: ``,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: true
}

export const SETUP_RDE_FOR_AEM_CLOUD : IArticleItem = {
  title: "Setup Rapid Development Environments for AEM Cloud",
  url: "/aem/cloud-service/setup-rapid-development-environment",
  publishDate: "September 30, 2024",
  modifiedDate: "September 30, 2024",
  description: ``,
  topics: [ TOPICS.AEM_CLOUD_SERVICE ],
  active: false
}

export const AEM_CLOUD_SERVICE : IArticleItem[] = [
  BEST_PRACTICE_ANALYSER_FOR_AEMAACS_MIGRATION,
  WEB_OPTIMIZED_IMAGE_DELIVERY_FOR_CUSTOM_COMPONENTS,
  REPOSITORY_MODERNIZER,
  UPDATE_JAVA_JDK_V11_FOR_AEM_CLOUD,
  SETUP_LOCAL_AEM_DEVELOPMENT_ENVIRONMENT,
  ENVIRONMENT_VARIABLES_AND_SECRETS,
  PRIVATE_GITHUB_REPOSITORIES_IN_CLOUD_MANAGER,
  TAILING_LOGS_ON_AEM_AS_CLOUD_SERVICE,
  CONTENT_TRANSFER_TOOL,
  CUSTOM_RUN_MODES_ON_AEMAACS,
  SETTING_UP_CUSTOM_DOMAIN_AEM_CLOUD,
  DEDICATED_IP_FOR_AEMAACS,
  SETUP_RDE_FOR_AEM_CLOUD
].filter(m => m.active);
