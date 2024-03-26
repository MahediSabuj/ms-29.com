import Article from "@/components/article/article";
import { CONTEXT_AWARE_CONFIGURATION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function ContextAwareConfiguration() {
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
