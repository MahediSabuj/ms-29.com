interface ITopic {
  topic: string;
  url: string;
}

interface IArticleItem {
  title: string;
  description?: string;
  topics?: ITopic[];
  url: string;
  publishDate: string;
  modifiedDate: string;
}

export interface IArticleList {
  articleItems: IArticleItem[]  
}
