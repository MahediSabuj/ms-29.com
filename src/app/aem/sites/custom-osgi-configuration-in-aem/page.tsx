import Article from "@/components/article/article";
import { CUSTOM_OSGI_CONFIGURATION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function CustomOsgiConfig() {
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
