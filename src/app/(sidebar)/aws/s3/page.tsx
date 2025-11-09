import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { AWS_S3 } from "@/data/article/aws/s3";

export const metadata: Metadata = {
  title: TOPICS.AWS_S3.title,
  alternates: {
    canonical: TOPICS.AWS_S3.url
  }
};

const articles : IArticleList = {
  articleItems: AWS_S3,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AWS_S3.title
}

export default function S3() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
