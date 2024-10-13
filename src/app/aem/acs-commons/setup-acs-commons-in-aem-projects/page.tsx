import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Highlight from "@/components/highlight/highlight";
import Reference from "@/components/reference/reference";
import { SETUP_ACS_COMMONS_IN_AEM_PROJECTS as ARTICLE } from "@/lib/data/article/aem/acs-commons";

import ACS_COMMONS_IN_AEMAACS from './assets/acs-commons-in-aemaacs.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ACS_COMMONS_6_5 =
`<plugins>
  <plugin>
    <groupId>org.apache.jackrabbit</groupId>
    <artifactId>filevault-package-maven-plugin</artifactId>
    <configuration>
      <subPackages>
        <subPackage>
          <groupId>com.adobe.acs</groupId>
          <artifactId>acs-aem-commons-all</artifactId>
          <filter>true</filter>
          <isAllVersionsFilter>true</isAllVersionsFilter>
        </subPackage>
      </subPackages>
    </configuration>
  </plugin>
</plugins>

<dependencies>
  <dependency>
    <groupId>com.adobe.acs</groupId>
    <artifactId>acs-aem-commons-all</artifactId>
    <version>6.6.4</version>
    <type>zip</type>
  </dependency>
</dependencies>`;

const ACS_COMMONS_BUNDLE =
`<dependency>
  <groupId>com.adobe.acs</groupId>
  <artifactId>acs-aem-commons-bundle</artifactId>
  <version>6.6.4</version>
  <scope>provided</scope>
</dependency>`;

const ACS_COMMONS_CLOUD_SERVICE =
`<plugins>
  <plugin>
    <groupId>org.apache.jackrabbit</groupId>
    <artifactId>filevault-package-maven-plugin</artifactId>
      <configuration>
        <embeddeds>
          <embedded>
            <groupId>com.adobe.acs</groupId>
            <artifactId>acs-aem-commons-all</artifactId>
            <target>/apps/aem-demo-vendor-packages/container/install</target>
            <filter>true</filter>
            <isAllVersionsFilter>true</isAllVersionsFilter>
          </embedded>
        </embeddeds>
      </configuration>
  </plugin>
</plugins>

<dependencies>
  <dependency>
    <groupId>com.adobe.acs</groupId>
    <artifactId>acs-aem-commons-all</artifactId>
    <classifier>cloud</classifier>
    <version>6.6.4</version>
    <type>zip</type>
  </dependency>
</dependencies>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.ACS_COMMONS.title,
    url: TOPICS.ACS_COMMONS.url
  }],
  current: ARTICLE.title
}

export default function InstallACSCommons() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          ACS AEM Commons is a collection of reusable components and utilities designed to enhance the functionality of AEM. It offers a variety
          of features that help developers tackle common challenges and simplify development tasks through effective solutions.
        </section>
        <section className="pt-3">
          ACS AEM Commons should be included as a Maven dependency in your AEM project. The instructions for adding ACS AEM Commons to
          your project vary depending on the version of AEM you are using.
        </section>
        <section className="pt-3">
          The setup for ACS AEM Commons in your code base differs slightly between AEMaaCS and AEM 6.5.
        </section>
        <h2 className="text-xl mt-4">
          <strong>AEM as a Cloud Service</strong>
        </h2>
        <section>
          To include ACS AEM Commons in AEMaaCS, embed <code className="code-inline background">acs-aem-commons-all</code> and add it
          as a dependency in the container package (<strong>all</strong> module) <code className="code-inline background">pom.xml</code> as shown below.
        </section>
        <Highlight code={ACS_COMMONS_CLOUD_SERVICE} language="xml" path="all / pom.xml"/>
        <section className="pt-3">
          After installing the code, ACS AEM Commons will appear in the Tools section, as shown below.
        </section>
        <Image src={ACS_COMMONS_IN_AEMAACS} className="border mt-2"
           alt="ACS Commons in AEMaaCS">
        </Image>
        <section className="pt-3">
          To use Java APIs provided by ACS AEM Commons in your code, add <code className="code-inline background">acs-aem-commons-bundle</code> dependency
          in your <strong>core</strong> module.
        </section>
        <Highlight code={ACS_COMMONS_BUNDLE} language="xml" path="core / pom.xml"/>
        <h2 className="text-xl mt-4">
          <strong>AEM 6.5</strong>
        </h2>
        <section>
          All information of AEM as a Cloud Service above applies, but instead of using the specific <strong>classifier</strong> <code className="code-inline">cloud</code>, you don&apos;t use any classifier at all.
          Also instead of <strong>embeddeds</strong> one leverages <strong>subpackages</strong>.
        </section>
        <Highlight code={ACS_COMMONS_6_5} language="xml" path="all / pom.xml"/>
      </article>
      <Reference references={[{
        title: "Adobe Consulting Service",
        url: "https://adobe-consulting-services.github.io/acs-aem-commons/pages/maven.html"
      }]}/>
    </div>
  );
}
