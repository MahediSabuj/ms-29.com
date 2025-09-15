import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { ACS_COMMONS } from "@/data/article/aem/acs-commons";

export const metadata: Metadata = {
  title: TOPICS.ACS_COMMONS.title,
  alternates: {
    canonical: TOPICS.ACS_COMMONS.url
  }
};

const articles : IArticleList = {
  articleItems: ACS_COMMONS,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.ACS_COMMONS.title
}

export default function ACSCommons() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/> 
      <ArticleList {...articles}/>
    </div>
  )  
}
