import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import HighlightCode from "@/components/highlight/highlight";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";

import { CODE_COVERAGE_SLING_MODEL_DELEGATION_PATTERN as ARTICLE } from "@/lib/data/article/aem/code-coverage";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const BUTTON_CONTENT =
`{
  "button": {
    "jcr:primaryType": "nt:unstructured",
    "jcr:title": "Discussion Guide",
    "textColor": "text-primary",
    "backgroundColor": "bg-primary",
    "icon": "adobe",
    "sling:resourceType": "aem-demo/components/button"
  }
}`;

const AEM_DEMO_BUTTON_COMPONENT =
`{
  "button": {
    "jcr:primaryType": "cq:Component",
    "sling:resourceSuperType": "core/wcm/components/button/v2/button",
    "componentGroup": "AEM Demo - Content",
    "jcr:title": "Button",
    "sling:resourceType": "aem-demo/components/button"
  }
}`;

const CORE_BUTTON_COMPONENT =
`{
  "button": {
    "jcr:primaryType": "cq:Component",
    "componentGroup": "Core WCM Components",
    "jcr:title": "Button",
    "sling:resourceType": "core/wcm/components/button/v2/button"
  }
}`;

const BUTTON_SLING_MODEL = 
`@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { Button.class },
  resourceType = ButtonImpl.RESOURCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class ButtonImpl implements Button {
  protected static final String RESOURCE_TYPE = "aem-demo/components/button";

  @Self @Via(type = ResourceSuperType.class)
  @Delegate(excludes = DelegationExclusion.class)
  private com.adobe.cq.wcm.core.components.models.Button coreButton;

  @Override
  public String getText() {
    // ... custom implementation ...
    return button.getText();
  }

  @Override
  public String getExportedType() {
    return ButtonImpl.RESOURCE_TYPE;
  }

  private interface DelegationExclusion {
    String getText();
    String getExportedType();
  }
}`;

const BUTTON_UNIT_TEST = 
`@ExtendWith(AemContextExtension.class)
public class ButtonImplTest {

  private final AemContext context = new AemContextBuilder(ResourceResolverType.JCR_MOCK)
        .plugin(ContextPlugins.CORE_COMPONENTS)
        .build();

  @BeforeEach
  public void setUp() {
    // Load component definitions from JSON
    context.load().json("/apps/aem-demo/components/button.json", "/apps/aem-demo/components");
    context.load().json("/apps/core/components/button.json", "/apps/core/wcm/components/button/v2");
        
    // Load test content
    context.load().json("/content/aem-demo/components/button.json", "/content");
    context.currentResource("/content/button");
        
    // Register all necessary models
    context.addModelsForClasses(ButtonImpl.class);
  }

  @Test
  public void testButton() {
    ModelFactory modelFactory = context.getService(ModelFactory.class);
    Button button = Objects.requireNonNull(modelFactory)
        .createModel(context.request(), ButtonImpl.class);

    Assertions.assertNotNull(button);
    Assertions.assertEquals(ButtonImpl.RESOURCE_TYPE, button.getExportedType());
    Assertions.assertEquals("text-primary", button.getTextColor());
    Assertions.assertEquals("bg-primary", button.getBackgroundColor());
    Assertions.assertEquals("Discussion Guide", button.getText());
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
          <section className="mt-6">
            The Sling Model Delegation pattern allows extending Core Components functionality while maintaining the original API contract. 
            In a <Link className="text-blue-600" target="_blank" href="/aem/sites/sling-model-delegation-pattern-with-lombok">previous article</Link>, we 
            discussed how to implement Sling Model delegation pattern. Now, we will cover how to write comprehensive unit tests and ensure code coverage for these 
            delegated Sling Models using JUnit 5, AEM Mocks, and proper test setup.
          </section>
          <section className="mt-4">
            For this tutorial, we will use an example Button component that extends the Core WCM Components Button 
            using the delegation pattern. We&apos;ll demonstrate how to properly test both the delegated functionality 
            and any custom overridden methods.
          </section>
          <section className="mt-4">
            First, let&apos;s examine the test content structure. We need to set up proper JSON files that represent 
            both the component definitions and the content structure for testing.
          </section>
          <HighlightCode code={BUTTON_CONTENT} language="json" path="content / aem-demo / components / button.json"/>
          <section className="mt-4">
            The component definition files are essential for the delegation pattern to work correctly in unit tests. 
            These JSON files establish the component hierarchy and resource type relationships that AEM Mocks needs to resolve the 
            <code className="code-inline background">sling:resourceSuperType</code> delegation chain. Without proper component definitions, 
            the <code className="code-inline background">@Via(type = ResourceSuperType.class)</code> injection will fail, causing test failures.
          </section>
          <HighlightCode code={AEM_DEMO_BUTTON_COMPONENT} language="json" path="apps / aem-demo / components / button.json"/>
          <HighlightCode code={CORE_BUTTON_COMPONENT} language="json" path="apps / core /components / button.json"/>
          <section className="mt-4">
            Here&apos;s the Sling Model implementation we&apos;ll be testing. This demonstrates the delegation pattern 
            where most functionality is delegated to the Core Component, with specific methods overridden for customization:
          </section>
          <HighlightCode code={BUTTON_SLING_MODEL} language="java" path="ButtonImpl.java"/>
          <section className="mt-4">
            Now, let&apos;s implement comprehensive unit tests using <code className="code-inline background">AemContext</code>. The test setup includes loading 
            component definitions, test content, and properly registering the Sling Models for testing.
          </section>
          <HighlightCode code={BUTTON_UNIT_TEST} language="java" path="ButtonImplTest.java"/>
          <section className="mt-4">
            By following this testing approach, you can maintain high code coverage and ensure reliability 
            when extending Core Components through the Sling Model delegation pattern.
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
