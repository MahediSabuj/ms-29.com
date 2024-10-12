import { IReference } from "@/types/reference";
import Link from "next/link";

export default function Reference({ references } : IReference) {
  return (
    <>
      <h2 className="text-xl mt-4">
        <strong>References</strong>
      </h2>
      <ul className="list-decimal ml-6 pt-1 pl-2.5">
        {references.map((item, index) => {
          return (
            <li key={index}>
              <span className="mr-1">{item.title},</span>
              <Link className="text-blue-600" target="_blank"
                  href={item.url}>
                {item.url}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
