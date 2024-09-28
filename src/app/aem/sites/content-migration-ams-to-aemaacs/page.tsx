import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CONTENT_TRANSFER_TOOL as ARTICLE } from "@/lib/data/article/aem/sites";

import MIGRATION_SET_CLOUD_MANAGER from './assets/migration-set-cloud-manager.png';
import MIGRATION_SET_EXTRACTION_KEY from './assets/migration-set-extraction-key.png';
import MIGRATION_SET_AEM_AUTHOR from './assets/migration-set-aem-author.png';
import MIGRATION_SET_CHECK_SIZE from './assets/migration-set-check-size.png';
import MIGRATION_SET_EXTRACTION from './assets/migration-set-extraction.png';
import CONTENT_TRANSFER_SOURCE_AEM_INSTANCE from './assets/content-transfer-source-aem-instance.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ContentTransfer() {
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
            Content transfer is a crucial step when migrating AEM projects to AEMaaCS, especially with large volumes of content.
            To streamline this process, Adobe provides Content Transfer Tool (CTT), which can be used to initiate the migration
            of existing content from a source AEM instance (on-premise or AMS) to the target AEM Cloud Service instance.
          </section>
          <section className="pt-3">
            Content Transfer Tool can be downloaded as a zip file from the <Link className="text-blue-600" target="_blank" href="https://experience.adobe.com/#/downloads/content/software-distribution/en/aemcloud.html">Software Distribution Portal</Link>. You can install the package
            via Package Manager on your source AEM instance. Make sure to download the latest version.
          </section>
          <section className="pt-3">
            There are two phases associated with content transfer:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li><strong>Extraction:</strong> Extracting content from the source AEM instance into a temporary area called migration set.</li>
              <li><strong>Ingestion:</strong> Ingesting content from the migration set into the target Cloud Service instance.</li>
            </ul>
          </section>
          <section className="pt-3">
            Before extracting content from the source AEM instance, Migration Set needs to be created on the target <strong>Cloud Manager</strong> instance.
            From <strong>Cloud Acceleration Manager (CAM)</strong>, create a new project if you haven't already. Then, click on the <strong>Content Transfer</strong> and
            proceed by creating <strong>Migration Set</strong>.
          </section>
          <Image src={MIGRATION_SET_CLOUD_MANAGER} className="border mt-3" height="400"
             alt="Migration Set Cloud Manager">
          </Image>
          <section className="pt-3">
            You should now see your migration sets in the list view. Click the three dots symbol (…) to open the drop-down menu, then select <strong>Copy Extraction Key</strong>.
            This key is required when creating the migration set on the source AEM instance.
          </section>
          <Image src={MIGRATION_SET_EXTRACTION_KEY} className="border mt-3"
             alt="Migration Set Extraction Key">
          </Image>
          <section className="pt-3">
            From the source AEM instance, navigate to <strong>Tools</strong> &gt; <strong>Operations</strong> &gt; <strong>Content Migration</strong> &gt; <strong>Content Transfer</strong>, and
            then click on <strong>Create Migration Set</strong>.
          </section>
          <Image src={CONTENT_TRANSFER_SOURCE_AEM_INSTANCE} className="border mt-3"
             alt="Content Transfer on Source AEM Instance">
          </Image>
          <section className="pt-3">
            In the <strong>Create Migration Set</strong> window, paste the <strong>Extraction Key</strong> that was copied earlier from <strong>CAM</strong> into the <strong>Extraction Key</strong> field.
            This will automatically populate the <strong>Migration Set Name</strong> and <strong>CAM Project Name</strong> fields. Next, add the <strong>Content Paths</strong>, and then save the <strong>Migration Set</strong>.
            Make sure that Extraction Key is valid and is not near its expiration.
          </section>
          <Image src={MIGRATION_SET_AEM_AUTHOR} className="border mt-3" height="500"
             alt="Migration Set AEM Author">
          </Image>
          <section className="pt-3">
            After creating the <strong>Migration Set</strong>, it is highly recommended to <strong>Check Size</strong> on the Migration Set before starting <strong>Extraction</strong> process.
            By running Size Check on the Migration Set, you are able to determine if there is sufficient disk space in the <code className="code-inline">crx-quickstart</code> subdirectory
            to complete Extraction successfully. This is because CTT creates a local copy of the repository that is later uploaded to migration set.
          </section>
          <Image src={MIGRATION_SET_CHECK_SIZE} className="border mt-3" height="500"
             alt="Migration Set Check Size">
          </Image>
          <section className="pt-3">
            Once the <strong>Check Size</strong> process is completed, the status will change to <strong>FINISHED</strong>. Select the same Migration Set and click Check Size to view the results.
            If the results indicate insufficient disk space, <strong>WARNING</strong> status will be displayed.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Extracting Content from Source</strong>
          </h2>
          <section>
            Select a migration set from the Content Transfer wizard and click Extract to start extraction.
          </section>
          <Image src={MIGRATION_SET_EXTRACTION} className="border mt-3" height="500"
             alt="Migration Set Extraction">
          </Image>
          <h2 className="text-xl mt-4">
            <strong>Ingesting Content into Cloud Service</strong>
          </h2>
        </div>  
      </article>
    </div>
  );
}
