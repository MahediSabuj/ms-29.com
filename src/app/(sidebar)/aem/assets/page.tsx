import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";

export const metadata: Metadata = {
  title: "AEM Assets",
  alternates: {
    canonical: "/aem/assets"
  }
};

const articles : IArticleList = {
  articleItems: AEM_ASSETS,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Assets"
}

export default function Assets() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}
