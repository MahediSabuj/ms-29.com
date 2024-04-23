import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { MOCK_STATIC_METHODS_MOCKITO as ARTICLE } from "@/lib/data/article/aem/code-coverage";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const power_mockito = 
`<properties>
  <powermock.version>2.0.2</powermock.version>
</properties>
<dependencies>
  <dependency>
    <groupId>org.powermock</groupId>
    <artifactId>powermock-module-junit4</artifactId>
    <version>\${powermock.version}</version>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>org.powermock</groupId>
    <artifactId>powermock-api-mockito2</artifactId>
    <version>\${powermock.version}</version>
    <scope>test</scope>
  </dependency>
</dependencies>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Code Coverage",
    url: "/aem/code-coverage"
  }],
  current: ARTICLE.title
}

export default function MockStaticMethod() {
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
            In the pursuit of clean object-oriented code, the need to mock static methods may suggest design flaws or code smells, 
            prompting consideration for refactoring. Nevertheless, there are situations where mocking static methods remains crucial 
            despite refactoring efforts.
          </section>
          <section className="pt-3">
            Over the years, different approaches have been adopted for mocking static methods. Prior to Mockito v3.4.0, PowerMockito was 
            utilized to mock static methods and was compatible with JUnit 4 which you can integrate by adding the following dependency to the pom.xml file.
          </section>
          <Highlight code={power_mockito} language="xml" path="pom.xml"/>
        </div>
      </article>
    </div>
  );
}
