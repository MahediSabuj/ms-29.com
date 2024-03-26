import Article from "@/components/article/article";
import { INVOKE_AEM_WORKFLOW_FROM_SUBMISSION as ARTICLE } from "@/lib/data/article/aem/forms";

export default function InvokeWorkflow() {
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
