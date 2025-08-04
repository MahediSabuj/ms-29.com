import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import Reference from "@/components/reference/reference";

import { CUSTOM_SEARCH_FACETS_AEM_ASSETS as ARTICLE } from "@/lib/data/article/aem/assets";

import AEM_ASSETS_SEARCH_FORM from "./assets/aem-assets-search-form.png";
import AEM_ASSETS_EDIT_SEARCH_FROM from "./assets/aem-assets-edit-search-form.png";
import AEM_ASSETS_PROPERTY_PREDICATE from "./assets/aem-assets-property-predicate.png";
import AEM_ASSETS_SEARCH_FILTER from "./assets/aem-assets-search-filter.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Assets",
    url: "/aem/assets"
  }],
  current: ARTICLE.title
}

export default function CustomSearchFacet() {
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
            Search Facet allow authors to filter assets based on metadata. While AEM provides default search facets out-of-the-box (like file
            type, file size, status), many organizations have unique metadata requirements. That&apos;s where custom search facets come in — they
            let you tailor the search experience to better suit your organization&apos;s specific asset metadata and workflows.
          </section>
          <section className="pt-4">
            Search facets are UI components that allow users to filter search results based on specific criteria. In AEM Assets, these facets are
            typically based on metadata fields associated with assets.
          </section>
          <section className="pt-4">
            Here are the steps to create a custom search facet in AEM Assets:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>Navigate to <strong>Tools</strong> &gt; <strong>General</strong> &gt; <strong>Search Forms</strong>, you will see a list of forms.</li>
              <li>
                For our use case, let&apos; proceed with <strong>Assets Admin Search Rail</strong> form. This form is used to search for assets in the AEM Assets UI.
                When configuring the search form remember it&apos;s global across AEM Assets.
                <Image src={AEM_ASSETS_SEARCH_FORM} width="600" alt="AEM Assets Search Form" className="border my-2"/>
              </li>
              <li>
                Select the <strong>Assets Admin Search Rail</strong> form and click on the <strong>Edit</strong> button. In the right panel, list of predicates are provided.
                <Image src={AEM_ASSETS_EDIT_SEARCH_FROM} alt="AEM Assets Edit Search Form" className="border my-2"/>
              </li>
              <li>
                Add a new predicate (e.g., <strong>Property predicate</strong>) from the <strong>Select Predicate</strong> section. This will add a new filter to the Asset Search UI.
                Configure the predicate by specifying the Property Name, Field Label, etc. The Property Name should match the metadata field you want to filter on.
                Need a custom metadata field? Read the article <Link className="text-blue-600" target="_blank" href="/aem/assets/custom-metadata-in-aem-assets">Custom Metadata in AEM Assets</Link> for step-by-step instructions.
                <Image src={AEM_ASSETS_PROPERTY_PREDICATE} alt="AEM Assets Property Predicate" className="border my-2"/>
                Choose the predicate type that best matches your requirements.
              </li>
              <li>Save the changes to the search form. This will update the search UI to include the new facet.</li>
            </ul>
          </section>
          <section className="pt-4">
            Navigate to an Asset Folder and click on <strong>Search</strong> icon in the top right corner of the Assets UI. You should see the new facet you created in the search filter panel.
            <Image src={AEM_ASSETS_SEARCH_FILTER} alt="AEM Assets Search Filter" className="border mt-2"/>
          </section>
          <section className="pt-4">
            Custom Search Facets can be found at <code className="code-inline break-all">/conf/global/settings/dam/search/facets/assets</code>. You can incorporate this configs into your AEM codebase
            and deploy the changes to AEM instances. Ensure that you include the path in the filter.xml.
          </section>
        </div>
      </article>
      <Reference references={[{
        title: "Assets Admin Search Rail",
        url: "experienceleague.adobe.com/en/docs/experience-manager-learn/assets/configuring/assets-admin-search-rail"
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
