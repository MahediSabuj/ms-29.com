import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CUSTOM_METADATA_AEM_ASSETS as ARTICLE } from "@/lib/data/article/aem/assets";

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
        </div>
      </article>
    </div>
  );
}
