import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import { SETUP_SMTP_CONFIG_USING_AWS_SES as ARTICLE } from "@/lib/data/article/aws/ses";

import AWS_SES_SMTP_CONFIGURATION from "./assets/aws-ses-smtp-configuration.png";
import AWS_SES_SMTP_USER from "./assets/aws-ses-smtp-user.png";
import AWS_SES_SMTP_CREDENTIALS from "./assets/aws-ses-smtp-credentials.png";

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
          <section className="pt-4">
            To setup SMTP configuration using AWS SES, follow the steps below:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Navigate to <Link className="text-blue-600" target="_blank" href="https://console.aws.amazon.com/ses">Amazon SES</Link> console.</li>
              <li>From the navigation pane, choose <strong>SMTP Settings</strong>.</li>
              <li>Under <strong>Under Simple Mail Transfer Protocol (SMTP) settings</strong>, note the values for SMTP endpoints and Ports.
                Use the <strong>SMTP endpoint</strong> and <strong>ports</strong> to connect to SMTP. For example, if you&apos;re in the <strong>ap-southeast-1</strong> AWS Region,
                note the following:<br/>
                <strong>SMTP endpoint</strong>: email-smtp.ap-southeast-1.amazonaws.com<br/>
                <strong>Port</strong>: 25, 465 or 587
                <Image src={AWS_SES_SMTP_CONFIGURATION} className="border my-2"
                   alt="AWS SES SMTP Configuration">
                </Image>
              </li>
              <li>
                Click on <strong>Create SMTP Credentials</strong>, which will redirect you to <strong>IAM Console</strong>.
                For <strong>Create User for SMTP</strong>, type a name for your SMTP user in the <strong>User Name</strong> field
                and click on <strong>Create user</strong> in the bottom-right corner.
                <Image src={AWS_SES_SMTP_USER} className="border my-2"
                    alt="AWS SES SMTP User">
                </Image>
              </li>
              <li>
                Note the <strong>SMTP Username</strong> and <strong>SMTP Password</strong> for your SMTP user. Alternatively, you can download the <strong>CSV</strong> file.
                <Image src={AWS_SES_SMTP_CREDENTIALS} className="border my-2"
                    alt="AWS SES SMTP Credentials">
                </Image>
              </li>
            </ul>
          </section>
        </div>  
      </article>
    </div>
  );
}
