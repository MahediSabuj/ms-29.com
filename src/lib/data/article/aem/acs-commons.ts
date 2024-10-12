import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const SETTING_UP_ERROR_PAGES : IArticleItem = {
  title: "Setting Up Error Pages using ACS Commons",
  description: `Customizing error pages in AEM is crucial for ensuring seamless user experience and brand consistency. Error pages 
    act as backups when requested resources cannot be found or unexpected errors occur, such as the commonly encountered 404 and 500
    HTTP status codes. By tailoring these pages with informative and user-friendly content, you can ensure users able to navigate smoothly
    and continue browsing the website.`,
  url: "/aem/acs-commons/setup-error-page",
  publishDate: "October 30, 2024",
  modifiedDate: "October 30, 2024",
  topics: [ TOPICS.ACS_COMMONS ],
  active: false
}

export const SETUP_ACS_COMMONS_IN_AEM_PROJECTS : IArticleItem = {
  title: "Setup ACS AEM Commons in AEM Projects",
  description: `ACS AEM Commons is a collection of reusable components and utilities designed to enhance the functionality of AEM.
    It offers a variety of features that help developers tackle common challenges and simplify development tasks through effective solutions.`,
  url: "/aem/acs-commons/setup-acs-commons-in-aem-projects",
  publishDate: "October 12, 2024",
  modifiedDate: "October 12, 2024",
  topics: [ TOPICS.ACS_COMMONS ],
  active: true
}

export const ACS_COMMONS: IArticleItem[] = [
  SETTING_UP_ERROR_PAGES,
  SETUP_ACS_COMMONS_IN_AEM_PROJECTS
].filter(m => m.active);
