import Article from "@/components/article/article";
import { SLING_MODEL_DELEGATION_PATTERN as ARTICLE } from "@/lib/data/article/aem/sites";

export default function SlingModelDelegationPattern() {
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
