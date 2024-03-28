import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { AEM_COMPONENT_DIALOG_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";

import PathFieldImage from "./assets/aem-component-dialog__pathfield.webp";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const GRANITE_UI = "https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/components/coral/foundation/form";

const textField =
`<firstName jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldLabel="First Name"
  fieldDescription="First Name"
  required="{Boolean}true"
  emptyText="Enter your First Name"
  name="./firstName"
  value="Mahedi"
  maxlengthlong="{Long}25"/>`

const select =
`<continent jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/select"
  fieldLabel="Continent"
  emptyText="Select a Continent"
  name="./continent"
  multiple="{Boolean}false"
  required="{Boolean}true">
  <items jcr:primaryType="nt:unstructured">
    <asia jcr:primaryType="nt:unstructured"
      text="Asia"
      value="asia"/>
    <europe jcr:primaryType="nt:unstructured"
      selected="{Boolean}true"
      text="Europe"
      value="europe"/>
  </items>
</continent>`;

const datePicker =
`<dateOfBirth jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
  displayTimezoneMessage="{Boolean}false"
  fieldLabel="Date of Birth"
  fieldDescription="Date of Birth"
  emptyText="Enter your Date of Birth"
  name="./dateOfBirth"
  type="date"
  valueFormat="YYYY-MM-DD"
  displayedFormatstring="YYYY-MM-DD"
  required="{Boolean}true"/>`

const numberField =
`<age jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/numberfield"
  min="18"
  max="35"
  step="1"
  name="./age"
  value="28"
  fieldLabel="Age"
  required="{Boolean}true"/>`

const _switch =
`<watchFootball jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/switch"
  value="{Boolean}true"
  uncheckedValue="{Boolean}false"
  checked="{Boolean}true"
  fieldLabel="Watch Football?"
  name="./watchFootball"/>`;

const multifield =
`<articles jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
  fieldLabel="Article List"
  composite="{Boolean}true"
  required="{Boolean}true">
  <field jcr:primaryType="nt:unstructured"
    sling:resourceType = "granite/ui/components/coral/foundation/container"
    name="./articles">
    <items jcr:primaryType="nt:unstructured">
      <articleTitle jcr:primaryType="nt:unstructured"
        sling:resourceType = "granite/ui/components/coral/foundation/form/textfield"
        fieldLabel="Article Title"
        name="./articleTitle"/>
      <articleDetailsPage jcr:primaryType="nt:unstructured"
        sling:resourceType="cq/gui/components/coral/common/form/pagefield"
        fieldLabel="Article Details Page"
        name="./articleDetailsPage"
        rootPath="/content/aem-demo"/>
    </items>
  </field>
</articles>`;

const checkbox =
`<removeBottomSpacing jcr:primaryType="nt:unstructured"
  sling:resourceType="/libs/granite/ui/components/coral/foundation/form/checkbox"
  text="Remove Bottom Spacing?"
  fieldDescription="Remove Default Bottom Spacing of the Component"
  tooltipPosition="right"
  name="./removeBottomSpacing"
  checked="{Boolean}false"
  value="mb-0"
  uncheckedValue=""/>`;

const fieldset =
`<userInformation jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/fieldset"
  jcr:title="User Information">
  <items jcr:primaryType="nt:unstructured">
    <firstName jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="First Name"
      name="./firstName"
      required="{Boolean}true"/>
    <lastName jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="Last Name"
      name="./lastName"
      required="{Boolean}true"/>
  </items>
</userInformation>`

const pathfield =
`<linkUrl jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/pathfield"
  fieldLabel="Link URL"
  emptyText="Page URL"
  name="./linkURL"
  multiple="{Boolean}false"
  forceSelection="{Boolean}true"
  required="{Boolean}true"
  rootPath="/content/aem-demo"/>`;

export default function DialogCheatSheet() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
          <div>
            <section className="pt-6 pb-3">
              Granite UI provides a large range of the basic components needed to create component dialog on the
              authoring environment. These components are constructed using Coral UI-based elements.
            </section>
            <div>
              <Highlight code={checkbox} language="xml" path="Check Box"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/checkbox/index.html`}>
                  {GRANITE_UI}/checkbox/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={datePicker} language="xml" path="Date Picker"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/datepicker/index.html`}>
                  {GRANITE_UI}/datepicker/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={fieldset} language="xml" path="Field Set"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/fieldset/index.html`}>
                  {GRANITE_UI}/fieldset/index.html
                </Link>
              </div>
            </div>
            <div id="multifield" className="pt-4">
              <Highlight code={multifield} language="xml" path="Multi Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/multifield/index.html`}>
                  {GRANITE_UI}/multifield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={numberField} language="xml" path="Number Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/numberfield/index.html`}>
                  {GRANITE_UI}/numberfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={pathfield} language="xml" path="Path Field"
                image={{ src: PathFieldImage, alt: "AEM Component Dialog (Pathfield)" }}/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/pathfield/index.html`}>
                  {GRANITE_UI}/pathfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={select} language="xml" path="Select"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/select/index.html`}>
                  {GRANITE_UI}/select/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={_switch} language="xml" path="Switch"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/switch/index.html`}>
                  {GRANITE_UI}/switch/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={textField} language="xml" path="Text Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/textfield/index.html`}>
                  {GRANITE_UI}/textfield/index.html
                </Link>
              </div>
            </div>
          </div>
      </article>
    </div>
  )
}
