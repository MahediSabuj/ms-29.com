import hljs from "highlight.js/lib/core";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Setting Default Values in AEM Component Dialog",
  description: `In AEM components, it&apos;s often necessary to establish default values. 
  This ensures that when components are dragged onto the page, they display predefined initial values.
  This functionality is achievable through the utilization of cq:template and cq:templatePath`,
  alternates: {
    canonical: "/aem/sites/default-value-in-component-dialog"
  }
};

export default function Article() {
    const _cq_template = hljs.highlight(
        `<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="nt:unstructured">
  <navItems jcr:primaryType="nt:unstructured">
    <item0 jcr:primaryType="nt:unstructured"
      country="Germany"
      language="German"/>
  </navItems>
</jcr:root>`,
        { language: 'xml' }
    ).value;

    const _cq_templatePath = hljs.highlight(
      `<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
  xmlns:cq="http://www.day.com/jcr/cq/1.0"
  jcr:primaryType="cq:Component"
  cq:templatePath="project/datasource/navigation"/>`,
      { language: 'xml' }
    ).value;

  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <h1 className="text-2xl" itemProp="name">Setting Default Values in AEM Component Dialog</h1>
        <div>
          <div className="inline">
            <span className="text-gray-400 mr-2">Published</span>
            <time itemProp="datePublished" dateTime="2024-02-04">February 04, 2024</time>
          </div>
          <div className="inline ml-4">
            <span className="text-gray-400 mr-2">Modified</span>
            <time itemProp="dateModified" dateTime="2024-02-05">February 10, 2024</time>
          </div>
        </div>
        <div>
          <section className="pt-4">
            In AEM components, it&apos;s often necessary to establish default values. This ensures that when components are
            dragged onto the page, they display predefined initial values. Subsequently, authors can configure the
            components based on specific requirements. <br/> <br/>
            Utilizing <strong>cq:template</strong> is effective in this scenario. Need to verify how the values are stored
            in the content node upon saving the component dialog and then duplicate the identical structure in <em>cq:template</em>.
            This ensures that the values will be stored to the content node as soon as component is added to the page. <br/><br/>
            In the example below, a new item will be added to the multifield once the component is dragged on the page.
          </section>
          <section className="pt-1">
            <div className="text-white p-2 bg-aem">_cq_template / .content.xml</div>
            <div className="p-4 bg-neutral-100">
              <code className="language-xml whitespace-pre"
                dangerouslySetInnerHTML={{ __html: _cq_template }}/>
            </div>
          </section>
          <section className="pt-8">
            If there&apos;s a need for the same cq:template across various components, the <strong>cq:templatePath</strong> properties
            can be utilized. As an illustration, duplicate the _cq_template node and place it in a common place like
            project/datasource, naming it, for instance, &quot;navigation&quot;. Subsequently, within the component properties,
            add the property like below:
          </section>
          <section className="pt-1">
            <div className="text-white p-2 bg-aem">navigation / .content.xml</div>
              <div className="p-4 bg-neutral-100">
                <code className="language-xml whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: _cq_templatePath }}/>
              </div>
          </section>
        </div>
      </article>
      <div className="pt-6" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-2xl border-b-2 border-[#3A2A1D] mb-3">Frequently Asked Questions (FAQ)</h2>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 className="text-xl" itemProp="name">
            <em>Difference between setting default value for each node and cq:template?</em></h3>
          <div className="" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              The value of each node won&apos;t be displayed or stored in the JCR node until authors open and save the dialog.
              Conversely, the value of cq:template will be immediately applied once the component is added to the page.
              Additionally, utilizing cq:template allows for adding default item or setting a default value for a multifield,
              which isn&apos;t supported by the value property of each node.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
