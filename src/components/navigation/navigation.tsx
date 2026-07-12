"use client";

import Link from "next/link";
import { useState } from "react";

import { HeaderConfig } from "@/types/header";
import IconBar from "../icon-bar/icon-bar";
import IconItem from "@/components/icon-item/icon-item";

export default function Navigation(config: HeaderConfig) {
  const { brand, navigationItems, socialProfiles } = config;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href={brand.url} className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="flex items-center justify-center p-1.5 rounded-lg bg-accent-500">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0">
                <path d="M2 16V4L7 12L10 7L13 12L18 4V16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="modern-brand">{brand.title}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => {
              return (
                <Link key={index} href={item.url}
                    className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                  {item.name}
                </Link>
              );
            })}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <IconBar {...config}/>
            </div>
          </div>

          <button type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-slate-700 rounded-xl md:hidden
                hover:bg-slate-100 transition-colors duration-200"
              aria-controls="navbar-hamburger" 
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50 md:hidden h-screen overflow-hidden">
          <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between px-6 py-6 flex-shrink-0">
              <Link href={brand.url} className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}>
                <span className="flex items-center justify-center p-1.5 rounded-lg bg-accent-500">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0">
                    <path d="M2 16V4L7 12L10 7L13 12L18 4V16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="modern-brand">{brand.title}</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-slate-700 rounded-full hover:bg-white hover:bg-opacity-60 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 px-6 pt-8 flex flex-col justify-start">
              <div className="mb-12">
                <div className="mb-4">
                  <div className="text-slate-500 font-medium tracking-wider uppercase mb-2" style={{letterSpacing: '0.1em'}}>
                    Navigation
                  </div>
                </div>
                <div className="space-y-4">
                  {navigationItems.map((item, index) => {
                    return (
                      <Link key={index}
                        href={item.url}
                        className="block w-full text-2xl text-slate-800 hover:text-blue-700 hover:bg-slate-50 transition-all duration-300 relative group px-6 py-4 border border-slate-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-slate-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{fontWeight: 400, lineHeight: '1.3', letterSpacing: '0.02em'}}>
                          {item.name}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-400"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="px-6 py-8 flex-shrink-0">
              {config.socialProfiles && config.socialProfiles.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center px-4">
                    {config.socialProfiles.slice(0, 3).map((item, index) => (
                      <IconItem key={index} {...item} />
                    ))}
                  </div>
                  
                  {config.socialProfiles.length > 3 && (
                    <div className="flex justify-between items-center px-4">
                      {config.socialProfiles.slice(3).map((item, index) => (
                        <IconItem key={index} {...item} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center text-xs text-slate-400">No connections available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
