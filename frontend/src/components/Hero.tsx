import {useState} from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl filter" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl filter" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Left Column: Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur">
              What's New in 2026? <ArrowRight className="ml-1.5 h-3 w-3" />
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-indigo-200 to-blue-300 bg-clip-text text-transparent">
              Build the future with modern web experiences.
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg text-slate-400">
              Empower your workflows, scale effortlessly, and deliver breathtaking user interfaces. Start your journey today with our cutting-edge components and frameworks.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#get-started"
                className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/30 sm:w-auto"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#watch-demo"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-4 font-semibold text-slate-300 backdrop-blur transition-all hover:bg-slate-800 hover:text-white sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5 fill-current" />
                See Demo
              </a>
            </div>

            {/* Social Proof / Stats */}
            <div className="mt-16 flex justify-center gap-8 lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-xs text-slate-500">Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2M+</p>
                <p className="text-xs text-slate-500">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p className="text-xs text-slate-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component / Illustration */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-72 w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur sm:h-96">
              {/* Decorative grid pattern to simulate a dashboard / code editor */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute flex items-center justify-center inset-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <ArrowRight className="h-8 w-8" />
                </div>
              </div>
              {/* Optional Glassmorphic Float Panel */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-800 bg-slate-950/80 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <p className="text-xs font-medium text-slate-300">System is fully operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
