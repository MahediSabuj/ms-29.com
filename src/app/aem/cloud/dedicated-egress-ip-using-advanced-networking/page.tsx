import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DEDICATED_IP_FOR_AEMAACS as ARTICLE } from "@/lib/data/article/aem/cloud";

import AEMAACS_NEW_NETWORK_INFRASTRUCTURE from "./assets/aemaacs-new-networking-infrastructure.png";
import DEDICATED_EGRESS_IP_ADDRESS from "./assets/dedicated-egress-ip-address.png";
import ENABLE_NETWORK_INFRASTRUCTURE from "./assets/enable-network-infrastructure.png";
import EGRESS_IP_NON_PROXY_HOSTS from "./assets/egress-ip-non-proxy-hosts.png";
import EGRESS_IP_PORT_FORWARDS from "./assets/egress-ip-port-forwards.png";

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
            Advanced Networking is only available in the Production program and is not supported in the Sandbox program.
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
          <section className="pt-4">
            Obtain the dedicated egress IP address by running <code className="code-inline font-bold">dig</code> command from the command line. Note that the same dedicated egress IP address is shared by all environments in the program, and applies to both Author and Publish services.
            <HighlightCode code="dig +short p{programId}.external.adobeaemcloud.com" language="shell" path=""/>
          </section>
          <h2 className="mt-6 text-xl">
            <strong>Enabling Dedicated Egress IP</strong>
          </h2>
          <section>
            Once you have configured an advanced networking option for a program, you must enable it at the environment level to use it.
          </section>
          <section className="pt-4">
            Navigate to Environment where you want to enable the advanced networking configuration. Then select the Advanced network configuration tab of the selected environment and click Enable network infrastructure.
            <Image src={ENABLE_NETWORK_INFRASTRUCTURE} className="border py-2 mt-1" width="600"
                alt="Enable Network Infrastructure"/>
          </section>
          <section className="pt-4">
            Within the <strong>Configure Advanced Networking</strong> dialog box, the <strong>Non-Proxy Hosts</strong> tab allows to define a list of hosts.
            These defined hosts will be routed through the shared IP address range instead of the dedicated egress IP. This approach may be useful since traffic
            egressing through shared IPs may be further optimized.
            <Image src={EGRESS_IP_NON_PROXY_HOSTS} className="border py-2 mt-1" width="600"
                alt="Egress IP Non Proxy Hosts"/>
          </section>
          <section className="pt-4">
            On the <strong>Port forwards</strong> tab, you can define port forwarding rules for any destination ports other than 80/443. For each destination
            host, you must map the intended destination port to a port from 30000 through 30999.
            <div className="pt-4">
              For example, if you want to connect to a PostgreSQL database, you could use 5432 as the source port and 35432 as the destination port. While you may
              choose any port within the allowed range, it is considered best practice to align the destination port with the source port for easier identification.
            </div>
            <Image src={EGRESS_IP_PORT_FORWARDS} className="border py-2 mt-1" width="600"
                alt="Egress IP Port Forwards"/>
          </section>
          <section className="pt-4">
            Click <strong>Save</strong> in the dialog box to apply the advanced networking configuration to the selected environment.
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
