import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import Reference from "@/components/reference/reference";
import HighlightCode from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";

import { VERIFY_IDENTITIES_IN_AWS_SES as ARTICLE } from "@/lib/data/article/aws/ses";

import AWS_SES_EMAIL_IDENTITY from "./assets/aws-ses-email-identity.png";
import AWS_SES_DOMAIN_IDENTITY from "./assets/aws-ses-domain-identity.png";
import AWS_SES_MAIL_FROM_DOMAIN from "./assets/aws-ses-mail-from-domain.png";
import AWS_SES_DOMAIN_VERIFICATION from "./assets/aws-ses-domain-verification.png";
import AWS_SES_PRODUCTION_ACCESS from "./assets/aws-ses-production-access.png";
import AWS_SES_BYO_DKIM_CONFIG from "./assets/aws-ses-byo-dkim-config.png";
import AWS_SES_BYO_DKIM_DNS_RECORD from "./assets/aws-ses-byo-dkim-dns-record.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_SES.title,
    url: TOPICS.AWS_SES.url
  }],
  current: ARTICLE.title
}

export default function VerifyIdentities() {
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
              In AWS SES, verified identity is a domain or email address that you use to send email. Before sending emails with Amazon SES,
              you must create and verify each identity used as the &quot;From&quot; address. Identity verification ensures ownership and prevents unauthorized use.
            </section>
            <section className="pt-4">
              If your account is in the Amazon SES sandbox, you must verify all recipient email addresses before sending emails. For Product Access Request, you must
              verify <Link href="#domain-verification" className="text-blue-600">Domain based Identity</Link>.
            </section>
            <h2 className="text-xl mt-4">
              <strong>Email Address based Identity</strong>
            </h2>
            <section>
              Email based Identity verification is primarily used for testing, especially when you don&apos;t own a domain. Each sender email address
              must be verified individually before use. Follow the steps below to verify an email address:
              <ul className="list-disc ml-6 pt-1 pl-2.5">
                <li>Navigate to <Link className="text-blue-600" target="_blank" href="https://console.aws.amazon.com/ses">Amazon SES</Link> console.</li>
                <li>From the navigation pane, choose <strong>Identities</strong>.</li>
                <li>Click on <strong>Create Identity</strong>.</li>
                <li>Under <strong>Identity details</strong>, choose <strong>Email address</strong> as the identity type.</li>
                <li>
                  For <strong>Email address</strong>, enter the email address that you want to use. The email address must be an address that&apos;s able to receive mail and you have access.
                  <Image src={AWS_SES_EMAIL_IDENTITY} className="border my-2"
                      alt="AWS SES Email Identity">
                  </Image>
                </li>
                <li>
                  Click on <strong>Create Identity</strong>. After it&apos;s created, you should receive a verification email. Open the email from inbox and
                  click the link to complete the verification process for the email address.
                </li>
              </ul>
            </section>
            <h2 className="text-xl mt-4" id="domain-verification">
              <strong>Domain based Identity</strong>
            </h2>
            <section>
                Domain based Identity verification is essential for sending emails from your domain. It&apos;s a one-time process that verifies your domain ownership.
                Follow the steps below to verify a domain:
                <ul className="list-disc ml-6 pt-1 pl-2.5">
                  <li>Navigate to <Link className="text-blue-600" target="_blank" href="https://console.aws.amazon.com/ses">Amazon SES</Link> console.</li>
                  <li>From the navigation pane, choose <strong>Identities</strong>.</li>
                  <li>Click on <strong>Create Identity</strong>.</li>
                  <li>Under <strong>Identity details</strong>, choose <strong>Domain</strong> as the identity type.</li>
                  <li>
                    For <strong>Domain</strong>, enter the domain name that you want to use. You must have access to the domain&apos;s DNS settings to complete the domain verification process.
                    <Image src={AWS_SES_DOMAIN_IDENTITY} className="border my-2" alt="AWS SES Domain Identity"/>
                  </li>
                  <li>
                    To use custom <strong>MAIL FROM Domain</strong>, select the check box and complete the following steps:
                    <ul className="list-disc ml-6 pt-1 pl-2.5">
                      <li>Enter the subdomain name that you want to use as the MAIL FROM Domain.</li>
                      <li>
                        Configure MX failure behavior to define how Amazon SES handles missing MX records at the time of sending.
                        You can either allow SES to fallback to subdomain of <strong>amazonses.com</strong> or reject the message, triggering <code className="code-inline">MailFromDomainNotVerified</code> error.
                      </li>
                    </ul>
                    <Image src={AWS_SES_MAIL_FROM_DOMAIN} className="border my-2" alt="AWS SES Mail From Domain"/>
                  </li>
                  <li>
                    SES uses Easy DKIM with 2048 bit singing length by default. To customize, expand <strong>Advanced DKIM settings</strong> and choose the desired DKIM type.
                    Ensure that the Enabled box is checked in the DKIM signatures field.
                    <ul className="list-disc ml-6 pt-1 pl-2.5">
                      <li>To use Deterministic Easy DKIM (DEED) in Amazon SES, you must first enable Easy DKIM for at least one domain. After that, DEED can be used for additional domains without requiring separate DKIM record configurations.</li>
                      <li>
                        As an alternative to using Easy DKIM, you can instead configure DKIM authentication by using your own public-private key pair. This process is known as Bring Your Own DKIM (BYODKIM).
                      </li>
                    </ul>
                    <Image src={AWS_SES_DOMAIN_VERIFICATION} className="border my-2" alt="AWS SES Domain Verification"/>
                    To use Bring Your Own DKIM feature, you first have to create an RSA key pair. To generate a key pair, follow the steps below:
                    <ul className="list-disc ml-6 pt-1 pl-2.5 pb-2">
                      <li>
                        Open a terminal window and run the following command to generate the private key:
                        <HighlightCode code="openssl genrsa -f4 -out private.key 2048" language="shell" path=""/>
                      </li>
                      <li>
                        Run the following command to generate the public key:
                        <HighlightCode code="openssl rsa -in private.key -outform PEM -pubout -out public.key" language="shell" path=""/>
                      </li>
                    </ul>
                    Now that you&apos;ve created a key pair, you have to add the public key as a TXT record to the DNS configuration for your domain. You You must include the <code className="code-inline">p=</code> prefix in the DNS record.
                    <Image src={AWS_SES_BYO_DKIM_DNS_RECORD} className="border my-2" alt="AWS SES BYO DKIM DNS Record"/>
                    Paste the private key you generated earlier and specify the selector name you used in the DNS settings. The selector is a string that uniquely identifies the public key in the DNS records.
                    <Image src={AWS_SES_BYO_DKIM_CONFIG} className="border my-2" alt="AWS SES BYO DKIM Config"/>
                  </li>
                  <li>
                    Click on <strong>Create Identity</strong>. Once created, you will see the required DNS records that you need to add to your domain&apos;s DNS settings.
                  </li>
                </ul>
            </section>
            <section className="pt-4">
              To verify ownership of this identity, you must publish the DKIM records in your domain&apos;s DNS settings. To complete configuration of your
              custom MAIL FROM Domain, update the DNS settings using the MX record provided. Amazon SES will continue to use the default MAIL FROM Domain until
              the presence of this record has been verified.
            </section>
            <section className="pt-3">
              After domain verification in Amazon SES, you can send emails using your domain as the &quot;From&quot; address (e.g., <code className="code-inline">info@your-domain.com</code>).
              However, if your SES account is still in sandbox mode, emails can only be sent to verified recipient addresses.
            </section>
            <h2 className="text-xl mt-4">
              <strong>Amazon SES Production Access</strong>
            </h2>
            <section>
              To Request Production Access, navigate to <strong>Get Set Up</strong> from SES Console. Click on <strong>Request Production Access</strong> and fill out the form.
            </section>
            <Image src={AWS_SES_PRODUCTION_ACCESS} className="border mt-2" alt="Amazon SES Production Access"/>
            <section className="pt-3">
              Once getting production access, you can send emails to any recipient without verifying the recipient email addresses. To test sending an email, navigate to a verified
              domain identity, click &quot;Send Test Email&quot; and fill in the required details.
            </section>
          </div>
      </article>
      <FAQ items={[{
        question: "InvalidChangeBatch 400: CharacterStringTooLong (Value is too long) error while adding DKIM record in Route 53",
        answer: `Do not use "one string per line" instead separate strings with a single space, eg. <code class="code-inline background">"foo" "bar"</code> not <code class="code-inline background">"foo"\\n"bar"</code>`
      }]}/>
      <Reference references={[{
        title: "Verified identities in Amazon SES",
        url: "docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html"
      }, {
        title: "Creating and verifying identities in Amazon SES",
        url: "docs.aws.amazon.com/ses/latest/dg/creating-identities.html"
      }, {
        title: "Provide your own DKIM authentication token (BYODKIM) in Amazon SES",
        url: "docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-bring-your-own.html"
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
