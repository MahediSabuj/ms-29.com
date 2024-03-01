import Link from "next/link";
import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { INTEGRATE_ADAPTIVE_FORMS_IN_AEM_SITES as ARTICLE } from "@/lib/data/article/aem/forms";

const aem_project_archetype =
`mvn -B org.apache.maven.plugins:maven-archetype-plugin:3.2.1:generate \\
 -D archetypeGroupId=com.adobe.aem \\
 -D archetypeArtifactId=aem-project-archetype \\
 -D archetypeVersion=47 \\
 -D appTitle="AEM Demo" \\
 -D appId="aem-demo" \\
 -D groupId="com.aem.demo" \\
 -D aemVersion="6.5.20" \\
 -D includeFormsenrollment="y" \\
 -D sdkFormsVersion="6.0.1180"`;

const pom_xml =
`<dependency>
  <groupId>com.adobe.aemfd</groupId>
  <artifactId>aemfd-client-sdk</artifactId>
  <version>\${aem.forms.sdk.api}</version>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-apps</artifactId>
  <type>zip</type>
  <version>\${core.forms.components.version}</version>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-core</artifactId>
  <version>\${core.forms.components.version}</version>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-apps</artifactId>
  <type>zip</type>
  <version>\${core.forms.components.af.version}</version>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-core</artifactId>
  <version>\${core.forms.components.af.version}</version>
 </dependency>`;

const ui_apps_pom_xml =
`<dependency>
  <groupId>com.adobe.aemfd</groupId>
  <artifactId>aemfd-client-sdk</artifactId>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-apps</artifactId>
  <type>zip</type>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-core</artifactId>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-apps</artifactId>
  <type>zip</type>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-core</artifactId>
</dependency>`;

const core_pom_xml =
`<dependency>
  <groupId>com.adobe.aemfd</groupId>
  <artifactId>aemfd-client-sdk</artifactId>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-core</artifactId>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-core</artifactId>
</dependency>`;

const all_pom_xml =
`<embedded>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-apps</artifactId>
  <type>zip</type>
  <target>/apps/aem-demo-vendor-packages/application/install</target>
</embedded>
<embedded>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-core</artifactId>
  <target>/apps/aem-demo-vendor-packages/application/install</target>
</embedded>
<embedded>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-apps</artifactId>
  <type>zip</type>
  <target>/apps/aem-demo-vendor-packages/application/install</target>
</embedded>
<embedded>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-core</artifactId>
  <target>/apps/aem-demo-vendor-packages/application/install</target>
</embedded>
<!-- ========================================== -->
<!-- D E P E N D E N C I E S                    -->
<!-- ========================================== -->
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-apps</artifactId>
  <type>zip</type>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-core</artifactId>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-apps</artifactId>
  <type>zip</type>
</dependency>
<dependency>
  <groupId>com.adobe.aem</groupId>
  <artifactId>core-forms-components-af-core</artifactId>
</dependency>`;

const adaptive_form_text =
`<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:description="Adaptive Form Text (v1) component"
  jcr:primaryType="cq:Component"
  jcr:title="Adaptive Form - Text"
  sling:resourceSuperType="core/fd/components/form/text/v1/text"
  componentGroup="AEM Demo - Adaptive Form"/>`;

const adaptive_form_text_cq_template =
`<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Text"
  fieldType="plain-text"/>
`;

export default function FormsInSite() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
          <div>
            <section className="pt-4 pb-3">
              There are two potential scenarios for integrating Adaptive forms into AEM Sites: one for new projects
              and another for existing projects. Adobe has developed the <Link className="text-blue-600" href="https://github.com/adobe/aem-core-forms-components">aem-core-forms-components</Link> (Forms Core Components) which
              can be used to incorporate forms standard components into AEM Sites.
            </section>
            <section className="py-3">
              During project creation using the <Link className="text-blue-600" href="https://github.com/adobe/aem-project-archetype">aem-project-archetype</Link>, you
              can enable Forms Core Components for New Projects. The <em>includeFormsenrollment</em> option is solely responsible
              for integrating Forms Core Components dependencies and generating associated artifacts in a new AEM project. Customize
              the values as per your needs when creating a project. Only the essential options below are required to establish a new
              project with Forms Core Components.
            </section>
            <Highlight code={aem_project_archetype} language="xml" path="AEM 6.5.X"/>
            <div className="py-3">
              After generating the project, the AdaptiveForm components will be automatically included in your project, allowing you to immediately
              utilize these components on your pages.
            </div>
            <div className="py-3">
              However, for Existing Pages, you&apos;ll have to manually add several dependencies to the pom.xml files. Moreover, incorporating Adaptive Form
              components into the project will also require manual intervention.
            </div>
            <Highlight code={pom_xml} language="xml" path="pom.xml"/>
            <div className="pt-3">
              <Highlight code={ui_apps_pom_xml} language="xml" path="ui.apps / pom.xml"/>
            </div>
            <div className="pt-3">
              <Highlight code={core_pom_xml} language="xml" path="core / pom.xml"/>
            </div>
            <div className="pt-3">
              <Highlight code={all_pom_xml} language="xml" path="all / pom.xml"/>
            </div>
            <div className="py-3">
              After updating the pom.xml files, the subsequent step involves creating proxy components within the project&apos;s codebase. Here&apos;s an example
              demonstrating how to incorporate the Adaptive Form text component by extending the Forms Core Components.
            </div>
            <Highlight code={adaptive_form_text} language="xml" path="adaptiveForm / text / .content.xml"/>
            <div className="pt-3">
              <Highlight code={adaptive_form_text_cq_template} language="xml" path="adaptiveForm / text / _cq_template.xml"/>
            </div>
            <div className="pt-3">
              If you allow &quot;AEM Demo - Adaptive Form&quot; group properly in the template, you&apos;ll find the &quot;Adaptive Form - Text&quot; component in the component sidekick.
              According to your requirements, you can include additional adaptive form components.
            </div>
            <div className="pt-3">
              Congratulations! You&apos;ve successfully integrated Adaptive Forms functionality into AEM Sites. You can now incorporate AEM Forms related features into your content pages.
            </div>
          </div>
      </article>
    </div>
  );
}
