import Link from "next/link";
import { Plus, Building2, Users, BarChart3, Eye, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employer Dashboard — WALKINS",
};

export default function EmployerDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Building2 size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Employer Dashboard</h1>
                <p className="text-blue-200 text-sm">Manage your walk-in drives and track applicants</p>
              </div>
            </div>
            <Link
              href="#post-drive"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg"
            >
              <Plus size={16} />
              Post a Walk-in Drive
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Drives", value: "0", icon: Calendar },
            { label: "Total Applicants", value: "0", icon: Users },
            { label: "Drive Views", value: "0", icon: Eye },
            { label: "Hires Made", value: "0", icon: CheckCircle },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <Icon size={20} className="text-blue-500 mb-3" />
              <div className="text-2xl font-black text-slate-800">{value}</div>
              <div className="text-slate-500 text-xs font-medium mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div id="post-drive" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
              <Plus size={24} />
            </div>
            <h2 className="text-xl font-black mb-3">Post Your First Walk-in Drive</h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Reach thousands of verified job seekers in your city. Post a walk-in drive in under 5 minutes.
              Free listing, zero commission.
            </p>
            <ul className="space-y-2 mb-6">
              {["Free basic listing", "Reach 50K+ monthly seekers", "Verified badge on your drive", "WhatsApp & email notifications"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle size={14} className="text-blue-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full">
              Post a Drive Now →
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
            <h2 className="font-black text-slate-800 text-xl mb-6">My Drives</h2>
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={28} className="text-slate-300" />
              </div>
              <h3 className="font-bold text-slate-600 mb-2">No drives posted yet</h3>
              <p className="text-slate-400 text-sm mb-4">Your active and past walk-in drives will appear here.</p>
              <Link href="/drives" className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:text-blue-700">
                See how drives look <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
