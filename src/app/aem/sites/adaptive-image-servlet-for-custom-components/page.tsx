import Article from "@/components/article/article";
import { ADAPTIVE_IMAGE_SERVLET_FOR_CUSTOM_COMPONENTS as ARTICLE } from "@/lib/data/article/aem/sites";

export default function AdaptiveImageServlet() {
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
