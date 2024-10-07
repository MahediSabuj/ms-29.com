import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { SETTING_UP_CUSTOM_DOMAIN_AEM_CLOUD as ARTICLE } from "@/lib/data/article/aem/cloud-service";

import NEW_DOMAIN_NAME from './assets/new-domain-name.png';
import DOMAIN_CERTIFICATION_SELECTION from './assets/domain-certification-selection.png';
import DOMAIN_NAME_VERIFICATION from './assets/domain-name-verification.png';
import DOMAIN_NAME_VERIFICATION_ADOBE from './assets/domain-name-verification-adobe.png';
import NEW_SSL_CERTIFICATE from './assets/new-ssl-certificate.png';
import NEW_SSL_CERTIFICATE_ADOBE from './assets/new-ssl-certificate-adobe.png';
import CDN_CONFIGURATION from './assets/cdn-configuration.png';
import CDN_CONFIGURATION_ADOBE from './assets/cdn-configuration-adobe.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD_SERVICE.title,
    url: TOPICS.AEM_CLOUD_SERVICE.url
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
          Adding a custom domain name in AEMaaCS requires interaction between DNS service and Cloud Manager. A user must be a member
          of <strong>Business Owner</strong> or <strong>Deployment Manager</strong> role to complete this task.
        </section>
        <section className="pt-3">
          There are several steps required to install, configure, and verify custom domain names. Get started configuring a new domain name
          in Cloud Manager.
        </section>
        <h2 className="text-xl mt-4">
          <strong>Add Custom Domain</strong>
        </h2>
        <section>
          From the left Navigation panel, Select <strong>Domain Settings</strong> then click <strong>Add Domain</strong>.
          In the Add domain dialog box, enter the custom domain name you are using. Do not include http:// or https:// when entering in your domain.
        </section>
        <Image src={NEW_DOMAIN_NAME} className="border mt-3" height="200"
           alt="New Domain Name">
        </Image>
        <section className="py-3">
          The next step is to verify the domain. In the Verify Domain dialog box, select <strong>What certificate type do you plan on using with this
          domain?</strong> Adobe or Customer Managed Certificate.
        </section>
        <Image src={DOMAIN_CERTIFICATION_SELECTION} className="border mb-3" height="300"
           alt="Domain Name Verification">
        </Image>
        <section className="pb-3">
          Based on your selection, add either a TXT record or CNAME to your DNS service.
        </section>
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <figure>
              <Image className="border py-3" src={DOMAIN_NAME_VERIFICATION_ADOBE}
                 alt="Domain Name Verification for Adobe Managed Certificate">
              </Image>
              <figcaption className="text-center text-sm text-neutral-600">Adobe Managed Certificate</figcaption>
            </figure>
          </div>
          <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
            <figure>
              <Image className=" border py-3" src={DOMAIN_NAME_VERIFICATION}
                 alt="Domain Name Verification for Customer Managed Certificate">
              </Image>
              <figcaption className="text-center text-sm text-neutral-600">Customer Managed Certificate</figcaption>
            </figure>
          </div>
        </div>
        <h2 className="text-xl mt-4">
          <strong>Add SSL Certificate</strong>
        </h2>
        <section className="pb-3">
          From the left Navigation panel, Select <strong>SSL Certificates</strong> then click <strong>Add SSL certificate</strong>.
          In the Add SSL certificate dialog box, based on your use case, do one of the following:
        </section>
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <figure>
              <Image className="border py-3" src={NEW_SSL_CERTIFICATE_ADOBE}
                 alt="SSL Certificate for Adobe Managed Certificate">
              </Image>
            </figure>
          </div>
          <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
            <figure>
              <Image className=" border py-3" src={NEW_SSL_CERTIFICATE}
                 alt="SSL Certificate for Customer Managed Certificate">
              </Image>
            </figure>
          </div>
        </div>
        <section className="pt-3">
          Once the certificate is successfully issued, green check mark will appear in the SSL Certificates table, indicating that the SSL certificate is now active and working.
        </section>
        <h2 className="text-xl mt-4">
          <strong>Add CDN Configurations</strong>
        </h2>
        <section className="pb-3">
          From the left Navigation panel, Select <strong>CDN Configurations</strong> then click <strong>Add</strong>.
          In the Configuration CDN dialog box, based on your use case, do one of the following:
        </section>
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <figure>
              <Image className="border py-3" src={CDN_CONFIGURATION_ADOBE}
                 alt="CDN Configuration for Adobe Managed Certificate">
              </Image>
            </figure>
          </div>
          <div className="md:w-1/2 w-full md:pt-0 pt-4 md:ml-4">
            <figure>
              <Image className=" border py-3" src={CDN_CONFIGURATION}
                 alt="CDN Configuration for Customer Managed Certificate">
              </Image>
            </figure>
          </div>
        </div>
        <section className="pt-3">
          The final step is to point your domain to the target Adobe Cloud CDN in your DNS service. To verify,
          use the command <code className="code-inline background">nslookup dev.aemdemo.com</code>.
        </section>
        <div className="relative overflow-x-auto mt-2">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase border">
              <tr>
                <th scope="col" className="min-w-36 px-4 py-2 border-r">
                  CNAME
                </th>
                <th scope="col" className="px-4 py-2">
                  Custom domain dame point to target
                </th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b border-x">
              <td scope="row" className="px-4 py-2 font-medium border-r whitespace-nowrap">
                dev.aemdemo.com
              </td>
              <td className="px-4 py-2">
                cdn.adobeaemcloud.com
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <section className="pt-3">
          Congratulations! You have successfully configured your custom domain for use with Cloud Manager.
        </section>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
