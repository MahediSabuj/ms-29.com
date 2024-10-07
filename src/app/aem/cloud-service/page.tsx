import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { AEM_CLOUD_SERVICE } from "@/lib/data/article/aem/cloud-service";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

export const metadata: Metadata = {
  title: TOPICS.AEM_CLOUD_SERVICE.title,
  alternates: {
    canonical: TOPICS.AEM_CLOUD_SERVICE.url
  }
};

const articles : IArticleList = {
  articleItems: AEM_CLOUD_SERVICE,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: TOPICS.AEM_CLOUD_SERVICE.title
}

export default function AEMCloudService() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/> 
      <ArticleList {...articles}/>
    </div>
  )  
}
