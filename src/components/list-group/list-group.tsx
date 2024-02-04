import Link from "next/link";

import { IListGroup } from "@/types/list";

import styles from "./list-group.module.scss";

export default function ListGroup({ title, listItems } : IListGroup) {
  return (
    <div className="list-group">
      <div className="block border-b">{title}</div>
      <div>
        <ul className="text-sm font-medium text-gray-900">
          {listItems.map((item, index) => {
            return (
              <li key={index} className={`${styles.listItem} pt-2`}>
                <Link href={item.url}>
                  {item.title}
                  <span className="inline-flex justify-center w-4 h-4 ms-2 text-xs font-semibold text-white rounded-full">
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
