import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { CACHING_EXPERIENCE_FRAGMENTS as ARTICLE } from "@/lib/data/article/aem/experience-fragment";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SDI_OSGI_CONFIGURATION =
`{
  "include-filter.config.enabled": true,
  "include-filter.config.appendSuffix": true,
  "include-filter.config.add_comment": true,
  "include-filter.config.disableIgnoreUrlParams": false,
  "include-filter.config.extension": "html",
  "include-filter.config.ignoreUrlParams": [""],
  "include-filter.config.include-type": "SSI",
  "include-filter.config.resource-types": [
    "aem-demo/components/xfpage"
  ],
  "include-filter.config.rewrite": false,
  "include-filter.config.path": "/content/experience-fragments/aem-demo",
  "include-filter.config.selector": "xf",
  "include-filter.config.required_header": "Server-Agent=Communique-Dispatcher",
  "include-filter.config.ttl": ""
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "Experience Fragment",
    url: "/aem/experience-fragment"
  }],
  current: ARTICLE.title
}

export default function CachingExperienceFragment() {
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
            Experience Fragments (XF) often face cache invalidation issues, where modifying and publishing an XF does not update 
            the pages referencing it because the XF content is cached within each individual page rather than a shared repository. 
            As a result, authors have to manually activate or invalidate each page to see the updated XF content, making the process tedious and impractical.
          </section>
          <section className="pt-3">
            Experience Fragments can be added into pages using two ways: embedding as part of page template or inserting specific variation
            through the experience fragment component. In both scenarios, XF can be cached using Sling Dynamic Include, ensuring they are not
            part of the page. Therefore, whenever authors publish any XF changes, cache files will be invalidated and updated in the subsequent
            request. This approach eliminates the need to publish each page individually, as updating the XF will ensure the latest content is displayed.
          </section>
          <section className="pt-3">
            This article outlines <Link target="_blank" className="text-blue-600" href="/aem/dispatcher/cache-aem-pages-with-dynamic-content">setup
            process for SDI to serve dynamic content</Link>. To ensure that XF is cached in the dispatcher, add the following SDI configuration on the Publisher instance.
          </section>
          <Highlight code={SDI_OSGI_CONFIGURATION} language="json" path="config.publish / org.apache.sling.dynamicinclude.Configuration~aem-demo-xf.cfg.json"/>
          <section className="pt-3">
            Now, you should observe SDI comments and include tags in the dispatcher cache file where experience fragments are added to the page.
            Additionally, you can verify that <code className="code-inline">/content/experience-fragments/aem-demo</code> is included in the dispatcher cache.
            With this setup, any changes published in XF will automatically update the pages, ensuring end users see the latest content without additional hiccup from the author.
          </section>
          <section className="pt-3">
            Be careful not to add rules that disable caching, as this would prevent the XF contents from being cached, resulting in responses being fetched from the publisher for every request.
          </section>
        </div>
      </article>
    </div>
  );
}
