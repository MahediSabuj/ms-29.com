"use client";

import { useState } from "react";
import Image from "next/image";

import { AI } from "@/data/icon/ai";
import { ANALYTICS } from "@/data/icon/analytics";
import { AWS_SERVICES } from "@/data/icon/aws";
import { BACKEND } from "@/data/icon/backend";
import { CLOUD } from "@/data/icon/cloud";
import { DATABASE } from "@/data/icon/database";
import { DATA_WAREHOUSE } from "@/data/icon/data-warehouse";
import { DEVOPS } from "@/data/icon/devops";
import { FRONTEND } from "@/data/icon/frontend";
import { MESSAGING } from "@/data/icon/messaging";
import { MOBILE } from "@/data/icon/mobile";
import { MONITORING } from "@/data/icon/monitoring";
import { PROGRAMMING_LANGUAGES } from "@/data/icon/programming-languages";
import { PROJECT_MANAGEMENT } from "@/data/icon/project-management";
import { SECURITY } from "@/data/icon/security";
import { IconItem } from "@/types/icon";

const ICON_CATEGORIES = [
  "All",
  "AWS",
  "Cloud Providers",
  "Databases",
  "Data Warehouse",
  "Frontend Frameworks",
  "Backend Frameworks",
  "Programming Languages",
  "DevOps Tools",
  "Messaging",
  "Analytics",
  "Security",
  "Mobile",
  "AI/ML",
  "Monitoring",
  "Project Management"
] as const;

const ICON_ITEMS: IconItem[] = [
  ...AWS_SERVICES,
  ...CLOUD,
  ...DEVOPS,
  ...FRONTEND,
  ...BACKEND,
  ...PROGRAMMING_LANGUAGES,
  ...DATABASE,
  ...DATA_WAREHOUSE,
  ...MESSAGING,
  ...MOBILE,
  ...AI,
  ...ANALYTICS,
  ...SECURITY,
  ...MONITORING,
  ...PROJECT_MANAGEMENT
];

export default function IconStorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [copyFeedback, setCopyFeedback] = useState<string>("");
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const handleCopyImage = async (icon: IconItem) => {
    try {
      if (icon.imageSrc && typeof icon.imageSrc === 'object' && 'src' in icon.imageSrc) {
        const response = await fetch(icon.imageSrc.src);
        const blob = await response.blob();
        
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ]);
        
        setCopyFeedback(icon.name);
        setTimeout(() => setCopyFeedback(""), 2000);
      }
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const handleDownload = async (icon: IconItem) => {
    try {
      if (icon.imageSrc && typeof icon.imageSrc === 'object' && 'src' in icon.imageSrc) {
        const response = await fetch(icon.imageSrc.src);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

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
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterOpen
                    ? "bg-sky-500 text-white"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}>
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                {filterOpen ? "Hide Filter" : "Filter"}
              </button>
              {selectedCategory !== "All" && (
                <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
            </div>
            <div className="relative w-full md:w-96">
              <input type="text"
                placeholder="Search icons, technologies, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder:text-slate-400 [&::-webkit-input-placeholder]:text-slate-400"/>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            Showing {filteredIcons.length} of {ICON_ITEMS.length} icons
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 items-start">
            {/* Filter Sidebar */}
            {filterOpen && (
              <div className="w-64 bg-white border border-slate-200 rounded-lg p-4 flex-shrink-0">
                <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-1">
                  {ICON_CATEGORIES.map((category) => {
                    const count = category === "All"
                      ? ICON_ITEMS.length
                      : ICON_ITEMS.filter(item => item.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-sky-500 text-white"
                            : "hover:bg-slate-100 text-slate-700"
                        }`}>
                        <span>{category}</span>
                        <span className="float-right text-xs opacity-75">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Icons Grid */}
            <div className="flex-1 min-w-0">
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
                <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
              {filteredIcons.map((icon, index) => (
                <div
                  key={`${icon.name}-${index}`}
                  className="modern-card group hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
                  <div className="aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4 mb-3 relative">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      {icon.hasImage && icon.imageSrc ? (
                        <Image
                          src={icon.imageSrc}
                          alt={icon.name}
                          width={64}
                          height={64}
                          className="object-contain"/>
                      ) : (
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {icon.hasImage && icon.imageSrc && (
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                        <button
                          onClick={() => handleCopyImage(icon)}
                          className="p-1.5 bg-white/90 hover:bg-white rounded-md shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer"
                          title="Copy image"
                          aria-label="Copy image">
                          {copyFeedback === icon.name ? (
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                        
                        <button
                          onClick={() => handleDownload(icon)}
                          className="p-1.5 bg-white/90 hover:bg-white rounded-md shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer"
                          title="Download image"
                          aria-label="Download image">
                          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    )}
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
          </div>
        </div>
      </section>
    </div>
  );
}
