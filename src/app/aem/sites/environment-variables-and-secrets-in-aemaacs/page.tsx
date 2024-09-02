import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { ENVIRONMENT_VARIABLES_AND_SECRETS as ARTICLE } from "@/lib/data/article/aem/sites";

import AEM_CLOUD_MANAGER_ENVIRONMENT_VARIABLE from './assets/aem-cloud-manager-environment-variable.png';
import Link from "next/link";

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
          To create Environment Variables in Cloud Manager, navigate to the Side Navigation bar, select Environments, and choose the desired environment. In the environment
          details, go to the Configuration tab and click Add to open the Environment Configuration dialog.
        </section>
        <Image src={AEM_CLOUD_MANAGER_ENVIRONMENT_VARIABLE} className="border"
           alt="Custom OSGI Configuration">
        </Image>
        <section className="pt-3">
          While creating the variables, you can specify the service to which the variables apply, such as Author, Publish, Preview, or All, and choose their type, either Variable or Secret.
          It&apos;s recommend to add multiple variables at once in the Environment Configuration dialog to update the environment in a single step. Otherwise, each save will trigger an environment update.
          Note that when editing secrets, you can only update their values; viewing them is not possible.
        </section>
        <section className="pt-3">
          Once environment variables are created, you can use them in your OSGi configurations. The values will be automatically pulled from Cloud Manager based on the environment you are in.
          To learn how to use environment variables in OSGi configs, refer to this <Link target="_blank" className="text-blue-600" href="/aem/sites/custom-osgi-configuration-in-aem#aemaacs-osgi-config">link</Link>.
        </section>
        <section className="pt-3">
          You can use environment variables in <code className="code-inline">pom.xml</code> as well. For example, passwords needn't be hard coded and you can access environment variables and secrets via XML like <code className="code-inline">${"{env.VARIABLE_NAME}"}</code>.
        </section>
        <section className="pt-3">
          <strong>Important Note</strong>: In Cloud Manager, the limit is 250 environment variables per environment. To stay within this limit, consider using inline values in OSGi configs where possible.
        </section>
      </article>
    </div>
  );
}
