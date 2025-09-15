import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import TOPICS from "@/data/article/topics";

import { DIVIDE_CONQUER } from "@/data/article/cp/divide-conquer";

export const metadata: Metadata = {
  title: TOPICS.DIVIDE_CONQUER.title,
  alternates: {
    canonical: TOPICS.DIVIDE_CONQUER.url
  }
};

const articles : IArticleList = {
  articleItems: DIVIDE_CONQUER,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.DIVIDE_CONQUER.title
}

export default function DivideConquer() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
