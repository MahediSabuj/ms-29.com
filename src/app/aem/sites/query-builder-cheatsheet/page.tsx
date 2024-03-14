import { Metadata } from "next";
import Link from "next/link";

import Article from "@/components/article/article";
import { QUERY_BUILDER_CHEATSHEET as ARTICLE } from "@/lib/data/article/aem/sites";
import Highlight from "@/components/highlight/highlight";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const list_of_pages =
`path = /content/aem-demo/de
type = cq:Page`;

const list_of_assets =
`path = /content/dam/aem-demo/de
type = dam:Asset`;

const page_name_contains_word =
`path = /content/aem-demo/de
type = cq:Page
nodename = *product*`;

const return_selective_properties =
`path = /content/aem-demo/de
type = cq:Page
p.hits = selective
p.properties = jcr:path jcr:content/jcr:title jcr:content/sling:alias`;

const number_of_components_in_page =
`path = /content/aem-demo/de/de/jcr:content
property = sling:resourceType
property.operation = like
property.value = %aem-demo/components%
p.guessTotal = true`;

const pages_filter_by_component_property =
`path = /content/aem-demo/de
1_property = sling:resourceType
1_property.value = aem-demo/components/container
2_property = layout
2_property.value = simple`;

export default function QueryBuilder() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
          <div>
            <section className="pt-6 pb-3">
              Query Builder offers an easy way of querying the content repository of AEM. The API is
              built using the JCR API. AEM includes a <Link className="text-blue-600" target="_blank"
              href="http://localhost:4502/libs/cq/search/content/querydebug.html">Query Debugger</Link> tool
              that allows you to execute  search queries on the JCR (Java Content Repository). Utilize this tool
              to perform a dry run of the AEM queries, optimize them, and then implement them into your code.
            </section>
            <section className="pt-3">
              The following queries return ten results (or to be precise, a maximum of ten), while also indicating
              the total number of available hits. Running the same query with the parameter <strong>p.limit=-1</strong> retrieves
              all results, which could be a large number depending on your instance.
            </section>
            <div className="pt-3">
              <Highlight code={list_of_pages} language="xml" path="Pages within a Content Node"/>
            </div>
            <div className="pt-3">
              <Highlight code={page_name_contains_word} language="xml" path="Page Name contains Specific Word"/>
            </div>
            <div className="pt-3">
              <Highlight code={number_of_components_in_page} language="xml" path="Total Components within a Page"/>
            </div>
            <div className="pt-3">
              <Highlight code={pages_filter_by_component_property} language="xml" path="Pages filtered by Component Property"/>
            </div>
            <div className="pt-3">
              <Highlight code={return_selective_properties} language="xml" path="Return Selective Properties"/>
            </div>
            <div className="pt-3">
              <Highlight code={list_of_assets} language="xml" path="Assets within a Folder"/>
            </div>
          </div>
      </article>
    </div>
  );
}
