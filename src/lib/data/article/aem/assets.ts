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
  publishDate: "May 15, 2024",
  modifiedDate: "May 15, 2024",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const UNUSED_ASSET_CLEANUP : IArticleItem = {
  title: "Unused AEM Assets Cleanup",
  description: `In asset management, it becomes apparent that certain assets are no longer referenced with any pages. It's recommended 
    to delete these unused images from the asset repository. This not only decreases the size of the AEM instance but also 
    improves search/query performance.`,
  url: "/aem/assets/unused-aem-assets-cleanup",
  publishDate: "April 15, 2024",
  modifiedDate: "April 15, 2024",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const CUSTOM_SEARCH_FACETS_AEM_ASSETS: IArticleItem = {
  title: "Custom Search Facets in AEM Assets",
  description: ``,
  url: "/aem/assets/custom-search-facets-in-aem-assets",
  publishDate: "April 02, 2024",
  modifiedDate: "April 02, 2024",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const AEM_ASSETS: IArticleItem[] = [
  CUSTOM_METADATA_AEM_ASSETS,
  UNUSED_ASSET_CLEANUP,
  CUSTOM_SEARCH_FACETS_AEM_ASSETS
].filter(m => m.active);
