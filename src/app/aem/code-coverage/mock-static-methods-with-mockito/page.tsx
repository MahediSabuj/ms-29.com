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

const apache_http_client = 
`public HttpClient getHttpClient(int... timeout) {
  HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();

  int connectionTimeout = Arrays.stream(timeout).findFirst()
        .orElse(CONNECTION_TIMEOUT);
  
  RequestConfig config = RequestConfig.custom()
        .setConnectTimeout(connectionTimeout * 1000)
        .setConnectionRequestTimeout(connectionTimeout * 1000)
        .setSocketTimeout(connectionTimeout * 1000).build();

  httpClientBuilder.setDefaultRequestConfig(config);
  return httpClientBuilder.build();
}`;

const apache_http_client_code_coverage = 
`@RunWith(PowerMockRunner.class)
@PrepareForTest({ HttpClientBuilder.class })
public class RestClientServieimplTest {
  @Mock
  CloseableHttpClient httpClient;

  @Mock
  HttpClientBuilder httpClientBuilder;

  @InjectMocks
  RestClientServieImpl restClient;

  @Before
  public void setup() {
    MockitoAnnotations.initMocks(this);

    PowerMockito.mockStatic(HttpClientBuilder.class);
    Mockito.when(HttpClientBuilder.create()).thenReturn(httpClientBuilder);
    Mockito.when(httpClientBuilder.build()).thenReturn(httpClient);
  }

  @Test
  public void getHttpClientTest() {
    Assert.assertNotNull(restClient);
    HttpClient httpClient = restClient.getHttpClient();
    Assert.assertNotNull(httpClient);
  }
}`;

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
            Over the years, different approaches have been adopted for mocking static methods. Let&apos;s delve into these approaches in detail.
          </section>
          <h2 id="power-mockito" className="text-xl mt-4">
            <strong>Utilizing PowerMockito with Mockito Prior to v3.4.0</strong>
          </h2>
          <section>
            Prior to Mockito v3.4.0, PowerMockito was utilized to mock static methods and was compatible with JUnit 4 which you can integrate by 
            adding the following dependency to the pom.xml file.
          </section>
          <Highlight code={power_mockito} language="xml" path="pom.xml"/>
          <section className="pt-3">
            In AEM projects, there&apos;s often a need to interact with third-party APIs. Let&apos;s use Apache <code className="code-inline">HttpClient</code>, commonly 
            used for invoking external APIs, as an example to write unit test using PowerMockito.
          </section>
          <Highlight code={apache_http_client} language="java" path="RestClientServieimpl.java"/>
          <Highlight code={apache_http_client_code_coverage} language="java" path="RestClientServieimplTest.java"/>
        </div>
      </article>
    </div>
  );
}
