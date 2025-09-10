import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import HighlightCode from "@/components/highlight/highlight";
import Reference from "@/components/reference/reference";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { SLING_MODEL_DELEGATION_PATTERN as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const BUTTON_PROXY_COMPONENT = 
`<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
    xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="cq:Component"
  jcr:title="Link &amp; Button"
  sling:resourceSuperType="core/wcm/components/button/v2/button"
  componentGroup="AEM Demo - Content"/>`;

const BUTTON_SLING_MODEL = 
`@Model(adaptables = SlingHttpServletRequest.class, 
  adapters = Button.class, 
  resourceType = "aem-demo/components/button")
public class ButtonLink implements Button {

  @ValueMapValue
  private String textColor;

  @ValueMapValue
  private String backgroundColor;
  
  @Self @Via(type = ResourceSuperType.class)
  private Button coreButton;

  @Override
  public String getText() {
    return coreButton.getText();
  }

  @Override
  public Link getButtonLink() {
    return coreButton.getButtonLink();
  }

  // ... rest of the methods implementation ...

  public String getTextColor() {
    return textColor;
  }

  public String getBackgroundColor() {
    return backgroundColor;
  }
}`;

const BUTTON_SLING_MODEL_LOMBOK =
`@Model(adaptables = SlingHttpServletRequest.class, 
  adapters = Button.class, 
  resourceType = "aem-demo/components/button")
public class ButtonLink implements Button {

  @ValueMapValue
  private String textColor;

  @ValueMapValue
  private String backgroundColor;
  
  @Delegate
  @Self @Via(type = ResourceSuperType.class)
  private Button coreButton;

  public String getTextColor() {
    return textColor;
  }

  public String getBackgroundColor() {
    return backgroundColor;
  }
}`;

const BUTTON_SLING_MODEL_LOMBOK_EXCLUDE = 
`@Model(adaptables = SlingHttpServletRequest.class, 
  adapters = Button.class, 
  resourceType = "aem-demo/components/button")
public class ButtonLink implements Button {

  @ValueMapValue
  private String textColor;

  @ValueMapValue
  private String backgroundColor;
  
  @Delegate(excludes = DelegationExclusion.class)
  @Self @Via(type = ResourceSuperType.class)
  private Button coreButton;

  @Override
  public Link getButtonLink() {
    // ... custom implementation ...
    return coreButton.getButtonLink();
  }

  public String getTextColor() {
    return textColor;
  }

  public String getBackgroundColor() {
    return backgroundColor;
  }

  private interface DelegationExclusion {
    String getButtonLink();
  }
}`

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function SlingModelDelegationPattern() {
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
            AEM Core Components are a standard set components to be used with AEM. Built with Adobe&apos;s best practices and 
            standards, Core Components provide a baseline set of functionality for any Sites implementation. However, it&apos;s 
            often necessary to customize the functionality of core components to address project-specific requirements. The business 
            logic for the core components is implemented in Sling Models, which can be customized using the delegation pattern.
          </section>
          <section className="mt-4">
            For simplicity, let&apos;s customize the Button component by introducing two dialog fields: text color and background color.
            Following Adobe&apos;s best practices, we&apos;ll create a new proxy component to use the core component. For example, create 
            the component in <code className="code-inline background">/apps/aem-demo/components/button</code>. This structure is required 
            for the delegation pattern and keeps the existing behavior intact.
            <HighlightCode code={BUTTON_PROXY_COMPONENT} language="xml" path="button / .content.xml"/>
          </section>
          <section className="mt-6">
            For the sake of brevity, let&apos;s not show how to add two new dialog fields. Now, let&apos;s create a new Sling Model that 
            extends the Core Button component. The Sling Model below uses the Delegation Pattern with existing behavior and fetches two 
            new properties. However, this approach requires to implement all the methods of the interface.
            <HighlightCode code={BUTTON_SLING_MODEL} language="java" path="ButtonLink.java"/>
          </section>
          <section className="mt-4">
            As you can understand, this approach simplifies extending the core component and adding new functionality. You might be concerned 
            about the requirement to implement all interface methods. In such cases, you can use Lombok to simplify the code.
          </section>
          <section className="mt-4">
            <code className="code-inline background">@Delegate</code> annotation is used to delegate the methods to the core component. It
            automatically generates implementations for ALL public methods from the <code className="code-inline background">Button</code> interface
            and eliminates the need to manually write boilerplate delegation code.
            <HighlightCode code={BUTTON_SLING_MODEL_LOMBOK} language="java" path="ButtonLink.java"/>
          </section>
          <section className="mt-4">
            However, there are scenarios where you may want to exclude certain methods from the delegation. For example, to exclude the <code className="code-inline background">getButtonLink</code> method,
            you can use the <code className="code-inline background">@Delegate(excludes = DelegationExclusion.class)</code> annotation. Then specify the method signatures 
            in the DelegationExclusion interface and provide your own implementation for those methods.
            <HighlightCode code={BUTTON_SLING_MODEL_LOMBOK_EXCLUDE} language="java" path="ButtonLink.java"/>
          </section>
          <section className="mt-6">
            The delegation pattern with Lombok significantly simplifies customizing AEM Core Components. By using <code className="code-inline background">@Delegate</code>, you can eliminate 
            boilerplate code and focus on your custom functionality while preserving the existing behavior. This approach maintains Adobe&apos;s best practices and ensures your customizations 
            remain clean and maintainable for enterprise AEM implementations.
          </section>
        </div>  
      </article>
      <Reference references={[{
        title: "Delegation Pattern for Sling Models",
        url: "github.com/adobe/aem-core-wcm-components/wiki/Delegation-Pattern-for-Sling-Models"
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
