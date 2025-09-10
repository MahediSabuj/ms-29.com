import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { DEEP_LEARNING } from "@/lib/data/article/ai/deep-learning";

export const metadata: Metadata = {
  title: TOPICS.DEEP_LEARNING.title,
  alternates: {
    canonical: TOPICS.DEEP_LEARNING.url
  }
};

const articles : IArticleList = {
  articleItems: DEEP_LEARNING,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.DEEP_LEARNING.title
}

export default function LLM() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
