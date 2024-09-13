import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SETTING_UP_CUSTOM_DOMAIN_AEM_CLOUD as ARTICLE } from "@/lib/data/article/aem/sites";

import NEW_SSL_CERTIFICATE from './assets/new-ssl-certificate.png';
import NEW_DOMAIN_NAME from './assets/new-domain-name.png';
import DOMAIN_NAME_VERIFICATION from './assets/domain-name-verification.png';
import DNS_RESOLUTION from './assets/dns-resolution.png';

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

export default function DomainConfiguration() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          It is good practice to have a Domain for your site that is memorable for customer and reflects your brand&apos;s identity.
          Adding a custom domain name in AEMaaCS requires interaction between DNS service and Cloud Manager.
        </section>
        <Image src={NEW_SSL_CERTIFICATE} className="border mt-3" height="550"
           alt="New SSL Certificate">
        </Image>
        <Image src={NEW_DOMAIN_NAME} className="border mt-3" height="500"
           alt="New Domain Name">
        </Image>
        <Image src={DOMAIN_NAME_VERIFICATION} className="border mt-3" height="500"
           alt="Domain Name Verification">
        </Image>
        <Image src={DNS_RESOLUTION} className="border mt-3" height="150"
           alt="DNS Resolution">
        </Image>
      </article>
    </div>
  );
}
