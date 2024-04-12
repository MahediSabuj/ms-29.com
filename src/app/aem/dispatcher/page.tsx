import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

export const metadata: Metadata = {
  title: "AWS Dispatcher",
  alternates: {
    canonical: "/aem/dispatcher"
  }
};

const articles : IArticleList = {
  articleItems: AEM_DISPATCHER,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Dispatcher"
}

export default function Dispatcher() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
