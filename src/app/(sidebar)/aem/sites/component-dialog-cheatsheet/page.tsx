import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import TOPICS from "@/lib/data/article/topics";
import { AEM_COMPONENT_DIALOG_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";

import PathFieldImage from "./assets/aem-component-dialog__pathfield.webp";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const CORAL_UI = "https://developer.adobe.com/experience-manager/reference-materials/6-5/coral-ui/coralui3";
const GRANITE_UI = "https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/components/coral/foundation";

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
  sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
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

const colorfield =
`<textColor jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/colorfield"
  fieldLabel="Text Color"
  name="./textColor"
  showDefaultColors="{Boolean}false"
  showProperties="{Boolean}true"
  showSwatches="{Boolean}true">
  <items jcr:primaryType="nt:unstructured">
    <color1 jcr:primaryType="nt:unstructured"
      value="000000"/>
    <color2 jcr:primaryType="nt:unstructured"
      value="FFFFFF"/>
  </items>
</textColor>`;

const radioGroup =
`<gender jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/radiogroup"
  fieldDescription="Select either Male or Female"
  fieldLabel="Gender"
  vertical="{Boolean}false"
  name="./gender">
  <items jcr:primaryType="nt:unstructured">
    <male jcr:primaryType="nt:unstructured"
      checked="{Boolean}true"
      text="Male"
      value="male"/>
    <female jcr:primaryType="nt:unstructured"
      text="Female"
      value="female"/>
    </items>
</gender>`;

const textArea =
`<description jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textarea"
  fieldLabel="Description"
  fieldDescription="Short details about the article"
  required="{Boolean}true"
  emptyText="Enter details about the article"
  name="./description"
  rows="4"
  maxlength="{Long}250"/>`;

const nestedCheckboxList =
`<expertise jcr:primaryType="nt:unstructured"
  disconnected="{Boolean}true"
  sling:resourceType="granite/ui/components/coral/foundation/form/nestedcheckboxlist">
  <items jcr:primaryType="nt:unstructured">
    <adobe jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
      name="adobe"
      value="{Boolean}true"
      text="Adobe Experience Cloud">
      <sublist jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/form/nestedcheckboxlist">
        <items jcr:primaryType="nt:unstructured">
          <aem jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
            name="aem"
            value="{Boolean}true"
            text="Adobe Experience Manager"/>
          <analytics jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
            name="analytics"
            value="{Boolean}true"
            text="Adobe Analytics"/>
        </items>  
      </sublist>
    </adobe>
    <aws jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
      name="aws"
      value="{Boolean}true"
      text="Amazon Web Service"/>
  </items>
</expertise>`;

const password =
`<password jcr:primaryType="nt:unstructured"
  name="./password"
  fieldLabel="Password"
  emptyText="Enter your Password"
  required="{Boolean}true"
  retype="./confirmPassword"
  sling:resourceType="granite/ui/components/coral/foundation/form/password"/>
<confirmPassword jcr:primaryType="nt:unstructured"
  name="./confirmPassword"
  fieldLabel="Confirm Password"
  emptyText="Confirm your Password"
  required="{Boolean}true"
  sling:resourceType="granite/ui/components/coral/foundation/form/password"/>`;

const tabs =
`<tabs jcr:primaryType="nt:unstructured"
  orientation="horizontal"
  size="M"
  margin="{Boolean}true"
  maximized="{Boolean}true"
  sling:resourceType="granite/ui/components/coral/foundation/tabs">
  <items jcr:primaryType="nt:unstructured">
    <settings jcr:primaryType="nt:unstructured"
      jcr:title="Settings"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <removeBottomSpacing jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
          text="Remove Bottom Spacing?"
          name="./removeBottomSpacing"
          value="mb-0"/>
      </items>
      <parentConfig jcr:primaryType="nt:unstructured"
        icon="gear"/> <!-- Coral Icon -->
    </settings>
    <accessibility jcr:primaryType="nt:unstructured"
      jcr:title="Accessibility"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <parentConfig jcr:primaryType="nt:unstructured"
        active="{Boolean}true"/>
    </accessibility>
  </items>
</tabs>`;

const accordion =
`<accordion jcr:primaryType="nt:unstructured"
  margin="{Boolean}false"
  multiple="{Boolean}false"
  sling:resourceType="granite/ui/components/coral/foundation/accordion">
  <items jcr:primaryType="nt:unstructured">
    <aem jcr:primaryType="nt:unstructured"
      jcr:title="AEM"
      sling:resourceType="granite/ui/components/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <workflow jcr:primaryType="nt:unstructured"
          name="./workflow"
          value="{Boolean}true"
          sling:resourceType="granite/ui/components/coral/foundation/form/checkbox"
          text="Workflow"/>
      </items>
      <parentConfig jcr:primaryType="nt:unstructured"
        active="{Boolean}true"/>
    </aem>
  </items>
</accordion>`;

const hidden =
`<firstName jcr:primaryType="nt:unstructured"
  fieldLabel="First Name"
  name="./firstName"
  required="{Boolean}true"
  emptyText="Enter your First Name"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"/>
<pageTitle jcr:primaryType="nt:unstructured"
  value="./firstName"
  name="./pageTitle@ValueFrom"
  sling:resourceType="granite/ui/components/coral/foundation/form/hidden"/>
<resourceType jcr:primaryType="nt:unstructured"
  value="article/v1/article"
  name="./resourceType"
  sling:resourceType="granite/ui/components/coral/foundation/form/hidden"/>`;

const well =
`<well jcr:primaryType="nt:unstructured"
  margin="{Boolean}true"
  sling:resourceType="granite/ui/components/coral/foundation/well">
  <items jcr:primaryType="nt:unstructured">
    <parentPage jcr:primaryType="nt:unstructured"
      sling:resourceType="cq/gui/components/coral/common/form/pagefield"
      fieldDescription="Select Blogs Parent Page"
      fieldLabel="Parent Page"
      name="./parentPage"
      rootPath="/content/aem-demo"/>
  </items>
</well>`;

const include =
`<textStyle jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/include"
  path="/apps/aem-demo/components/common/color"/>

<!-- /apps/aem-demo/components/common/color/.content.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
  xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0"
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/container">
  <items jcr:primaryType="nt:unstructured">
    <textColor jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/colorfield"
      fieldLabel="Text Color"
      name="./textColor"
      showDefaultColors="{Boolean}true"
      showProperties="{Boolean}true"
      showSwatches="{Boolean}true"/>
    <backgroundColor jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/form/colorfield"
      fieldLabel="Background Color"
      name="./backgroundColor"
      showDefaultColors="{Boolean}true"
      showProperties="{Boolean}true"
      showSwatches="{Boolean}true"/>
  </items>
</jcr:root>`;

const container =
`<container jcr:primaryType="nt:unstructured"
  margin="{Boolean}true"
  maximized="{Boolean}true"
  sling:resourceType = "granite/ui/components/coral/foundation/container">
  <items jcr:primaryType="nt:unstructured">
    <imageCaption jcr:primaryType="nt:unstructured"
      sling:resourceType = "granite/ui/components/coral/foundation/form/textfield"
      fieldLabel="Image Caption"
      name="./imageCaption"/>
    <alternateText jcr:primaryType="nt:unstructured"
      sling:resourceType="cq/gui/components/coral/common/form/textfield"
      fieldLabel="Alternate Text"
      name="./alternateText"/>
  </items>
</container>`;

const includeClientLibs =
`<basic jcr:primaryType="nt:unstructured"
  jcr:title="Basic"
  sling:resourceSuperType="wcm/foundation/components/basicpage/v1/basicpage/tabs/basic"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      sling:resourceType="granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <clientLibs jcr:primaryType="nt:unstructured"
          categories="aem-demo.tab.showHide"
          js="aem-demo.dropdown.showHide"
          css="aem-demo.dialogHeight"
          sling:resourceType="granite/ui/components/coral/foundation/includeclientlibs"/>
      </items>
    </column>
  </items>
</basic>`;

const fixedColumns =
`<content jcr:primaryType="nt:unstructured"
  margin="{Boolean}true"
  maximized="{Boolean}true"
  sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
  <items jcr:primaryType="nt:unstructured">
    <column jcr:primaryType="nt:unstructured"
      margin="{Boolean}true"
      maximized="{Boolean}true"
      sling:resourceType = "granite/ui/components/coral/foundation/container">
      <items jcr:primaryType="nt:unstructured">
        <videoSource jcr:primaryType="nt:unstructured"
          sling:resourceType="granite/ui/components/coral/foundation/form/select"
          fieldLabel="Video Source"
          name="./videoSource">
          <items jcr:primaryType="nt:unstructured">
            <youtube jcr:primaryType="nt:unstructured"
              text="YouTube"
              value="youtube"/>
            <brightcove jcr:primaryType="nt:unstructured"
              selected="{Boolean}true"
              text="BrightCove"
              value="brightcove"/>
          </items>
        </videoSource>
        <videoId jcr:primaryType="nt:unstructured"
          sling:resourceType = "granite/ui/components/coral/foundation/form/textfield"
          fieldLabel="Video ID"
          name="./videoId"/>
      </items>
    </column>
  </items>
</content>`;

const pageField =
`<navigationRoot jcr:primaryType="nt:unstructured"
  sling:resourceType="cq/gui/components/coral/common/form/pagefield"
  fieldDescription="The root page to build the navigation."
  fieldLabel="Navigation Root"
  rootPath="/content/aem-demo"
  name="./navigationRoot"
  multiple="{Boolean}true"
  emptyText="Navigation Root"
  required="{Boolean}true"/>`;

const tagField =
`<articleTopics jcr:primaryType="nt:unstructured"
  sling:resourceType="cq/gui/components/coral/common/form/tagfield"
  fieldLabel="Article Topics"
  multiple="{Boolean}true"
  name="./articleTopics"
  emptyText="Article Topics"
  forceSelection="{Boolean}true"
  required="{Boolean}true"
  rootPath="/content/cq:tags/aem-demo/article/topics"/>`;

const fileUpload =
`<thumbnail jcr:primaryType="nt:unstructured"
  icon="adobe"
  fieldLabel="Thumbnail"
  fieldDescription="Thumbnail"
  sling:resourceType="cq/gui/components/authoring/dialog/fileupload"
  name="./image/file"
  fileNameParameter="./image/fileName"
  fileReferenceParameter="./image/fileReference"
  mimeTypes="[image/gif,image/jpeg,image/png,image/webp,image/tiff,image/svg+xml]"
  allowUpload="{Boolean}false"
  allowDrop="{Boolean}true"
  multiple="{Boolean}false"
  required="{Boolean}true"
  sizeLimit="10000000"/>`;

const cfPicker =
`<fragmentPath jcr:primaryType="nt:unstructured"
  sling:resourceType="dam/cfm/components/cfpicker"
  name="./fragmentPath"
  fieldDescription="Path to the Content Fragment to display."
  fieldLabel="Content Fragment"
  emptyText="Enter or select Content Fragment"
  forceSelection="{Boolean}true"
  required="{Boolean}true"
  multiple="{Boolean}false"
  pickerTitle="Select Content Fragment"
  rootPath="/content/dam/aem-demo"/>`;

const xfField =
`<fragmentVariationPath jcr:primaryType="nt:unstructured"
  sling:resourceType="cq/experience-fragments/editor/components/xffield"
  name="./fragmentVariationPath"
  fieldLabel="Variation"
  filter="folderOrVariant"
  propertyFilter="cq:xfShowInEditor"
  variant="web"
  emptyText="Enter or select Experience Fragment"
  forceSelection="{Boolean}true"
  required="{Boolean}true"
  multiple="{Boolean}false"
  fieldDescription="Choose the experience fragment variation to display."
  rootPath="/content/experience-fragments/aem-demo"/>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function DialogCheatSheet() {
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
            <section className="pt-6 pb-3">
              Granite UI provides a large range of the basic components needed to create component dialog on the
              authoring environment. These components are constructed using Coral UI-based elements.
            </section>
            <div>
              <Highlight code={accordion} language="xml" path="Accordion"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/accordion/index.html`}>
                  {GRANITE_UI}/accordion/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={cfPicker} language="xml" path="CF Picker"/>
            </div>
            <div className="pt-4">
              <Highlight code={checkbox} language="xml" path="Check Box"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/checkbox/index.html`}>
                  {GRANITE_UI}/form/checkbox/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4" id="color-field">
              <Highlight code={colorfield} language="xml" path="Color Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/colorfield/index.html`}>
                  {GRANITE_UI}/form/colorfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={container} language="xml" path="Container"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/container/index.html`}>
                  {GRANITE_UI}/container/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={datePicker} language="xml" path="Date Picker"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/datepicker/index.html`}>
                  {GRANITE_UI}/form/datepicker/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={fieldset} language="xml" path="Field Set"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/fieldset/index.html`}>
                  {GRANITE_UI}/form/fieldset/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={fileUpload} language="xml" path="File Upload"/>
            </div>
            <div className="pt-4">
              <Highlight code={fixedColumns} language="xml" path="Fixed Columns"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/fixedcolumns/index.html`}>
                  {GRANITE_UI}/fixedcolumns/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={hidden} language="xml" path="Hidden Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/hidden/index.html`}>
                  {GRANITE_UI}/form/hidden/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4" id="include">
              <Highlight code={include} language="xml" path="Include"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/include/index.html`}>
                  {GRANITE_UI}/include/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={includeClientLibs} language="xml" path="Include Clientlibs"/>
              <div>
                This is especially useful when trying to load client libraries during page creation. <br/>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/includeclientlibs/index.html`}>
                  {GRANITE_UI}/includeclientlibs/index.html
                </Link>
              </div>
            </div>
            <div id="multifield" className="pt-4">
              <Highlight code={multifield} language="xml" path="Multi Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/multifield/index.html`}>
                  {GRANITE_UI}/form/multifield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={nestedCheckboxList} language="xml" path="Nested Check Box List"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/nestedcheckboxlist/index.html`}>
                  {GRANITE_UI}/form/nestedcheckboxlist/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={numberField} language="xml" path="Number Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/numberfield/index.html`}>
                  {GRANITE_UI}/form/numberfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={pageField} language="xml" path="Page Field"/>
            </div>
            <div className="pt-4">
              <Highlight code={password} language="xml" path="Password"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/password/index.html`}>
                  {GRANITE_UI}/form/password/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={pathfield} language="xml" path="Path Field"
                image={{ src: PathFieldImage, alt: "AEM Component Dialog (Pathfield)" }}/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/pathfield/index.html`}>
                  {GRANITE_UI}/form/pathfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={radioGroup} language="xml" path="Radio Group"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/radiogroup/index.html`}>
                  {GRANITE_UI}/form/radiogroup/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={select} language="xml" path="Select"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/select/index.html`}>
                  {GRANITE_UI}/form/select/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={_switch} language="xml" path="Switch"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/switch/index.html`}>
                  {GRANITE_UI}/form/switch/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={tabs} language="xml" path="Tabs"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${CORAL_UI}/Coral.Icon.html#availableIcons`}>
                  {CORAL_UI}/Coral.Icon.html
                </Link><br/>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/tabs/index.html`}>
                  {GRANITE_UI}/tabs/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={tagField} language="xml" path="Tag Field"/>
            </div>
            <div className="pt-4">
              <Highlight code={textArea} language="xml" path="Text Area"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/textarea/index.html`}>
                  {GRANITE_UI}/form/textarea/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={textField} language="xml" path="Text Field"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/form/textfield/index.html`}>
                  {GRANITE_UI}/form/textfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={well} language="xml" path="Well"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600 break-all" target="_blank"
                      href={`${GRANITE_UI}/well/index.html`}>
                  {GRANITE_UI}/well/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={xfField} language="xml" path="XF Field"/>
            </div>
          </div>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  )
}
