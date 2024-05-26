import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DYNAMIC_PROGRAMMING } from "@/lib/data/article/cp/dynamic-programming";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: TOPICS.DYNAMIC_PROGRAMMING.title,
  alternates: {
    canonical: TOPICS.DYNAMIC_PROGRAMMING.url
  }
};

const articles : IArticleList = {
  articleItems: DYNAMIC_PROGRAMMING,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.DYNAMIC_PROGRAMMING.title
}

export default function DynamicProgramming() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
