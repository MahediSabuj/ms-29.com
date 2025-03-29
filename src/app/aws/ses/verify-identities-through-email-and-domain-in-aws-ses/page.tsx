import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { VERIFY_IDENTITIES_IN_AWS_SES as ARTICLE } from "@/lib/data/article/aws/ses";

import AWS_SES_EMAIL_IDENTITY from "./assets/aws-ses-email-identity.png";

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
              In AWS SES, verified identity is a domain or email address that you use to send email.
            </section>
            <h2 className="text-xl mt-4">
              <strong>Verified through Email Address</strong>
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
          </div>
      </article>
        <div className="mt-8 mb-4">
          <ArticleReviewList items={[]}/>
          <ArticleReviewForm/>
        </div>
    </div>
  );
}
