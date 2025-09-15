import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

import { AEM_FORMS } from "@/data/article/aem/forms";

export const metadata: Metadata = {
  title: "AEM Forms",
  alternates: {
    canonical: "/aem/forms"
  }
};

const articles : IArticleList = {
  articleItems: AEM_FORMS
};

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AEM Forms"
}

export default function Forms() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}
