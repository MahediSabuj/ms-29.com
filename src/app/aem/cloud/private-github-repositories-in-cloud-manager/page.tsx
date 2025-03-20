import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import { PRIVATE_GITHUB_REPOSITORIES_IN_CLOUD_MANAGER as ARTICLE } from "@/lib/data/article/aem/cloud";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function PrivateGithubRepository() {
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
            Integrating Private GitHub repositories into AEM Cloud Manager streamlines development workflow by allowing direct code
            validation within GitHub, eliminating the need for frequent synchronization with Adobe&apos;s repository.
            This article provides a step-by-step guide to integrating private GitHub repositories into AEM Cloud Manager.
          </section>
          <section className="pt-4">
            The integration process involves two main steps:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <Link href="#add-private-repository" className="text-blue-600">
                  Add Private GitHub Repository to Program
                </Link>
              </li>
              <li>
                <Link href="#validate-ownership" className="text-blue-600">
                  Validate Ownership of the Repository
                </Link>
              </li>
            </ul>
          </section>
          <h2 className="text-lg mt-4" id="add-private-repository">
            <strong>Add Private GitHub Repository to Program</strong>
          </h2>
          <section>
            Repositories in Cloud Manager are used to store and manage project&apos;s code using Git.
          </section>
          <h2 className="text-lg mt-4" id="validate-ownership">
            <strong>Validate Ownership of the Repository</strong>
          </h2>
          <section>

          </section>
        </div>
      </article>
    </div>
  );
}
