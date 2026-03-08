import Link from "next/link";
import { Calendar, MapPin, CheckCircle, Bell, User, Search, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard — WALKINS",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">My Dashboard</h1>
              <p className="text-blue-200 text-sm">Track your walk-in drive registrations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Registered Drives", value: "0", icon: Calendar },
            { label: "Attended Drives", value: "0", icon: CheckCircle },
            { label: "Drive Alerts", value: "0", icon: Bell },
            { label: "Cities Following", value: "0", icon: MapPin },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <Icon size={20} className="text-blue-500 mb-3" />
              <div className="text-2xl font-black text-slate-800">{value}</div>
              <div className="text-slate-500 text-xs font-medium mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm">
          <h2 className="font-black text-slate-800 text-xl mb-6">My Registrations</h2>
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-blue-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-600 mb-2">No registrations yet</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">
              Browse verified walk-in drives near you and register your interest.
            </p>
            <Link
              href="/drives"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
              <Search size={15} />
              Browse Walk-in Drives
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
