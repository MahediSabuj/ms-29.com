import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import HighlightCode from "@/components/highlight/highlight";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import {
  REUSE_COMMON_DIALOG_PARTS_IN_AEM_COMPONENTS as ARTICLE
} from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const AEM_COMMON_DIALOG_PART =
`<?xml version="1.0" encoding="UTF-8"?>
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

const INCLUDE_COMMON_PART_IN_DIALOG =
`<textStyle jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/include"
  path="/apps/aem-demo/components/commons/color"/>`;

const REUSE_DIALOG_WITH_OVERRIDE =
`<textStyle jcr:primaryType="nt:unstructured"
  sling:resourceSuperType="/apps/aem-commons/components/commons/color"
  sling:resourceType="granite/ui/components/coral/foundation/container">
  <items jcr:primaryType="nt:unstructured">
    <textColor jcr:primaryType="nt:unstructured"
      name="./textColorV2"/>
    <backgroundColor jcr:primaryType="nt:unstructured"
      name="./backgroundColorV2""/>
  </items>
</textStyle>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function ReuseComponentDialog() {
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
            In AEM development, it&apos;s common to encounter scenarios where the same set of dialog fields such as alternative text
            for an image, or text and background color options are needed across multiple components. Traditionally, developers might copy-paste
            these dialog configurations into each component, but this leads to code duplication and maintenance headaches.
          </section>
          <section className="pt-4">
            A better approach is to <strong>create a shared dialog fragment</strong> and <strong>reuse it across different components</strong>.
            This not only ensures consistency but also makes updates easier, as changes in the common dialog reflect everywhere it&apos;s used.
          </section>
          <section className="pt-4">
            In this article, we&apos;ll discuss:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <Link className="text-blue-600" href="#reuse-common-dialog-as-is">
                  How to Reuse a Common Dialog As Is
                </Link>.
              </li>
              <li>
                <Link className="text-blue-600" href="#reuse-common-dialog-override-or-extend">
                  How to Reuse a Common Dialog and Override or Extend certain Properties.
                </Link>
              </li>
            </ul>
          </section>
          <h2 className="text-xl mt-4" id="reuse-common-dialog-as-is">
            <strong>Reuse a Common Dialog As Is</strong>
          </h2>
          <section>
            Let&apos;s create a reusable common dialog fragment that contains a two <Link className="text-blue-600" target="_blank" href="/aem/sites/component-dialog-cheatsheet#color-field">Color Picker</Link> for
            text and background color.
            <HighlightCode code={AEM_COMMON_DIALOG_PART} language="xml" path="apps / aem-demo / components / commons / color / .content.xml"/>
          </section>
          <section className="pt-4">
            Now, we can reuse this dialog fragment in any component dialog by including it using <Link className="text-blue-600" target="_blank" href="/aem/sites/component-dialog-cheatsheet#include">Include</Link> resource type.
            <HighlightCode code={INCLUDE_COMMON_PART_IN_DIALOG} language="xml" path="apps / aem-demo / components / text / _cq_dialog / .content.xml"/>
          </section>
          <section className="pt-4">
            The dialog will render all the fields from the <code className="code-inline">color</code> dialog fragment as part of your component&apos;s dialog.
            Any updates in the shared dialog will automatically reflect in all components using it.
          </section>
          <h2 className="text-xl mt-4" id="reuse-common-dialog-override-or-extend">
            <strong>Reuse a Common Dialog and Override or Extend certain Properties</strong>
          </h2>
          <section>
            You may be wondering at this point, what if we want use the common dialog but also need to add additional fields or update an existing property (e.g., name) to the component dialog?
          </section>
          <section className="pt-4">
            In this case, we can use the <code className="code-inline">sling:resourceSuperType</code> property to extend the common dialog and override the properties we need.
            Additionally, ensure that the <code className="code-inline">sling:resourceType</code> matches that of the <code className="code-inline">jcr:root</code> node in the common dialog.
            <HighlightCode code={REUSE_DIALOG_WITH_OVERRIDE} language="xml" path="apps / aem-demo / components / text / _cq_dialog / .content.xml"/>
          </section>
          <section className="pt-4">
            By using the <code className="code-inline">sling:resourceSuperType</code> property, we can inherit all the properties from the common dialog and override or add any additional fields as needed.
            This allows for maximum flexibility while still maintaining a clean and reusable dialog structure.
          </section>
          <section className="pt-4">
            Using this approach, you can inherit
          </section>
          <section className="pt-6">
            Reusing and extending common dialog fragments is a best practice that every AEM developer should adopt. It enforces consistency
            across components, minimizes redundant code, and enhances maintainability. Whether you choose to include dialogs directly or extend
            them for more tailored needs, these strategies streamline your workflow and set a strong foundation for scalable AEM projects.
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
