import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { AEM_UNIVERSAL_EDITOR } from "@/lib/data/article/aem/universal-editor";

export const metadata: Metadata = {
  title: TOPICS.AEM_UNIVERSAL_EDITOR.title,
  alternates: {
    canonical: TOPICS.AEM_UNIVERSAL_EDITOR.url
  }
};

const articles : IArticleList = {
  articleItems: AEM_UNIVERSAL_EDITOR,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AEM_UNIVERSAL_EDITOR.title
}

export default function UniversalEditor() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
