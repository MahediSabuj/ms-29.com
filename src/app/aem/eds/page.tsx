import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { EDGE_DELIVERY_SERVICE } from "@/lib/data/article/aem/eds";

export const metadata: Metadata = {
  title: TOPICS.EDGE_DELIVERY_SERVICE.title,
  alternates: {
    canonical: TOPICS.EDGE_DELIVERY_SERVICE.url
  }
};

const articles : IArticleList = {
  articleItems: EDGE_DELIVERY_SERVICE,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.EDGE_DELIVERY_SERVICE.title
}

export default function EdgeDeliverService() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
