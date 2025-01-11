import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import { IMPERSONATE_USERS_AUTHOR_ENVIRONMENT as ARTICLE } from "@/lib/data/article/aem/sites";

import ADD_USERS_AS_IMPERSONATORS from "./assets/add-users-as-impersonators.png";
import IMPERSONATE_AS_USER from "./assets/impersonate-as-users.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
  }],
  current: ARTICLE.title
}

export default function ImpersonateUsers() {
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
            To troubleshoot issues, we often need to impersonate users in the author environment. With the Impersonate functionality, a user can
            work on behalf of another user.
          </section>
          <section className="pt-3">
            Recently, we encountered an issue where  user was unable to edit pages due to CSS not loading correctly. To investigate the issue, we
            attempted to impersonate the user to better understand the issue.
          </section>
          <Image className="border p-1 mt-2"
             src={ADD_USERS_AS_IMPERSONATORS} alt="Add Users as Impersonators"/>
          <Image className="border p-1 mt-2"  height={400}
             src={IMPERSONATE_AS_USER} alt="Impersonate as Users"/>
        </div>
      </article>
    </div>
  );
}
