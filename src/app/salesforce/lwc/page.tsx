import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { SF_LWC } from "@/lib/data/article/salesforce/lwc";

export const metadata: Metadata = {
  title: TOPICS.SF_LWC.title,
  alternates: {
    canonical: TOPICS.SF_LWC.url
  }
};

const articles : IArticleList = {
  articleItems: SF_LWC,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.SF_LWC.title
}

export default function LWC() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
