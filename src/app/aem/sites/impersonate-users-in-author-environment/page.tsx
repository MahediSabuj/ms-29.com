import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import Reference from "@/components/reference/reference";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { IMPERSONATE_USERS_AUTHOR_ENVIRONMENT as ARTICLE } from "@/lib/data/article/aem/sites";

import ADD_USERS_AS_IMPERSONATORS from "./assets/add-users-as-impersonators.png";
import IMPERSONATE_AS_USER from "./assets/impersonate-as-users.png";
import IMPERSONATE_USERS_AEM_65 from "./assets/impersonate-users-aem-65.png";

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
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <div>
          <section className="pt-6">
            To troubleshoot issues, we may need to impersonate users in the author environment. With the Impersonate functionality, a user can
            work on behalf of another user.
          </section>
          <section className="pt-3">
            Recently, we encountered an issue where user was unable to edit pages due to CSS not loading correctly. To investigate the issue, we
            attempted to impersonate the user to better understand the issue.
          </section>
          <section className="pt-3">
            Impersonating user is straightforward with administrator permissions, but we face challenges without admin access. We will explore methods
            for impersonating user both with and without admin privileges.
          </section>
          <section className="pt-3">
            <strong className="text-xl">With Admin privilege</strong>, navigate to <strong>Tools</strong> &gt; <strong>Security</strong> &gt; <strong>Users</strong> and
            select the user you want to impersonate. From <strong>Impersonators</strong> tab, add yourself as Impersonator.
          </section>
          <Image className="border p-1 mt-2" src={ADD_USERS_AS_IMPERSONATORS} alt="Add Users as Impersonators"/>
          <section className="pt-2">
            Now, by accessing the User option in the header and select the user you&apos;ve set yourself as the impersonator for.
          </section>
          <Image className="border p-1 mt-2" height={400} src={IMPERSONATE_AS_USER} alt="Impersonate as Users"/>
          <section className="pt-2">
            You will now be able to complete tasks as if you were using the account and troubleshoot issues by understanding user&apos;s perspective.
          </section>
          <section className="pt-4">
            To enable impersonation <strong className="text-xl">for non-admin users</strong>, we need to create a
            separate user group, such as &quot;impersonators-group&quot; and provide READ permissions to the <code className="code-inline">/home/users</code> node. Once
            a few team members are added to the <em>impersonators-group</em>, they able to impersonate other users, as
            impersonation requires READ permissions in the <code className="code-inline">/home/users</code> node.
          </section>
        </div>
      </article>
      <Reference references={[{
        title: "User Administration and Security",
        url: "https://experienceleague.adobe.com/en/docs/experience-manager-65/content/security/security#impersonating-another-user"
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[{
          fullName: "Dave A.",
          message: `I'm logged in as the admin and there is no "Impersonators" tab at all. Only Details, Groups, Keystore and Profiles.`,
          reviewDate: "April 11, 2025",
          replies: [{
            fullName: "Mahedi Sabuj (Author)",
            message: `Impersonators tab available only in AEM as a Cloud Service. In AEM 6.5, you can find it in the classic UI 
              at <code class="code-inline background">/useradmin</code>.
              <Image class="border p-1 mt-2" src=${IMPERSONATE_USERS_AEM_65.src} alt="Add Users as Impersonators"/>`,
            reviewDate: "May 02, 2025"
          }]
        }]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
