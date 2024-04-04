import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CUSTOM_METADATA_AEM_ASSETS: IArticleItem = {
  title: "Custom Metadata in AEM Assets",
  description: ``,
  url: "/aem/assets/custom-metadata-in-aem-assets",
  publishDate: "April 02, 2024",
  modifiedDate: "April 02, 2024",
  topics: [ TOPICS.AEM_ASSETS ],
  active: false
}

export const UNUSED_ASSET_CLEANUP : IArticleItem = {
  title: "Unused AEM Assets Cleanup",
  description: ``,
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
