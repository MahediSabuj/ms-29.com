import Link from "next/link";

import { IBreadCrumb } from "@/types/breadcrumb";

export default function BreadCrumb({ items, current } : IBreadCrumb) {
  return (
    <nav className="flex py-3 hidden md:flex" aria-label="Breadcrumb">
      <ol itemScope itemType="http://schema.org/BreadcrumbList"
        className="inline-flex items-center space-x-1 md:space-x-2">
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"
          className="inline-flex items-center">
          <Link itemProp="item" href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1"/>
        </li>
        {items.map((breadcrumb, index) => {
          return (
            <li key={index} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <div className="flex items-center">
                <svg className="block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link itemProp="item" href={breadcrumb.url} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2">
                  <span itemProp="name">{breadcrumb.title}</span>
                </Link>
              </div>
              <meta itemProp="position" content={`${index + 2}`}/>
            </li>
          )  
        })}
        {current && 
          <li aria-current="page" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span itemProp="name" className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{current}</span>
            </div>
            <meta itemProp="position" content={`${items.length + 2}`}/>
          </li>
        }
      </ol>
    </nav>
  )  
}
