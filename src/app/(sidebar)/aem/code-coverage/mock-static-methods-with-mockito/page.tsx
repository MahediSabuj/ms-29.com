import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import { MOCK_STATIC_METHODS_MOCKITO as ARTICLE } from "@/lib/data/article/aem/code-coverage";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const POWER_MOCKITO =
`<properties>
  <powermock.version>2.0.9</powermock.version>
</properties>

<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
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
  <dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>3.3.3</version>
    <scope>test</scope>
  </dependency>
</dependencies>`;

const APACHE_HTTP_CLIENT =
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

const APACHE_HTTP_CLIENT_POWERMOCKITO_CODE_COVERAGE =
`@RunWith(PowerMockRunner.class)
@PrepareForTest({ HttpClientBuilder.class })
public class RestClientServiceImplTest {
  @Mock
  CloseableHttpClient httpClient;

  @Mock
  HttpClientBuilder httpClientBuilder;

  @InjectMocks
  RestClientServiceImpl restClient;

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

const MOCKITO_INLINE =
`<properties>
  <junit5.version>5.4.0</junit5.version>
  <mockito.version>3.4.0</mockito.version>
</properties>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.junit</groupId>
      <artifactId>junit-bom</artifactId>
      <version>\${junit5.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>\${mockito.version}</version>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-junit-jupiter</artifactId>
    <version>\${mockito.version}</version>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-inline</artifactId>
    <version>\${mockito.version}</version>
    <scope>test</scope>
  </dependency>
</dependencies>`;

const APACHE_HTTP_CLIENT_MOCKITO_INLINE_CODE_COVERAGE =
`@ExtendWith(MockitoExtension.class)
public class RestClientServiceImplTest {
  @Mock
  CloseableHttpClient httpClient;

  @Mock
  HttpClientBuilder httpClientBuilder;

  @InjectMocks
  RestClientServiceImpl restClient;

  @BeforeEach
  public void setup() {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void getHttpClientTest() {
    try(MockedStatic<HttpClientBuilder> mocked = Mockito.mockStatic(HttpClientBuilder.class)) {
      httpClientMockedStatic.when(HttpClientBuilder::create).thenReturn(httpClientBuilder);
      Mockito.when(httpClientBuilder.build()).thenReturn(httpClient);
      
      Assertions.assertNotNull(restClient);
      HttpClient httpClient = restClient.getHttpClient();
      Assertions.assertNotNull(httpClient); 
    }
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
          <h2 className="text-xl mt-4">
            <strong>Utilizing PowerMockito with Mockito &lt; v3.4.0</strong>
          </h2>
          <section>
            Prior to Mockito v3.4.0, PowerMockito was utilized to mock static methods and was compatible with <strong>JUnit 4</strong> which you can integrate by
            adding the following dependency to the pom.xml file.
          </section>
          <Highlight code={POWER_MOCKITO} language="xml" path="pom.xml"/>
          <section className="pt-3">
            In AEM projects, there&apos;s often a need to interact with third-party APIs. Let&apos;s use Apache <code className="code-inline">HttpClient</code>, commonly 
            used for invoking external APIs, as an example to write unit test using PowerMockito.
          </section>
          <Highlight code={APACHE_HTTP_CLIENT} language="java" path="RestClientServiceImpl.java"/>
          <Highlight code={APACHE_HTTP_CLIENT_POWERMOCKITO_CODE_COVERAGE} language="java" path="RestClientServieimplTest.java"/>
        </div>
        <h2 className="text-xl mt-4">
          <strong>Utilizing Mockito-Inline with Mockito &lt; v5.0.0</strong>
        </h2>
        <section>
          Prior to Mockito v5.0.0, Mockito-Inline was utilized to mock static methods and was compatible with <strong>JUnit 5</strong> which you can integrate by
          adding the following dependency to the pom.xml file.
        </section>
        <Highlight code={MOCKITO_INLINE} language="xml" path="pom.xml"/>
        <section className="pt-3">
          Code coverage for the same <code className="code-inline">RestClientService</code> from previous example can be achieved using Mockito-Inline as shown below.
        </section>
        <Highlight code={APACHE_HTTP_CLIENT_MOCKITO_INLINE_CODE_COVERAGE} language="java" path="RestClientServieimplTest.java"/>
        <section className="mt-4">
          <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600 inline-block " width={20} height={20}/> From Mockito v5.0.0 onwards, mockito-inline is no longer required.
          The same code coverage implementation works as expected, similar to how it works with mockito-inline.
        </section>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
