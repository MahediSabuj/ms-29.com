import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { UNUSED_ASSET_CLEANUP as ARTICLE } from "@/lib/data/article/aem/assets";

import MCP_RENOVATOR_CONFIG from "./assets/mcp-renovator-config.png";
import MCP_RENOVATOR_DRY_RUN from "./assets/mcp-renovator-dry-run.png";
import MCP_RENOVATOR_PROCESS_EXECUTION_DETAILS from "./assets/mcp-renovator-process-execution-details.png";
import MCP_RENOVATOR_DETAILED_REPORT from "./assets/mcp-renovator-details-report.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Assets",
    url: "/aem/assets"
  }],
  current: ARTICLE.title
}

export default function UnusedAssetCleanup() {
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
            In asset management, it becomes apparent that certain assets are no longer referenced with any pages. It&apos;s recommended 
            to delete these unused images from asset repository. This not only decreases size of AEM instance but also improves search/query performance.
          </section>
          <h2 className="text-xl mt-4">
            <strong>Using ACS AEM Commons</strong>
          </h2>
          <section>
            ACS AEM Commons provides a way to identity unused assets. Using <strong>Managed Controlled Process</strong> (MCP), you can generate a report that lists all assets
            for a specific folder, along with the pages where they are referenced and the number of references.
          </section>
          <section className="mt-4">
            MCP provides list of processes that can be executed. The <strong>Renovator</strong> process, one of them, is used for moving or renaming content in bulk.
            Prior to execution, a Dry Run can be performed to identify all assets in a specific folder, including the pages they are referenced on and the number of references.
            In fact, Dry Run is sufficient for our use case.
          </section>
          <section className="pt-4">
            Steps to execute the Renovator process:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Navigate to <strong>Tools</strong> &gt; <strong>ACS AEM Commons</strong> &gt; <strong>Managed Controlled Process</strong>.</li>
              <li>Click on <strong>Start Process</strong>.</li>
              <li>Select <strong>Renovator</strong> from the list of available processes.</li>
              <li>
                <strong>Renovator Process:</strong>
                <ul className="list-disc ml-4 pt-1">
                  <li><strong>Source:</strong> Path of the folder you want to check for unused assets.</li>
                  <li>
                    <strong>Destination:</strong> Path where assets will be copied. However, since we&apos;re only performing a Dry Run, the path will not have any effect.
                    <Image src={MCP_RENOVATOR_CONFIG} alt="MCP Renovator Process" className="border my-2" width="650"/>
                  </li>
                  <li>
                    Make sure to check the Dry run checkbox, otherwise all the assets will be moved to the Destination folder.
                    <Image src={MCP_RENOVATOR_DRY_RUN} alt="MCP Renovator Dry Run" className="border my-2" height="150"/>
                  </li>
                  <li>
                    <strong>Detailed Report</strong> should be checked to view information such as the list of assets, the number of references, and the specific pages where each asset is referenced.
                    Otherwise, the response will only include the total number of assets and how many are referenced on other pages.
                  </li>
                </ul>
              </li>
              <li>
                Click on <strong>Start</strong> to execute the Renovator process.
              </li>
            </ul>
          </section>
          <section className="pt-4">
            Once the process is complete, a report will be generated. The report will provide a list of all assets in the specified folder, along with the pages where they are referenced and the number of references.
            This information can be used to identify unused assets that can be safely deleted from the asset repository.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                Click on the <strong>View</strong> to view the report. You can also <strong>Download</strong> the report in Excel format for further analysis.
                <Image src={MCP_RENOVATOR_PROCESS_EXECUTION_DETAILS} alt="MCP Renovator Process Execution Details" className="border my-2" width="400"/>
              </li>
              <li>
                The report will provide a list of all assets in the specified folder, along with the pages where they are referenced and the number of references.
                This information can be used to identify unused assets that can be safely deleted from the asset repository.
                <Image src={MCP_RENOVATOR_DETAILED_REPORT} alt="MCP Renovator Detailed Report" className="border my-2"/>
                <div className="py-2">
                  If you look carefully at the report, you will see that the <strong>ALL REFERENCES</strong> column shows the number of references for each asset, while the <strong>REFERRED IN</strong> column shows the pages where the asset is referenced.
                  Based on above report, 4 assets are not referenced on any page. You can safely delete these assets from the asset repository.
                </div>
              </li>
            </ul>
          </section>
          <section className="pt-4">
            You can manually delete the assets from the AEM instance. Make sure to unpublish the assets before deleting them.
            However, if you have a large number of assets to delete, it&apos;s more efficient to automate the deletion using a servlet, or Groovy script.
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
