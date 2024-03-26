import Link from "next/link";

import { IListGroup } from "@/types/list";
import ListGroup from "@/components/list-group/list-group";
import TOPICS from "@/lib/data/article/topics";
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";

const aem : IListGroup = {
  title: "Adobe Experience Manager",
  listItems: [{
    topic: TOPICS.AEM_SITES,
    count: AEM_SITES.length
  }, {
    topic: TOPICS.AEM_ASSETS,
    count: AEM_ASSETS.length
  }, {
    topic: TOPICS.CONTENT_FRAGMENT,
    count: CONTENT_FRAGMENT.length
  }, {
    topic: TOPICS.AEM_FORMS,
    count: AEM_FORMS.length
  }, {
    topic: TOPICS.AEM_SPA,
    count: AEM_SPA.length
  }, {
    topic: TOPICS.AEM_CODE_COVERAGE,
    count: CODE_COVERAGE.length
  }, {
    topic: TOPICS.AEM_DISPATCHER,
    count: AEM_DISPATCHER.length
  }, {
     topic: TOPICS.AEM_WORKFLOW,
     count: AEM_WORKFLOW.length
   }]
}

const aws: IListGroup = {
  title: "Amazon Web Service",
  listItems: [{
    topic: TOPICS.AWS_EC2,
    count: AWS_EC2.length
  }]
}

const salesforce: IListGroup = {
  title: "Salesforce",
  listItems: [{
    topic: TOPICS.SF_LWC,
    count: SF_LWC.length
  }]
}

export default function Sidebar() {
  return (
    <div>
      <section>
        <div className="block border-b">
          About Me
        </div>
        <div>
          <Link href="/profile/mahedi-sabuj" className="text-blue-600">
            Abdullah &ndash; Al &ndash; Mahedi <strong>Sabuj</strong><br/>
          </Link>  
          Principal Engineer @ <Link href="https://brainstation-23.com" >Brain Station 23 Ltd</Link>
        </div>
      </section>
      <section className="mt-4">
        <ListGroup {...aem}/>
      </section>
      <section className="mt-4">
        <ListGroup {...aws}/>
      </section>
      <section className="mt-4">
        <ListGroup {...salesforce}/>
      </section>
    </div>
  ); 
}
