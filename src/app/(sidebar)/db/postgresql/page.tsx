import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { POSTGRESQL } from "@/lib/data/article/db/postgresql";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: TOPICS.POSTGRESQL.title,
  alternates: {
    canonical: TOPICS.POSTGRESQL.url
  }
};

const articles : IArticleList = {
  articleItems: POSTGRESQL,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.POSTGRESQL.title
}

export default function PostgreSQL() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
