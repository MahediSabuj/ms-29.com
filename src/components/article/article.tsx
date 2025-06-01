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
    <div className="mb-0">
      <Heading className="text-2xl" itemProp="name">
        <LinkText url={url || ""} text={title}/>
      </Heading>
      <div>
        <div className="md:inline">
          <span className="text-[#636B74] mr-2">Published</span>
          <time itemProp="datePublished" dateTime={dateFormatter.formatDate(publishDate)}>
            {publishDate}
          </time>
        </div>
        {publishDate !== modifiedDate && 
          <div className="md:inline md:ml-4">
            <span className="text-[#636B74] mr-2">Modified</span>
            <time itemProp="dateModified" dateTime={dateFormatter.formatDate(modifiedDate)}>
              {modifiedDate}
            </time>
          </div>
        }
        {views && 
          <div className="md:inline md:ml-4">
            <span className="text-[#636B74] mr-2">Viewed</span>
            <span>{views.toLocaleString('en-US')} times</span>
          </div>
        }
      </div>
      {description &&
        <div className="pt-2">
          <span dangerouslySetInnerHTML={{ __html: description || "" }}></span>
        </div>
      }
      {topics &&
        <div className="mt-2">
          {topics.map((item, index) => {
            return (
              <Link key={index} href={item.url}
                  className="bg-topics text-xs font-medium me-2 px-2.5 py-0.5 border inline-flex items-center justify-center hover:underline">
                {item.title}
              </Link>
            )
          })}
        </div>
      }
    </div>
  )
}
