import Article from "@/components/article/article";
import { AEM_USER_PERMISSION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function UserPermission() {
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
