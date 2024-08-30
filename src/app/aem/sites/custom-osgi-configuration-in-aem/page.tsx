import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";
import { CUSTOM_OSGI_CONFIGURATION as ARTICLE } from "@/lib/data/article/aem/sites";

import CUSTOM_OSGI_CONFIGURATION from "./assets/custom_osgi_configuration.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const APP_CONFIG =
`@ObjectClassDefinition(
  name = "AEM Demo Application Configuration")
public @interface AppConfig {
  @AttributeDefinition(name = "App Name")
  String app_name();

  @AttributeDefinition(name = "API Endpoint")
  String api_endpoint();

  @AttributeDefinition(name = "App Client ID")
  String client_id();

  @AttributeDefinition(name = "App Client Secret")
  String client_secret();
}`;

const APP_CONFIG_SERVICE =
`public interface AppConfigService {
  String getAppName();
  String getAPIEndpoint();
  String getClientID();
  String getClientSecret();
}`

const APP_CONFIG_SERVICE_IMPL =
`@Component(service = AppConfigService.class)
@Designate(ocd = AppConfig.class)
public class AppConfigServiceImpl implements AppConfigService {
  private AppConfig appConfig;

  @Activate
  public void activate(AppConfig appConfig) {
    this.appConfig = appConfig;
  }
  
  @Override
  public String getAppName() {
    return appConfig.app_name();
  }

  @Override
  public String getAPIEndpoint() {
    return appConfig.api_endpoint();
  }

  @Override
  public String getClientID() {
    return appConfig.client_id();
  }

  @Override
  public String getClientSecret() {
    return appConfig.client_secret();
  }
}`;

const OSGI_CONFIG =
`{
  "app.name": "aem-demo",
  "api.endpoint": "https://www.google.com",
  "client.id": "8TfyfkUAB481AxOfn4UrqIyWIStKrTm8Jl",
  "client.secret": "8TxmpkXAPRtLiOHIFHzjx4uKHlm1soAvO7I"
}`;

const OSGI_CONFIG_CLOUD =
`{
  "app.name": "aem-demo",
  "api.endpoint": "$[env:API_ENDPOINT]",
  "client.id": "$[secret:CLIENT_ID]",
  "client.secret": "$[secret:CLIENT_SECRET]"
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function CustomOsgiConfig() {
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
            OSGi Configuration allow us to configure run-mode specific properties. All the out-of-the-box OSGi configurations 
            are available at <code className="code-inline background">/system/console/configMgr</code> while custom configurations can be
            created as per business requirements. These configurations are typically managed within the AEM project&apos;s <code className="code-inline">ui.config</code> module in the code repository.
          </section>
          <section className="pt-3">
            To create a custom OSGi configuration, you need to define an interface that determines how the fields will appear configuration console.
          </section>
          <Highlight code={APP_CONFIG} language="java" path="AppConfig.java"/>
          <section className="pt-3">
            Next, you need to create a service to read those configuration values.
          </section>
          <Highlight code={APP_CONFIG_SERVICE} language="java" path="AppConfigService.java"/>
          <Highlight code={APP_CONFIG_SERVICE_IMPL} language="java" path="AppConfigServiceImpl.java"/>
          <section className="pt-3">
            To add your custom-developed OSGi configuration to AEM instance, place it in the <code className="code-inline background">ui.config / osgiconfig</code> folder of your project.
            If the configuration values differ across environments or run modes, you should add separate configurations within the respective environment or run mode-specific folders
            like <code className="code-inline">config.publish.dev</code>, <code className="code-inline">config.publish.stage</code>, etc.
          </section>
          <Highlight code={OSGI_CONFIG} language="json" path="config / com.aem.demo.core.services.impl.AppConfigServiceImpl.cfg.json"/>
          <section className="pt-3">
            You can check the configuration on your instance from here <code className="code-inline background">/system/console/configMgr</code>.
          </section>
          <Image src={CUSTOM_OSGI_CONFIGURATION} className="border" height="250"
             alt="Custom OSGI Configuration">
          </Image>
          <section className="pt-3">
            However, if you&apos;re using AEM as a Cloud Service, there&apos;s no need to create separate configurations for different environments or run modes. Instead, you can manage environment-specific variables directly within Cloud Manager and use them like below.
          </section>
          <Highlight code={OSGI_CONFIG_CLOUD} language="json" path="config / com.aem.demo.core.services.impl.AppConfigServiceImpl.cfg.json"/>
          <section className="pt-3">
            Additionally, <code className="code-inline background">/system/console/configMgr</code> is not accessible in AEM Cloud environment. To view configuration values, you can use Developer Console instead.
          </section>
        </div>
      </article>
      <FAQ items={[{
        question: `<code>osgiconfig</code> is not visible in AEM Cloud`,
        answer: `This is expected behavior; <code>osgiconfig</code> folder isn&apos;t visible in AEMaaCS. You can view OSGi configuration through Developer Console.`
      }]}/>
    </div>
  );
}
