import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { CODING_ASSISTANT } from "@/data/article/ai/coding-assistant";

export const metadata: Metadata = {
  title: TOPICS.CODING_ASSISTANT.title,
  alternates: {
    canonical: TOPICS.CODING_ASSISTANT.url
  }
};

const articles : IArticleList = {
  articleItems: CODING_ASSISTANT,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.CODING_ASSISTANT.title
}

export default function CodingAssistant() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
