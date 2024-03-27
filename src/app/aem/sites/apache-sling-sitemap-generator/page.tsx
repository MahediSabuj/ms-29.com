import Article from "@/components/article/article";
import { APACHE_SLING_SITEMAP_GENERATOR as ARTICLE } from "@/lib/data/article/aem/sites";

export default function UserPermission() {
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
