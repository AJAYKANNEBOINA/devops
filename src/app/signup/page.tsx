import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — WALKINS",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen gradient-hero flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl">W</span>
            </div>
            <span className="text-blue-800 font-extrabold text-xl tracking-wide">WALKINS</span>
          </Link>
          <h1 className="text-2xl font-black text-slate-900 mt-6 mb-2">Create your account</h1>
          <p className="text-slate-500 text-sm">Get notified about walk-in drives near you</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 border border-blue-50 p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full name</label>
              <input id="name" type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone number</label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-sm font-medium">+91</span>
                <input id="phone" type="tel" placeholder="9XXXXXXXXX" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">Preferred city</label>
              <select id="city" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white">
                <option value="">Select your city</option>
                {["Bengaluru", "Hyderabad", "Mumbai", "Pune", "Chennai", "Delhi NCR", "Kolkata"].map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input id="password" type="password" placeholder="Create a strong password" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm font-bold">
              Create Account — It&apos;s Free
            </button>
          </form>

          <p className="text-slate-400 text-xs text-center mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
