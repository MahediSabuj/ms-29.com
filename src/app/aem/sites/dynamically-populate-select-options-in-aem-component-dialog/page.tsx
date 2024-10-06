import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import { DYNAMICALLY_POPULATE_SELECT_OPTIONS_IN_AEM_COMPONENT_DIALOG as ARTICLE } from "@/lib/data/article/aem/sites";

import ACS_COMMONS_GENERIC_LIST from './assets/acs-commons-generic-list.png';
import ACS_COMMONS_GENERIC_LIST_ITEMS from './assets/acs-commons-generic-list-items.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ACS_COMMONS =
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

const ARTICLE_TYPE_SELECT_LIST =
`<articleTypes jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/foundation/form/select"
  fieldLabel="Article Types"
  name="./articleTypes">
  <datasource jcr:primaryType="nt:unstructured"
    sling:resourceType="acs-commons/components/utilities/genericlist/datasource"
    path="/etc/acs-commons/lists/article-type" />
</articleTypes>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function PopulateSelectOptions() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">

        </section>
        <Highlight code={ACS_COMMONS} language="xml" path="all / pom.xml"/>
        <Image src={ACS_COMMONS_GENERIC_LIST} className="border mt-2" width="500"
          alt="ACS Commons Generic List">
        </Image>
        <Image src={ACS_COMMONS_GENERIC_LIST_ITEMS} className="border mt-2"
           alt="ACS Commons Generic List Items">
        </Image>
        <Highlight code={ARTICLE_TYPE_SELECT_LIST} language="xml" path="article / _cq_dialog / .content.xml"/>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
