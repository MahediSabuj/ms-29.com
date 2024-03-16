import Article from "@/components/article/article";
import { PROJECT_LOMBOK_IN_AEM_PROJECTS as ARTICLE} from "@/lib/data/article/aem/sites";
import Highlight from "@/components/highlight/highlight";

const pom_xml =
`<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>\${lombok.version}</version>
  <scope>provided</scope>
</dependency>`;

const core_pom_xml =
`<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
</dependency>`;

export default function ProjectLombok() {
  return (
    <div>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          url={ARTICLE.url}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <div className="pt-6">
          In AEM backend Java development, Sling Models are utilized for retrieving dialog values through various annotations.
          However, within the Sling Model, need to write boilerplate code such as getter and setter methods to pass these values to HTL.
          Furthermore, in Java Concrete Classes, need to create an empty constructor or constructor with all or specific properties
          to facilitate the conversion of Json String to a Java Object (and vice versa) using Jackson. To streamline this process, <strong>Project
          Lombok</strong> can be utilized. By incorporating appropriate annotations, Lombok automatically generates the necessary boilerplate code,
          simplifying development tasks.
        </div>
        <div className="pt-6 pb-1ß">
          To incorporate Lombok into the AEM project, you&apos;ll need to include the Maven dependency in both the root and core pom.xml files.
        </div>
        <Highlight code={pom_xml} language="xml" path="pom.xml"/>
        <div className="pt-3">
          <Highlight code={core_pom_xml} language="xml" path="core / pom.xml"/>
        </div>
      </article>
    </div>
  );
}
