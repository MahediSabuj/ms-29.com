import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";

import { CODE_COVERAGE_OSGI_CONFIGURATION as ARTICLE } from "@/lib/data/article/aem/code-coverage";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const POM_XML = `<dependency>
  <groupId>org.apache.sling</groupId>
  <artifactId>org.apache.sling.testing.osgi-mock.junit5</artifactId>
  <version>3.5.2</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-core</artifactId>
  <version>5.15.2</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-junit-jupiter</artifactId>
  <version>5.15.2</version>
  <scope>test</scope>
</dependency>`;

const APP_CONFIG_SERVICE_IMPL_TEST = `@ExtendWith(OsgiContextExtension.class)
public class AppConfigServiceImplTest {
  @Test
  public void testAppConfigService(OsgiContext osgiContext) {
    Map<String, Object> properties = new HashMap<>();
    properties.put("app.name", "aem-demo");
    properties.put("api.endpoint", "https://www.google.com");
    properties.put("client.id", "XXX");
    properties.put("client.secret", "ZZZ");

    AppConfigService appConfigService = osgiContext.registerInjectActivateService(
        new AppConfigServiceImpl(), properties);

    Assertions.assertEquals("aem-demo", appConfigService.getAppName());
    Assertions.assertEquals("https://www.google.com", appConfigService.getAPIEndpoint());
    Assertions.assertEquals("XXX", appConfigService.getClientId());
    Assertions.assertEquals("ZZZ", appConfigService.getClientSecret());
  }
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Code Coverage",
    url: "/aem/code-coverage"
  }],
  current: ARTICLE.title
}

export default function OsgiConfiguration() {
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
            Custom OSGi configurations are often required based on project needs. In a <Link className="text-blue-600" target="_blank" href="/aem/sites/custom-osgi-configuration">previous article</Link>, we discussed how to implement
            custom OSGi configurations. Now, we will cover how to write unit tests and ensure code coverage for these
            configurations using JUnit 5, OSGi Mocks, and Mockito.
          </section>
          <section className="pt-3">
            Before writing unit tests, ensure you have required dependencies in pom.xml file. These dependencies
            include <code className="code-inline background"><strong>osgi-mock.junit5</strong></code> for mocking OSGi
            services and <code className="code-inline background"><strong>mockito</strong></code> for dependency injection.
          </section>
          <Highlight code={POM_XML} language="xml" path="pom.xml"/>
          <section className="pt-4">
            For this tutorial, we will use an example OSGi configuration service from another article. You can refer <Link className="text-blue-600" target="_blank" href="/aem/sites/custom-osgi-configuration#create">this page</Link> for full implementation details.
          </section>
          <section className="pt-3">
            We use <code className="code-inline background">OsgiContext</code> from <code className="code-inline background">org.apache.sling.testing.osgi-mock.junit5</code> to test our service implementation.
            The following unit test will ensure that OSGi configurations are correctly read and applied in AEM projects, providing proper test coverage.
          </section>
          <Highlight code={APP_CONFIG_SERVICE_IMPL_TEST} language="java" path="AppConfigServiceImplTest.java"/>
          <section className="pt-4">
            If you have implemented it using a different approach, let&apos;s discuss.
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
