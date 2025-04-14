import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { ENVIRONMENT_VARIABLES_AND_SECRETS as ARTICLE } from "@/lib/data/article/aem/cloud";

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
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
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
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <section className="pt-6">
          Environment variables allow AEM code and applications to adapt based on context, enabling different configurations for development, production, or staging
          environments. They can be updated or deleted as needed, no code changes or deployments required. By separating code from configuration, they enhance security
          and keep sensitive information out of version control.
        </section>
        <section className="py-3">
          Environment-specific variables can be created using Cloud Manager and utilized in OSGi configurations, pom.xml, etc. These environment variables can be categorized
          as either environment-specific values or environment secrets. Environment-specific values provide a way to store non-sensitive information, while Secrets are used to
          store sensitive information such as passwords and API keys.
        </section>
        <section className="pb-3">
          To create Environment Variables in Cloud Manager, navigate to the left Navigation panel, select <strong>Environments</strong>, and choose the desired environment. In the environment
          details, go to the <strong>Configuration</strong> tab and click Add to open the Environment Configuration dialog.
        </section>
        <Image src={AEM_CLOUD_MANAGER_ENVIRONMENT_VARIABLE} className="border"
           alt="Custom OSGI Configuration">
        </Image>
        <section className="pt-3">
          While creating the variables, you can specify the service to which the variables apply, such as <strong>Author</strong>, <strong>Publish</strong>, <strong>Preview</strong>, or <strong>All</strong>, and
          choose their type, either <strong>Variable</strong> or <strong>Secret</strong>. It&apos;s recommend to add multiple variables at once in the <strong>Environment Configuration</strong> dialog to update
          the environment in a single step. Otherwise, each save will trigger an environment update. Note that when editing secrets, you can only update their values; viewing them is not possible.
        </section>
        <h2 className="text-xl mt-4">
          <strong>How to Use</strong>
        </h2>
        <section>
          Once environment variables are created, you can use them in several places.
          <ul className="list-disc ml-6 pt-1 pl-2.5 pb-1">
            <li><strong>OSGi Configs:</strong> Both regular environment variables and secrets can be used in OSGi configurations. To learn how to use environment variables in OSGi configs, refer to this <Link target="_blank" className="text-blue-600" href="/aem/sites/custom-osgi-configuration#aemaacs-osgi-config">link</Link>.</li>
            <li><strong><code className="code-inline">pom.xml</code></strong>: You can access environment variables and secrets in XML using <code className="code-inline">${"{env.VARIABLE_NAME}"}</code>. For example, instead of hardcoding passwords, you can use environment variables.</li>
            <li><strong>Dispatcher:</strong> Only regular environment variables can be used with the dispatcher. Secrets cannot be used. However environment variables cannot be used in <code className="code-inline">IfDefine</code> directives.</li>
          </ul>
          These environment-specific values will be automatically pulled from Cloud Manager based on the environment you are in.
        </section>
        <section className="pt-3">
          <strong>Important Note</strong>: In Cloud Manager, the limit is 200 environment variables per environment. To stay within this limit, consider using inline values in OSGi configs where possible.
        </section>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
