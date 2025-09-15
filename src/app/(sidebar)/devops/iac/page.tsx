import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { IAC } from "@/data/article/devops/iac";

export const metadata: Metadata = {
  title: TOPICS.IAC.title,
  alternates: {
    canonical: TOPICS.IAC.url
  }
};

const articles : IArticleList = {
  articleItems: IAC,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.IAC.title
}

export default function Terraform() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
