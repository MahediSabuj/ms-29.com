import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { GOOGLE_ANALYTICS } from "@/lib/data/article/analytics/google";

export const metadata: Metadata = {
  title: TOPICS.GOOGLE_ANALYTICS.title,
  alternates: {
    canonical: TOPICS.GOOGLE_ANALYTICS.url
  }
};

const articles : IArticleList = {
  articleItems: GOOGLE_ANALYTICS,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.GOOGLE_ANALYTICS.title
}

export default function GoogleAnalytics() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
