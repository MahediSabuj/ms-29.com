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
import TOPICS from "@/lib/data/article/topics";
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
    path="/etc/acs-commons/lists/article-types" />
</articleTypes>`;

const AEM_SERVLET =
`@Component(service = { Servlet.class })
@SlingServletPaths(
  value = "/bin/public/aem-demo/dropdowns"
)
@ServiceDescription("Dynamic Dropdown Servlet")
public class DropdownServlet extends SlingSafeMethodsServlet {
  @Reference
  DropdownService dropdownService;

  @Override
  protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
    ResourceResolver resolver = request.getResourceResolver();
    
    // Current Page Path
    String currentPagePath = request.getRequestPathInfo().getSuffix();

    // Fetch Property from datasource
    Resource datasource = request.getResource().getChild("datasource");
    ValueMap vm = datasource.getValueMap();
    String type = vm.get("types", ""); // articleTypes

    // Fetch dropdown options from External Source or other Component properties
    List<String> options = dropdownService.getOptions(currentPagePath, type);

    DataSource dataSource = new SimpleDataSource(
        new TransformIterator<>(options.iterator(), input -> {
      ValueMap valueMap = new ValueMapDecorator(new HashMap<>());
      valueMap.put("value", input);
      valueMap.put("text", input);

      return new ValueMapResource(
          resolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap);
    }));

    request.setAttribute(DataSource.class.getName(), dataSource);
  }
}`;

const COMPONENT_DIALOG_USING_DYNAMIC_OPTIONS =
`<articleTypes jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/select"
  fieldLabel="Article Types"
  name="./articleTypes">
  <datasource jcr:primaryType="nt:unstructured"
    types="articleTypes"
    sling:resourceType="/bin/public/aem-demo/dropdowns"/>
</articleTypes>`

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_SITES.title,
    url: TOPICS.AEM_SITES.url
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
          modifiedDate={ARTICLE.modifiedDate}
          views={ARTICLE.views}/>
        <section className="pt-6">
          Creating dynamic and interactive components can significantly enhance the authoring experience. One effective enhancement is dynamically
          populating the options of a select field within a component dialog. This is especially useful when the options need to be fetched from an
          external source or depend on other selections made by the author.
        </section>
        <h2 className="text-xl mt-4">
          <strong>Using ACS AEM Commons</strong>
        </h2>
        <section>
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
        <h2 className="text-xl mt-4">
          <strong>Using Sling Servlet</strong>
        </h2>
        <section>
          In some cases, select options need to be retrieved from an external source or other component properties, which can be accomplished
          using custom servlet. To utilize the custom servlet, the component dialog XML will look like the example below.
        </section>
        <Highlight code={COMPONENT_DIALOG_USING_DYNAMIC_OPTIONS} language="xml" path="article / _cq_dialog / .content.xml"/>
        <section className="pt-2">
          You can pass properties from the component dialog to servlet, similar to how <code className="code-inline">types</code> are passed in the above example.
        </section>
        <section className="pt-3">
          To populate options for select field using custom servlet, follow the example below and adjust the implementation according to your requirements.
        </section>
        <Highlight code={AEM_SERVLET} language="java" path="servlets / DropdownServlet.java"/>
        <section className="pt-2">
          Caffeine (or any caching service) can be used to cache dropdown options, ensuring faster loading times for dialogs. It&apos;s essential to implement cache expiration or invalidation to ensure that the latest updates are reflected in the dialog.
        </section>
      </article>
      <Reference references={[{
        title: "Generic Lists",
        url: "adobe-consulting-services.github.io/acs-aem-commons/features/generic-lists/index.html"
      }]}/>
      <div className="mt-8 mb-4">
        <ArticleReviewList items={[]}/>
        <ArticleReviewForm/>
      </div>
    </div>
  );
}
