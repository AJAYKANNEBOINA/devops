import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-lg">W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-none tracking-wide">WALKINS</span>
                <span className="text-blue-400 text-[9px] font-medium tracking-widest leading-none">WALKINDRIVES.IN</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              India&apos;s #1 Walk-in Drive Platform. Connecting job seekers with verified walk-in opportunities across India.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Job Seekers</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Browse Drives", href: "/drives" },
                { label: "Drive Calendar", href: "/drives" },
                { label: "My Registrations", href: "/dashboard" },
                { label: "Document Checklist", href: "#" },
                { label: "Career Tips", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Employers</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Post a Drive", href: "/employer/dashboard" },
                { label: "Employer Dashboard", href: "/employer/dashboard" },
                { label: "Pricing", href: "#" },
                { label: "Hire in Bulk", href: "#" },
                { label: "Employer FAQ", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact Us</a></li>
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail size={13} className="text-blue-400 flex-shrink-0" />
                <span>hello@walkindrives.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={13} className="text-blue-400 flex-shrink-0" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 WALKINS — walkindrives.in. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Made with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
