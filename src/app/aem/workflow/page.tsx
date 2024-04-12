import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";

export const metadata: Metadata = {
  title: "AWS Workflow",
  alternates: {
    canonical: "/aem/workflow"
  }
};

const articles : IArticleList = {
  articleItems: AEM_WORKFLOW,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Workflow"
}

export default function Workflow() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}
