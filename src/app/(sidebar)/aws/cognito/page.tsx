import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { AWS_COGNITO } from "@/data/article/aws/cognito";

export const metadata: Metadata = {
  title: TOPICS.AWS_COGNITO.title,
  alternates: {
    canonical: TOPICS.AWS_COGNITO.url,
  }
};

const articles : IArticleList = {
  articleItems: AWS_COGNITO,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AWS_COGNITO.title
}

export default function Cognito() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
