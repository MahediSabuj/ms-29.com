import Article from "@/components/article/article";
import { SLING_MODEL_INJECTORS_ANNOTATIONS as ARTICLE } from "@/lib/data/article/aem/sites";

export default function SlingModelAnnotations() {
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
