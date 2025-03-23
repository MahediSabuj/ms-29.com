import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { SPRING_BOOT } from "@/lib/data/article/backend/spring-boot";

export const metadata: Metadata = {
  title: TOPICS.SPRING_BOOT.title,
  alternates: {
    canonical: TOPICS.SPRING_BOOT.url,
  }
};

const articles : IArticleList = {
  articleItems: SPRING_BOOT,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.SPRING_BOOT.title
}

export default function SpringBoot() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
