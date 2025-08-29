import Link from "next/link";

import { HeaderConfig } from "@/types/header";
import IconBar from "../icon-bar/icon-bar";

export default function Navigation(config: HeaderConfig) {
  const { brand } = config;

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href={brand.url} className="modern-brand hover:scale-105 transition-transform duration-300">
            {brand.title}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blogs"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
              Articles
            </Link>
            <div className="ml-4 pl-4 border-l border-slate-200">
              <IconBar {...config}/>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-slate-700 rounded-xl md:hidden
                hover:bg-slate-100 transition-colors duration-200"
              aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
