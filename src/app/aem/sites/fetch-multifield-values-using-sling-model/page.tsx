import Article from "@/components/article/article";
import { FETCH_MULTIFIELD_SLING_MODEL as ARTICLE } from "@/lib/data/article/aem/sites";

export default function FetchMultiField() {
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
