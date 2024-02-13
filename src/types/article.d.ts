interface IArticleItem {
  title: string;
  description?: string;
  url: string;
  publishDate: string;
  modifiedDate: string;
}

export interface IArticleList {
  articleItems: IArticleItem[]  
}
