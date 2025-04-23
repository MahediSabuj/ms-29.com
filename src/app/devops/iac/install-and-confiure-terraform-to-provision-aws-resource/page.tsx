import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import HighlightCode from "@/components/highlight/highlight";

import {
  INSTALL_AND_CONFIGURE_TERRAFORM as ARTICLE
} from "@/lib/data/article/devops/iac";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.IAC.title,
    url: TOPICS.IAC.url
  }],
  current: ARTICLE.title
}

export default function TerraformSetup() {
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
            Infrastructure as Code (IaC) is changing how teams build and manage cloud infrastructure by turning manual processes into code. Terraform, developed by HashiCorp,
            is one of the most popular tools in the IaC space. It allows you to define and provision infrastructure using a declarative configuration language and supports a
            wide range of cloud providers, including AWS, Azure, and Google Cloud.
          </section>
          <h2 className="text-xl mt-4" id="salesforce-cli">
            <strong>Install Terraform</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                Install from <Link href="https://developer.hashicorp.com/terraform/install" className="text-blue-600" target="_blank">
                https://developer.hashicorp.com/terraform/install</Link>.
              </li>
              <li>
                Verify the installation using following command:
                <HighlightCode code="terraform -v" language="shell" path=""/>
              </li>
            </ul>
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
