import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CONTENT_TRANSFER_TOOL as ARTICLE } from "@/lib/data/article/aem/sites";

import MIGRATION_SET_CLOUD_MANAGER from './assets/migration-set-cloud-manager.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ContentTransfer() {
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
            Content Transfer Tool (CTT) is used to move existing content from source AEM (on-premise or AMS) instance to target AEM Cloud Service instance.
          </section>
          <Image src={MIGRATION_SET_CLOUD_MANAGER} className="border mt-3" height="400"
             alt="Migration Set Cloud Manager">
          </Image>
        </div>  
      </article>
    </div>
  );
}