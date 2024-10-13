import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import ArticleReviewList from "@/components/article-review-list/article-review-list";
import ArticleReviewForm from "@/components/form/article-review/article-review";
import Reference from "@/components/reference/reference";
import { DYNAMICALLY_POPULATE_SELECT_OPTIONS_IN_AEM_COMPONENT_DIALOG as ARTICLE } from "@/lib/data/article/aem/sites";

import ACS_COMMONS_GENERIC_LIST from './assets/acs-commons-generic-list.png';
import ACS_COMMONS_GENERIC_LIST_ITEMS from './assets/acs-commons-generic-list-items.png';
import COMPONENT_DIALOG_USING_GENERIC_LIST from './assets/component-dialog-using-acs-commons-generic-list.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ARTICLE_TYPE_SELECT_LIST =
`<articleTypes jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/foundation/form/select"
  fieldLabel="Article Types"
  name="./articleTypes">
  <datasource jcr:primaryType="nt:unstructured"
    sling:resourceType="acs-commons/components/utilities/genericlist/datasource"
    path="/etc/acs-commons/lists/article-type" />
</articleTypes>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function PopulateSelectOptions() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          Creating dynamic and interactive components can significantly enhance the authoring experience. One effective enhancement is dynamically
          populating the options of a select field within a component dialog. This is especially useful when the options need to be fetched from an
          external source or depend on other selections made by the author.
        </section>
        <section className="pt-3">
          For a select list that needs regular updates with new items, you can use the <strong>Generic Lists</strong> utility from <strong>ACS AEM Commons</strong> to make
          changes without code deployment. Generic Lists allow for the easy creation and management of simple key-value pairs. Check out this <Link target="_blank"
          className="text-blue-600" href="/aem/acs-commons/setup-acs-commons-in-aem-projects">article</Link> on how to install ACS AEM Commons.
        </section>
        <section className="pt-3">
          To create Generic Lists, navigate to <strong>Tools</strong> &gt; <strong>ACS AEM Commons</strong> &gt; <strong>Generic Lists</strong> and click on <strong>Create</strong>.
          Generic Lists are represented as CQ Page under <code className="code-inline">/etc/acs-commons/lists</code>.
        </section>
        <Image src={ACS_COMMONS_GENERIC_LIST} className="border mt-2" width="500"
          alt="ACS Commons Generic List">
        </Image>
        <section className="pt-3">
          Once the list is created, you have the option to edit it and add values. Click Add to add items to list, use drag handles to re-order items.
        </section>
        <Image src={ACS_COMMONS_GENERIC_LIST_ITEMS} className="border mt-2"
          alt="ACS Commons Generic List Items">
        </Image>
        <section className="pt-3">
          Using <code className="code-inline">datasource</code>, Generic List items can be loaded into select lists. To achieve this, Generic List-specific datasource can be used.
        </section>
        <Highlight code={ARTICLE_TYPE_SELECT_LIST} language="xml" path="article / _cq_dialog / .content.xml"/>
        <section className="pt-3">
          In the component dialog, it will appear as shown below.
        </section>
        <Image src={COMPONENT_DIALOG_USING_GENERIC_LIST} className="border mt-2" width="500"
          alt="Component Dialog using Generic List">
        </Image>
        <section className="pt-3">
          To update the select list options, choose the specified list from the Generic Lists and click on Properties. The changes will be reflected in the component dialog immediately.
        </section>
        <Reference references={[{
          title: "Generic Lists",
          url: "https://adobe-consulting-services.github.io/acs-aem-commons/features/generic-lists/index.html"
        }]}/>
      </article>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
