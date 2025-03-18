import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { AWS_ECS } from "@/lib/data/article/aws/ecs";

export const metadata: Metadata = {
  title: TOPICS.AWS_ECS.title,
  alternates: {
    canonical: TOPICS.AWS_ECS.url
  }
};

const articles : IArticleList = {
  articleItems: AWS_ECS,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AWS_ECS.title
}

export default function ECS() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
