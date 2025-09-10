import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/types/breadcrumb";

export const metadata: Metadata = {
  title: "AEM Sites",
  alternates: {
    canonical: "/aem/sites"
  }
};

const articles : IArticleList = {
  articleItems: AEM_SITES,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Sites"
}

export default function Sites() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
