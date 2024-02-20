import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CONTENT_FRAGMENT_PROGRAMMATICALLY: IArticleItem = {
  title: "Create Content Fragment Programmatically",
  description: `Creating a content fragment programmatically requires setting up a system user with Read 
      permission for the content fragment model and Read, Modify, Create permissions for the asset folder where
      the content fragment will be stored. Additionally, ensure the content fragment model and asset folder are
      created for saving the content fragment.`,
  url: "/aem/content-fragment/create-content-fragment-programmatically",
  publishDate: "February 16, 2024",
  modifiedDate: "February 16, 2024",
  topics: [ TOPICS.CONTENT_FRAGMENT ]
}

export const CONTENT_FRAGMENT: IArticleItem[] = [
  CONTENT_FRAGMENT_PROGRAMMATICALLY
]
