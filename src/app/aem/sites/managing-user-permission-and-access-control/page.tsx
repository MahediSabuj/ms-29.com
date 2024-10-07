import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { AEM_USER_PERMISSION as ARTICLE } from "@/lib/data/article/aem/sites";

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

export default function UserPermission() {
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
            Adobe Experience Manager (AEM) is a content management system managing content authoring across multiple 
            sites with multiple content creators. User Permissions enforces strict governance over user actions like read, create, 
            modify, delete, publish contents. This mechanism ensures that only authorized users can perform these specific actions.
          </section>
          <div className="relative overflow-x-auto mt-2">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase border">
              <tr>
                <th scope="col" className="min-w-36 px-6 py-3 border-r">
                  Classic UI Privilege
                </th>
                <th scope="col" className="px-6 py-3">
                  Permissions UI Privilege
                </th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Read
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:read</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Modify
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:modifyProperties</code>, <code className="code-inline">jcr:lockManagement</code>, <code className="code-inline">jcr:versionManagement</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Create
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:addChildNodes</code>, <code className="code-inline">jcr:nodeTypeManagement</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Delete
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:removeNode</code>, <code className="code-inline">jcr:removeChildNodes</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Read ACL
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:readAccessControl</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Edit ACL
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">jcr:modifyAccessControl</code>
                </td>
              </tr>
              <tr className="border-b border-x">
                <td scope="row" className="px-6 py-4 font-medium border-r whitespace-nowrap">
                  Replicate
                </td>
                <td className="px-6 py-4">
                  <code className="code-inline">crx:replicate</code>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>  
      </article>
    </div>
  );
}
