import Link from "next/link";
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
          <div>
            <section className="pt-4 pb-3">
              There are two potential approaches for integrating AEM forms into AEM Sites: one for new projects
              and another for existing projects. Adobe has developed the <Link className="text-blue-600" href="https://github.com/adobe/aem-core-forms-components">aem-core-forms-components</Link> which
              can be used to incorporate forms standard components into AEM Sites.
            </section>
          </div>
      </article>
    </div>
  );
}
