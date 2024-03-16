import { MetadataRoute } from 'next';
import DateFormatter from "@/lib/util/date-formatter";
import { AEM_SITES } from "@/lib/data/article/aem/sites";
import { AEM_FORMS } from "@/lib/data/article/aem/forms";
import { CONTENT_FRAGMENT } from "@/lib/data/article/aem/content-fragment";
import { AEM_SPA } from "@/lib/data/article/aem/spa";
import { CODE_COVERAGE } from "@/lib/data/article/aem/code-coverage";
import { AEM_DISPATCHER } from "@/lib/data/article/aem/dispatcher";
import { AWS_EC2 } from "@/lib/data/article/aws/ec2";
import { SF_LWC } from "@/lib/data/article/salesforce/lwc";
import { IArticleItem } from "@/types/article";

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
        url: withDomain(articleItem.url),
        lastModified: dateFormatter.formatDate(articleItem.modifiedDate),
        changeFrequency: "weekly",
        priority: 0.8
      });
    });
  }

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: domain,
      lastModified: "2024-03-14",
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: withDomain("/profile/mahedi-sabuj"),
      lastModified: "2024-03-14",
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ];

  loadArticles("/aem/sites", AEM_SITES);
  loadArticles("/aem/forms", AEM_FORMS);
  loadArticles("/aem/dispatcher", AEM_DISPATCHER);
  loadArticles("/aem/content-fragment", CONTENT_FRAGMENT);
  loadArticles("/aem/spa", AEM_SPA);
  loadArticles("/aem/code-coverage", CODE_COVERAGE);

  loadArticles("/aws/ec2", AWS_EC2);

  loadArticles("/salesforce/lwc", SF_LWC);

  return sitemap;
}
