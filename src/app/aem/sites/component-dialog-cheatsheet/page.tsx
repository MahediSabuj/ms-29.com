import Link from "next/link";
import { Metadata } from "next";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";

export const metadata: Metadata = {
  title: "AEM Component Dialog CheatSheet",
  description: `Granite UI provides a large range of the basic components needed to create component dialog on the
    authoring environment. These components are constructed using Coral UI-based elements.`,
  alternates: {
    canonical: "/aem/sites/component-dialog-cheatsheet"
  }
};

const GRANITE_UI = "https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/components/coral/foundation/form";

const textField =
`<firstName jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
  fieldDescription="Enter your First Name"
  fieldLabel="First Name"
  name="./firstName"/>`

const datePicker =
`<dateOfBirth jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/datepicker"
  displayTimezoneMessage="{Boolean}false"
  fieldLabel="Date of Birth"
  fieldDescription="Enter your Date of Birth"
  name="./dateOfBirth"
  type="date"/>`

export default function DialogCheatSheet() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title="AEM Component Dialog CheatSheet"
          url="/aem/sites/component-dialog-cheatsheet"
          publishDate="February 13, 2024"
          modifiedDate="February 13, 2024"/>
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
