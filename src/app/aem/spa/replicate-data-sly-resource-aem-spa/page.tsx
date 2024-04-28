import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DATA_SLY_RESOURCE_IN_AEM_SPA as ARTICLE } from "@/lib/data/article/aem/spa";

import TEASER_AUTHOR_VIEW from './assets/Teaser_Author_View.webp';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const TEASER_COMPONENT = 
`<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
  xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="cq:Component"
  cq:isContainer="{Boolean}true"
  jcr:title="Teaser"
  sling:resourceSuperType="core/wcm/components/container/v1/container"
  componentGroup="AEM React (SPA) - Content"/>`;

const TEASER_CQ_TEMPLATE = 
`<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
  xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured">
  <teaser_text jcr:primaryType="nt:unstructured"
    sling:resourceType="aem-react-spa/components/text"/>
  <teaser_action jcr:primaryType="nt:unstructured"
    sling:resourceType="aem-react-spa/components/button"/>
  <teaser_image jcr:primaryType="nt:unstructured"
    sling:resourceType="aem-react-spa/components/image"/>
</jcr:root>`;

const TEASER_SLING_MODEL = 
`@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { LayoutContainer.class, ComponentExporter.class },
  resourceType = Teaser.RESOURCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class Teaser implements LayoutContainer {
  protected static final String RESOURCE_TYPE = "aem-react-spa/components/teaser";

  @Self
  @Delegate(excludes = DelegationExclusion.class)
  @Via(type = ResourceSuperType.class)
  private LayoutContainer layoutContainer;

  @Override
  public String getExportedType() {
    return TextImageImpl.RESOURCE_TYPE;
  }

  private interface DelegationExclusion {
    String getExportedType();
  }
}`;

const TEASER_HTML = 
`<div className='cmp-teaser'>
  <div className='cmp-teaser__text'>
    {this.childComponents[0]}
  </div>
  <div className='cmp-teaser__action'>
    {this.childComponents[1]}
  </div>
  <div className='cmp-teaser__image'>
    {this.childComponents[2]}
  </div>
</div>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM SPA",
    url: "/aem/spa"
  }],
  current: ARTICLE.title
}

export default function DataSlyResourceInSPA() {
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
            In traditional AEM development, composite components are built by combining several atomic components 
            through the data-sly-resource statement. For instance, Teaser component is built using image, text, and 
            button components. However, in the SPA paradigm, neither React nor Angular implementations offer direct 
            alternatives for this approach.
          </section>
          <section className="pt-3">
            To implement a feature similar to <code className="code-inline">data-sly-resource</code> in a Single 
            Page Application (SPA), we can utilize the Container core component.
          </section>
          <Highlight code={TEASER_COMPONENT} language="xml" path="teaser / .content.xml"/>
          <Highlight code={TEASER_CQ_TEMPLATE} language="xml" path="teaser / _cq_template / .content.xml"/>
          <Highlight code={TEASER_SLING_MODEL} language="java" path="Teaser.java"/>
          <Highlight code={TEASER_HTML} language="html" path="Teaser.html"/>
          <Image src={TEASER_AUTHOR_VIEW} className="border py-1 my-1"
            alt="Teaser Author View">
          </Image>
        </div>  
      </article>
    </div>
  );
}
