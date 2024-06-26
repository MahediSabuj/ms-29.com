import Link from "next/link";

import { IListGroup } from "@/types/list";

import styles from "./list-group.module.scss";

export default function ListGroup({ title, listItems } : IListGroup) {
  listItems = listItems.filter(m => m.count > 0);

  return (
    listItems.length > 0 &&
      <div className="list-group">
        <div className="text-lg block border-b">{title}</div>
        <div>
          <ul className="text-sm font-medium text-gray-900">
            {listItems.map((item, index) => {
              return (
                <li key={index} className={`${styles.listItem} pt-2`}>
                  <Link href={item.topic.url}>
                    {item.topic.title}
                    <span className="inline-flex items-center justify-center w-5 h-4 ms-2 text-xs font-semibold text-white rounded-full">
                      {item.count}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}
