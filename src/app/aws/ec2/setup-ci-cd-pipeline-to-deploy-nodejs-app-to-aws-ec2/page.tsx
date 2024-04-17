import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SETUP_CI_CD_PIPELINE_TO_DEPLOY_NODEJS_APP_TO_AWS_EC2 as ARTICLE } from "@/lib/data/article/aws/ec2";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AWS EC2",
    url: "/aws/ec2"
  }],
  current: ARTICLE.title
}

export default function SetupCICDPipeline() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            In today&apos;s fast-paced software development environment, Continuous Integration and Continuous Deployment (CI/CD) 
            pipelines have become essential tools. These pipelines streamline the development process, automate testing, and expedite 
            application deployment, making it faster, more reliable, and less error-prone.
          </section>
        </div>  
      </article>
    </div>
  );
}
