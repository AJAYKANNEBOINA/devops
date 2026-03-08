import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — WALKINS",
};

export default function LoginPage() {
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
          <h1 className="text-2xl font-black text-slate-900 mt-6 mb-2">Welcome back</h1>
          <p className="text-slate-500 text-sm">Sign in to track your walk-in registrations</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 border border-blue-50 p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 text-sm font-bold">
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 font-semibold hover:text-blue-700">
                Sign up free
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/employer/dashboard" className="text-slate-400 text-xs hover:text-blue-600 transition-colors">
              Sign in as Employer →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
