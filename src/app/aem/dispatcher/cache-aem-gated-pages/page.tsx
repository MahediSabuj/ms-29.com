import Article from "@/components/article/article";
import { CACHE_AEM_GATED_PAGES as ARTICLE } from "@/lib/data/article/aem/dispatcher";
import Highlight from "@/components/highlight/highlight";

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
public class AuthCheckerServlet extends SlingSafeMethodsServlet {
  private final Logger LOG = LoggerFactory.getLogger(AuthCheckerServlet.class);

  @Override
  public void doHead(SlingHttpServletRequest request, SlingHttpServletResponse response) {
    String uri = request.getParameter("uri");
    uri = FilenameUtils.removeExtension(uri);

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
        <div className="pt-6">
          Subsequently, configure the <code className="code-inline">/auth_checker</code> module to validate user access
          permissions for the page prior to delivering the cached content. Otherwise, once a page is cached, no further
          authorization is required for users to view it.
        </div>
        <h2 id="auth-checker" className="text-xl mt-6 mb-1">
          <strong>Auth Checker Dispatcher Configuration</strong>
        </h2>
        <div className="pb-3">
          To implement caching for gated pages, you&apos;ll need to develop a servlet responsible for authentication and authorization.
          This servlet will authenticate and authorize users before allowing access to cached content. Additionally, you&apos;ll configure
          the dispatcher to manage the caching behavior based on the authentication status.
        </div>
        <div className="pb-1">
          The servlet below retrieves the URL of the requested resource from the HTTP request. In its <code className="code-inline">doHead</code> method,
          the servlet obtains the session object and utilizes the <code className="code-inline">checkPermission</code> method to determine the appropriate
          response code.
        </div>
        <Highlight code={auth_checker_servlet} language="java" path="AuthCheckerServlet.java"/>
        <div className="pt-6">
          The <code className="code-inline">/auth_checker</code> section of the <code className="code-inline">dispatcher.any</code> file
          controls permission-sensitive caching behavior. It comprises the following subsections:
          <ul className="list-disc list-inside pt-1 pl-2.5">
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
        <div className="pt-3 pb-1">
          The auth_checker section provided below configures Dispatcher to utilize the servlet defined above.  In the filter section,
          permission checks are performed only on AEM-Demo secure HTML resources.
        </div>
        <Highlight code={auth_checker} language="apache" path="publish_farm.any"/>
      </article>
    </div>
  );
}
