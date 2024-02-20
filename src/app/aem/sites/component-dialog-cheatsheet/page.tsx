import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { AEM_COMPONENT_DIALOG_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function DialogCheatSheet() {
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
              Granite UI provides a large range of the basic components needed to create component dialog on the
              authoring environment. These components are constructed using Coral UI-based elements.
            </section>
            <div>
              <Highlight code={textField} language="xml" path="TextField"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600"
                    href={`${GRANITE_UI}/textfield/index.html`}>
                  {GRANITE_UI}/textfield/index.html
                </Link>
              </div>
            </div>
            <div className="pt-4">
              <Highlight code={datePicker} language="xml" path="Date Picker"/>
              <div>
                <strong>Reference: </strong>
                <Link className="text-blue-600"
                    href={`${GRANITE_UI}/datepicker/index.html`}>
                  {GRANITE_UI}/datepicker/index.html
                </Link>
              </div>
            </div>
          </div>
      </article>
    </div>
  )
}
