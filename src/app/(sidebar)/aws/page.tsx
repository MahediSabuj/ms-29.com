import { Metadata } from "next";

import ArticleList from "@/components/article-list/article-list";
import { IArticleList } from "@/types/article";
import { PAGE_TYPE } from "@/types/enum/page-type";

import { AWS_COGNITO } from "@/data/article/aws/cognito";
import { AWS_EC2 } from "@/data/article/aws/ec2";
import { AWS_SES } from "@/data/article/aws/ses";
import { AWS_ECS } from "@/data/article/aws/ecs";
import { AWS_S3 } from "@/data/article/aws/s3";
import { IAC } from "@/data/article/devops/iac";

export const metadata: Metadata = {
  title: "AWS Tutorials & Cloud Architecture",
  description: "Master Amazon Web Services with comprehensive tutorials covering serverless computing, container orchestration, API management, and cloud security. From Lambda functions to EC2 deployments, learn AWS best practices for scalable cloud architecture.",
  alternates: {
    canonical: "/aws"
  }
};

const articles: IArticleList = {
  articleItems: [
    ...AWS_COGNITO,
    ...AWS_EC2,
    ...AWS_SES,
    ...AWS_ECS,
    ...AWS_S3,
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
            AWS Tutorials & Cloud Architecture
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Master Amazon Web Services with comprehensive tutorials covering serverless computing, container orchestration, API 
            management, and cloud security. From Lambda functions to EC2 deployments, learn AWS best practices for scalable cloud 
            architecture and DevOps automation.
          </p>
        </div>
      </section>
      <ArticleList {...articles}/>
    </div>
  );
}
