import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SALESFORCE_HEADLESS_AUTHENTICATION as ARTICLE } from "@/lib/data/article/salesforce/identity";

import HEADLESS_ALLOW_CODE_CREDENTIALS from './assets/headless_allow_code_credentials.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Salesforce Identity",
    url: "/salesforce/identity"
  }],
  current: ARTICLE.title
}

export default function HeadlessAuthentication() {
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
            With headless authentication, backend authentication can be segregated from frontend identity experiences, 
            enhancing faster login experience. It enables each channel to provide unique UI experiences according to their brand guidelines.
          </section>
          <section className="pt-3">
            The Authorization Code and Credentials Flow is the foundation of headless login. Enable this flow at an org-wide level.
            From <strong>Setup</strong>, select <strong>OAuth and OpenID Connect Settings</strong> and turn on <strong>Allow Authorization
            Code and Credentials Flows.</strong>
          </section>
          <Image src={HEADLESS_ALLOW_CODE_CREDENTIALS} className="border mt-2"
            alt="Allow Headless Code Credentilas">
          </Image>
        </div>
      </article>
    </div>
  );
}
