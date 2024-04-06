import { Metadata } from "next";

import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const show_hide_dialog = 
`<backgroundConfiguration jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/select"
  fieldLabel="Background Configuration"
  name="./backgroundConfiguration"
  granite:class="cq-dialog-dropdown-showhide">
  <items jcr:primaryType="nt:unstructured">
    <backgroundColor jcr:primaryType="nt:unstructured"
      text="Background Color"
      value="backgroundColor"/>
    <backgroundImage jcr:primaryType="nt:unstructured"
      text="Background Image"
      value="backgroundImage"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    cq-dialog-dropdown-showhide-target=".background-configuration-show-hide"/>
</backgroundConfiguration>
<backgroundColorContainer jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/container"
  granite:class="hide background-configuration-show-hide">
  <items jcr:primaryType="nt:unstructured">
    <colorCode jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="Color Code"
      name="./colorCode"/>
  </items>
  <granite:data jcr:primaryType="nt:unstructured"
    showhidetargetvalue="backgroundColor"/>
</backgroundColorContainer>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ShowHideDialogFields() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6 pb-3">
            Enabling Show/Hide functionality for AEM dialog fields improves user experience by allowing content authors to 
            focus on relevant fields, thereby making the authoring process more efficient and less error-prone.
          </section>
          <section className="pb-3">
            AEM provided an out-of-the-box solution for showing/hiding dialog fields based on dropdown selection value. 
            ClientLibs implementation is available here <code className="code-inline break-all">/libs/cq/gui/components/authoring/dialog/dropdownshowhide/clientlibs/dropdownshowhide/js/dropdownshowhide.js</code>
          </section>
          <section className="pb-2">
            To achieve the functionality, need to proceed with the following steps:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Apply <code className="code-inline">granite:class=&quot;cq-dialog-dropdown-showhide&quot;</code> to the select/dropdown field.</li>
              <li>Add a data attribute <code className="code-inline">cq-dialog-dropdown-showhide-target</code> to the select field using <code className="code-inline">granite:data</code> typically configured with a class selector as the value such as <code className="code-inline">.background-configuration-show-hide</code></li>
            </ul>
          </section>
          <Highlight code={show_hide_dialog} language="xml" path="_cq_dialog / .content.xml"/>
        </div>  
      </article>
    </div>
  );
}
