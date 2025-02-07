import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";

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
</dependency>`;

const APP_CONFIG_SERVICE_IMPL_TEST = `@ExtendWith(OsgiContextExtension.class)
public class AppConfigServiceImplTest {
  @Test
  public void testAppConfigService(OsgiContext osgiContext) {
    Map<String, Object> properties = new HashMap<>();
    properties.put("app.name", "aem-commons");
    properties.put("api.endpoint", "https://www.google.com");
    properties.put("client.id", "XXX");
    properties.put("client.secret", "ZZZ");

    AppConfigService appConfigService = osgiContext.registerInjectActivateService(
        new AppConfigServiceImpl(), properties);

    Assertions.assertEquals("aem-commons", appConfigService.getAppName());
    Assertions.assertEquals("https://www.google.com", appConfigService.getAPIEndpoint());
    Assertions.assertEquals("XXX", appConfigService.getClientId());
    Assertions.assertEquals("ZZZ", appConfigService.getClientSecret());
  }
}`;

const MOCKITO_CORE_UPDATE = `<dependency>
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
            custom OSGi configurations; now, we will share how to write code coverage for them.
          </section>
          <section className="pt-3">

          </section>
          <Highlight code={POM_XML} language="xml" path="pom.xml"/>
          <Highlight code={APP_CONFIG_SERVICE_IMPL_TEST} language="java" path="AppConfigServiceImplTest.java"/>
          <Highlight code={MOCKITO_CORE_UPDATE} language="xml" path="pom.xml"/>
        </div>
      </article>
    </div>
  );
}
