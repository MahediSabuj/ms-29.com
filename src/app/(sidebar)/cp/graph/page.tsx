import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { GRAPH } from "@/lib/data/article/cp/graph";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: TOPICS.GRAPH.title,
  alternates: {
    canonical: TOPICS.GRAPH.url
  }
};

const articles : IArticleList = {
  articleItems: GRAPH,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.GRAPH.title
}

export default function Graph() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
