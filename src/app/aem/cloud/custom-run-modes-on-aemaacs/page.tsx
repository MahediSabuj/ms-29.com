import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { CUSTOM_RUN_MODES_ON_AEMAACS as ARTICLE } from "@/lib/data/article/aem/cloud";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const OSGI_CONFIG = `{
  "app.name": "aem-demo",
  "api.endpoint": "https://dev.google.com",
  "client.id": "8TfyfkUAB481AxOfn4UrqIyWIStKrTm8Jl",
  "client.secret": "8TxmpkXAPRtLiOHIFHzjx4uKHlm1soAvO7I"
}`;

const OSGI_CONFIG_CLOUD = `{
  "app.name": "aem-demo",
  "api.endpoint": "$[env:API_ENDPOINT]",
  "client.id": "$[secret:CLIENT_ID]",
  "client.secret": "$[secret:CLIENT_SECRET]"
}`;

const ENVIRONMENT_VARIABLES = `String envName = System.getenv("AEM_ENV_NAME");`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function CustomRunModes() {
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
            In AEM 6.5, you can define arbitrary run modes to apply OSGi configurations to specific instances. However, in AEMaaCS, the platform supports a fixed
            set of predefined run modes. While custom run modes cannot be created in AEMaaCS, you can still achieve similar functionality using alternative approaches.
            In this article, we will explore the changes in run modes in AEMaaCS and discuss how to adapt your custom run modes for use in AEMaaCS.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Changes in Run Modes on AEMaaCS</strong>
          </h2>
          <section>
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <strong>Predefined Run Modes:</strong> Environments are standardized with predefined set: <strong>RDE</strong>, <strong>Dev</strong>, <strong>Stage</strong>, and <strong>Prod</strong>.
                Each environment consists of <strong>Author</strong>, <strong>Publish</strong>, and <strong>Preview</strong> service.
              </li>
              <li>
                <strong>SlingSettingsService:</strong> The <code className="code-inline">getRunModes()</code> method returns either &quot;author&quot; or &quot;publish&quot;, depending on the instance type.
                However, it does not indicate the specific environment, such as Dev, Stage, or Prod.
              </li>
              <li>
                <strong>Preview Service: </strong> AEMaaCS provides Preview service, allows previewing the final website experience before content is published and made publicly available.
              </li>
            </ul>
          </section>
          <section className="pt-4">
            Each program can have only one production environment, but multiple non-production environments. If an additional
            environment is required for UAT, you can create another DEV environment. However, both DEV environments will have the same
            run mode, <strong>dev</strong>.
          </section>
          <section className="pt-4">
            As both DEV environments share the same run mode, questions may arise on how to manage configurations for each DEV environment.
            For OSGi config perspective, we will have same configuration file for both DEV environments. Consider below example:
            <Highlight code={OSGI_CONFIG} language="json" path="config.pusbish.dev / com.aem.demo.core.services.impl.AppConfigServiceImpl.cfg.json"/>
            <div className="pt-2">
              Based on above configuration, most likely <code className="code-inline">app.name</code> will be same for both DEV environments. Others are supposed to be different for each DEV environment.
            </div>
          </section>
          <section className="pt-4">
            <Link href="/aem/cloud/environment-variables-and-secrets-in-aemaacs" className="text-blue-600">Environment Variables and Secrets</Link> come into play to setup environment-specific configurations.
            You can set environment variables at the environment level in Cloud Manager and use them in your OSGi config to differentiate between environments.
            <Highlight code={OSGI_CONFIG_CLOUD} language="json" path="config.pusbish.dev / com.aem.demo.core.services.impl.AppConfigServiceImpl.cfg.json"/>
            <div className="pt-2">
              Now, <code className="code-inline">api.endpoint</code>, <code className="code-inline">client.id</code>, and <code className="code-inline">client.secret</code> will be retrieved from environment variables
              and loaded dynamically based on the environment in which the instance is running.
            </div>
          </section>
          <section className="pt-4">
            <code className="text-lg">SlingSettingsService</code> is used to determine the run mode of the instance. In AEM 6.5, you can define custom run modes e.g., <code className="code-inline">uat</code> and <code className="code-inline">getRunModes()</code> will
            return both <code className="code-inline">author</code> and <code className="code-inline">uat</code> as run mode. However, in AEMaaCS, you will get the service only either &quot;author&quot; or &quot;publish&quot;, no information about environment.
          </section>
          <section className="pt-4">
            In case you need to understand the environment in which the instance is running, you can use <strong>Environment Variables</strong> to differentiate between environments.
            Create a new environment variable in Cloud Manager for each environment and use it in your code to determine the environment.
            <Highlight code={ENVIRONMENT_VARIABLES} language="java" path="Environment.java"/>
            <div className="pt-2">
              Depending on your project requirement, you can use the environment variable as a property in OSGi configuration as well.
            </div>
          </section>
          <h2 className="text-xl mt-4">
            Run Modes for Preview Service
          </h2>
          <section>
            AEMaaCS introduces Preview service but does not provide a separate run mode for it. Both Publish and Preview services share the same run mode, &quot;publish&quot;.
            Since separate run mode is not provided, environment variables can be used to distinguish between them by defining dedicated variables for each service.
          </section>
          <section className="pt-6">
            Hope, this article helps you to understand the changes in run modes in AEMaaCS and how to manage configurations for different environments.
            Have any questions or feedback? Feel free to share in the comments below.
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
