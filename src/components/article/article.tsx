import Link from "next/link";
import { IArticleItem } from "@/types/article";
import DateFormatter from "@/lib/util/date-formatter";
import LinkText from "../link-text/link-text";

export default function Article({
  title, topics, url, publishDate, modifiedDate, description, views } : IArticleItem
) {
  const dateFormatter = new (DateFormatter as any)();
  const Heading: keyof JSX.IntrinsicElements = description ? 'h2' : 'h1'; /* Description available only on Listing Page */

  return (
    <article className="group">
      <Heading className="article-title mb-4" itemProp="name">
        <LinkText url={url || ""} text={title}/>
      </Heading>
      
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="article-meta">Published</span>
          <time className="article-meta font-semibold" itemProp="datePublished" dateTime={dateFormatter.formatDate(publishDate)}>
            {publishDate}
          </time>
        </div>
      
        {publishDate !== modifiedDate && 
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            <span className="article-meta">Modified</span>
            <time className="article-meta font-semibold" itemProp="dateModified" dateTime={dateFormatter.formatDate(modifiedDate)}>
              {modifiedDate}
            </time>
          </div>
        }

        {views && 
            <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="article-meta">Viewed</span>
            <span className="article-meta font-semibold">{views.toLocaleString('en-US')} times</span>
          </div>
        }
      </div>

      {description &&
        <div className="mb-6">
          <div className="article-description" dangerouslySetInnerHTML={{ __html: description || "" }}></div>
        </div>
      }

      {topics &&
        <div className="mt-2">
          {topics.map((item, index) => {
            return (
              <Link key={index} href={item.url} className="topic-tag">
                {item.title}
              </Link>
            )
          })}
        </div>
      }
    </article>
  )
}
