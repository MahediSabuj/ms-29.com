import Article from "@/components/article/article";
import { CUSTOM_AEM_SPA_COMPONENT as ARTICLE } from "@/lib/data/article/aem/spa";

export default function SpaComponent() {
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
