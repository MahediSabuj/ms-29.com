import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { CUSTOM_LIGHTNING_WEB_COMPONENT as ARTICLE } from "@/lib/data/article/salesforce/lwc";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title:TOPICS.SF_LWC.title,
    url: TOPICS.SF_LWC.url
  }],
  current: ARTICLE.title
}

export default function LightningWebComponent() {
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
            Lightning Web Components is a modern web programming model introduced by Salesforce to build fast, reusable
            and lightweight UI components for the Salesforce platform. Although Salesforce provides a wide range of <Link href="https://developer.salesforce.com/docs/component-library/overview/components" target="_blank" className="text-blue-600">standard
            Lightning Web Components</Link>, custom components are often required to address specific business requirements.
          </section>
        </div>
      </article>
    </div>
  );
}
