import Article from "@/components/article/article";
import { FORM_SUBMISSION_AUTHOR_INSTANCE as ARTICLE } from "@/lib/data/article/aem/forms";

export default function SubmitFormIntoAuthor() {
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
