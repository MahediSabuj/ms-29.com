import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";

export const metadata: Metadata = {
  title: "Lightning Web Component",
  alternates: {
    canonical: "/salesforce/lwc"
  }
};

const articles : IArticleList = {
  articleItems: SF_LWC,
  pageType: PAGE_TYPE.APP_PAGE
}

export default function LWC() {
  return (
    <div>
      <ArticleList {...articles}/>
    </div>
  )  
}
