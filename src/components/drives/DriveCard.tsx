import Link from "next/link";
import { MapPin, Calendar, Clock, Users, CheckCircle, TrendingUp, Star } from "lucide-react";
import { WalkInDrive } from "@/lib/mock-data";

interface DriveCardProps {
  drive: WalkInDrive;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function DriveCard({ drive }: DriveCardProps) {
  return (
    <Link href={`/drives/${drive.id}`} className="block group">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 card-hover shadow-sm group-hover:border-blue-100 transition-all duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">
              {drive.company.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base group-hover:text-blue-700 transition-colors">{drive.role}</h3>
              <p className="text-slate-500 text-sm font-medium">{drive.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {drive.isVerified && (
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                <CheckCircle size={10} />
                Verified
              </span>
            )}
            {drive.isHot && (
              <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                <TrendingUp size={10} />
                Hot
              </span>
            )}
            {drive.isNew && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                <Star size={10} />
                New
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Calendar size={14} className="text-blue-400 flex-shrink-0" />
            <span>{formatDate(drive.date)}</span>
            <span className="text-slate-300">•</span>
            <Clock size={14} className="text-blue-400 flex-shrink-0" />
            <span>{drive.time}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} className="text-blue-400 flex-shrink-0" />
            <span className="truncate">{drive.city}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Users size={14} className="text-blue-400 flex-shrink-0" />
            <span>{drive.openings} openings</span>
            <span className="text-slate-300">•</span>
            <span>{drive.experience}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {drive.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="bg-slate-50 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-100">
              {skill}
            </span>
          ))}
          {drive.skills.length > 3 && (
            <span className="bg-slate-50 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-100">
              +{drive.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div>
            <p className="text-blue-700 font-bold text-sm">{drive.salary}</p>
            <p className="text-slate-400 text-xs">Walk-in Only</p>
          </div>
          <span className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
