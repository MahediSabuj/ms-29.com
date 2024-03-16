import Article from "@/components/article/article";
import { CACHE_AEM_GATED_PAGES as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export default function CacheGatedPages() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-6">
            In General, requests containing authentication information are not cached because the cached document is served
            to the client without authentication. However, if the requirements permit the caching of authenticated documents,
            this can be activated by setting the <code className="code-inline">/allowAuthorized</code> property to &quot;1&quot;.
            Additionally, need to implement the AuthChecker module, which verifies users access permissions for a page before delivering the cached content.
        </div>
      </article>
    </div>
  );
}
