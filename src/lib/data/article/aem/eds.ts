import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING: IArticleItem = {
  title: "Build Website with Edge Delivery Service and Document based Authoring",
  description: `Edge Delivery Services provides different options for authoring content via WYSIWYG authoring, headless authoring, or document based authoring.
    This article solely focuses on document based authoring that enables content creators to use familiar tools like Microsoft Word or Google Docs to write and 
    structure content.`,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/build-website-with-edge-delivery-service-and-document-based-authoring`,
  publishDate: "April 12, 2025",
  modifiedDate: "April 12, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: true
}

export const UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT: IArticleItem = {
  title: "AEM Universal Editor in Local Environment",
  description: `Universal Editor is a versatile visual editor that is part of AEM Sites. It enables authors to perform WYSIWYG 
    editing of any headless or headful experience.`,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/universal-editor-in-local-environment`,
  publishDate: "May 12, 2025",
  modifiedDate: "May 12, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: false
}

export const CUSTOM_BLOCKS_FOR_DOCUMENT_BASED_AUTHORING: IArticleItem = {
  title: "Custom Blocks for Document Based Authoring",
  description: `Document based authoring allows content creators to use familiar tools like Microsoft Word or Google Docs to write and structure content. 
    Although Adobe provides a wide range of pre-built blocks, custom blocks are often required to address specific business requirements. In this article, 
    we will explore how to create custom blocks for document based authoring.`,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/custom-blocks-for-document-based-authoring`,
  publishDate: "April 30, 2025",
  modifiedDate: "April 30, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: false
}

export const UNDERSTANDING_EDGE_DELIVERY_SERVICE_AND_UNIVERSAL_EDITOR: IArticleItem = {
  title: "Understanding Edge Delivery Service and Universal Editor",
  description: ``,
  url: `${TOPICS.EDGE_DELIVERY_SERVICE.url}/understanding-edge-delivery-service-and-universal-editor`,
  publishDate: "May 15, 2025",
  modifiedDate: "May 15, 2025",
  topics: [ TOPICS.EDGE_DELIVERY_SERVICE ],
  active: false
}

export const EDGE_DELIVERY_SERVICE: IArticleItem[] = [
  BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING,
  UNIVERSAL_EDITOR_IN_LOCAL_ENVIRONMENT,
  CUSTOM_BLOCKS_FOR_DOCUMENT_BASED_AUTHORING,
  UNDERSTANDING_EDGE_DELIVERY_SERVICE_AND_UNIVERSAL_EDITOR
].filter(m => m.active);
