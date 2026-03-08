"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { mockDrives, cities, roles, categories } from "@/lib/mock-data";
import DriveCard from "@/components/drives/DriveCard";

export default function DrivesPage() {
  const [searchCity, setSearchCity] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDrives = useMemo(() => {
    return mockDrives.filter((drive) => {
      if (searchCity && drive.city !== searchCity) return false;
      if (searchRole && drive.role !== searchRole) return false;
      if (searchCategory && drive.category !== searchCategory) return false;
      if (searchQuery && !drive.role.toLowerCase().includes(searchQuery.toLowerCase()) && !drive.company.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [searchCity, searchRole, searchCategory, searchQuery]);

  const hasFilters = searchCity || searchRole || searchCategory || searchQuery;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Browse Walk-in Drives</h1>
          <p className="text-blue-200 text-base mb-8">
            {filteredDrives.length} verified walk-in drives available now
          </p>
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by role or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm">
            <SlidersHorizontal size={14} className="text-slate-400" />
            <span className="text-slate-500 font-medium">Filters:</span>
          </div>
          
          <select
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>

          <select
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Roles</option>
            {roles.map((role) => <option key={role} value={role}>{role}</option>)}
          </select>

          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          {hasFilters && (
            <button
              onClick={() => { setSearchCity(""); setSearchRole(""); setSearchCategory(""); setSearchQuery(""); }}
              className="flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-100 rounded-xl px-4 py-2 text-sm font-medium hover:bg-red-100 transition-colors"
            >
              <X size={14} />
              Clear filters
            </button>
          )}
        </div>

        {/* Results */}
        {filteredDrives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDrives.map((drive) => (
              <DriveCard key={drive.id} drive={drive} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No drives found</h3>
            <p className="text-slate-400 text-sm mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => { setSearchCity(""); setSearchRole(""); setSearchCategory(""); setSearchQuery(""); }}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
