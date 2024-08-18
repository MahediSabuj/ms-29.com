import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import { START_AEM_IN_DEBUG_MODE as ARTICLE } from "@/lib/data/article/aem/sites";
import REMOTE_JAVA_DEBUG_INTELLIJ_IDEA from "./assets/remote_java_debug_intellij_idea.png";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Sites",
    url: "/aem/sites"
  }],
  current: ARTICLE.title
}

export default function AEMinDebugMode() {
  return (
    <div>
      <BreadCrumb {...breadcrumbs}/>
      <article itemScope itemType="https://schema.org/Article">
        <Article
          title={ARTICLE.title}
          publishDate={ARTICLE.publishDate}
          modifiedDate={ARTICLE.modifiedDate}/>
        <section className="pt-6">
          Troubleshooting and debugging are crucial aspects of working with AEM, allowing developers to identify, analyze, and fix issues in their code.
          Since AEM projects often involve extensive custom code for Models, Services, Servlets, and Schedulers, debugging allows real-time inspection and provides
          valuable insights into the root cause, enabling effective fixes. To debug an AEM application, you can use Java Remote Debugging.
        </section>
        <section className="pt-3">
          To use remote debugging, you must start AEM with this JVM parameter: <code className="code-inline background break-all">-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:9511</code>.
          You can add the parameter by doing any of the following:
          <ul className="list-disc ml-6 py-1 pl-2.5">
            <li>Add it to <code className="code-inline">crx-quickstart/bin/start</code> script <code className="code-inline">CQ_JVM_OPTS</code> environment variable (so your server always starts in debug mode)</li>
            <li>Include it as a parameter when starting AEM with <code className="code-inline">java -jar</code> directly. For example, <code className="code-inline background break-all">java -Xmx1024m -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:9511 -jar aem-author-p4502.jar</code></li>
          </ul>
          You can change the port defined under <code className="code-inline">…,address=*:9511,…</code> to something that works better in your environment.
        </section>
        <section className="pt-3">
          To start Remote Debugging session from Intellij IDEA, do the following:
          <ul className="list-disc ml-6 py-1 pl-2.5">
            <li>
              From <strong>Run / Debug</strong>, add new <strong>Remote JVM Debug</strong> configuration.
              <Image className="py-1" src={REMOTE_JAVA_DEBUG_INTELLIJ_IDEA} height="250"
                 alt="Remote Java Debug configuration in Intellij Idea">
              </Image>
            </li>
          </ul>
          Open the AEM page with the component using the Java class where you&apos;ve set breakpoints. For example, if you&apos;ve set breakpoints in <code className="code-inline">Article.java</code>, access or refresh the page with the Article component. <code className="code-inline">IntelliJ IDEA</code> will then notify you, and the program will pause at the breakpoint.
        </section>
      </article>
    </div>
  );
}
