import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import FAQ from "@/components/faq/faq";
import TOPICS from "@/lib/data/article/topics";
import { UPDATE_JAVA_JDK_V11_FOR_AEM_CLOUD as ARTICLE } from "@/lib/data/article/aem/cloud";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const SPECIFY_JAVA_VERSION_CLOUD_MANAGER =
`11`;

const UPDATE_JAVA_11_POM =
`<!-- Maven Enforcer Plugin -->
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-enforcer-plugin</artifactId>
  <executions>
    <execution>
      <id>enforce-maven</id>
      <goals>
        <goal>enforce</goal>
      </goals>
      <configuration>
        <rules>
          <requireMavenVersion>
            <version>[3.3.9,)</version>
          </requireMavenVersion>
          <requireJavaVersion>
            <message>Project must be compiled with Java 11 or higher</message>
            <version>11</version>
          </requireJavaVersion>
        </rules>
      </configuration>
    </execution>
  </executions>
</plugin>
<!-- Maven Compiler Plugin -->
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <configuration>
    <source>11</source>
    <target>11</target>
  </configuration>
</plugin>`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: TOPICS.AEM_CLOUD.title,
    url: TOPICS.AEM_CLOUD.url
  }],
  current: ARTICLE.title
}

export default function JdkVersionUpdate() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          By default, AEM projects are built by Cloud Manager build process using Oracle 8 JDK, but AEM Cloud Service customers are strongly advised
          to set the JDK version used to execute Maven to 11 for improved performance, security, and support over earlier versions.
        </section>
        <section className="pt-3">
          It is recommended to set the JDK version for the entire Maven execution to 11 by configuring the <code className="code-inline background">.cloudmanager/java-version</code> file
          within the Git repository branch used by the pipeline. When 11 is specified, Oracle 11 is used and the <code className="code-inline">JAVA_HOME</code> environment
          variable is set to <code className="code-inline background">/usr/lib/jvm/jdk-11.0.22</code>.
        </section>
        <Highlight code={SPECIFY_JAVA_VERSION_CLOUD_MANAGER} language="java" path=".cloudmanager / java-version"/>
        <section className="pt-3">
          After configuring the JDK version in Cloud Manager, ensure you update the Java version to 11 in the root POM file. Set Java 11 for both the <code className="code-inline">maven-enforcer-plugin</code> and <code className="code-inline">maven-compiler-plugin</code> plugins to leverage new JDK 11 features.
        </section>
        <Highlight code={UPDATE_JAVA_11_POM} language="xml" path="pom.xml"/>
      </article>
      <FAQ items={[{
        question: `Cannot access <code>org.apache.jackrabbit.api.security.user.Group</code> bad class file: <code class="code-inline background break-all">/root/.m2/repository/com/adobe/aem/aem-sdk-api/2024.7.17258.20240726T172406Z-240700/aem-sdk-api-2024.7.17258.20240726T172406Z-240700.jar(org/apache/jackrabbit/api/security/user/Group.class)</code> class file has wrong version 55.0, should be 52.0`,
        answer: `Ensure Cloud Manager uses Java JDK v11.`
      }]}/>
    </div>
  );
}
