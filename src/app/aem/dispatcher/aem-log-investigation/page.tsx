import { Metadata } from "next";

import Article from "@/components/article/article";
import { AEM_LOG_INVESTIGATION as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

export default function LogInvestigation() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
