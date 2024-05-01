import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SALESFORCE_HEADLESS_AUTHENTICATION as ARTICLE } from "@/lib/data/article/salesforce/identity";

import HEADLESS_ALLOW_CODE_CREDENTIALS from './assets/Headless_Allow_Code_Credentials.webp';
import CONNECTED_APP_SETUP from './assets/Connected_App_Setup.webp';
import CONNECTED_APP_AUTH_POLICIES from './assets/Connected_App_Auth_Policies.webp';

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
          <section className="pt-4">
            To establish a connecttion between an external application and Salesforce, it&apos;s essential to setup a Connected App.
            During configuring the Connected App for headless authentication, ensure to activate the Authorization Code and Credentials 
            Flow at the app level. To begin, navigate to <strong>App Manager</strong> and select <strong>New Connected App</strong>.
          </section>
          <Image src={CONNECTED_APP_SETUP} className="border mt-2"
            alt="Connected App for Headless Setup">
          </Image>
          <section className="pt-4">
            In a standard OAuth flow, users often see an approval screen where they confirm that an app is allowed to access their Salesforce 
            data. With headless identity flows, you don&apos;t want to show users a Salesforce approval screen. To preapprove access, configure 
            OAuth policies on your connected app. From <strong>Edit Policies</strong>, under <strong>OAuth Policies</strong>, set the Permitted 
            Users policy to <strong>Admin approved users are pre-authorized</strong>.
          </section>
          <Image src={CONNECTED_APP_AUTH_POLICIES} className="border mt-2"
            alt="Connected App Auth Policies">
          </Image>
        </div>
      </article>
    </div>
  );
}
