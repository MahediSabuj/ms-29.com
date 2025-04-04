import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import HighlightCode from "@/components/highlight/highlight";

import {
  SETUP_LWC_LOCAL_DEVELOPMENT_ENVIRONMENT as ARTICLE
} from "@/lib/data/article/salesforce/lwc";

import INSTALL_SALESFORCE_EXTENSION_PACK from "./assets/install-salesforce-extension-pack.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title:TOPICS.SF_LWC.title,
    url: TOPICS.SF_LWC.url
  }],
  current: ARTICLE.title
}

export default function LocalEnvironment() {
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
            While Salesforce provides an online development environment, setting up a local development environment can enhance productivity, enable
            faster testing, and allow integration with version control systems. This allows developers to build, debug, and validate LWC applications
            before pushing them to Salesforce org.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Install Salesforce CLI</strong>
          </h2>
          <section>
            Salesforce provides Command-Line Interface (CLI) for developers to interact with Salesforce environments in many ways, like retrieving or
            pushing code or interacting with data.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                Install from <Link href="https://developer.salesforce.com/tools/salesforcecli" className="text-blue-600" target="_blank">
                  https://developer.salesforce.com/tools/salesforcecli</Link>.
              </li>
              <li>
                Verify the installation using following command:
                <HighlightCode code="sf version" language="shell" path=""/>
              </li>
            </ul>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Install Salesforce Extension Pack (Expanded)</strong>
          </h2>
          <section>
            This Extension Pack enhances development on Lightning Platform by providing tools for working with
            Development Orgs, Lightning
            Web Components, Apex and more. It also includes popular community-built extensions for formatting and
            analyzing code.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Launch Visual Studio Code abd Click Extensions in the Sidebar.</li>
              <li>
                Search for Salesforce Extension Pack (Expanded) and Click Install.
                <Image src={INSTALL_SALESFORCE_EXTENSION_PACK} className="background my-2" width="650"
                    alt="Install Salesforce Extension Pack"/>
              </li>
            </ul>
            Press <strong>Command + Shift + P</strong> on macOS or <strong>Ctrl + Shift + P</strong> on Windows or Linux to reveal the command palette.
            In the command palette, type <code className="code-inline background">sfdx</code> to display an initial list of available commands.
          </section>
        </div>
      </article>
    </div>
  );
}
