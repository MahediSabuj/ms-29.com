import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { EXTEND_AEM_PAGE_PROPERTIES as ARTICLE } from "@/lib/data/article/aem/sites";

import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const PAGE_DIALOG_STRUCTURE = 
`<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
  xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0"
  xmlns:granite="http://www.adobe.com/jcr/granite/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured"
  sling:resourceType="cq/gui/components/authoring/dialog">
  <content jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <tabs jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/tabs">
        <items jcr:primaryType="nt:unstructured">
        </items>
      </tabs>
    </items>
  </content>
</jcr:root>`;

const ADD_NEW_TAB = 
`<contentApproval jcr:primaryType="nt:unstructured"
  jcr:title="Content Approval"
  sling:orderBefore="cloudservices"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <approvalCode jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
          fieldLabel="Approval Code"
          required="{Boolean}true"
          emptyText="Enter Content Approval Code"
          name="./approvalCode"
          maxlengthlong="{Long}12"/>
      </items>
    </column>
  </items>
</contentApproval>`;

const INSERT_NEW_FIELD_ON_EXISTING_TAB = 
`<basic jcr:primaryType="nt:unstructured"
  sling:resourceSuperType="wcm/foundation/components/basicpage/v1/basicpage/tabs/basic"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <title jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/form/fieldset">
          <items jcr:primaryType="nt:unstructured">
            <hideSubPagesInNav jcr:primaryType="nt:unstructured"
              sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
              name="./hideSubPagesInNav"
              renderReadOnly="{Boolean}true"
              text="Hide all subpage in Navigation"/>
          </items>
        </title>
      </items>
    </column>
  </items>
</basic>`;

const HIDE_TAB = 
`<tabs jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/tabs">
  <items jcr:primaryType="nt:unstructured"
    sling:hideChildren="[personalization,cloudservices]">
    <thumbnail jcr:primaryType="nt:unstructured"
      sling:hideResource="{Boolean}true"/>
  </items>
</tabs>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ExtendPageProperties() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div>
          <section className="pt-6">
            Page properties in AEM serve as metadata that provide essential information about a webpage. While AEM 
            provides a standard set of properties to meet basic web project needs, organizations often enhance them with extra 
            functionalities or custom data fields to effectively address more complex or unique requirements in content management.
          </section>  
          <section className="pt-3">
            We&apos;ll look at three ways in which we can extend page properties: adding new tab with text field, inserting 
            new field into an existing tab, and hiding any tabs or fields that aren&apos;t relevant to the implementation.
          </section>
          <section className="pt-3">
            We will be extending the page properties for AEM pages which uses Core Page Component. We need to follow the same 
            node structure as the dialog in the page component to extend the page properties. According to the Proxy Component 
            Pattern, we will only add or override the necessary properties. Here is the <Link className="text-blue-600" href="https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/page/v3/page">
            Page V3</Link> component dialog structure:
          </section>
          <Highlight code={PAGE_DIALOG_STRUCTURE} language="xml" path="page / _cq_dialog / .content.xml"/>
          <h2 className="text-xl mt-4">
            <strong>Adding new Tab with Text Field</strong>
          </h2>
          <section>
            The child nodes of the items node represent tabs in the page properties. Let&apos;s incorporate <strong>Content Approval</strong> as
            a new tab. Typically, it&apos;s added at the end of the tab list, but you can adjust its position using <code className="code-inline">sling:orderBefore</code> or <code className="code-inline">sling:orderAfter</code> to
            place it before or after a designated tab, respectively.
          </section>
          <Highlight code={ADD_NEW_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>
          <h2 className="text-xl mt-4">
            <strong>Inserting new Field within an Existing Tab</strong>
          </h2>
          <section>
            The Core Page component relies on the WCM foundation basic page component. To extend the dialog properties of any tab, it&apos;s essential 
            to inherit that specific tab from the foundation basic page component dialog using <code className="code-inline">sling:resourceSuperType</code> otherwise, 
            all existing properties will be replaced with the new ones.
          </section>
          <Highlight code={INSERT_NEW_FIELD_ON_EXISTING_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>
          <h2 className="text-xl mt-4">
            <strong>Hiding Existing Tabs or Fields</strong>
          </h2>
          <section>
          Hiding tabs and fields can be achieved by either using <code className="code-inline">sling:hideChildren</code> to list all the items to be hidden in the parent items 
            node, or setting <code className="code-inline">sling:hideResource</code> to true in the specific node that needs to be hidden.
          </section>
          <Highlight code={HIDE_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>
        </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
