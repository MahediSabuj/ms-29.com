import { PAGE_TYPE } from "@/types/enum/page-type";

export interface ITopic {
  title: string;
  url: string;
}

export interface IArticleItem {
  title: string;
  description?: string;
  topics?: ITopic[];
  url?: string;
  publishDate: string;
  modifiedDate: string;
  views?: number;
  active?: boolean;
}

export interface Topics {
  [key: string]: ITopic
}

export interface IArticleList {
  articleItems: IArticleItem[];
  pageType?: PAGE_TYPE
}

export default PAGE_TYPE;
