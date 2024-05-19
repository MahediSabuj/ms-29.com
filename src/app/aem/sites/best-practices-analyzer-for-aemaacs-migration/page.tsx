import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { BEST_PRACTICE_ANALYSIS_FOR_AEMAACS_MIGRATION as ARTICLE } from "@/lib/data/article/aem/sites";

import BEST_PRACTICES_ANALYZER from './assets/Best_Practices_Analyzer.webp';
import BEST_PRACTICES_ANALYZER_CONFIGURATION from './assets/Best_Practices_Analyzer_Configuration.webp';
import BPA_UPLOAD_KEY from './assets/BPA_Upload_Key.webp';
import BEST_PRACTICES_ANALYZER_REPORT from './assets/Best_Practices_Analyzer_Report.webp';
import BEST_PRACTICES_ANALYZER_CAM_REPORT from './assets/Best_Practices_Analyzer_CAM_Report.webp';

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

export default function BestPracticeAnalysis() {
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
            Best Practices Analyzer (BPA) evaluates the current AEM implementation, identifying areas not in alignment 
            with AEM best practices and offering guidance on how to improve. It also expedites the assessment of readiness 
            for transitioning from an existing Adobe Experience Manager (AEM) deployment to AEM as a Cloud Service. This tool 
            generates a report pinpointing potential areas for refactoring, marking the initial phase of migrating to AEM as a Cloud Service.
          </section>
          <section className="pt-3 pb-1">
            Best Practices Analyzer can be downloaded as a zip file from the <Link className="text-blue-600" target="_blank" href="https://experience.adobe.com/#/downloads/content/software-distribution/en/aemcloud.html">Software Distribution</Link> portal. 
            You can install the package via Package Manager on your AEM instance. Once installed, you can access BPA
            by navigating to <strong>Tools</strong> &gt; <strong>Operations</strong> &gt; <strong>Best Practices Analyzer</strong>.
          </section>
          <Image src={BEST_PRACTICES_ANALYZER} className="border"
            alt="Best Practice Analyzer">
          </Image>
          <section className="pt-3 pb-1">
            To generate BPA report and automatically upload it to Cloud Acceleration Manager (CAM), you need BPA Upload Key, which 
            can be obtained by creating a project in CAM (e.g., AEM Demo), navigating to Best Practices Analysis, and retrieving the key
            for your project. You can still generate the report without the Upload Key, but you will need to manually upload the report to CAM in that case.
          </section>
          <Image src={BPA_UPLOAD_KEY} className="border"
            alt="BPA Upload Key">
          </Image>
          <section className="pt-3 pb-1">
            Based on your choice, either set BPA Upload Key or skip auto upload to CAM; Project Name will be auto-populated based on the Key.
          </section>
          <Image src={BEST_PRACTICES_ANALYZER_CONFIGURATION} className="border"
            alt="Best Practice Analyzer Configuration">
          </Image>
          <section className="pt-3 pb-1">
            Once the BPA report is generated, it provides summary and lists the findings in a table, categorized by type and importance level. 
            For more details on a particular finding, click the number corresponding to that type in the table.
          </section>
          <Image src={BEST_PRACTICES_ANALYZER_REPORT} className="border"
            alt="Best Practices Analyzer Report">
          </Image>
          <section className="pt-3 pb-1">
            You can download the report in Comma-Separated Values (CSV) format by clicking <strong>Export to CSV</strong>. If you set the BPA 
            Upload Key during previous step, you will see an option <strong>Go to CAM</strong> which will direct you to the Best Practices 
            Analysis page in CAM, where you can view the report; otherwise, you can manually upload the report on the same page.
          </section>
          <Image src={BEST_PRACTICES_ANALYZER_CAM_REPORT} className="border"
            alt="Best Practices Analyzer Report View in CAM">
          </Image>
          <section className="pt-2">
            You can Refresh Report from your instance after applying fixes and Upload Report multiple times in CAM. Through this process, you 
            will understand the status and take the necessary actions to address at least the major and critical issues prior to migrating into AEM as a Cloud Service (AEMaaCS).
          </section>
        </div>  
      </article>
    </div>
  );
}
