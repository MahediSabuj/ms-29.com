import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { CONTEXT_AWARE_CONFIGURATION as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const CA_CONFIG_XML = 
`<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
    xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="nt:unstructured"
  contentPath="/content/aem-demo"
  siteDomain="http://local.aemdemo.com"
  approverGroup="aem-demo-content-approver"/>`;

const SITE_CONFIG =
`@Configuration(name = "siteConfig", label = "AEM Demo Site Configuration")
public @interface SiteConfig {
    @Property(label = "Content Path")
    String contentPath();

    @Property(label = "Site Domain")
    String siteDomain();

    @Property(label = "Content Approver Group")
    String approverGroup();
}`;

const SITE_CONFIG_SERVICE =
`@Component(service = { SiteConfigService.class })
public class SiteConfigServiceImpl implements SiteConfigService {
  @Override
  public SiteConfig getSiteConfig(Resource resource) {
    ConfigurationBuilder configurationBuilder = resource.adaptTo(ConfigurationBuilder.class);
    return configurationBuilder != null ? configurationBuilder.as(SiteConfig.class) : null;
  }
}`;

const SLING_MODEL =
`@Model(
  adaptables = { SlingHttpServletRequest.class }, 
  adapters = { PageConfig.class })
public class PageConfigImpl implements PageConfig {

    @OSGiService
    private SiteConfigService configService;

    @SlingObject
    protected Resource resource;

    private SiteConfig config;

    @PostConstruct
    protected void init() {
      this.config = configService.getSiteConfig(resource);
    }

    @Override
    public String getContentPath() {
        return config != null ? config.contentPath() : null;
    }

    @Override
    public String getSiteDomain() {
        return config != null ? config.siteDomain() : null;
    }
}`;

const AEM_DEMO_CONTENT =
`<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0" 
    xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="cq:Page">
  <jcr:content jcr:primaryType="cq:PageContent"
    cq:conf="/conf/aem-demo"
    cq:redirectTarget="/content/aem-demo/us/en"
    cq:template="/conf/aem-demo/settings/wcm/templates/page-content"
    jcr:title="AEM Demo"
    sling:configRef="/conf/aem-demo"
    sling:redirect="{Boolean}true"
    sling:redirectStatus="{Long}302"
    sling:resourceType="aem-demo/components/page"/>
</jcr:root>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
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
            Context-aware configurations are related to a content resource, allows different configs for different 
            content resources. Parameters within nested contexts allow hierarchical based inheritance and global fallback 
            values when required. Leveraging the Context-Aware Configuration Java API, one can retrieve the appropriate 
            configuration for each content resource without concerning where it is stored or how the inheritance works.
          </section>

          <h2 className="text-xl mt-6">
            <strong>Create Configuration Interface</strong>
          </h2>
          <section className="pt-4">
            Define the configuration interface using Java annotations to specify the configuration properties:
            <Highlight code={SITE_CONFIG} language="java" path="configs / SiteConfig.java"/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Implement Configuration Service</strong>
          </h2>
          <section className="pt-4">
            Create a service to retrieve context-aware configuration using the ConfigurationBuilder:
            <Highlight code={SITE_CONFIG_SERVICE} language="java" path="services / impl / SiteConfigServiceImpl.java"/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Configure in /conf Directory</strong>
          </h2>
          <section className="pt-4">
            Create the configuration in the <span className="code-inline background">/conf</span> directory structure:
            <ul className="list-disc ml-6 pt-2 pl-2.5">
              <li>Navigate to <span className="code-inline background">/conf/aem-demo/sling:configs</span></li>
              <li>Create a node with your configuration name: <span className="code-inline background">com.aem.demo.core.configs.SiteConfig</span></li>
              <li>Add the configuration properties as shown below:</li>
            </ul>
            <Highlight code={CA_CONFIG_XML} language="xml" path="/conf / aem-demo / sling:configs / com.aem.demo.core.configs.SiteConfig / .content.xml"/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Connect Content with Configuration</strong>
          </h2>
          <section className="pt-4">
            Link your content to the configuration using <span className="code-inline background">cq:conf</span> and <span className="code-inline background">sling:configRef</span> properties:
            <Highlight code={AEM_DEMO_CONTENT} language="xml" path="/content / aem-demo / .content.xml"/>
          </section>

          <h2 className="text-xl mt-6">
            <strong>Using Configuration in Components</strong>
          </h2>
          <section className="pt-4">
            Access the configuration in Sling Model:
            <Highlight code={SLING_MODEL} language="java" path="components / internal / models / impl / PageConfigImpl.java"/>
          </section>

          <section className="pt-6">
            With this setup, you can now use them in HTL and different configuration values will be applied for different 
            content paths. This approach provides flexible configuration management that scales with your AEM project structure.
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
