import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { ENVIRONMENT_VARIABLES_AND_SECRETS as ARTICLE } from "@/lib/data/article/aem/sites";

import AEM_CLOUD_MANAGER_ENVIRONMENT_VARIABLE from './assets/aem-cloud-manager-environment-variable.png';

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

export default function EnvironmentVariable() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6 pb-3">
          Environment variables allow AEM code and applications to adapt based on context, enabling different configurations for development, production, or staging
          environments. They can be updated or deleted as needed, no code changes or deployments required. By separating code from configuration, they enhance security
          and keep sensitive information out of version control.
        </section>
        <section className="py-3">
          Environment-specific variables can be created using Cloud Manager and used in OSGi configurations, pom.xml, etc.
        </section>
        <Image src={AEM_CLOUD_MANAGER_ENVIRONMENT_VARIABLE} className="border"
           alt="Custom OSGI Configuration">
        </Image>
      </article>
    </div>
  );
}
