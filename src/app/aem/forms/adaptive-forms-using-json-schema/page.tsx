import Article from "@/components/article/article";
import { ADAPTIVE_FORMS_USING_JSON_SCHEMA as ARTICLE } from "@/lib/data/article/aem/forms";

export default function AdaptiveForms() {
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
