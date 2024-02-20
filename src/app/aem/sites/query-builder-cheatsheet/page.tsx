import Article from "@/components/article/article";
import { QUERY_BUILDER_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";

export default function QueryBuilder() {
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
