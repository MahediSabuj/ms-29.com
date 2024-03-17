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

const sling_model =
`import lombok.Getter;

public class Article {
  @Getter
  @ValueMapValue
  String title;

  @Getter
  @ValueMapValue
  String[] tags;

  @Getter
  @ValueMapValue
  Date publishDate;

  @Getter
  @ValueMapValue
  String category;
}`;

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
          To streamline this process, <strong>Project Lombok</strong> can be utilized. By incorporating appropriate annotations,
          Lombok automatically generates the necessary boilerplate code, simplifying development tasks.
        </div>
        <div className="pt-3 pb-1">
          To incorporate Lombok into the AEM project, you&apos;ll need to include the Maven dependency in both the root and core pom.xml files.
        </div>
        <Highlight code={pom_xml} language="xml" path="pom.xml"/>
        <div className="pt-3">
          <Highlight code={core_pom_xml} language="xml" path="core / pom.xml"/>
        </div>
        <div className="pt-6 pb-1">
          Let&apos;s explore how we can implement Lombok into Sling Models. For this demonstration, consider a component with a
          dialog containing textfield (title), tagfield (tags), datepicker (publishDate), and select (category) field. In the
          example below, we&apos;ll illustrate how to retrieve these component values and utilize Lombok to automatically generate
          boilerplate getter functions.
        </div>
        <Highlight code={sling_model} language="java" path="Article.java"/>
        <div className="pt-1">
          Generally, we&apos;d have to create a getter method for each variable required for access from HTL. However,
          by leveraging Lombok, we can streamline this process with the <code className="code-inline">@Getter</code> annotation,
          which automatically generates the getter method.
        </div>
      </article>
    </div>
  );
}
