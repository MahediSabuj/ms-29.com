import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import TOPICS from "@/lib/data/article/topics";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";

import { PRIVATE_GITHUB_REPOSITORIES_IN_CLOUD_MANAGER as ARTICLE } from "@/lib/data/article/aem/cloud";

import GITHUB_PRIVATE_REPOSITORY from './assets/github-private-repository.webp';
import VALIDATE_GITHUB_OWNERSHIP from './assets/validate-github-repository-ownership.webp';

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
            <h2 className="text-xl mt-4" id="add-private-repository">
              <strong>Add Private GitHub Repository to Program</strong>
            </h2>
            <section>
              Repositories in Cloud Manager are used to store and manage project&apos;s code using Git. To add a repository to a program,
              navigate to the Program Console and click on the Repositories tab. Click the Add Repository button to add a new repository.
              In the Add Repository dialog box, select Private Repository as the repository type and provide the necessary details about the repository.
            </section>
            <section className="pt-4">
              Make sure you have <strong>Deployment Manager</strong> or <strong>Business Owner</strong> role otherwise you won&apos;t be able to add a repository.
            </section>
            <section className="pt-4">
            </section>
            <Image src={GITHUB_PRIVATE_REPOSITORY} className="border" width="650"
                alt="GitHub Private Repository">
            </Image>
            <h2 className="text-xl mt-4" id="validate-ownership">
              <strong>Validate Ownership of the Repository</strong>
            </h2>
            <section>
              Cloud Manager now knows about your GitHub repository, but it still needs access to it. To grant access, you need to install the
              Adobe GitHub app and verify that you own the specified repository.
            </section>
            <Image src={VALIDATE_GITHUB_OWNERSHIP} className="border mt-2" width="650"
                alt="Validate GitHub Repository Ownership">
            </Image>
            <section className="pt-4">
              To validate ownership, you first need to install the <Link href="https://github.com/apps/cloud-manager-for-aem" target="_blank" className="text-blue-600">Adobe GitHub</Link> app
              and grant access either to all repositories or only to the specific repository you want to integrate with Cloud Manager.
            </section>
            <section className="pt-4">
              Once you&apos;ve installed the app, the next step to generate secret file from Cloud Manager and upload it to your GitHub repository.
              Create a new file of your GitHub repo called: <code className="code-inline background">.well-known/adobe/cloud-manager-challenge</code> and
              paste the secret file content into this file.
            </section>
            <section className="pt-4">
              Once the app is installed and the secret file exists in the repository, in the Private Repository Ownership Validation dialog box, click Validate.
              Until validation, the repository is listed with a red icon, indicating that it is not yet validated and cannot yet be used.
            </section>
            <section className="pt-4">
              After the GitHub repository is validated in Cloud Manager, the integration is complete. You can use the repository with Cloud Manager.
            </section>
          </div>
        </article>
        <div className="mt-8 mb-4">
          <ArticleReviewList items={[]}/>
          <ArticleReviewForm/>
        </div>
      </div>
  );
}
