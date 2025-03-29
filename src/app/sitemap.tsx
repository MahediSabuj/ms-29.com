import { MetadataRoute } from 'next';

import DateFormatter from "@/lib/util/date-formatter";
import { IArticleItem } from "@/types/article";
import TOPICS from '@/lib/data/article/topics';

import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_ASSETS } from "@/lib/data/article/aem/assets";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
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

const domain: string = "https://ms-29.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const dateFormatter = new (DateFormatter as any)();

  const withDomain = (path: string) => {
    return `${domain}${path}`;
  }

  const loadArticles = (url: string, articles: IArticleItem[]) => {
    if(articles.length < 1)
      return;

    const lastModifiedDate: Date = articles.reduce((prev, current) => {
      return prev > new Date(current.modifiedDate) ? prev : new Date(current.modifiedDate);
    }, new Date(1, 1, 1970));

    sitemap.push({
      url: withDomain(url),
      lastModified: dateFormatter.formatDate(lastModifiedDate),
      changeFrequency: "weekly",
      priority: 0.8
    });

    articles.forEach((articleItem, index) => {
      sitemap.push({
        url: withDomain(articleItem.url || ""),
        lastModified: dateFormatter.formatDate(articleItem.modifiedDate),
        changeFrequency: "weekly",
        priority: 0.8
      });
    });
  }

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: domain,
      lastModified: "2025-03-18",
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: withDomain("/profile/mahedi-sabuj"),
      lastModified: "2025-03-20",
      changeFrequency: 'monthly',
      priority: 0.8,
    }, {
      url: withDomain("/about-us"),
      lastModified: "2025-02-03",
      changeFrequency: 'monthly',
      priority: 0.8
    }, {
      url: withDomain("/contact-us"),
      lastModified: "2024-04-30",
      changeFrequency: 'monthly',
      priority: 0.8
    }, {
      url: withDomain("/cookie-policy"),
      lastModified: "2024-04-30",
      changeFrequency: 'monthly',
      priority: 0.8
    }, {
      url: withDomain("/privacy-policy"),
      lastModified: "2024-05-12",
      changeFrequency: 'monthly',
      priority: 0.8
    }, {
      url: withDomain("/terms-of-use"),
      lastModified: "2024-04-30",
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];

  loadArticles(TOPICS.AEM_SITES.url, AEM_SITES);
  loadArticles(TOPICS.AEM_ASSETS.url, AEM_ASSETS);
  loadArticles(TOPICS.AEM_FORMS.url, AEM_FORMS);
  loadArticles(TOPICS.AEM_DISPATCHER.url, AEM_DISPATCHER);
  loadArticles(TOPICS.CONTENT_FRAGMENT.url, CONTENT_FRAGMENT);
  loadArticles(TOPICS.AEM_SPA.url, AEM_SPA);
  loadArticles(TOPICS.AEM_CODE_COVERAGE.url, CODE_COVERAGE);
  loadArticles(TOPICS.AEM_WORKFLOW.url, AEM_WORKFLOW);
  loadArticles(TOPICS.EXPERIENCE_FRAGMENT.url, EXPERIENCE_FRAGMENT);
  loadArticles(TOPICS.AEM_CLOUD.url, AEM_CLOUD);
  loadArticles(TOPICS.ACS_COMMONS.url, ACS_COMMONS);
  loadArticles(TOPICS.EDGE_DELIVERY_SERVICE.url, EDGE_DELIVERY_SERVICE);

  loadArticles(TOPICS.AWS_EC2.url, AWS_EC2);
  loadArticles(TOPICS.AWS_SES.url, AWS_SES);
  loadArticles(TOPICS.AWS_ECS.url, AWS_ECS);

  loadArticles(TOPICS.DEEP_LEARNING.url, DEEP_LEARNING);

  loadArticles(TOPICS.SF_LWC.url, SF_LWC);
  loadArticles(TOPICS.SF_IDENTITY.url, SF_IDENTITY);

  loadArticles(TOPICS.DYNAMIC_PROGRAMMING.url, DYNAMIC_PROGRAMMING);
  loadArticles(TOPICS.GRAPH.url, GRAPH);
  loadArticles(TOPICS.DIVIDE_CONQUER.url, DIVIDE_CONQUER);

  loadArticles(TOPICS.POSTGRESQL.url, POSTGRESQL);

  loadArticles(TOPICS.ADOBE_ANALYTICS.url, ADOBE_ANALYTICS);
  loadArticles(TOPICS.GOOGLE_ANALYTICS.url, GOOGLE_ANALYTICS);

  return sitemap;
}
