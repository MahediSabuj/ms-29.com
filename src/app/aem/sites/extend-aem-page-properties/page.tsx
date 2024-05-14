import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { EXTEND_AEM_PAGE_PROPERTIES as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ADD_NEW_TAB = 
`<contentApproval jcr:primaryType="nt:unstructured"
  jcr:title="Content Approval"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns>
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
      </items>
    </column>
  </items>
</contentApproval>"`;

const INSERT_NEW_FIELD_ON_EXISTING_TAB = 
`<basic jcr:primaryType="nt:unstructured"
  jcr:title="Basic"
  sling:resourceSuperType="wcm/foundation/components/basicpage/v1/basicpage/tabs/basic"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <title jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/form/fieldset">
          <items jcr:primaryType="nt:unstructured">
          </items>
        </title>
      </items>
    </column>
  </items>
</basic>`;

const HIDE_TAB = 
`<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
  xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0"
  xmlns:granite="http://www.adobe.com/jcr/granite/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured"
  jcr:title="Page"
  sling:resourceType="cq/gui/components/authoring/dialog"
  mode="edit">
  <content jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/container">
    <items jcr:primaryType="nt:unstructured">
      <tabs jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/tabs">
        <items jcr:primaryType="nt:unstructured"
          sling:hideChildren="[personalization,cloudservices]>
        </items>
      </tabs>
    </items>
  </content>
</jcr:root>`;

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
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            Page properties in AEM serve as metadata that provide essential information about a webpage. While AEM 
            provides a standard set of properties to meet basic web project needs, organizations often enhance them with extra 
            functionalities or custom data fields to effectively address more complex or unique requirements in content management.
          </section>  
          <section className="pt-3">
            We&apos;ll look at three ways in which we can extend page properties: adding custom tab with custom text field, 
            inserting new field into an existing tab, and hiding any tabs or fields that aren&apos;t relevant to the implementation.
          </section>
          <Highlight code={ADD_NEW_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>
          <Highlight code={INSERT_NEW_FIELD_ON_EXISTING_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>
          <Highlight code={HIDE_TAB} language="xml" path="page / _cq_dialog / .content.xml"/>

        </div>
      </article>
    </div>
  );
}
