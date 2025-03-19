import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT: IArticleItem = {
  title: "AEM Universal Editor in Local Environment",
  description: `Universal Editor is a versatile visual editor that is part of AEM Sites. It enables authors to perform WYSIWYG 
    editing of any headless or headful experience.`,
  url: `${TOPICS.AEM_UNIVERSAL_EDITOR.url}/universal-editor-in-local-environment`,
  publishDate: "March 25, 2025",
  modifiedDate: "March 25, 2025",
  topics: [ TOPICS.AEM_UNIVERSAL_EDITOR ],
  active: false
}

export const AEM_UNIVERSAL_EDITOR: IArticleItem[] = [
  UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT
].filter(m => m.active);
