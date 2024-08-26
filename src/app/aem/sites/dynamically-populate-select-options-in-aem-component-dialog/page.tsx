import Article from "@/components/article/article";
import { DYNAMICALLY_POPULATE_SELECT_OPTIONS_IN_AEM_COMPONENT_DIALOG as ARTICLE } from "@/lib/data/article/aem/sites";

export default function PopulateSelectOptions() {
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
