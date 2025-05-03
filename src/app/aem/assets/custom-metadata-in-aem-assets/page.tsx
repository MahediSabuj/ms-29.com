import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { CUSTOM_METADATA_AEM_ASSETS as ARTICLE } from "@/lib/data/article/aem/assets";

import CUSTOM_METADATA_SCHEMA from './assets/Custom_MetaData_Schema.webp';
import METADATA_SCHEMA_EDITOR from './assets/Metadata_Schema_Editor.webp';
import METADATA_SCHEMA_APPLY_FOLDERS from './assets/Metadata_Schema_Apply_Folders.webp';
import ASSET_PROPERTIES from './assets/Asset_Properties.webp';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Assets",
    url: "/aem/assets"
  }],
  current: ARTICLE.title
}

export default function CustomMetadata() {
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
            Custom metadata that allows authors to define additional properties for digital assets beyond the 
            standard metadata fields. These custom metadata fields in AEM Assets enhance asset management by allowing 
            organizations to tailor information to their specific needs. They facilitate the inclusion of project 
            specific details, campaign tags, and other relevant data, streamlining more effective asset categorization 
            and management.
          </section>
          <section className="pt-3">
            Custom metadata schemas can be created via <strong>Tools</strong> &gt; <strong>Assets</strong> &gt; <strong>Metadata Schemas</strong>. 
            The default schema provides the standard properties for any asset. Choose the default schema and copy it to create your custom schema 
            based on the existing one.
          </section>
          <Image src={CUSTOM_METADATA_SCHEMA} className="border my-1"
            alt="Custom Metadata Schema">
          </Image>
          <section className="pt-3">
            You can now begin constructing the form using the field types provided by AEM under the &quot;Build Form&quot; section. Additionally, 
            you can add new tabs. However, while you can add any fields to any sections within the root folder (in our case, AEM Demo) during editing, 
            for child items, you can only add fields to new sections and new tabs.
          </section>
          <Image src={METADATA_SCHEMA_EDITOR} className="border my-1"
            alt="Edit Custom Metadata Schema">
          </Image>
          <section className="pt-3">
            After completing the metadata schema edits, you need to attach the schema to your project root folder or any specific folder. This ensures that 
            the changes will be applied to the properties of the assets within those folders.
          </section>
          <Image src={METADATA_SCHEMA_APPLY_FOLDERS} className="border my-1"
            alt="Apply Custom Metadata Schema to Folders">
          </Image>
          <section className="pt-3">
            To validate the custom metadata setup, open the properties of any assets in the folder you specified in the previous step. You should see <strong>Navigation 
            Title</strong> property and <strong>Content Approval</strong> tab.
          </section>
          <Image src={ASSET_PROPERTIES} className="border my-1"
            alt="Asset Properties">
          </Image>
          <section className="pt-3">
            Custom Metadata can be found at <code className="code-inline break-all">/conf/global/settings/dam/adminui-extension/metadataschema</code>. You can incorporate this configs into your AEM codebase 
            and deploy the changes to AEM instances. Ensure that you include the path in the filter.xml.
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
