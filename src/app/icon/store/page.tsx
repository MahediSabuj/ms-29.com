"use client";

import { useState } from "react";
import Image from "next/image";

import { CLOUD } from "@/data/icon/cloud";
import { DATABASE } from "@/data/icon/database";
import { DEVOPS } from "@/data/icon/devops";
import { FRONTEND } from "@/data/icon/frontend";
import { IconItem } from "@/types/icon";

const ICON_CATEGORIES = [
  "All",
  "Cloud Providers",
  "Databases",
  "Frontend Frameworks",
  "Backend Frameworks",
  "DevOps Tools",
  "Messaging",
  "Analytics",
  "Security",
  "Mobile",
  "AI/ML",
  "Monitoring"
] as const;

const ICON_ITEMS: IconItem[] = [
  ...CLOUD,
  ...DEVOPS,
  ...FRONTEND,
  ...DATABASE
];

export default function IconStorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredIcons = ICON_ITEMS.filter(icon => {
    const matchesCategory = selectedCategory === "All" || icon.category === selectedCategory;
    const matchesSearch = searchTerm === "" ||
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (icon.description && icon.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Icon & Brand Store
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A curated collection of technology icons and brand assets for system design, 
            architecture diagrams, and technical documentation. Quick access to logos 
            and icons for AWS, databases, frameworks, and development tools.
          </p>
        </div>
      </section>
      <section className="py-8 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input type="text"
                placeholder="Search icons, technologies, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {ICON_CATEGORIES.map((category) => (
                <button key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-sky-500 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-300"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredIcons.length} of {ICON_ITEMS.length} icons
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredIcons.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.493.902-6.093 2.384A7.961 7.961 0 012 12a8 8 0 118 8 7.957 7.957 0 01-4.093-1.384z" />
                </svg>
              </div>
              <p className="text-lg text-slate-600 mb-2">No icons found</p>
              <p className="text-slate-500">Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {filteredIcons.map((icon, index) => (
                <div
                  key={`${icon.name}-${index}`}
                  className="modern-card group hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4 mb-3">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      {icon.hasImage && icon.imageSrc ? (
                        <Image
                          src={icon.imageSrc}
                          alt={icon.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{icon.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">{icon.category}</p>
                    {icon.description && (
                      <p className="text-xs text-slate-600 line-clamp-2">{icon.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
