import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { SETUP_SMTP_CONFIG_USING_AWS_SES as ARTICLE } from "@/lib/data/article/aws/ses";

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

export default function SetupCICDPipeline() {
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
            AWS Simple Email Service (SES) is a cloud-based SASS platform that allows you to send emails to your customers. Amazon SES sends
            email using SMTP, which is the most common email protocol on the internet. It allows sending large volumes of email in minutes.

          </section>
        </div>  
      </article>
    </div>
  );
}
