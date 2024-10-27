import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import { CUSTOM_SLING_MODEL_INJECTOR as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ANNOTATION =
`@Target({ METHOD, FIELD, PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
@InjectAnnotation
@Source(TagProperty.SOURCE)
public @interface TagProperty {
  String name() default StringUtils.EMPTY;

  String SOURCE = "tag-property";

  InjectionStrategy injectionStrategy() default InjectionStrategy.DEFAULT;
}`;

const ANNOTATION_PROCESSOR_FACTORY =
`@Component(service = StaticInjectAnnotationProcessorFactory.class)
public class TagPropertyAnnotationProcessorFactory 
    implements StaticInjectAnnotationProcessorFactory {
    
  @Override
  public InjectAnnotationProcessor2 createAnnotationProcessor(AnnotatedElement element) {
    return Optional.ofNullable(
      element.getAnnotation(TagProperty.class)
    ).map(TagPropertyAnnotationProcessorFactory.PagePropertyAnnotationProcessor::new)
    .orElse(null);
  }

  private static class PagePropertyAnnotationProcessor 
      extends AbstractInjectAnnotationProcessor2 {
      
    private final TagProperty annotation;

    public PagePropertyAnnotationProcessor(TagProperty annotation) {
      this.annotation = annotation;
    }

    @Override
    public String getName() {
      return StringUtils.isBlank(annotation.name()) ? null : annotation.name();
    }

    @Override
    public InjectionStrategy getInjectionStrategy() {
      return annotation.injectionStrategy();
    }
  }
}`;

const INJECTOR =
`@Component(service = Injector.class)
public class TagPropertyInjector implements Injector {
  private static final Logger logger = LoggerFactory.getLogger(TagPropertyInjector.class);

  @NotNull
  @Override
  public String getName() {
    return TagProperty.SOURCE;
  }

  @Nullable
  @Override
  public Object getValue(
    Object adaptable, 
    String name, 
    Type declaredType, 
    AnnotatedElement element, 
    DisposalCallbackRegistry callbackRegistry
  ) {
    if (element.isAnnotationPresent(TagProperty.class)) {
      TagProperty annotation = element.getAnnotation(TagProperty.class);

      ResourceResolver resourceResolver = getResourceResolver(adaptable);
      if (resourceResolver == null) {
        logger.error("ResourceResolver is null, cannot inject tag property");
        return null;
      }

      TagManager tagManager = resourceResolver.adaptTo(TagManager.class);
      if (tagManager == null) {
        logger.error("TagManager is null, cannot inject tag property");
        return null;
      }

      String key =  StringUtils.defaultIfEmpty(annotation.name(), name);
      final String[] tagKeys = getResource(adaptable).getValueMap().get(key, String[].class);
      if (tagKeys == null || tagKeys.length == 0){
        return null;
      }

      final Stream<Tag> tagStream = Arrays.stream(tagKeys).map(tagManager::resolve);
      return tagStream.filter(Objects::nonNull).findFirst().orElse(null);
    }

    return null;
  }

  private static ResourceResolver getResourceResolver(Object adaptable) {
    if (adaptable instanceof SlingHttpServletRequest) {
      return ((SlingHttpServletRequest) adaptable).getResourceResolver();
    }
    if (adaptable instanceof Resource) {
      return ((Resource) adaptable).getResourceResolver();
    }

    return null;
  }

  private static Resource getResource(Object adaptable) {
    if (adaptable instanceof SlingHttpServletRequest) {
      return ((SlingHttpServletRequest) adaptable).getResource();
    }
    if (adaptable instanceof Resource) {
      return (Resource) adaptable;
    }

    return null;
  }
}`;

const SLING_MODEL =
`@Model(adaptables = SlingHttpServletRequest.class)
public class ArticleModel {
  @TagProperty
  private Tag topics;

  public Tag getTopics() {
    return topics;
  }
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function ContextAwareConfiguration() {
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
            Sling Model Injectors allow developers to retrieve and inject data directly into Sling models. However, sometimes, standard
            injectors aren&apos;t enough when you need to pull custom or complex data, such as tag properties or content fragments. In such cases,
            custom Sling Model injectors can be developed to meet specific data requirements.
          </section>
          <section className="pt-3">
            This post will walk you through the process of creating a custom Sling Model injector with a custom annotation. We&apos;ll focus on
            enabling Sling Models to inject Tag object directly from component property into your model.
          </section>
          <section className="pt-3">
            To inject a custom property, we&apos;ll create a custom annotation <code className="code-inline">@TagProperty</code>, to designate fields
            in the Sling model that require specific data injection. There are three parts to consider in order to build a custom injector:
            <ul className="list-decimal ml-6 pt-1 pl-2.5">
              <li>
                <strong>
                  <Link className="text-blue-600" href="#custom-annotation">Custom Annotation</Link>:
                </strong> Defines the properties for injection.
              </li>
              <li>
                <strong>
                  <Link className="text-blue-600" href="#annotation-processor">Annotation Processor</Link>:
                </strong> Manages annotation-based injection.
              </li>
              <li>
                <strong>
                  <Link className="text-blue-600" href="#custom-injector">Custom Injector</Link>:
                </strong> Handles the actual injection of values into the model.
              </li>
            </ul>
          </section>
          <h2 id="custom-annotation" className="text-xl mt-4">
            <strong>Custom Annotation</strong>
          </h2>
          <section>
            Create a new <code className="code-inline">@TagProperty</code> annotation, similar to standard annotations like <code className="code-inline">@ValueMapValue</code> or <code className="code-inline">@RequestAttribute</code>, to be used within the Sling Model.
          </section>
          <Highlight code={ANNOTATION} language="java" path="models / injectors / annotations / TagProperty.java"/>
          <h2 id="annotation-processor" className="text-xl mt-4">
            <strong>Annotation Processor</strong>
          </h2>
          <section>
            An Annotation Processor defines how custom annotations process and inject values, interpreting parameters such as injection strategy and default values.
            By implementing the <code className="code-inline">StaticInjectAnnotationProcessorFactory</code> interface, it connects the custom annotation with the injector,
            mapping annotation attributes to the Sling framework.
          </section>
          <Highlight code={ANNOTATION_PROCESSOR_FACTORY} language="java" path="models / injectors / annotations / impl / TagPropertyAnnotationProcessorFactory.java"/>
          <h2 id="custom-injector" className="text-xl mt-4">
            <strong>Custom Injector</strong>
          </h2>
          <section>
            The Injector retrieves actual data from the AEM JCR repository and contains the core logic for handling the custom annotation.
          </section>
          <Highlight code={INJECTOR} language="java" path="models / injectors  / TagPropertyInjector.java"/>
          <section className="pt-6">
            The custom injector is now ready for use and can be used to any Sling Model as shown below.
          </section>
          <Highlight code={SLING_MODEL} language="java" path="components / models / ArticleModel.java"/>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
