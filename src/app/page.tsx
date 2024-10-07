import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";
import { EXPERIENCE_FRAGMENT } from "@/lib/data/article/aem/experience-fragment";
import { AEM_CLOUD_SERVICE } from "@/lib/data/article/aem/cloud-service";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { AWS_SES } from "@/lib/data/article/aws/ses";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";
import { SF_IDENTITY } from "@/lib/data/article/salesforce/identity";
import { DYNAMIC_PROGRAMMING } from "@/lib/data/article/cp/dynamic-programming";
import { GRAPH } from "@/lib/data/article/cp/graph";
import { DIVIDE_CONQUER } from "@/lib/data/article/cp/divide-conquer";
import { POSTGRESQL } from "@/lib/data/article/db/postgresql";

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  }
};

const articles : IArticleList = {
  articleItems: [
    ...AEM_SITES,
    ...AEM_ASSETS,
    ...AEM_FORMS,
    ...CONTENT_FRAGMENT,
    ...AEM_SPA,
    ...CODE_COVERAGE,
    ...AEM_DISPATCHER,
    ...AEM_WORKFLOW,
    ...EXPERIENCE_FRAGMENT,
    ...AEM_CLOUD_SERVICE,
    ...AWS_EC2,
    ...AWS_SES,
    ...SF_LWC,
    ...SF_IDENTITY,
    ...DYNAMIC_PROGRAMMING,
    ...GRAPH,
    ...DIVIDE_CONQUER,
    ...POSTGRESQL
  ],
  pageType: PAGE_TYPE.HOME_PAGE
}

export default function Home() {
  return (
      <ArticleList {...articles}/>
  );
}
