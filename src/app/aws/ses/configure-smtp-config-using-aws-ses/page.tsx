import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import HighlightCode from "@/components/highlight/highlight";

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

const SEND_EMAIL =
`const nodemailer = require("nodemailer");

async function sendEmail(to, subject, body) {
  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "email-smtp.<region>.amazonaws.com", // Replace with your AWS SES region
    port: 587, // Use 465 for SSL, 587 for TLS
    secure: false, // false for TLS, true for SSL
    auth: {
      user: "YOUR_SMTP_USERNAME", // Replace with your SMTP username
      pass: "YOUR_SMTP_PASSWORD" // Replace with your SMTP password
    }
  });

  // Email options
  const mailOptions = {
    from: "your-email@example.com", // Must be a verified SES sender email
    to: to,
    subject: subject,
    text: body, // Plain Text body
    html: \`<p>\${body}</p>\` // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Example Usage
sendEmail("recipient@example.com", "Test Email", 
  "This is a test email from AWS SES using SMTP in Node.js.");`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AWS_SES.title,
    url: TOPICS.AWS_SES.url
  }],
  current: ARTICLE.title
}

export default function SMTPConfiguration() {
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
          <section className="pt-4">
            Now that you have the SMTP credentials, you need to verify the email address with SES before you can send emails.
            Email addresses can be verified individually or through domain verification. For more details about verification, please check
            how to <Link className="text-blue-600" target="_blank" href="/aws/ses/email-and-domain-identity-verification-in-aws-ses">Verify Email and Domain Identities in AWS SES</Link>.
          </section>
          <section className="pt-4">
            To check the configuration, you can create a simple Node.js app that sends an email using the SMTP credentials.
          </section>
          <HighlightCode code={SEND_EMAIL} language="javascript" path="aws / ses.js"/>
          <section className="pt-3">
            Replace <strong>YOUR_SMTP_USERNAME</strong> and <strong>YOUR_SMTP_PASSWORD</strong> with the SMTP credentials you noted earlier.
            The <strong>from</strong> email address must be a verified SES sender email. You can also customize the email body with plain text and HTML.
          </section>
          <section className="pt-4">
            Hopefully, this guide helps you set up SMTP configuration using AWS SES, allowing you to successfully send emails via SMTP.
            If you have any questions or feedback, feel free to leave a comment below.
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
