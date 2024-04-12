import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SF_IDENTITY } from "@/lib/data/article/salesforce/identity";

export const metadata: Metadata = {
  title: "Salesforce Identity",
  alternates: {
    canonical: "/salesforce/identity"
  }
};

const articles : IArticleList = {
  articleItems: SF_IDENTITY,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "Salesforce Identity"
}

export default function SalesforceIdentity() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
