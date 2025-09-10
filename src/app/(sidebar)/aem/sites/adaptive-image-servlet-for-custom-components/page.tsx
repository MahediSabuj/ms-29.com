import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { ADAPTIVE_IMAGE_SERVLET_FOR_CUSTOM_COMPONENTS as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function AdaptiveImageServlet() {
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
            Adaptive Image identifies the end user&apos;s screen size and dynamically serves the 
            appropriate version of the image, delivering smaller sizes for small screens and larger ones 
            for larger screens. This optimization significantly improves website performance and user 
            experience by minimizing bandwidth consumption and reducing load times.
          </section>
        </div>
      </article>
    </div>
  );
}
