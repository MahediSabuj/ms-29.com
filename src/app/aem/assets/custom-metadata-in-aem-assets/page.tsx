import Article from "@/components/article/article";
import { CUSTOM_METADATA_AEM_ASSETS as ARTICLE } from "@/lib/data/article/aem/assets";

export default function CustomMetadata() {
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
