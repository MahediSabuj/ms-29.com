import { Metadata } from "next";
import Image from "next/image";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { CUSTOM_AEM_WORKFLOW_PROCESS as ARTICLE } from "@/lib/data/article/aem/workflow";

import AEM_WORKFLOW_NEW_MODEL from './assets/AEM_Workflow_New_Model.webp';
import AEM_WORKFLOW_CUSTOM_PROCESS from './assets/AEM_Workflow_Custom_Process.webp';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const CUSTOM_WORKFLOW_PROCESS = 
`@Component(service = { WorkflowProcess.class },
  property = { "process.label=Process Article Form Data"})
public class ArticleFormDataProcess implements WorkflowProcess {
  private final String JCR_PATH = "JCR_PATH";
  private final Logger logger = LoggerFactory.getLogger(this.getClass());

  @Override
  public void execute(WorkItem workItem, WorkflowSession workflowSession, 
      MetaDataMap metaDataMap) throws WorkflowException {
    WorkflowData workflowData = workItem.getWorkflowData();
    String payloadType = workflowData.getPayloadType();

    if (StringUtils.equals(payloadType, JCR_PATH)) {
      String pagePath = workflowData.getPayload().toString();
      logger.debug("Payload: {}", pagePath);
    }
  }
}`;

const breadcrumbs : IBreadCrumb = {
  items: [{
    title: "AEM Workflow",
    url: "/aem/workflow"
  }],
  current: ARTICLE.title
}

export default function CustomWorkflowProcess() {
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
            AEM provides a set of pre-defined workflow process that cover common scenarios, but sometimes 
            these built-in features may not fully handle the complexities of specific workflows. In such 
            cases, AEM allows developers to create custom processes, enhancing the functionality of standard 
            workflows to meet unique requirements.
          </section>
          <section className="pt-3">
            In order to create custom workflow process, you&apos;ll need to implement the <code className="code-inline">
            WorkflowProcess</code> interface and override the <code className="code-inline">execute</code> method.
          </section>
          <Highlight code={CUSTOM_WORKFLOW_PROCESS} language="java" path="workflow / process / ArticleFormDataProcess.java"/>
          <section className="pt-3">
            Let&apos;s create a workflow model to consume the custom process. Navigate to the <strong>Tools</strong> then 
            select <strong>Workflow</strong> and click on <strong>Models</strong>. Proceed by creating a new workflow model
            with a suitable name.
          </section>
          <Image src={AEM_WORKFLOW_NEW_MODEL} className="border mt-2"
            alt="AEM Workflow New Model">
          </Image>
          <section className="pt-3">
            Select the newly generated workflow model and click on the <strong>Edit</strong> button to incorporate workflow steps. 
            Remove the default &quot;Step 1&quot; and drag the <strong>Process Step</strong> into the workflow model. Afterwards, 
            configure this step with the custom process as illustrated below.
          </section>
          <Image src={AEM_WORKFLOW_CUSTOM_PROCESS} className="border mt-2"
            alt="AEM Workflow Custom Process">
          </Image>
          <section className="pt-3">
            To initiate the workflow, you have two options: either pick the workflow from the workflow models page and choose any
            page as the payload, or directly start the workflow from the page itself. Once the workflow is started, debug logs will 
            be appended to your log file. You can tailor the custom process according to the requirements of your project.
          </section>
        </div>
      </article>
    </div>
  );
}
