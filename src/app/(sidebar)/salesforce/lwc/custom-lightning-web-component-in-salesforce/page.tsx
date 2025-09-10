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
          <h2 className="text-xl mt-4">
            <strong>Pre-requisites</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <Link href="/salesforce/lwc/setup-lwc-local-development-environment#salesforce-cli" target="_blank" className="text-blue-600">Salesforce CLI</Link>
              </li>
              <li>
                <Link href="/salesforce/lwc/setup-lwc-local-development-environment#salesforce-extension-pack" target="_blank" className="text-blue-600">Salesforce Extension Pack (Extended)</Link>
              </li>
            </ul>
          </section>
          <section className="pt-4">
            From <strong>Visual Studio Code</strong>, press <strong>Command + Shift + P</strong> on macOS or <strong>Ctrl + Shift + P</strong> on Windows or Linux to reveal the command palette.
            In command palette, type <code className="code-inline background">sdfx: Create LWC</code> and select <strong>SDFX: Create Lightning Web Component</strong>. Boilerplate code will
            be created in the <code className="code-inline background">force-app/main/default/lwc</code> folder.
          </section>
        </div>
      </article>
    </div>
  );
}
