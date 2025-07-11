import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Heading from "@/components/heading/heading";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { CONTENT_TRANSFER_TOOL as ARTICLE } from "@/lib/data/article/aem/cloud";

import CONTENT_TRANSFER_DISABLE_GROUP_MIGRATION from './assets/content-tranfer-disable-group-migration.png';
import MIGRATION_SET_CLOUD_ACCELERATION_MANAGER from './assets/migration-set-cloud-acceleration-manager.png';
import MIGRATION_SET_EXTRACTION_KEY from './assets/migration-set-extraction-key.png';
import MIGRATION_SET_AEM_AUTHOR from './assets/migration-set-aem-author.png';
import MIGRATION_SET_CHECK_SIZE from './assets/migration-set-check-size.png';
import MIGRATION_SET_CHECK_SIZE_STATUS from './assets/migration-set-check-size-status.png';
import MIGRATION_SET_EXTRACTION from './assets/migration-set-extraction.png';
import CONTENT_TRANSFER_SOURCE_AEM_INSTANCE from './assets/content-transfer-source-aem-instance.png';
import EXTRACTION_PROCESS_VIEW_PROGRESS from './assets/extraction-process-view-progress.png';
import CLOUD_ACCELERATION_MANAGER_MIGRATION_SET_DETAILS from './assets/cloud-acceleration-manager-migration-set-details.png';
import CONTENT_TRANSFER_NEW_INGESTION from './assets/content-transfer-new-ingestion.png';
import CONTENT_INGESTION_JOB_DETAILS from './assets/content-ingestion-job-details.png';
import INGESTION_CONTENT_LOCAL_ADMINISTRATORS_ACCESS from './assets/ingestion-content-local-administrators-access.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
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
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div>
          <section className="pt-6">
            Content transfer is a crucial step when migrating AEM projects to AEMaaCS, especially with large volumes of content.
            To streamline this process, Adobe provides Content Transfer Tool (CTT), which can be used to initiate the migration
            of existing content from a source AEM instance (on-premise or AMS) to the target AEM Cloud Service instance.
          </section>
          <section className="pt-3">
            CTT does not perform any kind of content analysis before transferring content from the source instance to the target instance. For example,
            CTT does not differentiate between published and unpublished content while ingesting content into a Publish environment. Whatever content is
            specified in the migration set is ingested into the chosen target instance. A user can ingest a migration set into an Author instance or Publish instance or both.
            Adobe recommends that while moving content to a Production instance, CTT be installed on the source Author instance to move content to the target Author instance.
            And, similarly, install CTT on the source Publish instance to move content to the target Publish instance.
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
            CTT also transfers groups automatically. However, CTT version 3.0.20 and later includes an option to disable groups migration.
          </section>
          <Image src={CONTENT_TRANSFER_DISABLE_GROUP_MIGRATION} className="border p-1 mt-1"
             alt="Content Transfer Disable Group Migration">
          </Image>
          <Heading heading='h2'>
            <strong>Migration Set Configuration</strong>
          </Heading>
          <section>
            Before extracting content from the source AEM instance, Migration Set needs to be created on the target <strong>Cloud Manager</strong> instance.
            From <strong>Cloud Acceleration Manager (CAM)</strong>, create a new project if you haven&apos;t already. Then, click on the <strong>Content Transfer</strong> and
            proceed by creating <strong>Migration Set</strong>.
          </section>
          <Image src={MIGRATION_SET_CLOUD_ACCELERATION_MANAGER} className="border p-1 mt-1" height="400"
             alt="Migration Set Cloud Manager">
          </Image>
          <section className="pt-3">
            You should now see your migration sets in the list view. Click the three dots symbol (…) to open the drop-down menu, then select <strong>Copy Extraction Key</strong>.
            This key is required when creating the migration set on the source AEM instance.
          </section>
          <Image src={MIGRATION_SET_EXTRACTION_KEY} className="border p-1 mt-1"
             alt="Migration Set Extraction Key">
          </Image>
          <section className="pt-3">
            From the source AEM instance, navigate to <strong>Tools</strong> &gt; <strong>Operations</strong> &gt; <strong>Content Migration</strong> &gt; <strong>Content Transfer</strong>, and
            then click on <strong>Create Migration Set</strong>.
          </section>
          <Image src={CONTENT_TRANSFER_SOURCE_AEM_INSTANCE} className="border p-1 mt-1"
             alt="Content Transfer on Source AEM Instance">
          </Image>
          <section className="pt-3">
            In the <strong>Create Migration Set</strong> window, paste the <strong>Extraction Key</strong> that was copied earlier from <strong>CAM</strong> into the <strong>Extraction Key</strong> field.
            This will automatically populate the <strong>Migration Set Name</strong> and <strong>CAM Project Name</strong> fields. Next, add the <strong>Content Paths</strong>, and then save the <strong>Migration Set</strong>.
            Make sure that Extraction Key is valid and is not near its expiration.
          </section>
          <Image src={MIGRATION_SET_AEM_AUTHOR} className="border p-1 mt-1" height="500"
             alt="Migration Set AEM Author">
          </Image>
          <section className="pt-3">
            After creating the <strong>Migration Set</strong>, it is highly recommended to <strong>Check Size</strong> on the Migration Set before starting <strong>Extraction</strong> process.
            By running Size Check on the Migration Set, you are able to determine if there is sufficient disk space in the <code className="code-inline">crx-quickstart</code> subdirectory
            to complete Extraction successfully. This is because CTT creates a local copy of the repository that is later uploaded to migration set.
          </section>
          <Image src={MIGRATION_SET_CHECK_SIZE} className="border p-1 mt-1"
             alt="Migration Set Check Size">
          </Image>
          <section className="pt-3">
            Once <strong>Check Size</strong> process is completed, the status will change to <strong>FINISHED</strong>. If the results indicate insufficient disk space, <strong>WARNING</strong> status will be displayed.
          </section>
          <Image src={MIGRATION_SET_CHECK_SIZE_STATUS} className="border p-1 mt-1"
             alt="Migration Set Check Size Status">
          </Image>
          <Heading heading='h2'>
            <strong>Extracting Content from Source</strong>
          </Heading>
          <section>
            Select a migration set from the Content Transfer wizard and click Extract to start extraction.
          </section>
          <Image src={MIGRATION_SET_EXTRACTION} className="border p-1 mt-1"
             alt="Migration Set Extraction">
          </Image>
          <section className="pt-3">
            The <strong>Extraction</strong> field now displays the <strong>RUNNING</strong> status to indicate that the extraction is in-progress.
            You can click <strong>View Progress</strong> to get a granular view of the on-going extraction.
          </section>
          <Image src={EXTRACTION_PROCESS_VIEW_PROGRESS} className="border p-1 mt-1" height="500"
             alt="Extraction Process - View Progress">
          </Image>
          <section className="pt-3">
            You can also monitor the Extraction phase progress from <strong>Cloud Acceleration Manager</strong> by visiting the <strong>Content Transfer</strong> page,
            and see it in more details by clicking <strong>…</strong> &gt; <strong>View details</strong>.
          </section>
          <Image src={CLOUD_ACCELERATION_MANAGER_MIGRATION_SET_DETAILS} className="border p-1 mt-1"
             alt="Cloud Acceleration Manager - Migration Set Details">
          </Image>
          <section className="pt-3">
            The Content Transfer Tool has a feature that supports differential content top-up where it is possible to transfer only changes
            made since the previous content transfer activity. You can transfer delta content by using top-up extraction method; simply
            disable the <strong>Overwrite staging container during extraction</strong> option for any subsequent extractions.
          </section>
          <Heading heading='h2'>
            <strong>Ingesting Content into Cloud Service</strong>
          </Heading>
          <section>
            Make sure you have <strong>administrators</strong> access on target AEM Cloud Service environment. Unprivileged users need to manually provide the migration token to
            start ingestion.
          </section>
          <Image src={INGESTION_CONTENT_LOCAL_ADMINISTRATORS_ACCESS} className="border p-1 mt-1"
             alt="Content Ingestion - Local Administrators Access">
          </Image>
          <section className="pt-3">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600 inline-block " width={20} height={20}/> If the target tier is Author, the author instance
            is shut down for the duration of the ingestion, making it unavailable to users. This measure protects the system and prevents any changes that could be lost or
            cause an ingestion conflict. Also ensure that no Cloud Manager pipelines are executed while you are running the Ingestion phase. However, during ingestion to the
            publish tier, the publish instance will not be scaled down, unlike the author instance.
          </section>
          <section className="pt-3">
            Navigate to <strong>Cloud Acceleration Manager</strong>. Select your project card and click on the Content Transfer card. Go to <strong>Ingestion Jobs</strong> and click on <strong>New Ingestion</strong>.
          </section>
          <Image src={CONTENT_TRANSFER_NEW_INGESTION} className="border p-1 mt-1"
             alt="Content Transfer - New Ingestion">
          </Image>
          <section className="pt-3">
            You can monitor the ingestion process from the Ingestion Jobs list view. For a more detailed view, including the duration of each step during or
            after ingestion, use the action menu, click the ellipsis (<strong>…</strong>), and select <strong>View durations</strong>.
          </section>
          <Image src={CONTENT_INGESTION_JOB_DETAILS} className="border p-1 mt-1" height="500"
             alt="Content Ingestion Job Details">
          </Image>
          <section className="pt-3">
            Once you have completed the content ingestion into Cloud Service, you can view the content in the target Cloud Service.
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
