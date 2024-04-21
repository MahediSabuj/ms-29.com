import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SETTING_UP_ERROR_PAGES_IN_AEM as ARTICLE } from "@/lib/data/article/aem/sites";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function ErrorPageSetup() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div>
          <section className="pt-6">
            Customizing error pages in AEM is crucial for ensuring seamless user experience and brand consistency. Error pages act as backups 
            when requested resources cannot be found or unexpected errors occur, such as the commonly encountered 404 and 500 HTTP status codes. 
            By tailoring these pages with informative and user-friendly content, you can ensure users able to navigate smoothly and continue browsing the website.
          </section>
        </div>  
      </article>
    </div>
  );
}
