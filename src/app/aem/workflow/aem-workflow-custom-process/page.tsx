import { Metadata } from "next";

import Article from "@/components/article/article";
import { IBreadCrumb } from "@/types/breadcrumb";
import BreadCrumb from "@/components/breadcrumb/breadcrumb";
import Highlight from "@/components/highlight/highlight";
import { CUSTOM_AEM_WORKFLOW_PROCESS as ARTICLE } from "@/lib/data/article/aem/workflow";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: {
    canonical: ARTICLE.url
  }
};

const CUSTOM_WORKFLOW_PROCESS = 
`@Component(service = { ParticipantStepChooser.class },
  property = {
    "chooser.label=" + "AEM Demo Content Approver Chooser"
})
public class ContentApproverChooser implements ParticipantStepChooser {
  @Reference
  SiteConfigService configService;

  @Override
  public String getParticipant(WorkItem workItem, WorkflowSession wfSession, 
      MetaDataMap metaDataMap) throws WorkflowException {
    WorkflowData workflowData = workItem.getWorkflowData();
    String payloadType = workflowData.getPayloadType();

    if (StringUtils.equals(payloadType, "JCR_PATH")) {
      try (ResourceResolver resolver = wfSession.adaptTo(ResourceResolver.class)) {
        String pagePath = workflowData.getPayload().toString();
        if (resolver != null) {
          Resource resource = resolver.getResource(pagePath);

          if (resource != null) {
            SiteConfig config = configService.getSiteConfig(resource);
            return config.approverGroup();
          }
        }
      }
    }

    return "aem-demo-content-approver";
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
            these built-in features may not fully handle the complexities of specific workflows. In such cases, AEM allows 
            developers to create custom processes, enhancing the functionality of standard workflows to meet unique requirements.
          </section>
          <Highlight code={CUSTOM_WORKFLOW_PROCESS} language="java" path="workflow / process / ContentApproverChooser.java"/>
        </div>
      </article>
    </div>
  );
}
