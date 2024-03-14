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
    <div className="mb-0">
      <h1 className="text-2xl text-[#3273dc]" itemProp="name">
        <Link href={url}>{title}</Link>
      </h1>
      <div>
        <div className="md:inline">
          <span className="text-[#636B74] mr-2">Published</span>
          <time itemProp="datePublished" dateTime={formattedDate(publishDate)}>
            {publishDate}
          </time>
        </div>
        <div className="md:inline md:ml-4">
          <span className="text-[#636B74] mr-2">Modified</span>
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
