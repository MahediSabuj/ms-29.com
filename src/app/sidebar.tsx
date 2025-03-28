import Link from "next/link";

import { IListGroup } from "@/types/list";
import ListGroup from "@/components/list-group/list-group";
import TOPICS from "@/lib/data/article/topics";
import GooglePublisherTag from "@/components/third-parties/google/gpt";

import { SPRING_BOOT } from "@/lib/data/article/backend/spring-boot"
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AEM_WORKFLOW } from "@/lib/data/article/aem/workflow";
import { EXPERIENCE_FRAGMENT } from "@/lib/data/article/aem/experience-fragment";
import { AEM_CLOUD } from "@/lib/data/article/aem/cloud";
import { ACS_COMMONS } from "@/lib/data/article/aem/acs-commons";
import { EDGE_DELIVERY_SERVICE } from "@/lib/data/article/aem/eds";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { AWS_SES } from "@/lib/data/article/aws/ses";
import { AWS_ECS } from "@/lib/data/article/aws/ecs";
import { DEEP_LEARNING } from "@/lib/data/article/ai/deep-learning";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";
import { SF_IDENTITY } from "@/lib/data/article/salesforce/identity";
import { DYNAMIC_PROGRAMMING } from "@/lib/data/article/cp/dynamic-programming";
import { GRAPH } from "@/lib/data/article/cp/graph";
import { DIVIDE_CONQUER } from "@/lib/data/article/cp/divide-conquer";
import { POSTGRESQL } from "@/lib/data/article/db/postgresql";
import { ADOBE_ANALYTICS } from "@/lib/data/article/analytics/adobe";
import { GOOGLE_ANALYTICS } from "@/lib/data/article/analytics/google";

const backend : IListGroup = {
  title: "Backend Development",
  listItems: [
    {
      topic: TOPICS.SPRING_BOOT,
      count: SPRING_BOOT.length
    }
  ]
}

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
   }, {
    topic: TOPICS.EXPERIENCE_FRAGMENT,
    count: EXPERIENCE_FRAGMENT.length
   }, {
    topic: TOPICS.AEM_CLOUD,
    count: AEM_CLOUD.length
  }, {
    topic: TOPICS.ACS_COMMONS,
    count: ACS_COMMONS.length
  }, {
    topic: TOPICS.EDGE_DELIVERY_SERVICE,
    count: EDGE_DELIVERY_SERVICE.length
  }]
}

const aws: IListGroup = {
  title: "Amazon Web Service",
  listItems: [{
    topic: TOPICS.AWS_EC2,
    count: AWS_EC2.length
  }, {
    topic: TOPICS.AWS_SES,
    count: AWS_SES.length
  }, {
    topic: TOPICS.AWS_ECS,
    count: AWS_ECS.length
  }]
}

const artificialIntelligence: IListGroup = {
  title: "Artificial Intelligence",
  listItems: [{
    topic: TOPICS.DEEP_LEARNING,
    count: DEEP_LEARNING.length
  }]
}

const salesforce: IListGroup = {
  title: "Salesforce",
  listItems: [{
    topic: TOPICS.SF_LWC,
    count: SF_LWC.length
  }, {
    topic: TOPICS.SF_IDENTITY,
    count: SF_IDENTITY.length
  }]
}

const competitiveProgramming : IListGroup = {
  title: "Competitive Programming",
  listItems: [{
    topic: TOPICS.DYNAMIC_PROGRAMMING,
    count: DYNAMIC_PROGRAMMING.length
  }, {
    topic: TOPICS.GRAPH,
    count: GRAPH.length
  }, {
    topic: TOPICS.DIVIDE_CONQUER,
    count: DIVIDE_CONQUER.length
  }]
}

const database: IListGroup = {
  title: "Database",
  listItems: [{
    topic: TOPICS.POSTGRESQL,
    count: POSTGRESQL.length
  }]
}

const analytics: IListGroup = {
  title: "Analytics",
  listItems: [{
    topic: TOPICS.ADOBE_ANALYTICS,
    count: ADOBE_ANALYTICS.length
  },{
    topic: TOPICS.GOOGLE_ANALYTICS,
    count: GOOGLE_ANALYTICS.length
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
          Principal Engineer @ <Link target="_blank" href="https://brainstation-23.com"
            className="text-blue-600">Brain Station 23</Link>
        </div>
      </section>
      <div className="mt-4">
        <GooglePublisherTag
          adUnit="ms29-sidebar"
          sizes={[[300, 50]]}
          container="div-gpt-ad-1739527525309-0"
          sizeMapping={[
            [[768, 0], [[320, 50]]],
            [[0, 0], [[320, 50]]]
          ]}/>
      </div>
      <section className="mt-4">
        <ListGroup {...backend}/>
      </section>
      <section className="mt-4">
        <ListGroup {...aem}/>
      </section>
      <section className="mt-4">
        <ListGroup {...aws}/>
      </section>
      <section className="mt-4">
        <ListGroup {...artificialIntelligence}/>
      </section>
      <section className="mt-4">
        <ListGroup {...salesforce}/>
      </section>
      <section className="mt-4">
        <ListGroup {...competitiveProgramming}/>
      </section>
      <section className="mt-4">
        <ListGroup {...database}/>
      </section>
      <section className="mt-4">
        <ListGroup {...analytics}/>
      </section>
    </div>
  );
}
