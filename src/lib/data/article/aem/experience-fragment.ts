import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const CACHING_EXPERIENCE_FRAGMENTS : IArticleItem = {
  title: "Caching Experience Fragments",
  description: `Experience Fragments (XF) often face cache invalidation issues, where modifying and publishing an XF does not update 
    the pages referencing it because the XF content is cached within each individual page rather than a shared repository. As a result, 
    authors have to manually activate or invalidate each page to see the updated XF content, making the process tedious and impractical.`,
  url: "/aem/experience-fragment/caching-experience-fragments",
  publishDate: "May 28, 2024",
  modifiedDate: "May 28, 2024",
  views: 121,
  topics: [ TOPICS.EXPERIENCE_FRAGMENT ],
  active: true
}

export const EXPERIENCE_FRAGMENT: IArticleItem[] = [
  CACHING_EXPERIENCE_FRAGMENTS
].filter(m => m.active);
