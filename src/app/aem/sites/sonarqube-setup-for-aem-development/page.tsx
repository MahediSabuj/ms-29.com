import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SONARQUBE_SETUP_FOR_AEM_DEVELOPMENT as ARTICLE } from "@/lib/data/article/aem/sites";

import CREATE_LOCAL_PROJECT_SONARQUBE from './assets/Create_Local_Project_SonarQube.webp';
import ANALYSIS_PROJECT_SONARQUBE from './assets/Analysis_Project_SonarQube.webp';
import SONARQUBE_ANALYSIS_REPORT from './assets/SonarQube_Analysis_Report.webp';

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

export default function SonarQubeSetup() {
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
            In AEM development, prioritizing code quality is essential. Even during deployment via Cloud Manager, it&apos;s crucial to 
            meet specific metrics for security, reliability, maintainability, and code coverage. SonarQube enables continuous code inspections, 
            identifying issues early in the development lifecycle that could affect these metrics. Though integration, developers can ensure the 
            maintenance of clean, efficient, and secure code throughout the AEM development process.
          </section>
          <h2 id="install-sonarqube" className="text-xl mt-3">
            <strong>Install SonarQube</strong>
          </h2>
          <section>
            To set up SonarQube, follow these steps:
            <ul className="list-disc ml-6 pl-2.5">
              <li>
                <strong>Pull Docker Image: </strong> <code className="code-inline">docker pull sonarqube</code>
              </li>
              <li>
                <strong>Create Container: </strong> <code className="code-inline">docker run -d --name sonarqube -p 9000:9000 sonarqube</code>
              </li>
              <li>
                <strong>Access SonarQube Web Interface: </strong> Login to <Link target="_blank" className="text-blue-600" href="http://localhost:9000">http://localhost:9000</Link> with credentials (admin / admin)
              </li>
            </ul>
          </section>
          <section className="pt-1">
            After a successful login, you will be sent to the SonarQube Dashboard.
          </section>
          <h2 id="install-sonarqube" className="text-xl mt-3">
            <strong>Create Project in SonarQube</strong>
          </h2>
          <section>
            From <strong>Projects</strong> tab, click on <strong>Create Project</strong>.
          </section>
          <Image src={CREATE_LOCAL_PROJECT_SONARQUBE} className="border mt-2"
             width={500} alt="Create Project in SonarQube">
          </Image>
          <section className="pt-3">
            The next step involves creating project token and prepare Maven command to initiate the analysis of your project.
          </section>
          <Image src={ANALYSIS_PROJECT_SONARQUBE} className="border mt-2"
              alt="Analysis Project in SonarQube">
          </Image>
          <section className="pt-3">
            Copy the Maven command and execute it on your project, then navigate to the SonarQube dashboard to view the analysis report.
          </section>
          <Image src={SONARQUBE_ANALYSIS_REPORT} className="border mt-2"
             alt="SonarQube Analysis Report">
          </Image>
          <section className="pt-3">
            Using this setup, you can check the code quality metrics during development in your local environment before pushing the code to the cloud manager.
          </section>
        </div>  
      </article>
    </div>
  );
}
