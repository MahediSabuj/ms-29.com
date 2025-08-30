import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";

import { SPRING_BOOT } from "@/lib/data/article/backend/spring-boot"
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";
import { EXPERIENCE_FRAGMENT } from "@/lib/data/article/aem/experience-fragment";
import { AEM_CLOUD } from "@/lib/data/article/aem/cloud";
import { ACS_COMMONS } from "@/lib/data/article/aem/acs-commons";
import { EDGE_DELIVERY_SERVICE } from "@/lib/data/article/aem/eds";
import { AWS_COGNITO } from "@/lib/data/article/aws/cognito";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { AWS_SES } from "@/lib/data/article/aws/ses";
import { AWS_ECS } from "@/lib/data/article/aws/ecs";
import { DEEP_LEARNING } from "@/lib/data/article/ai/deep-learning";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";
import { SF_IDENTITY } from "@/lib/data/article/salesforce/identity";
import { DYNAMIC_PROGRAMMING } from "@/lib/data/article/cp/dynamic-programming";
import { GRAPH } from "@/lib/data/article/cp/graph";
import { DIVIDE_CONQUER } from "@/lib/data/article/cp/divide-conquer";
import { POSTGRESQL } from "@/lib/data/article/db/postgresql";
import { ADOBE_ANALYTICS } from "@/lib/data/article/analytics/adobe";
import { GOOGLE_ANALYTICS } from "@/lib/data/article/analytics/google";
import { IAC } from "@/lib/data/article/devops/iac";

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
    ...DEEP_LEARNING,
    ...SF_LWC,
    ...SF_IDENTITY,
    ...DYNAMIC_PROGRAMMING,
    ...GRAPH,
    ...DIVIDE_CONQUER,
    ...POSTGRESQL,
    ...ADOBE_ANALYTICS,
    ...GOOGLE_ANALYTICS,
    ...IAC
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