import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

export const metadata: Metadata = {
  title: "Code Coverage",
  alternates: {
    canonical: "/aem/code-coverage"
  }
};

const articles : IArticleList = {
  articleItems: CODE_COVERAGE,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "Code Coverage"
}

export default function CodeCoverage() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/> 
      <ArticleList {...articles}/>
    </div>
  )  
}
