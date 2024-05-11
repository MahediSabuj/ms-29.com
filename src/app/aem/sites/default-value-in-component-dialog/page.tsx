import { Metadata } from "next";

import Highlight from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";
import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { DEFAULT_VALUES_IN_AEM_COMPONENT_DIALOG as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const _cq_template =
    `<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="nt:unstructured">
  <navItems jcr:primaryType="nt:unstructured">
    <item0 jcr:primaryType="nt:unstructured"
      country="Germany"
      language="German"/>
  </navItems>
</jcr:root>`;

const _cq_templatePath =
    `<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
  xmlns:cq="http://www.day.com/jcr/cq/1.0"
  jcr:primaryType="cq:Component"
  cq:templatePath="project/datasource/navigation"/>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function DefaultValueComponentDialog() {
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
            In AEM components, it&apos;s often necessary to establish default values. This ensures that when components are
            dragged onto the page, they display predefined initial values. Subsequently, authors can configure the
            components based on specific requirements.
          </section>
          <section className="pt-3">  
            Utilizing <strong>cq:template</strong> is effective in this scenario. Need to verify how the values are stored
            in the content node upon saving the component dialog and then duplicate the identical structure in <em>cq:template</em>.
            This ensures that the values will be stored to the content node as soon as component is added to the page.
          </section>
          <section className="pt-3">  
            In the example below, a new item will be added to the multifield once the component is dragged on the page.
          </section>
          <Highlight code={_cq_template} language="xml" path="_cq_template / .content.xml"/>
          <section className="pt-3">
            If there&apos;s a need for the same cq:template across various components, the <strong>cq:templatePath</strong> properties
            can be utilized. As an illustration, duplicate the _cq_template node and place it in a common place like
            project/datasource, naming it, for instance, &quot;navigation&quot;. Subsequently, within the component properties,
            add the property like below:
          </section>
          <Highlight code={_cq_templatePath} language="xml" path="navigation / .content.xml"/>
        </div>
      </article>
      <FAQ items={[{
        question: "Difference between setting default value for each node and cq:template?",
        answer: `The value of each node won&apos;t be displayed or stored in the JCR node until authors open and save the dialog.
          Conversely, the value of cq:template will be immediately applied once the component is added to the page.
          Additionally, utilizing cq:template allows for adding default item or setting a default value for a multifield,
          which isn&apos;t supported by the value property of each node.`
      }]}/>
    </div>
  );
}
