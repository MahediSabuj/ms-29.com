import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { AEM_DEPLOYMENT_MODELS as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function DeploymentModels() {
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
            AEM offers three deployment models: On-Premise, Managed Service & AEM as a Cloud Service. Each designed to meet different organizational needs, technical 
            requirements, and strategic objectives. Understanding these options is crucial for making an informed decision that aligns with your business goals, technical 
            capabilities, and budget constraints.
          </section>
          {/* <section className="mt-4">
            In this post, we&apos;ll explore each deployment model in detail by covering <strong>Shared Responsibilities between Adobe and Customer, Key Benefits, Ideal Use 
            Cases</strong>, and <strong>Potential Drawbacks</strong>. To wrap up, we&apos;ll include a <strong>Comprehensive Comparison Table</strong> to support your decision making for your organization.
          </section> */}
          <h2 className="text-xl mt-4">
            <strong>AEM On-Premise</strong>
          </h2>
          <section>
            In an On-Premise setup, AEM is deployed within a customer-managed environment, which could be corporate data center or public cloud infrastructure such as AWS, Azure or GCP.
          </section>
          <section className="mt-4">  
            Adobe provides the AEM software package (e.g., the AEM JAR file) along with the necessary license file. The customer is responsible for setting up, configuring, and maintaining 
            the entire environment. This includes provisioning infrastructure, configuring networking and security and managing the deployment process using tools like Jenkins, GitHub Actions or other CI/CD pipelines.
          </section>
          <section className="mt-4">
            This model provides the highest level of control and customization, allowing organizations to tailor the environment to their specific needs. 
            It is ideal for organizations that require a high degree of control over their infrastructure, have specific security requirements, or need to maintain compliance with local regulations.
          </section>
          {/* <h3 className="text-lg mt-4">
            <strong>Key Benefits</strong>
          </h3> */}
          <h2 className="text-xl mt-4">
            <strong>AEM Managed Service</strong>
          </h2>
          <section>
            With Managed Service, AEM is hosted on Adobe’s cloud infrastructure. Adobe is responsible for provisioning and managing the infrastructure.
          </section>
          <section className="mt-4">  
            Adobe provides Cloud Manager as the recommended CI/CD pipeline for AMS, but customers can still deploy their code using other tools such as Azure Pipelines or Jenkins.
          </section>
          <h2 className="text-xl mt-4">
            <strong>AEM as a Cloud Service</strong>
          </h2>
          <section>
            AEM as a Cloud Service is Adobe’s fully cloud-native platform. Adobe manages the entire infrastructure, including auto-scaling, updates, performance optimization, and security.
          </section>
          <section className="mt-4">
            The customer focuses solely on content and experience delivery, application development, and front-end customization. CI/CD pipelines are integrated through Adobe Cloud Manager. Updates are rolled out continuously by Adobe without customer intervention.
          </section>
        </div>  
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
