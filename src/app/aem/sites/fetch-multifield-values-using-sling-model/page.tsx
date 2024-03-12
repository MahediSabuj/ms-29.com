import Article from "@/components/article/article";
import { FETCH_MULTIFIELD_SLING_MODEL as ARTICLE } from "@/lib/data/article/aem/sites";
import Highlight from "@/components/highlight/highlight";

const multifield =
    `<articles jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
  fieldLabel="Articles"
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

export default function FetchMultiField() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-3">
          In accordance with specific project requirements,  there might be a need to incorporate Multifield within the
          component dialog. Let&apos;s explore how to retrieve Multifield data and effectively utilize it in HTL.
        </div>
        <div className="pt-2">
          Here is a sample cq_dialog allowing authors to enter multiple article items.
        </div>
        <Highlight code={multifield} language="xml" path="article / _cq_dialog / .content.xml"/>
        <div className="pt-1">
          For demonstration purposes, we&apos;ve included an option for the article title. However, you can also fetch the title
          directly from the page itself, depending on your project requirements.
        </div>
      </article>
    </div>
  );
}
