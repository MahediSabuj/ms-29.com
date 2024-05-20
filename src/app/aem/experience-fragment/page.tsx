import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { EXPERIENCE_FRAGMENT } from "@/lib/data/article/aem/experience-fragment";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";

export const metadata: Metadata = {
  title: "Experience Fragment",
  alternates: {
    canonical: "/aem/experience-fragment"
  }
};

const articles : IArticleList = {
  articleItems: EXPERIENCE_FRAGMENT,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "Experience Fragment"
}

export default function ContentFragment() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )
}