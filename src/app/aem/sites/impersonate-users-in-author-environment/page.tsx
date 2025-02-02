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
            To troubleshoot issues, we may need to impersonate users in the author environment. With the Impersonate
            functionality, a user can
            work on behalf of another user.
          </section>
          <section className="pt-3">
            Recently, we encountered an issue where user was unable to edit pages due to CSS not loading correctly. To
            investigate the issue, we
            attempted to impersonate the user to better understand the issue.
          </section>
          <section className="pt-3">
            Impersonating user is straightforward with administrator permissions, but we face challenges without admin
            access. We will explore methods
            for impersonating user both with and without admin privileges.
          </section>
          <section className="pt-3">
            <strong>With Admin privilege</strong>, navigate to <strong>Tools</strong> &gt; <strong>Security</strong> &gt; <strong>Users</strong> and
            select the user you want to impersonate. From <strong>Impersonators</strong> tab, add yourself as Impersonator.
          </section>
          <Image className="border p-1 mt-2"
              src={ADD_USERS_AS_IMPERSONATORS} alt="Add Users as Impersonators"/>
          <section className="pt-2">
            Now, by accessing the User option in the header and select the user you&apos;ve set yourself as the impersonator for.
          </section>
          <Image className="border p-1 mt-2" height={400}
              src={IMPERSONATE_AS_USER} alt="Impersonate as Users"/>
          <section className="pt-2">
            You will now be able to complete tasks as if you were using the account and troubleshoot issues by
            understanding user&apos;s perspective.
          </section>
        </div>
      </article>
    </div>
  );
}
