import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { ADOBE_ANALYTICS } from "@/lib/data/article/analytics/adobe";

export const metadata: Metadata = {
  title: TOPICS.ADOBE_ANALYTICS.title,
  alternates: {
    canonical: TOPICS.ADOBE_ANALYTICS.url
  }
};

const articles : IArticleList = {
  articleItems: ADOBE_ANALYTICS,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.ADOBE_ANALYTICS.title
}

export default function AdobeAnalytics() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
