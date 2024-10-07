import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AWS_SES } from "@/lib/data/article/aws/ses";

export const metadata: Metadata = {
  title: "AWS SES",
  alternates: {
    canonical: "/aws/ses"
  }
};

const articles : IArticleList = {
  articleItems: AWS_SES,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AWS SES"
}

export default function SES() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
