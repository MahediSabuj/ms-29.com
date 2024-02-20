import Article from "@/components/article/article";
import { INTEGRATE_AEM_FORMS_IN_AEM_SITES as ARTICLE } from "@/lib/data/article/aem/forms";

export default function FormsInSite() {
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
