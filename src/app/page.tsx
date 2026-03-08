"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, MapPin, Calendar, CheckCircle, ArrowRight, Building2, 
  Users, Zap, Map, FileCheck, Timer, ChevronDown,
  Shield, Bell
} from "lucide-react";
import { mockDrives, cities, roles } from "@/lib/mock-data";
import DriveCard from "@/components/drives/DriveCard";

const faqs = [
  {
    q: "What is a walk-in drive?",
    a: "A walk-in drive is a direct hiring event where candidates can appear for interviews without prior appointment. You simply walk in on the scheduled date and time with your documents."
  },
  {
    q: "Do I need to register beforehand?",
    a: "Registration is optional but recommended. You can walk in directly on the drive date, though pre-registering helps you get a reminder and avoid queues."
  },
  {
    q: "What documents should I carry?",
    a: "Typically: Updated resume (multiple copies), Government photo ID (Aadhar/PAN), Academic certificates, Experience letters (if applicable), Passport photographs. Each drive listing shows its specific requirements."
  },
  {
    q: "Are all drives verified on WALKINS?",
    a: "Yes. Our team manually verifies every drive before it goes live. Verified drives are marked with a green badge. We also conduct periodic re-verification to ensure authenticity."
  },
  {
    q: "How do I post a walk-in drive as an employer?",
    a: "Sign up as an employer, fill in the drive details (role, date, venue, requirements), and submit for verification. Listing is free for the basic tier."
  }
];

const stats = [
  { value: "50K+", label: "Monthly Walkins", icon: Users },
  { value: "2,000+", label: "Verified Drives", icon: CheckCircle },
  { value: "500+", label: "Partner Companies", icon: Building2 },
  { value: "40+", label: "Cities Covered", icon: MapPin },
];

const valueProps = [
  {
    icon: Shield,
    title: "Verified Drives Only",
    description: "Every listing is manually verified by our team. No fake drives, no fraud — guaranteed authenticity with real venue details.",
  },
  {
    icon: Map,
    title: "Map & Directions",
    description: "Get precise venue location, Google Maps directions, and landmarks so you never miss the venue on the big day.",
  },
  {
    icon: Timer,
    title: "Drive Countdown",
    description: "Real-time countdown timers for upcoming drives. Never miss a walk-in opportunity with smart reminders.",
  },
  {
    icon: FileCheck,
    title: "Document Checklist",
    description: "Drive-specific document checklists so you're always prepared. No more last-minute scrambling at the venue.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Search Walk-in Drives",
    description: "Filter by city, role, date, or company. Find the perfect walk-in opportunity in seconds.",
  },
  {
    step: "02",
    title: "Check Drive Details",
    description: "View full details: venue, timing, skills required, salary range, and document checklist.",
  },
  {
    step: "03",
    title: "Walk In & Get Hired",
    description: "Show up at the venue with your documents. No pre-screening calls. Just walk in and get hired.",
  },
];

export default function HomePage() {
  const [searchCity, setSearchCity] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const todaysDrives = mockDrives.slice(0, 3);
  const latestDrives = mockDrives.slice(2, 6);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 mb-6 text-sm font-medium text-blue-700 shadow-sm">
            <Zap size={14} className="text-blue-500" />
            India&apos;s #1 Walk-in Drive Platform
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Get Hired at{" "}
            <span className="text-gradient">Walk-in Drives</span>
            <br />
            Near You — Today
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            WALKINS is India&apos;s only platform dedicated exclusively to walk-in hiring. 
            No job portals. No applications. Just show up and get hired.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-4 md:p-6 max-w-4xl mx-auto mb-10 border border-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400" />
                <select
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 appearance-none"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400" />
                <select
                  value={searchRole}
                  onChange={(e) => setSearchRole(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 appearance-none"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400" />
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50"
                />
              </div>
            </div>
            <div className="mt-3">
              <Link
                href={`/drives?city=${searchCity}&role=${searchRole}&date=${searchDate}`}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5"
              >
                <Search size={16} />
                Find Walk-in Drives
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
            {["Bengaluru", "Hyderabad", "Mumbai", "Pune", "Chennai"].map((city) => (
              <Link key={city} href={`/drives?city=${city}`} className="hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                <MapPin size={12} />
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{value}</div>
                <div className="text-slate-500 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-14 bg-slate-50" id="companies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm font-semibold tracking-wider uppercase mb-8">
            Trusted by India&apos;s top employers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Infosys", "Wipro", "TCS", "Accenture", "HCL", "Cognizant", "Capgemini", "IBM"].map((company) => (
              <div key={company} className="text-slate-400 hover:text-slate-700 font-bold text-lg md:text-xl transition-colors cursor-default select-none">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-4 text-sm font-semibold text-blue-700">
              Why WALKINS?
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Built exclusively for walk-in hiring
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              No job applications. No ATS. Just verified walk-in drives with everything you need to show up confident.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 card-hover shadow-sm text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Drives */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Today&apos;s Walk-in Drives</h2>
              <p className="text-slate-500 text-sm">Live drives happening today across India</p>
            </div>
            <Link href="/drives" className="hidden md:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
              View all drives <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todaysDrives.map((drive) => (
              <DriveCard key={drive.id} drive={drive} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/drives" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
              View all drives <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Opportunities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Latest Walk-in Opportunities</h2>
              <p className="text-slate-500 text-sm">Upcoming drives across India — register your interest early</p>
            </div>
            <Link href="/drives" className="hidden md:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestDrives.map((drive) => (
              <DriveCard key={drive.id} drive={drive} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-slate-50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How WALKINS Works</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Three simple steps from browse to hired.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                  <span className="text-white font-black text-2xl">{step}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-blue rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full" />
              <div className="absolute -bottom-1/4 -left-1/4 w-64 h-64 bg-white/5 rounded-full" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Building2 size={14} />
                For Employers
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Hire in Bulk with Walk-in Drives
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Post your walk-in drive on WALKINS and reach thousands of pre-qualified candidates 
                in your city. Free listing, zero commission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/employer/dashboard"
                  className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Post a Walk-in Drive →
                </Link>
                <a
                  href="#"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about WALKINS</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-blue-700 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Ready to walk into your next job?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
            Browse thousands of verified walk-in drives across India. No applications, no waiting — just show up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/drives" className="btn-primary inline-flex items-center justify-center gap-2 py-3.5 px-8">
              <Search size={16} />
              Browse Walk-in Drives
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 py-3.5 px-8 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
              <Bell size={16} />
              Get Drive Alerts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
