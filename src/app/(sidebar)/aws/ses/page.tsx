import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/data/article/topics";

import { AWS_SES } from "@/data/article/aws/ses";

export const metadata: Metadata = {
  title: TOPICS.AWS_SES.title,
  alternates: {
    canonical: TOPICS.AWS_SES.url,
  }
};

const articles : IArticleList = {
  articleItems: AWS_SES,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AWS_SES.title
}

export default function SES() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
