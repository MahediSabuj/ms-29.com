import Link from "next/link";
import { IArticleItem } from "@/types/article";

export default function Article({
  title, topics, url, publishDate, modifiedDate, description } : IArticleItem
) {

  const fillZero = (date: number) => {
    return date.toString().padStart(2, '0');
  }

  const formattedDate = (date: string) => {
    const _date = new Date(date);
    const _day = fillZero(_date.getDate());
    const _month = fillZero(_date.getMonth() + 1);
    return `${_date.getFullYear()}-${_month}-${_day}`;
  }

  return (
    <div className="mb-4">
      {topics &&
        topics.map((item, index) => {
          return (
            <Link key={index} href={item.url}
                className="bg-topics text-sm font-medium me-2 px-2.5 py-0.5 rounded-full border inline-flex items-center justify-center">
              {item.title}
            </Link>
          )
        })}
      <h1 className="text-2xl" itemProp="name">
        <Link href={url}>{title}</Link>
      </h1>
      <div>
        <div className="md:inline">
          <span className="text-gray-400 mr-2">Published</span>
          <time itemProp="datePublished" dateTime={formattedDate(publishDate)}>
            {publishDate}
          </time>
        </div>
        <div className="md:inline md:ml-4">
          <span className="text-gray-400 mr-2">Modified</span>
          <time itemProp="dateModified" dateTime={formattedDate(modifiedDate)}>
            {modifiedDate}
          </time>
        </div>
      </div>
      {description &&
        <div className="pt-2">
          <span dangerouslySetInnerHTML={{ __html: description || "" }}></span>
        </div>
      }
    </div>
  )
}
