import Article from "@/components/article/article";
import { MULTI_SITE_MANAGER as ARTICLE } from "@/lib/data/article/aem/sites";

export default function MultiSiteManager() {
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
