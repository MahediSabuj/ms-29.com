import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { REPOSITORY_MODERNIZER as ARTICLE } from "@/lib/data/article/aem/sites";

import AEM_CLOUD_COMPATIBLE_ARCHETYPE from './assets/aem-cloud-compatible-archetype.png';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const aem_migration_config =
`repositoryModernizer:
  # groupId to be used for newly created packages
  groupId: com.aem.demo
  # information about parent pom
  parentPom:
    # absolute path to the parent pom file
    path: /Users/XXXX/github/aem-demo/pom.xml
    # the artifactId to be set for the parent pom
    artifactId: aem-demo
    # the application title to be set for the parent pom
    appTitle: AEM Demo
    # version to be to be set for the parent pom
    version: 4.7.9-SNAPSHOT
  # information required for all and analyse packages
  all:
    # prefix that is to be used to set the artifactId for all and analyse packages
    artifactId: aem-demo
    # application title
    appTitle: AEM Demo
    # version to be set for all pom
    version: 4.7.9-SNAPSHOT
  # information about projects (expects an array of project information)
  # NOTE : For multiple projects create separate copies of the info section for each project
  projects:
    - # absolute path to the XYZ project folder
      projectPath: /Users/XXXX/github/aem-demo
      # Array of relative path(s) (w.r.t. the project folder) to the existing content package(s) that needs to be restructured.
      # NOTE : only content packages are expected here, NOT bundle/jar artifacts
      existingContentPackageFolder:
        - /ui.apps
      # relative path (w.r.t. the existing content package folder) to the filter.xml file
      # (If not specified, default path \`/src/main/content/META-INF/vault/filter.xml\` will be used.)
      relativePathToExistingFilterXml:
      # relative path (w.r.t. the existing content package folder) to the jcr_root directory
      # (If not specified, default path \`/src/main/content/jcr_root\` will be used)
      relativePathToExistingJcrRoot:
      # prefix that is to be used to set the artifactId for newly created ui.apps and ui.content packages
      artifactId: aem-demo
      # application title
      appTitle: AEM Demo
      # application ID (will be used for config and package folder names)
      appId: aem-demo
      # project specific version to be used for content packages
      version: 4.7.9-SNAPSHOT
      # Array of relative path(s) (w.r.t. the project folder) to the existing code bundles (will be embedded in the all package).
      coreBundles:
          - /core
          - /common.core
      # OSGi config folders that need to be renamed.
      # The existing/source OSGi config folder PATH (JCR path starting from '/apps') is expected as key
      # and the replacement OSGi folder NAME is expected as value. See examples below :
      #    /apps/xyz/config.prod : config.publish.prod
      #    /apps/system/config.author.dev1 : config.author.dev
      #    /apps/system/config.author.dev2 : config.author.dev
      # NOTE :
      #    1. All OSGi config folders under the same path and with same replacement name will be MERGED
      #       (as configured in above example).
      #    2. If there exists OSGi config files with the same pid/filename in more than one config folders
      #       which are to be merged, they will not be overwritten. A warning regrading the same will be
      #       generated in the summary report and result log file. User would need to manually evaluate
      #       which config to persist
      osgiFoldersToRename:
          /apps/aem-demo/configs/config.publish: config.publish.prod`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function RepositoryModernizer() {
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
            AEM Project Archetype is a Maven template creates a minimal, best-practices-based AEM project. Over the years, AEM Project Archetype has
            been revolutionized with significant advancements, introducing many new features and possibilities into AEM projects. The latest Archetype
            emphasizing the separation of content and code into discrete subpackages to maintain the distinction between mutable and immutable content.
            To align existing projects with AEM’s Cloud Service structure, the Repository Modernizer tool can be used to refactor and reorganize project
            packages, separating content and code into the appropriate packages.
          </section>
          <Image src={AEM_CLOUD_COMPATIBLE_ARCHETYPE}
             alt="AEM Cloud Compatible ArcheType">
          </Image>
          <section>
            To use the Repository Modernizer, ensure that Node.js and Python are available on your computer. Follow these steps to set up:
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <strong>Install Adobe I/O CLI: </strong> <code className="code-inline">npm install -g @adobe/aio-cli</code>
              </li>
              <li>
                <strong>Install AEM Cloud Service Migration Plugin: </strong> <code className="code-inline">aio plugins:install @adobe/aio-cli-plugin-aem-cloud-service-migration</code>
              </li>
            </ul>
          </section>
          <section className="pt-3 pb-2">
            In order to restructure an existing project's packages for compatibility with AEM as a Cloud Service, execute the <code className="code-inline">aio aem-migration:repository-modernizer</code> command. You&apos;ll need
            to create an <strong>aem-migration-config.yaml</strong> file, which can be stored either in your local file system or within the CLI configuration directory.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                <strong>Local Project Location: </strong> <code className="code-inline">./.aio-cli</code>
              </li>
              <li>
                <strong>CLI Config Directory: </strong> <code className="code-inline">~/.config/@adobe/aio-cli</code>
              </li>
            </ul>
          </section>
          <Highlight code={aem_migration_config} language="yaml" path="aem-migration-config.yaml"/>
          <section className="pt-3">
            After running the repository-modernizer command, review the <code className="code-inline">target</code> folder for refactored code, updated configurations, a summary report, and the tool&apos;s execution logs.
          </section>
          <section className="pt-3">
            The tool has some known limitations and certain tasks that will need to be handled manually.
            <ul className="list-disc ml-6 pt-1 pl-2.5">
              <li>
                Missing version info in core bundles will be reported; the version will also need to be added in the dependency section in the <code className="code-inline">all/pom.xml</code>.
              </li>
              <li>
                Ensure that you add the Gson dependency before the AEM SDK API; otherwise, you might encounter <code className="code-inline">java.lang.NoSuchMethodError</code> during the testing phase.
              </li>
              <li>
                The Core dependency is missing in the <code className="code-inline">ui.apps/pom.xml</code>; it needs to be added to the dependencies section.
              </li>
              <li>
                <code className="code-inline">data-sly-test</code>: avoid redundant constant value comparisons — Use <code className="code-inline">data-sly-set</code> when it&apos;s only needed to define a variable for later use.
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
