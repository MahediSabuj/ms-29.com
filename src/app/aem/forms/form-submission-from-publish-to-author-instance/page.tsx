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
        <div>
          <section className="pt-6 pb-3">
            In General, when an end user submits a form, the request is routed to the publish environment.
            Any modifications made at the CRX/DE during the execution of the post request are stored in
            the publish environment. However, a request may arise where upon form submission, certain data
            such as a content fragment needs to be created on the author instance. Following approval from
            business-level users, the content will be published to the publish environment, making it publicly
            accessible on the internet.
          </section>
        </div>
    </div>
  );
}
