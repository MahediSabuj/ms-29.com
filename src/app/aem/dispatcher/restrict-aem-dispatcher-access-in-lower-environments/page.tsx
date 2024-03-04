import Link from "next/link";
import { Metadata } from "next";
import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { BASIC_HTTP_AUTHENTICATION as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ip_restriction =
`<If "\${PUBLISH_ALLOWLIST_ENABLED} == 1">
  Include conf.d/allowlists/*_allowlist.rules
</If>`;

const ip_allowlist =
`<RequireAny>
  # Ensure that the AllowIP environment variable is enforced
  Require env AllowIP
  # Define rules for CIDR IP blocks and individual addresses
  Require ip 192.150.16.0/23
  Require ip 120.242.180.10
</RequireAny>`;

export default function BasicAuthentication() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-3">
          AEM&apos;s dispatcher  is not restricted and is publicly accessible by default. While unrestricted access is
          suitable for production environments, it&apos;s recommended to restrict access in lower environments such as
          dev and stage to your organization or specific users. This can be achieved through <Link className="text-blue-600"
          href="#ip-allowlists">IP Allow Lists</Link> or <Link className="text-blue-600" href="#basic-authentication">Basic Authentication</Link>.
        </div>
        <h2 id="ip-allowlists" className="text-xl mt-3 mb-1">
          <strong>Restricting through IP Allow Lists</strong>
        </h2>
        <div className="pb-1">
          To configure IP Allow Lists for AEM Dispatcher, the Require directive can be utilized to allow access based on either
          individual IP addresses or CIDR blocks.
        </div>
        <Highlight code={ip_allowlist} language="apache" path="conf.d / allowlists / 001_client_allowlist.rules"></Highlight>
        <div className="pt-3">
          After configuring the IP allow list, it&apos;s necessary to include the allowlist rules into the site host file
          to restrict access. This can be toggled on or off using a variable such as PUBLISH_ALLOWLIST_ENABLED. In lower environments,
          ensure that value is set to 1, while in production environments, it should be set to 0.
        </div>
        <Highlight code={ip_restriction} language="apache" path="conf.d / aem-demo.vhost"></Highlight>
        <h2 id="basic-authentication" className="text-xl mt-3 mb-1">
          <strong>Restricting through Basic Authentication</strong>
        </h2>
      </article>
    </div>
  );
}
