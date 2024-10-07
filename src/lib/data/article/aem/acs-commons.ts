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

export const ACS_COMMONS: IArticleItem[] = [
  SETTING_UP_ERROR_PAGES
].filter(m => m.active);
