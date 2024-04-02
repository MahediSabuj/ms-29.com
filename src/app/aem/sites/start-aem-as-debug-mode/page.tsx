import Article from "@/components/article/article";
import { START_AEM_AS_DEBUG_MODE as ARTICLE } from "@/lib/data/article/aem/sites";

export default function AEMasDebugMode() {
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
