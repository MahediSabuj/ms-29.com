import Link from "next/link";
import { Metadata } from "next";
import Article from "@/components/article/article";
import Highlight from "@/components/highlight/highlight";
import { BASIC_HTTP_AUTHENTICATION as ARTICLE } from "@/lib/data/article/aem/dispatcher";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const ip_restriction =
`<If "\${PUBLISH_ALLOWLIST_ENABLED} == 1">
  Include conf.d/allowlists/*_allowlist.rules
</If>`;

const ip_allowlist =
`<RequireAny>
  # Ensure that the AllowIP environment variable is enforced
  Require env AllowIP
  # Define rules for CIDR IP blocks and individual addresses
  Require ip 192.150.16.0/23
  Require ip 120.242.180.10
</RequireAny>`;

const create_password =
`htpasswd /etc/httpd/.htpasswd sabuj
New password: ********
Re-type new password: ********
Adding password for user sabuj`;

const credentials =
`sabuj:$apr1$yrc1aAF/$KPgwnCKCpLOiLBL.ZJju/0`;

const basic_auth_user =
`<Directory "\${PUBLISH_DOCROOT}">
  AuthType Basic 
  AuthName "Restricted Content" 
  AuthUserFile /etc/httpd/.htpasswd 
  Require user sabuj
</Directory>`;

const user_group =
`GroupName: user1 user2 user3`;

const basic_auth_group =
`<Directory "\${PUBLISH_DOCROOT}">
  AuthType Basic 
  AuthName "Restricted Content" 
  AuthUserFile /etc/httpd/.htpasswd 
  AuthGroupFile /etc/httpd/groups
  Require group GroupName
</Directory>\``;

export default function BasicAuthentication() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-3">
          AEM&apos;s dispatcher  is not restricted and is publicly accessible by default. While unrestricted access is
          suitable for production environments, it&apos;s recommended to restrict access in lower environments such as
          dev and stage to your organization or specific users. This can be achieved through <Link className="text-blue-600"
          href="#ip-allowlists">IP Allow Lists</Link> or <Link className="text-blue-600" href="#basic-authentication">Basic Authentication</Link>.
        </div>
        <h2 id="ip-allowlists" className="text-xl mt-3 mb-1">
          <strong>Restricting through IP Allow Lists</strong>
        </h2>
        <div className="pb-1">
          To configure IP Allow Lists for AEM Dispatcher, the Require directive (provided by the mod_authz_host module) can be utilized
          to allow access based on either individual IP addresses or CIDR blocks.
        </div>
        <Highlight code={ip_allowlist} language="apache" path="conf.d / allowlists / 001_client_allowlist.rules"></Highlight>
        <div className="pt-3">
          After configuring the IP allow list, it&apos;s necessary to include the allowlist rules into the site vhost file
          to restrict access. This can be toggled on or off using a variable such as PUBLISH_ALLOWLIST_ENABLED. In lower
          environments, ensure that value is set to 1, while in production environments, it should be set to 0.
        </div>
        <Highlight code={ip_restriction} language="apache" path="conf.d / aem-demo.vhost"></Highlight>
        <h2 id="basic-authentication" className="text-xl mt-3 mb-1">
          <strong>Restricting through Basic Authentication</strong>
        </h2>
        <div className="pb-1">
          Basic authentication can be set up to authorize individual users, groups with multiple users, or any valid user.
          With this approach, users can access the site from anywhere, but valid credentials are required for access.
        </div>
        <div className="pt-2">
          To provide access to individual users, create a user account and allow to that particular user. For group
          permissions, create multiple user accounts and assign them to the relevant group. Access to the group will
          subsequently be granted.
        </div>
        <div className="pt-2">
          First, create a password file, typically using the htpasswd utility provided by Apache. Place this file in a
          location not accessible from the web, such as /etc/httpd/.htpasswd.
        </div>
        <Highlight code={create_password} language="apache" path="etc / httpd"></Highlight>
        <div className="pt-2">
          Upon execution, htpasswd will prompt to enter and confirm the password for the designated user. Subsequently,
          the hashed password will be saved in the file, formatted as username:hashpassword.
        </div>
        <Highlight code={credentials} language="apache" path="etc / httpd / .htpasswd"></Highlight>
        <div className="pt-3">
          Next, configure the virtual host to configure password file and specify which user are allowed access.
        </div>
        <Highlight code={basic_auth_user} language="apache" path="conf.d / available_vhosts / domain.vhost"></Highlight>
        <div className="pt-2">
          Instead of specifying a specific user like &quot;sabuj&quot; you can allow anyone listed in the password file
          to access by using <code className="code-inline">Require valid-user</code>. This directive allows access to any user who correctly
          enters their password.
        </div>
        <div className="pt-3">
          To allow multiple users, you must create a group file associating group names with the list of users in that group.
          The format of this file is straightforward and can be created using any text editor.
        </div>
        <Highlight code={user_group} language="makefile" path="etc / httpd / groups"></Highlight>
        <div className="pt-1">
          After creating the group file, you&apos;ll need to update the vhost configuration to specify the group name
          to allow access. With this configuration, anyone listed in the group "GroupName" and with an entry in the password
          file will be granted access if they enter the correct password.
        </div>
        <Highlight code={basic_auth_group} language="apache" path="conf.d / available_vhosts / domain.vhost"></Highlight>
      </article>
    </div>
  );
}
