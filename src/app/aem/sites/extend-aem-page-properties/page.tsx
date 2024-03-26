import Article from "@/components/article/article";
import { EXTEND_AEM_PAGE_PROPERTIES as ARTICLE } from "@/lib/data/article/aem/sites";

export default function ExtendPageProperties() {
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
