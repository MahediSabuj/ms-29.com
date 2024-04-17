import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { SALESFORCE_HEADLESS_AUTHENTICATION as ARTICLE } from "@/lib/data/article/salesforce/identity";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Salesforce Identity",
    url: "/salesforce/identity"
  }],
  current: ARTICLE.title
}

export default function HeadlessAuthentication() {
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
            With headless authentication, backend authentication can be segregated from frontend identity experiences, 
            enhancing faster login experience. It enables each channel to provide unique UI experiences according to their brand guidelines.
          </section>
        </div>
      </article>
    </div>
  );
}
