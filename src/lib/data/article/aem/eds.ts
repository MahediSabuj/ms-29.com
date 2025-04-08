import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING: IArticleItem = {
  title: "Build Website with Edge Delivery Service and Document based Authoring",
  description: `Edge Delivery Services provides different options for authoring content via WYSIWYG authoring, headless authoring, or document based authoring.
    This article solely focuses on document based authoring that enables content creators to use familiar tools like Microsoft Word or Google Docs to write and 
    structure content.`,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/build-website-with-edge-delivery-service-and-document-based-authoring`,
  publishDate: "April 15, 2025",
  modifiedDate: "April 15, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: true
}

export const UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT: IArticleItem = {
  title: "AEM Universal Editor in Local Environment",
  description: `Universal Editor is a versatile visual editor that is part of AEM Sites. It enables authors to perform WYSIWYG 
    editing of any headless or headful experience.`,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/universal-editor-in-local-environment`,
  publishDate: "April 25, 2025",
  modifiedDate: "April 25, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: false
}

export const EDGE_DELIVERY_SERVICE: IArticleItem[] = [
  BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING,
  UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT
].filter(m => m.active);
