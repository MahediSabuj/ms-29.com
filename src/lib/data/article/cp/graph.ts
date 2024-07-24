import { IArticleItem } from "@/types/article";
import TOPICS from "@/lib/data/article/topics";

export const DEPTH_FIRST_SEARCH: IArticleItem = {
  title: "Depth First Search",
  description: ``,
  url: "/cp/graph/depth-first-search",
  publishDate: "July 28, 2024",
  modifiedDate: "July 28, 2024",
  topics: [ TOPICS.GRAPH ],
  active: false
}

export const GRAPH: IArticleItem[] = [
  DEPTH_FIRST_SEARCH
].filter(m => m.active);
