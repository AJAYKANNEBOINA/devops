import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Calendar, Clock, Users, CheckCircle, ArrowLeft, FileText, Building2, DollarSign, Tag } from "lucide-react";
import { mockDrives } from "@/lib/mock-data";
import CountdownTimer from "@/components/drives/CountdownTimer";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const drive = mockDrives.find((d) => d.id === id);
  if (!drive) return {};
  return {
    title: `${drive.role} at ${drive.company} — Walk-in Drive`,
    description: `Walk-in drive for ${drive.role} at ${drive.company} on ${drive.date} in ${drive.city}. ${drive.openings} openings.`,
  };
}

export function generateStaticParams() {
  return mockDrives.map((drive) => ({ id: drive.id }));
}

export default async function DriveDetailPage({ params }: Props) {
  const { id } = await params;
  const drive = mockDrives.find((d) => d.id === id);
  if (!drive) notFound();

  const driveDate = new Date(drive.date);
  const formattedDate = driveDate.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/drives" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-medium mb-6 transition-colors">
          <ArrowLeft size={16} />
          Back to all drives
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-black text-2xl flex-shrink-0">
                {drive.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{drive.role}</h1>
                <div className="flex items-center gap-2 text-slate-500">
                  <Building2 size={15} />
                  <span className="font-semibold text-slate-700">{drive.company}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {drive.isVerified && (
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-green-100">
                  <CheckCircle size={13} />
                  Verified Drive
                </span>
              )}
              {drive.isHot && (
                <span className="bg-orange-50 text-orange-600 text-sm font-semibold px-3 py-1.5 rounded-full border border-orange-100">
                  �� Hot Drive
                </span>
              )}
              {drive.isNew && (
                <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                  ✨ New
                </span>
              )}
            </div>
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl mb-6">
            {[
              { icon: Calendar, label: "Date", value: formattedDate },
              { icon: Clock, label: "Time", value: drive.time },
              { icon: MapPin, label: "City", value: drive.city },
              { icon: Users, label: "Openings", value: `${drive.openings} positions` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon size={16} className="text-blue-500 mx-auto mb-1.5" />
                <p className="text-xs text-slate-400 font-medium">{label}</p>
                <p className="text-sm font-bold text-slate-700 mt-0.5 leading-tight">{value}</p>
              </div>
            ))}
          </div>

          {/* Salary & Experience */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold">
              <DollarSign size={14} />
              {drive.salary}
            </div>
            <div className="flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-medium border border-slate-200">
              <Tag size={14} />
              {drive.experience} experience
            </div>
            <div className="flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-medium border border-slate-200">
              {drive.category} • {drive.type}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/signup" className="btn-primary flex-1 text-center py-3.5 flex items-center justify-center gap-2 font-bold">
              Register for Walk-in
            </Link>
            <a
              href={drive.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-blue-600 text-blue-600 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="font-black text-slate-800 text-lg mb-4">About this Drive</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{drive.description}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="font-black text-slate-800 text-lg mb-4">Requirements</h2>
              <ul className="space-y-2.5">
                {drive.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="font-black text-slate-800 text-lg mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {drive.skills.map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 font-semibold text-sm px-3 py-1.5 rounded-full border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CountdownTimer targetDate={drive.date} targetTime={drive.time} />

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} className="text-blue-600" />
                <h2 className="font-black text-slate-800 text-sm">Documents to Carry</h2>
              </div>
              <ul className="space-y-2.5">
                {drive.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-slate-600 text-xs">
                    <div className="w-4 h-4 rounded border-2 border-blue-300 flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-blue-600" />
                <h2 className="font-black text-slate-800 text-sm">Venue</h2>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">{drive.location}</p>
              <a
                href={drive.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
