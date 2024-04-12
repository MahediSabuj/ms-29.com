import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AEM_SPA } from "@/lib/data/article/aem/spa";

export const metadata: Metadata = {
  title: "AWS SPA",
  alternates: {
    canonical: "/aem/spa"
  }
};

const articles : IArticleList = {
  articleItems: AEM_SPA,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM SPA"
}

export default function SPA() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
