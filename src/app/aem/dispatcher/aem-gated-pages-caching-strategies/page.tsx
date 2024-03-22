import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { CACHE_AEM_GATED_PAGES as ARTICLE } from "@/lib/data/article/aem/dispatcher";
import Highlight from "@/components/highlight/highlight";

import gatedPageFlow from './assets/aem-gated-pages-caching-workflow.svg';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const allow_authorized =
`/cache {
  ## caches authorized data
  /allowAuthorized "1"
}`;

const auth_checker =
`/auth_checker
{
  # request is sent to this URL with '?uri=<page>' appended
  /url "/bin/permissioncheck"

  # only the requested pages matching the filter section below are checked,
  # all other pages get delivered unchecked
  /filter
  {
    /0000
    {
      /glob "*"
      /type "deny"
    }
    /0001
    {
      /glob "/content/aem-demo/secure/*.html"
      /type "allow"
    }
  }
  
  # any header line returned from the auth_checker's HEAD request matching
  # the section below will be returned as well
  /headers
  {
    /0000
    {
      /glob "*"
      /type "deny"
    }
    /0001
    {
      /glob "Set-Cookie:*"
      /type "allow"
    }
  }
}`;

const auth_checker_servlet =
`@Component(service = { Servlet.class })
@SlingServletPaths("/bin/permissionCheck")
public class AuthServlet extends SlingSafeMethodsServlet {
  private final Logger LOG = LoggerFactory.getLogger(AuthCheckerServlet.class);

  @Override
  public void doHead(SlingHttpServletRequest request, SlingHttpServletResponse response) {
    String uri = request.getParameter("uri");
    Session session = request.getResourceResolver().adaptTo(Session.class);

    try {
      session.checkPermission(uri, Session.ACTION_READ);
      LOG.info("AuthChecker READ Access OK for {}", uri);
      response.setStatus(SlingHttpServletResponse.SC_OK);
    } catch (RepositoryException e) {
      LOG.info("AuthChecker READ Access FORBIDDEN for {}", uri);
      response.setStatus(SlingHttpServletResponse.SC_FORBIDDEN);
    }
  }
}`;

export default function CacheGatedPages() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-6">
          In General, requests containing authentication information are not cached because the cached document is served
          to the client without authentication. However, if the requirements permit the caching of authenticated documents,
          this can be activated by setting the <code className="code-inline">/allowAuthorized</code> property to &quot;1&quot;.
          Additionally, need to implement the <code className="code-inline">/auth_checker</code> module, which verifies users access
          permissions for a page before delivering the cached content.
        </div>
        <h2 id="allow-authorized" className="text-xl mt-6 mb-1">
          <strong>Enable Caching for AEM Gated Pages</strong>
        </h2>
        <div className="pb-1">
          By default, the <code className="code-inline">/allowAuthorized</code> property in AEM Dispatcher controls whether
          requests containing certain authentication information are cached. This includes data from the authorization header,
          as well as cookies named &quot;authorization&quot; and &quot;login-token&quot;. Typically, such authenticated requests
          are not cached to prevent serving cached content to users without the necessary permissions. However, based on the
          requirements, Enabling caching for gated pages can be achieved with the following configuration.
        </div>
        <Highlight code={allow_authorized} language="apache" path="publish_farm.any"/>
        <div className="pt-3">
          Subsequently, configure the <code className="code-inline">/auth_checker</code> module to validate user access
          permissions for the page prior to delivering the cached content. Otherwise, once a page is cached, no further
          authorization is required for users to view it.
        </div>
        <h2 id="auth-checker" className="text-xl mt-6 mb-1">
          <strong>Auth Checker Dispatcher Configuration</strong>
        </h2>
        <div className="pb-2">
          The <code className="code-inline">/auth_checker</code> section of the <code className="code-inline">dispatcher.any</code> file
          controls permission-sensitive caching behavior. It comprises the following subsections:
          <ul className="list-disc ml-6 pt-1 pl-2.5">
            <li>
              <strong>url: </strong> Defines the value of the servlet paths for the servlet responsible for user access permission checks.
            </li>
            <li>
              <strong>filter: </strong> Filters that specify the content path where permission-sensitive caching is applied.
              Usually, a deny filter is applied to all paths, while allow filters are used for secured content paths.
            </li>
            <li>
              <strong>headers: </strong> Specifies the HTTP headers included in the response by the authorization servlet.
            </li>
          </ul>
        </div>
        <Highlight code={auth_checker} language="apache" path="publish_farm.any"/>
        <div className="py-2">
          The servlet specified in the <code className="code-inline">url</code> section fetches the URL of the requested resource from 
          the HTTP request. Within its <code className="code-inline">doHead</code> method, the servlet obtains the session object 
          and utilizes the checkPermission method to determine the appropriate response code. 
        </div>
        <Highlight code={auth_checker_servlet} language="java" path="AuthCheckerServlet.java"/>
        <div className="pt-2">  
          When users are authorized, indicated by 200 OK status code, the page may either be served from cache or regenerated if needed. However, 
          if unauthorized, denoted by a 403 Forbidden status code, the request is routed to the publish instance, where the user is prompted to 
          log in before accessing the gated page.
        </div>
        <div className="pt-3">
          After configuring caching for gated pages, four potential scenarios may arise when attempting to access them.
          <ol className="list-decimal ml-6 py-1 pl-2.5">
            <li>Page is cached and User is authorized</li>
            <li>Page is cached and User is not authorized</li>
            <li>Page is not cached and User is not authorized</li>
            <li>Page is not cached and User is authorized</li>
          </ol>
          The following diagrams illustrate the sequence of events that take place when a web browser requests a page utilizing permission-sensitive caching.
        </div>
        <div className="my-3">
          <Image src={gatedPageFlow}
              alt="AEM Gated Page Caching Workflow">
          </Image>
        </div>
        <div>  
          <ol className="list-decimal ml-6 pt-1 pl-2.5">
            <li>Web Browser request for a gated page that matches the URLs configured in the auth_checker filter.</li>
            <li>Dispatcher verifies if the requested page is cached.</li>
            <li>If page is cached:
              <ol className="list-alpha pl-5">
                <li>Publisher validates user permission via AuthServlet.</li>
                <li>If permission granted, Dispatcher deliver cached content.</li>
              </ol>
            </li>
            <li>If page is not cached:
              <ol className="list-alpha pl-5">
                <li>Dispatcher forwards request to publisher.</li>
                <li>Publisher checks user authorization.</li>
                <li>If authorized, generates HTML, caches content, and delivers.</li>
              </ol>
            </li>
            <li>If unauthorized:
              <ol className="list-alpha pl-5">
                <li>User redirected to login page.</li>
                <li>Upon successful login, redirected to gated page, restarting process from step 1.</li>
              </ol>
            </li>
          </ol>
        </div>
      </article>
    </div>
  );
}