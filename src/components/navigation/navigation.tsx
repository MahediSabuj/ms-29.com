import Link from "next/link";

import { HeaderConfig } from "@/types/header";
import IconBar from "../icon-bar/icon-bar";

export default function Navigation(config: HeaderConfig) {
  const { brand } = config;

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href={brand.url}>{brand.title}</Link>
          <button type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-[#3A2A1D] rounded-lg md:hidden"
              aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden md:flex">
            <IconBar {...config}/>
          </div>
        </div>
      </div>
    </nav>
  )
}
