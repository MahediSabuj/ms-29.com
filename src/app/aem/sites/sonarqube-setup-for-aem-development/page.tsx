import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function SonarQubeSetup() {
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
            In AEM development, prioritizing code quality is essential. Even during deployment via Cloud Manager, it&apos;s crucial to 
            meet specific metrics for security, reliability, maintainability, and code coverage. SonarQube enables continuous code inspections, 
            identifying issues early in the development lifecycle that could affect these metrics. Though integration, developers can ensure the 
            maintenance of clean, efficient, and secure code throughout the AEM development process.
          </section>
        </div>  
      </article>
    </div>
  );
}
