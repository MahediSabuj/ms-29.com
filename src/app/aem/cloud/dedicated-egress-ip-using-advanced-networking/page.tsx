import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DEDICATED_IP_FOR_AEMAACS as ARTICLE } from "@/lib/data/article/aem/cloud";

import AEMAACS_NEW_NETWORK_INFRASTRUCTURE from "./assets/aemaacs-new-networking-infrastructure.png";
import DEDICATED_EGRESS_IP_ADDRESS from "./assets/dedicated-egress-ip-address.png";

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

export default function DedicatedEgressIp() {
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
          <section className="pt-4">
            Advanced Networking is only available in the Production program and is not supported in the Sandbox environment.
            {/*To enable non-standard traffic (on ports other than 80 or 443) from AEMaaCS, you must use the Advanced Networking feature.*/}
          </section>
          <h2 className="mt-4 text-xl">
            <strong>Configuring Advanced Networking</strong>
          </h2>
          <section>
            Configuration of the Advanced Networking option must first be done at the Program level.
          </section>
          <section className="pt-4">
            From your desired program, Navigate to <strong>Services</strong> &gt; <strong>Network Infrastructures</strong> and click on the <strong>Add network infrastructure</strong> button.
            <Image src={AEMAACS_NEW_NETWORK_INFRASTRUCTURE} className="border py-2 mt-1"
                alt="AEMaaCS New Network Infrastructure"/>
          </section>
          <section className="pt-4">
            In the <strong>Add network infrastructure</strong> dialog, select the <strong>Dedicated egress IP address</strong> option, and select the <strong>Region</strong> to create the dedicated egress IP address.
            <Image src={DEDICATED_EGRESS_IP_ADDRESS} className="border py-2 mt-1" width="600"
                alt="Dedicated Egress IP Address"/>
          </section>
          <section className="pt-4">
            To confirm the addition of the dedicated egress IP address, select <strong>Save</strong> in the next step. It may take up to 1 hour for the network infrastructure to be set up.
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
