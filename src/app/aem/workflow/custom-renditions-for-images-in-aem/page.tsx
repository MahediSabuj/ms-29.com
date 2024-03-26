import Article from "@/components/article/article";
import { CUSTOM_RENDITIONS_FOR_IMAGES as ARTICLE } from "@/lib/data/article/aem/workflow";

export default function CustomRenditions() {
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
