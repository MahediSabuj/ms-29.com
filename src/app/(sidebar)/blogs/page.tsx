import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";

import { SPRING_BOOT } from "@/data/article/backend/spring-boot"
import { AEM_SITES } from "@/data/article/aem/sites";
import { AEM_ASSETS } from "@/data/article/aem/assets";
import { AEM_FORMS } from "@/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/data/article/aem/content-fragment";
import { AEM_SPA } from "@/data/article/aem/spa";
import { CODE_COVERAGE } from "@/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/data/article/aem/dispatcher";
import { AEM_WORKFLOW } from "@/data/article/aem/workflow";
import { EXPERIENCE_FRAGMENT } from "@/data/article/aem/experience-fragment";
import { AEM_CLOUD } from "@/data/article/aem/cloud";
import { ACS_COMMONS } from "@/data/article/aem/acs-commons";
import { EDGE_DELIVERY_SERVICE } from "@/data/article/aem/eds";
import { AWS_COGNITO } from "@/data/article/aws/cognito";
import { AWS_EC2 } from "@/data/article/aws/ec2";
import { AWS_SES } from "@/data/article/aws/ses";
import { AWS_ECS } from "@/data/article/aws/ecs";
import { AWS_S3 } from "@/data/article/aws/s3";
import { DEEP_LEARNING } from "@/data/article/ai/deep-learning";
import { CODING_ASSISTANT } from "@/data/article/ai/coding-assistant";
import { SF_LWC } from "@/data/article/salesforce/lwc";
import { SF_IDENTITY } from "@/data/article/salesforce/identity";
import { DYNAMIC_PROGRAMMING } from "@/data/article/cp/dynamic-programming";
import { GRAPH } from "@/data/article/cp/graph";
import { DIVIDE_CONQUER } from "@/data/article/cp/divide-conquer";
import { POSTGRESQL } from "@/data/article/db/postgresql";
import { ADOBE_ANALYTICS } from "@/data/article/analytics/adobe";
import { GOOGLE_ANALYTICS } from "@/data/article/analytics/google";
import { IAC } from "@/data/article/devops/iac";
import { K8S } from "@/data/article/devops/k8s";

export const metadata: Metadata = {
  title: "Technical Articles & Tutorials",
  description: "Browse our comprehensive collection of technical articles covering AEM, AWS, Spring Boot, competitive programming, and more. Expert insights and practical tutorials for developers.",
  alternates: {
    canonical: "/blogs"
  }
};

const articles: IArticleList = {
  articleItems: [
    ...SPRING_BOOT,
    ...AEM_SITES,
    ...AEM_ASSETS,
    ...AEM_FORMS,
    ...CONTENT_FRAGMENT,
    ...AEM_SPA,
    ...CODE_COVERAGE,
    ...AEM_DISPATCHER,
    ...AEM_WORKFLOW,
    ...EXPERIENCE_FRAGMENT,
    ...AEM_CLOUD,
    ...ACS_COMMONS,
    ...EDGE_DELIVERY_SERVICE,
    ...AWS_COGNITO,
    ...AWS_EC2,
    ...AWS_SES,
    ...AWS_ECS,
    ...AWS_S3,
    ...DEEP_LEARNING,
    ...CODING_ASSISTANT,
    ...SF_LWC,
    ...SF_IDENTITY,
    ...DYNAMIC_PROGRAMMING,
    ...GRAPH,
    ...DIVIDE_CONQUER,
    ...POSTGRESQL,
    ...ADOBE_ANALYTICS,
    ...GOOGLE_ANALYTICS,
    ...IAC,
    ...K8S
  ],
  pageType: PAGE_TYPE.HOME_PAGE
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Articles & Tutorials
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover in-depth guides, best practices, and expert insights across modern technology stacks.
            From enterprise solutions to competitive programming, explore comprehensive tutorials designed
            for developers, architects, and technology enthusiasts.
          </p>
        </div>
      </section>
      <ArticleList {...articles}/>
    </div>
  );
}