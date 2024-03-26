import Article from "@/components/article/article";
import { EXPAND_CORE_SEARCH_COMPONENT_SCOPE as ARTICLE } from "@/lib/data/article/aem/sites";

export default function HtlSpecification() {
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
