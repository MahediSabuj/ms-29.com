import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { DESIGN_DIALOG_SHOW_HIDE_DIALOG_OPTIONS as ARTICLE } from "@/lib/data/article/aem/sites";

import TEMPLATE_EDITOR from './assets/template-editor.png';
import COMPONENT_POLICY from './assets/component-policy.png';
import _COMPONENT_DIALOG_ from './assets/component-dialog.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const DESIGN_DIALOG = `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
    xmlns:granite="http://www.adobe.com/jcr/granite/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0"
    xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Hello World"
  sling:resourceType="cq/gui/components/authoring/dialog">
  <content jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <tabs jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/tabs"
        maximized="{Boolean}true">
        <items jcr:primaryType="nt:unstructured">
          <main jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/container"
            margin="{Boolean}true">
            <items jcr:primaryType="nt:unstructured">
              <link jcr:primaryType="nt:unstructured"
                sling:resourceType="cq/gui/components/coral/common/form/pagefield"
                fieldLabel="Link"
                name="./link"
                rootPath="/content/wknd-site"/>
              <actionDisabled jcr:primaryType="nt:unstructured"
                sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
                text="Disable Call-To-Action"
                name="./actionDisabled"
                value="{Boolean}true"/>
            </items>
          </main>
        </items>
      </tabs>
    </items>
  </content>
</jcr:root>`;

const COMPONENT_DIALOG = `<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
    xmlns:granite="http://www.adobe.com/jcr/granite/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0" 
    xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Hello World"
  sling:resourceType="cq/gui/components/authoring/dialog">
  <content jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <tabs jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/tabs">
        <items jcr:primaryType="nt:unstructured">
          <action jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/container"
            margin="{Boolean}true">
            <items jcr:primaryType="nt:unstructured">
              <columns jcr:primaryType="nt:unstructured"
                sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns"
                margin="{Boolean}true">
                <items jcr:primaryType="nt:unstructured">
                  <column jcr:primaryType="nt:unstructured"
                    sling:resourceType="granite/ui/components/coral/foundation/container">
                    <items jcr:primaryType="nt:unstructured">
                      <link jcr:primaryType="nt:unstructured"
                        sling:resourceType="cq/gui/components/coral/common/form/pagefield"
                        name="./link"
                        fieldLabel="Link"
                        value="\${cqDesign.link}"
                        rootPath="/content/wknd-site"/>
                      <action jcr:primaryType="nt:unstructured"
                        granite:hide="\${cqDesign.actionDisabled}"
                        sling:resourceType="granite/ui/components/coral/foundation/container"
                        name="./action">
                        <items jcr:primaryType="nt:unstructured">
                          <text jcr:primaryType="nt:unstructured"
                            sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                            fieldLabel="Text"
                            name="./text"/>                               
                        </items>
                      </action>
                    </items>
                  </column>
                </items>
              </columns>
            </items>
          </action>
        </items>
      </tabs>
    </items>
  </content>
</jcr:root>`;

const SLING_MODEL = `@Model(adaptables = SlingHttpServletRequest.class)
public class HelloWorld {

    @ScriptVariable
    protected Style currentStyle;
    
    private boolean actionDisabled;

    @PostConstruct
    protected void init() {
        actionDisabled = currentStyle.get("actionDisabled", false);
    }

    public boolean isActionDisabled() {
        return actionDisabled;
    }
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function DesignDialog() {
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
            Design Dialog allows developers and template authors to configure component behavior at the template level. It
            includes setting default values and controlling the visibility of fields in the component dialog. Acting as a bridge
            between Template Editor and Component Dialog, it provides a way to customize component behavior dynamically.
          </section>
          <section className="pt-3">
            To create a Design Dialog, you need to define <code className="code-inline background">_cq_design_dialog</code> node in your component&apos;s structure.
            <Highlight code={DESIGN_DIALOG} language="xml" path="helloworld / _cq_design_dialog / .content.xml"/>
          </section>
          <section className="pt-3">
            To configure the Design Dialog properties, navigate to <strong>Tools</strong> &gt; <strong>Templates</strong> &gt; <strong>Your_Project</strong> &gt; <strong>Template</strong> and
            click on the <strong>Edit</strong> then select <strong>Policy</strong> from the <strong>Template Editor</strong>.
          </section>
          <Image src={TEMPLATE_EDITOR} className="border mt-2"
             alt="Template Editor">
          </Image>
          <section className="pt-4">
            In the Policy Editor, configure the values according to the requirements.
          </section>
          <Image src={COMPONENT_POLICY} className="border mt-2"
             alt="Component Policy">
          </Image>
          <section className="pt-2">
            Once the Design Dialog is configured, you can use its values to control the visibility of fields and set default values in component dialog.
          </section>
          <section className="pt-4">
            In component dialog, you can fetch design dialog value using <code className="code-inline background">cqDesign.property_name</code>. The
            complete example is provided below:
            <Highlight code={COMPONENT_DIALOG} language="xml" path="helloworld / _cq_dialog / .content.xml"/>
          </section>
          <section className="pt-4">
            The dialog will now appear as shown below, retrieving the link value from the design dialog and hiding the action fields.
          </section>
          <Image src={_COMPONENT_DIALOG_} className="border mt-2" height="250"
             alt="Component Dialog">
          </Image>
          <section className="pt-6">
            In case, you require Design Dialog values in a Sling Model, you can fetch them as shown below:
          </section>
          <Highlight code={SLING_MODEL} language="java" path="HelloWorld.java"/>
          <section className="pt-6">
            Hope, you now understand how to use the Design Dialog and how it helps customize the Component Dialog. Happy learning!
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
