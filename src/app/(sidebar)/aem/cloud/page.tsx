import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_CLOUD } from "@/lib/data/article/aem/cloud";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: TOPICS.AEM_CLOUD.title,
  alternates: {
    canonical: TOPICS.AEM_CLOUD.url
  }
};

const articles : IArticleList = {
  articleItems: AEM_CLOUD,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AEM_CLOUD.title
}

export default function AEMCloudService() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/> 
      <ArticleList {...articles}/>
    </div>
  )  
}
