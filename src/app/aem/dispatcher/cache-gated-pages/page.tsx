import Article from "@/components/article/article";
import { CACHE_AEM_GATED_PAGES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export default function CacheGatedPages() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
      </article>
    </div>
  );
}
