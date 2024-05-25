import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CUSTOM_METADATA_AEM_ASSETS as ARTICLE } from "@/lib/data/article/aem/assets";

import CUSTOM_METADATA_SCHEMA from './assets/Custom_MetaData_Schema.webp';

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
        </div>
      </article>
    </div>
  );
}
