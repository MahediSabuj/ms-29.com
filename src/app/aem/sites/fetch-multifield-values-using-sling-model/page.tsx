import { Metadata } from "next";

import Article from "@/components/article/article";
import { FETCH_MULTIFIELD_SLING_MODEL as ARTICLE } from "@/lib/data/article/aem/sites";
import Highlight from "@/components/highlight/highlight";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const multifield =
`<relatedArticles jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
  fieldLabel="Related Articles"
  composite="{Boolean}true"
  required="{Boolean}true">
  <field jcr:primaryType="nt:unstructured"
    sling:resourceType = "granite/ui/components/coral/foundation/container"
    name="./relatedArticles">
    <items jcr:primaryType="nt:unstructured">
      <articleTitle jcr:primaryType="nt:unstructured"
        sling:resourceType = "granite/ui/components/coral/foundation/form/textfield"
        fieldLabel="Article Title"
        name="./title"/>
      <articleDetailsPage jcr:primaryType="nt:unstructured"
        sling:resourceType="cq/gui/components/coral/common/form/pagefield"
        fieldLabel="Article Details Page"
        name="./detailsPage"
        rootPath="/content/aem-demo"/>
    </items>
  </field>
</relatedArticles>`;

const content =
`<article jcr:primaryType="nt:unstructured"
  sling:resourceType="aem-demo/components/article"
  title="Adobe AEM Community Advisor"
  author="Mahedi Sabuj">
  <relatedArticles jcr:primaryType="nt:unstructured">
    <item0 jcr:primaryType="nt:unstructured"
      title="Experience League Community"
      detailsPage="/content/aem-demo/us/en/aem/community"/>
  </relatedArticles>
</article>`;

const article =
`@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { Article.class },
  resourceType = { Article.RESOURCE_TYPE },
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class Article {
  protected static final String RESOURCE_TYPE = "aem-demo/components/article";
  
  @Getter  
  @ValueMapValue
  String title;
  
  @Getter
  @ValueMapValue
  String author;

  @Getter
  @ChildResource
  List<ArticleItem> relatedArticles;
}`;

const article_item =
`@Model(
  adaptables = Resource.class,
  adapters = { ArticleItem.class },
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class ArticleItem {
  @Getter
  @ValueMapValue
  String title;
  
  @Getter
  @ValueMapValue
  String detailsPage;
}`;

const article_html =
`<div data-sly-use.article="com.aem.demo.core.components.models.Article"
  data-sly-use.templates="core/wcm/components/commons/v1/templates.html"
  data-sly-test.hasContent="\${article.title}"
  class="article__inner">
  <div data-sly-list.item="\${article.relatedArticles}">
    <a href="\${item.detailsPage @ context = 'uri'}">
      \${item.title}
    </a>
  </div>  
</div>
<sly data-sly-call="\${templates.placeholder @ 
  isEmpty = !hasContent, classAppend = 'cmp-article'}"/>`;

export default function FetchMultiField() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-6">
          In accordance with specific project requirements, there might be a need to incorporate Multifield within the
          component dialog. Let&apos;s explore how to retrieve Multifield data and effectively utilize it in HTL.
        </div>
        <div className="pt-2">
          Here is a sample cq_dialog allowing AEM authors to enter multiple article items.
        </div>
        <Highlight code={multifield} language="xml" path="article / _cq_dialog / .content.xml"/>
        <div className="pt-1">
          For demonstration purposes, we&apos;ve included an option for the article title. However, you can also fetch the title
          directly from the page itself, depending on your project requirements.
        </div>
        <div className="pt-6">
          After authoring the component dialog, multifield data is stored in the content repository as shown below.
        </div>
        <Highlight code={content} language="xml" path="content / aem-demo / home"/>
        <div className="pt-6">
          To retrieve this data, Sling Model can be utilized. Using <code className="code-inline">@ChildResource</code> annotation injectors, we can adapt them
          to the target type (e.g., <code className="code-inline">ArticleItem</code>) and populate them with all child resources of the resource identified by
          the specified name.
        </div>
        <Highlight code={article} language="java" path="components / model / Article.java"/>
        <div className="py-1.5"></div>
        <Highlight code={article_item} language="java" path="components / model / ArticleItem.java"/>
        <div className="pt-6">
          To showcase related articles in the component&apos;s HTML, you can iterate through the list of articles using <code className="code-inline">data-sly-list</code> and
          display their information accordingly.
        </div>
        <Highlight code={article_html} language="html" path="article / article.html"/>
        <div className="pt-1">
          You can externalize the <code className="code-inline">detailsPage</code> value according to your business requirements.
        </div>
      </article>
    </div>
  );
}
