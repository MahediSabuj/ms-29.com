import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";

import {
  CREATE_CUSTOM_MCP_PROCESS_IN_ACS_COMMONS as ARTICLE
} from "@/lib/data/article/aem/acs-commons";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.ACS_COMMONS.title,
    url: TOPICS.ACS_COMMONS.url
  }],
  current: ARTICLE.title
}

export default function CustomMCP() {
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
            Managed Controlled Process (MCP) in AEM ACS Commons
          </section>
        </div>  
      </article>
    </div>
  );
}
