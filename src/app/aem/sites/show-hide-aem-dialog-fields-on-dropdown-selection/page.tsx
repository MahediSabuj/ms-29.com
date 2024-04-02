import Article from "@/components/article/article";
import { SHOW_HIDE_DIALOG_FIELDS_ON_DROPDOWN_SELECTION as ARTICLE } from "@/lib/data/article/aem/sites";

export default function ShowHideDialogFields() {
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
