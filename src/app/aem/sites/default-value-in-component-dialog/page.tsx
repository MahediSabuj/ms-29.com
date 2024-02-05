import hljs from "highlight.js/lib/core";

export default function Article() {
    const highlightedCode = hljs.highlight(
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

  return (
    <article itemScope itemType="https://schema.org/Article">
      <h1 className="text-xl" itemProp="name">Setting Default Values in AEM Component Dialog</h1>
      <div>
        <div className="inline">
          <span className="text-gray-400 mr-2">Published</span>
          <time itemProp="datePublished" dateTime="2024-02-04">February 04, 2024</time>
        </div>
        <div className="inline ml-4">
          <span className="text-gray-400 mr-2">Modified</span>
          <time itemProp="dateModified" dateTime="2024-02-05">February 05, 2024</time>
        </div>
      </div>
      <section className="pt-4">
        In AEM components, it's often necessary to establish default values. This ensures that when components are
        dragged onto the page, they display predefined initial values. Subsequently, authors can configure the
        components based on specific requirements. <br/> <br/>
        Utilizing <strong>cq:template</strong> is effective in this scenario. Need to verify how the values are stored
        in the content node and then duplicate the identical structure in <em>cq:template</em>. This ensures that the
        values will be stored to the content node as soon as component is added to the page. <br/><br/>
        In the example below, a new item will be added to the multifield once the component is dragged on the page.
      </section>
      <section className="pt-1">
        <div className="text-white p-2 bg-aem">_cq_template / .content.xml</div>
        <div className="p-4 bg-neutral-300">
          <code className="language-xml whitespace-pre"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
        </div>
      </section>
    </article>
  )  
}
