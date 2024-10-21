import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { TAILING_LOGS_ON_AEM_AS_CLOUD_SERVICE as ARTICLE } from "@/lib/data/article/aem/cloud";

import AEM_CLOUD_MANAGER_DOWNLOAD_LOGS from "./assets/aem-cloud-manager-download-logs.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const CUSTOM_LOGGING =
`{
  "org.apache.sling.commons.log.level": "DEBUG",
  "org.apache.sling.commons.log.file": "logs/error.log"
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function LogInvestigation() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          Tailing logs is a very basic need that every developer performs daily, as logs serve as the frontline for debugging AEM applications.
          While AEM 6.5 allows tailing logs via the System Console or SSH into AEM servers, AEM Cloud Service no longer provides this access.
          Instead, Adobe Cloud Manager supports accessing AEMaaCS logs via Adobe I/O CLI with Cloud Manager plugin, which allows for downloading
          and tailing logs. Additionally, Adobe Cloud Manager allows for the download of logs, by day, via environment&apos;s Download Logs action.
        </section>
        <Image src={AEM_CLOUD_MANAGER_DOWNLOAD_LOGS} className="border mt-3" height="250"
           alt="AEM Cloud Manager Download Logs">
        </Image>
        <section className="pt-3">
          Tailing logs in AEMaaCS does not support custom log files but allows custom logging. Custom log statements must be written to the <code className="code-inline background">error.log</code>. Logs written
          to custom files, like <code className="code-inline background">saml.log</code>, are inaccessible. To write logs to <code className="code-inline background">error.log</code>, use the <code className="code-inline">Sling
          LogManager</code> OSGi config.
        </section>
        <Highlight code={CUSTOM_LOGGING} language="json" path="org.apache.sling.commons.log.LogManager.factory.config~aem-demo.cfg.json"/>
        <section className="pt-2">
          Available log options in AEM Author and Publish services are <code className="code-inline font-bold">aemerror</code>, <code className="code-inline font-bold">aemaccess</code>, and <code className="code-inline font-bold">aemrequest</code> logs,
          while AEM Dispatcher provides <code className="code-inline font-bold">httpdaccess</code>, <code className="code-inline font-bold">httperror</code>, and <code className="code-inline font-bold">aemdispatcher</code> log files. The recommended log
          levels for custom loggers per environment type: DEBUG (Development), WARN (Stage), ERROR (Production).
        </section>
        <section className="pt-3">
          Hierarchy of logging levels are as follows in Highest to Lowest order: TRACE, DEBUG, INFO, WARN, ERROR. The high level logs contains all the
          logs of lower levels like in case of Trace log level, it will include all the logs of debug, info, warn and error as well. Setting a high-level
          log such as TRACE in a production environment can lead to excessive logging, which may impact AEM’s performance.
        </section>
        <section className="pt-3">
          Here are the steps to tail logs on AEM as a Cloud Service environment:
          <ul className="list-disc ml-6 pt-1 pl-2.5">
            <li><strong>Install Adobe I/O CLI:</strong> <code className="code-inline">npm install -g @adobe/aio-cli</code></li>
            <li><strong>Install Cloud Manager Plugin:</strong> <code className="code-inline">aio plugins:install @adobe/aio-cli-plugin-cloudmanager</code></li>
            <li><strong>Login to Adobe IMS:</strong> <code className="code-inline">aio login</code></li>
            <li><strong>Org List:</strong> <code className="code-inline">aio cloudmanager:org:list</code></li>
            <li><strong>Select Org:</strong> <code className="code-inline">aio cloudmanager:org:select [ORGID]</code></li>
            <li><strong>List of Programs:</strong> <code className="code-inline">aio cloudmanager:list-programs</code></li>
            <li><strong>Select Default Program:</strong> <code className="code-inline">aio config:set cloudmanager_programid [PROGRAMID]</code></li>
            <li><strong>List of Environments:</strong> <code className="code-inline">aio cloudmanager:list-environments</code></li>
            <li><strong>List Available Log Options:</strong> <code className="code-inline">aio cloudmanager:environment:list-available-log-options [ENVIRONMENTID]</code></li>
            <li><strong>Download Logs:</strong> <code className="code-inline">aio cloudmanager:environment:download-logs [ENVIRONMENTID] [SERVICE] [NAME] [DAYS]</code></li>
            <li><strong>Tail Log:</strong> <code className="code-inline">aio cloudmanager:environment:tail-log [ENVIRONMENTID] [SERVICE] [NAME]</code></li>
          </ul>
        </section>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
