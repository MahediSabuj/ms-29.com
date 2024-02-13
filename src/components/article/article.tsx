import Link from "next/link";
import {IArticleItem} from "@/types/article";

export default function Article({
  title, url, publishDate, modifiedDate, description } : IArticleItem
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
    <div className="pb-4">
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
       {description && <div className="pt-2">
        <span dangerouslySetInnerHTML={{ __html: description || "" }}></span>
        <Link className="text-blue-600" href={url}> See More... </Link>
      </div>}
    </div>
  )
}
