import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_METADATA_AEM_ASSETS: IArticleItem = {
  title: "Custom Metadata in AEM Assets",
  description: `Custom metadata that allows authors to define additional properties for digital assets beyond the 
    standard metadata fields. These custom metadata fields in AEM Assets enhance asset management by allowing 
    organizations to tailor information to their specific needs. They facilitate the inclusion of project 
    specific details, campaign tags, and other relevant data, streamlining more effective asset categorization 
    and management.`,
  url: "/aem/assets/custom-metadata-in-aem-assets",
  publishDate: "May 25, 2024",
  modifiedDate: "May 25, 2024",
  topics: [ TOPICS.AEM_ASSETS ],
  active: true
}

export const UNUSED_ASSET_CLEANUP : IArticleItem = {
  title: "Unused AEM Assets Cleanup",
  description: `In asset management, it becomes apparent that certain assets are no longer referenced with any pages. It's recommended 
    to delete these unused images from asset repository. This not only decreases size of AEM instance but also improves search/query performance.`,
  url: "/aem/assets/unused-aem-assets-cleanup",
  publishDate: "April 15, 2025",
  modifiedDate: "April 15, 2025",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const CUSTOM_SEARCH_FACETS_AEM_ASSETS: IArticleItem = {
  title: "Custom Search Facets in AEM Assets",
  description: ``,
  url: "/aem/assets/custom-search-facets-in-aem-assets",
  publishDate: "April 20, 2025",
  modifiedDate: "April 20, 2025",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const AEM_ASSETS: IArticleItem[] = [
  CUSTOM_METADATA_AEM_ASSETS,
  UNUSED_ASSET_CLEANUP,
  CUSTOM_SEARCH_FACETS_AEM_ASSETS
].filter(m => m.active);
