import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { IBreadCrumb } from "@/types/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Article from "@/components/article/article";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import HighlightCode from "@/components/highlight/highlight";

import {
  BUILD_WEBSITE_WITH_EDGE_DELIVERY_SERVICE_DOCUMENT_BASED_AUTHORING as ARTICLE
} from "@/lib/data/article/aem/eds";

import EDS_DOCUMENT_BASED_WEBSITE from "./assets/eds-document-based-website.png";
import AEM_SIDEKICK_CHROME_EXTENSION from "./assets/aem-sidekick-chrome-extension.png";
import SHARE_WITH_AEM_USER from "./assets/share-with-aem-user.png";
import AEM_SIDEKICK_TOOLBAR from "./assets/aem-sidekick-toolbar.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title:TOPICS.EDGE_DELIVERY_SERVICE.title,
    url: TOPICS.EDGE_DELIVERY_SERVICE.url
  }],
  current: ARTICLE.title
}

export default function DocumentSite() {
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
            Edge Delivery Services provides different options for authoring content via WYSIWYG authoring, headless authoring, or document based authoring.
            This article solely focuses on document based authoring that enables content creators to use familiar tools like Microsoft Word or Google Docs
            to write and structure content.
          </section>
          <section className="pt-4">
            This approach is particularly well suited for basic static websites and micro sites. By leveraging document based
            authoring, teams can maintain content workflows within their preferred writing tools while benefiting from AEM&apos;s scalable and fast delivery via Edge Services.
          </section>
          <section className="pt-4">
            Adobe provides Git repository with <Link href="https://github.com/adobe/aem-boilerplate" target="_blank" className="text-blue-600">AEM boilerplate template</Link> for
            Edge Delivery Service. Use this template to create a new repository in your GitHub account.
          </section>
          <section className="pt-4">
            Next, install the <Link href="https://github.com/apps/aem-code-sync/installations/new" className="text-blue-600" target="_blank">AEM Code Sync GitHub</Link> app to your GitHub account
            and provide access to the repository created in the previous step. Afterward, you&apos;ll be able to view the website in both preview and live mode.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Preview</strong>: <Link href="https://main--{repo}--{owner}.aem.page" className="text-blue-600" target="_blank">{'https://main--{repo}--{owner}.aem.page'}</Link></li>
              <li><strong>Live</strong>: <Link href="https://main--{repo}--{owner}.aem.live" className="text-blue-600" target="_blank">{'https://main--{repo}--{owner}.aem.live'}</Link></li>
            </ul>
            <div className="pt-1">
              Replace <code className="code-inline background">{'{repo}'}</code> and <code className="code-inline background">{'{owner}'}</code> with the name of your repository and GitHub username respectively.
            </div>
          </section>
          <Image src={EDS_DOCUMENT_BASED_WEBSITE} alt="EDS Document based WebSite" className="my-2 border"/>
          <h2 className="text-xl mt-4">
            <strong>Change Content Source to your Google Drive</strong>
          </h2>
          <section>
            In your fork of the Boilerplate GitHub repository, the site points to an <Link href="https://drive.google.com/drive/folders/1MGzOt7ubUh3gu7zhZIPb7R7dyRzG371j" className="text-blue-600" target="_blank">existing content source</Link> in Google Drive.
            The content is read-only, to make changes to the content, you need to create a new folder in your Google Drive and copy the content from the existing folder.
          </section>
          <section className="pt-4">
            To copy the content, follow these steps:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Open the existing content source folder in Google Drive.</li>
              <li>Select all the files (nav, index, footer) you want to copy.</li>
              <li>Right-click and select <strong>Make a copy</strong>.</li>
              <li>Move the copied files to your new folder.</li>
            </ul>
            <div className="pt-1">
              Alternatively, you can also download the files and upload them to your new folder. But it requires to convert the downloaded <code className="code-inline">.docx</code> files back into
              native Google Docs, when you upload them to your folder in your Google Drive. Make sure the folder is shared with the Adobe Experience Manager user (<Link href="mailto:helix@adobe.com" className="text-blue-600">helix@adobe.com</Link>).
            </div>
            <Image src={SHARE_WITH_AEM_USER} alt="Share with AEM User" width="400" className="my-2 border"/>
          </section>
          <section className="pt-4">
            Now that you have the content in your own folder, you need to update the reference in <code className="code-inline">fstab.yaml</code> in your GitHub repo. Copy/paste the folder URL from
            your Google Drive to <code className="code-inline">fstab.yaml</code>.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Preview and Publish your Content</strong>
          </h2>
          <section>
            Once you update the content source, the preview and live URL will show  <code className="code-inline background">404 not found</code> error. This happens because the contents of the newly
            linked folder haven&apos;t been promoted to the preview and live environments yet.
          </section>
          <section className="pt-4">
            To preview and publish content, author has to install <Link href="https://chromewebstore.google.com/detail/aem-sidekick/igkmdomcgoebiipaifhmpfjhbjccggml" target="_blank" className="text-blue-600">AEM Sidekick</Link> Chrome extension.
            After installing the extension in Chrome, make sure to pin it for quick and easy access.
            <Image src={AEM_SIDEKICK_CHROME_EXTENSION} alt="AEM Sidekick Chrome Extension" className="my-2 border"/>
          </section>
          <section className="pt-4">
            Navigate to the <strong>Google Drive folder</strong> and activate the AEM Sidekick by clicking on your pinned extension. A new toolbar will appear on the bottom of the screen.
            <Image src={AEM_SIDEKICK_TOOLBAR} alt="AEM Sidekick Toolbar" className="my-2 border"/>
            <div className="mt-2">
              Click on the <strong>Preview</strong> button to view content in preview environment and the <strong>Publish</strong> button to publish the content to live environment.
              Content must be previewed before it can be published — publishing without previewing will not be successful.
            </div>
          </section>
          <section className="pt-4">
            You can update the content directly in your Google Drive folder. Any changes you make will appear in preview and live environment once you click the respective buttons.
          </section>
          <h2 className="text-xl mt-4">
            Development in Local Environment
          </h2>
          <section>
            To get started with development, install the AEM Command Line Interface (CLI).
            <HighlightCode code="npm install -g @adobe/aem-cli" language="shell" path=""/>
          </section>
          <section className="pt-4">
            From the project directory where you cloned the repository, start your local development environment using the following command.
            <HighlightCode code="aem up" language="shell" path=""/>
            <div className="pt-2">
              This will launch <Link href="http://localhost:3000" className="text-blue-600" target="_blank">http://localhost:3000</Link> and you are ready to make changes.
              You can make changes in the <code className="code-inline">blocks</code> folder, typically in <code className="code-inline">.css</code> or <code className="code-inline">.js</code> file and
              you should see the changes in your browser immediately.
            </div>
            <div className="pt-2">
              Once you&apos;re ready and push the changes to GitHub, the updates will be visible in both the preview and live environments immediately. No AEM Sidekick preview or publish action is needed for code changes.
            </div>
          </section>
          <section className="pt-6">
            Hopefully this article has provided you with a good understanding of how to set up and use document based authoring with Edge Delivery Service. If you have any questions or feedback, please feel free to reach out.
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
