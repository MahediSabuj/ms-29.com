import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { IArticleList } from "@/types/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";

export const metadata: Metadata = {
  title: "AWS EC2",
  alternates: {
    canonical: "/aws/ec2"
  }
};

const articles : IArticleList = {
  articleItems: AWS_EC2,
  pageType: PAGE_TYPE.APP_PAGE
}

const breadcrumbs : IBreadCrumb = {
  items: [],
  current: "AWS EC2"
}

export default function Ec2() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <ArticleList {...articles}/>
    </div>
  )  
}
