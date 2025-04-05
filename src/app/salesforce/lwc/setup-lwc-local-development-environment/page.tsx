import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import {
  SETUP_LWC_LOCAL_DEVELOPMENT_ENVIRONMENT as ARTICLE
} from "@/lib/data/article/salesforce/lwc";

import INSTALL_SALESFORCE_EXTENSION_PACK from "./assets/install-salesforce-extension-pack.png";
import SALESFORCE_DEV_HUB from "./assets/salesforce-dev-hub.png";
import SALESFORCE_ACCOUNT_RECORD_PAGE from "./assets/salesforce-account-record-page.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SALESFORCE_ENABLE_SCRATCH_ORG =
`{
  "orgName": "MS-29",
  "edition": "Developer",
  "features": ["EnableSetPasswordInApi"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true,
      "enableLightningPreviewPref": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    }
  }
}`;

const CREATE_SCRATCH_ORG =
`sf org create scratch \\
  --definition-file config/project-scratch-def.json \\
  --alias scratchOrg \\ 
  --target-dev-hub devHubOrg`;

const LOCAL_DEV =
`sf lightning dev app \\ 
  --target-org scratchOrg \\ 
  --device-type desktop `;

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
          <h2 className="text-xl mt-4" id="salesforce-cli">
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
          <h2 className="text-xl mt-4" id="salesforce-extension-pack">
            <strong>Install Salesforce Extension Pack (Expanded)</strong>
          </h2>
          <section>
            This Extension Pack enhances development on Lightning Platform by providing tools for working with Development orgs, Lightning
            Web Components, Apex and more. It also includes popular community-built extensions for formatting and analyzing code.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Launch Visual Studio Code and Click Extensions in the Sidebar.</li>
              <li>
                Search for Salesforce Extension Pack (Expanded) and Click Install.
                <Image src={INSTALL_SALESFORCE_EXTENSION_PACK} className="background my-2" width="650"
                    alt="Install Salesforce Extension Pack"/>
              </li>
            </ul>
            Press <strong>Command + Shift + P</strong> on macOS or <strong>Ctrl + Shift + P</strong> on Windows or Linux to reveal the command palette.
            In the command palette, type <code className="code-inline background">sfdx</code> to display an initial list of available commands.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Activate Developer Hub</strong>
          </h2>
          <section>
            Developer Hub (Dev Hub) is Salesforce org used to create and manage scratch orgs.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>From <strong>Setup</strong>, enter <code className="code-inline background">Dev Hub</code> in the Quick Find box and select <strong>Dev Hub</strong>.</li>
              <li>Click the slider to enable Dev Hub.</li>
            </ul>
            <Image src={SALESFORCE_DEV_HUB} alt="Enable Salesforce Dev Hub" className="my-2 border"/>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Install Local Dev Plugin</strong>
          </h2>
          <section>
            Local Dev is Salesforce CLI tool that lets you run real time preview of your Lightning web components in your browser.
            The preview updates automatically as you edit your components locally, so you don&apos;t have to deploy code or manually refresh your browser page.
            Run below command in terminal to install Local Dev plugin.
            <HighlightCode code="sf plugins install @salesforce/plugin-lightning-dev@prerelease" language="shell" path=""/>
            <div className="pt-2">
              If you have production org with an upcoming release, you should install the latest version of Local Dev using <code className="code-inline background">@latest</code>.
            </div>
            <div className="pt-4">
              To enable Local Dev in your project, follow these steps.
              <ul className="list-disc ml-6 pt-1 pl-2.5">
                <li>Open the <code className="code-inline background">config/project-scratch-def.json</code> file.</li>
                <li>In the <code className="code-inline">lightningExperienceSettings</code> section of the file, add the &quot;<code className="code-inline">enableLightningPreviewPref</code>&quot; key and set it to <code className="code-inline">true</code>.</li>
              </ul>
              <HighlightCode code={SALESFORCE_ENABLE_SCRATCH_ORG} language="json" path="config / project-scratch-def.json"/>
            </div>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Authorize Dev Hub</strong>
          </h2>
          <section>
            In the command palette, type <code className="code-inline background">sdfx: authorize</code> and select <strong>SDFX: Authorize a DEV Hub</strong>.
            Enter alias name e.g., <code className="code-inline">devHubOrg</code> and login using Dev Hub Org credentials.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Create Scratch Org</strong>
          </h2>
          <section>
            Scratch orgs are disposable Salesforce orgs that are used to support development and testing. Run the below command to create scratch org.
            <HighlightCode code={CREATE_SCRATCH_ORG} language="shell" path=""/>
            <div className="pt-2">
              This CLI command will create a scratch org using <code className="code-inline background">config/project-scratch-def.json</code> file and the alias <code className="code-inline">scratchOrg</code>.
            </div>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Deploy changes to Scratch Org</strong>
          </h2>
          <section>
            Now that the setup is complete, we can deploy Lightning Web Components (LWC) to the scratch org.
            <HighlightCode code="sf project deploy start --target-org scratchOrg" language="shell" path=""/>
            <div className="pt-2">
              Once the changes are successfully deployed to the scratch org, the component can be added to the page.            </div>
          </section>
          <section className="pt-4">
            To open the scratch org, enter this command in the Terminal tab:
            <HighlightCode code="sf org open --target-org scratchOrg" language="shell" path=""/>
          </section>
          <section className="pt-4">
            For testing purposes, let&apos;s add the component to the Account Record page.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>From the <strong>App Launcher</strong>, find and select <strong>Sales</strong>.</li>
              <li>Click the <strong>Accounts</strong> tab, then click <strong>New</strong> to create an account.</li>
              <li>Enter <code className="code-inline background">Component Developers</code> as Account Name, then click <strong>Save</strong>.</li>
              <li>Click <strong>Setup</strong>, then select <strong>Edit Page</strong> to open <strong>Lightning App Builder</strong>.</li>
              <li>Drag the Component (under <strong>Custom</strong>) onto the page.</li>
              <li>Click <strong>Save</strong>, then click <strong>Activate</strong>.</li>
              <li>Click <strong>Assign as Org Default</strong> and then select <strong>Desktop and phone</strong>.</li>
              <li>Click <strong>Next</strong>, then <strong>Save</strong>.</li>
            </ul>
            <Image src={SALESFORCE_ACCOUNT_RECORD_PAGE} className="border my-2" alt="Account Record Page"/>
          </section>
          <h2 className="text-xl mt-4">
            <strong>Preview Component using Local Dev</strong>
          </h2>
          <section>
            With Local Dev, you can run real time preview of your Lightning app. The preview is automatically updated when your local component change,
            so you don&apos;t have to deploy code or refresh your browser page.
            <div className="pt-2">
              Run the following command to open the Scratch Org in Local Dev mode.
            </div>
            <HighlightCode code={LOCAL_DEV} language="shell" path=""/>
            <div className="pt-2">
              Scratch org comes with a few default apps that you can use. When you&apos;re prompted to select a <strong>Lightning Experience app</strong> to preview,
              use the arrow keys to select <strong>Sales</strong>. If the command runs successfully, it opens a new tab in your browser with a preview of your org&apos;s Seller
              Home page.
            </div>
          </section>
          <section className="pt-4">
            Now let&apos;s edit the component and see how your Local Dev preview updates itself in real-time. From the component html file,
            change &quot;Contact Information&quot; to &quot;Contact Info&quot;. Take a look in the browser at app preview, and notice
            how the title of component automatically updates itself based on your local change. You didn&apos;t have to redeploy your app
            or manually refresh the page to see your changes.
          </section>
          <section className="pt-6">
            By setting up local development environment for LWC, we can efficiently test and preview components in real time without the need for continuous deployments.
            You can now quickly iterate on your components locally, with changes reflected immediately in the browser, significantly speeding up the development and testing process.
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
