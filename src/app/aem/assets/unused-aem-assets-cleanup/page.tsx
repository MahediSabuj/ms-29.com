import Article from "@/components/article/article";
import { UNUSED_ASSET_CLEANUP as ARTICLE } from "@/lib/data/article/aem/assets";

export default function UnusedAssetCleanup() {
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
