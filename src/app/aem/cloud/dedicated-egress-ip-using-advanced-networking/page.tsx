import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import { DEDICATED_IP_FOR_AEMAACS as ARTICLE } from "@/lib/data/article/aem/cloud";

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

export default function DedicatedIP() {
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
            Due to the organization&apos;s networking policy, certain applications may need to be hosted behind a firewall, accessible only
            through specific whitelisted IP addresses. In terms of AEMaaCS, Cloud Environment IP range is large and dynamic, is not shared
            with customers for whitelisting. To address this issue, Adobe provides a solution to assign a dedicated egress IP address to your
            AEMaaCS environment using Advanced Networking so that you can whitelist this IP address in organization&apos;s firewall.
          </section>
        </div>  
      </article>
    </div>
  );
}
