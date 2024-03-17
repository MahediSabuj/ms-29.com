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
`public class Article {
  @ValueMapValue
  String title;

  @ValueMapValue
  String[] tags;

  @ValueMapValue
  Date publishDate;

  @ValueMapValue
  String category;
  
  public String getTitle() {
    return title;
  }
  
  public String[] getTags() {
    return tags;
  }
  
  public Date getPublishDate() {
    return publishDate;
  }
  
  public String getCategory() {
    return category;
  }
}`;

const sling_model_lombok =
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
          In AEM backend Java development, Sling Models are utilized to retrieve dialog values using annotations. However,
          writing boilerplate code such as getter methods for passing these values to HTL can be tedious. To simplify this
          process, <strong>Project Lombok</strong> can be integrated, automatically generating the necessary boilerplate code
          with annotations like <code className="code-inline">@Getter</code>. This streamlines development tasks by eliminating the need for manual getter method creation.
        </div>
        <div className="pt-3 pb-1">
          Lombok is a Java library designed to minimize boilerplate code by providing annotations to generate getters, setters,
          constructors, and other repetitive code structures. By leveraging Lombok, developers can produce cleaner and more concise
          code without sacrificing functionality. To incorporate Lombok into the AEM project, you&apos;ll need to include the Maven
          dependency in both the root and core pom.xml files.
        </div>
        <Highlight code={pom_xml} language="xml" path="pom.xml"/>
        <div className="pt-3">
          <Highlight code={core_pom_xml} language="xml" path="core / pom.xml"/>
        </div>
        <div className="pt-6 pb-1">
          For the demonstration purpose, let's consider a component with a dialog comprising a textfield (title), tagfield (tags),
          datepicker (publishDate), and select (category) field.  In a Sling Model, the typical approach involves creating
          getter methods for each variable needed for access from HTL
        </div>
        <Highlight code={sling_model} language="java" path="Article.java"/>
        <div className="pt-6 pb-1">
          By leveraging Lombok, we can enhance the Article Sling Model as follows. <code className="code-inline">@Getter</code> annotation
          instructs Lombok to automatically generate getter methods for the fields within the class.
        </div>
        <Highlight code={sling_model_lombok} language="java" path="Article.java"/>
      </article>
    </div>
  );
}
