import Article from "@/components/article/article";
import { PROJECT_LOMBOK_IN_AEM_SLING_MODELS as ARTICLE } from "@/lib/data/article/aem/sites";

export default function SpaComponent() {
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
