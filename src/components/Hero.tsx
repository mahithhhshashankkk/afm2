import { ArrowRight, Sparkles, TrendingDown, Recycle } from 'lucide-react';
import { IMAGES } from '@/data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-forest-50 via-sand-50 to-sand-100 pt-28 lg:pt-32"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-20 -right-20 h-96 w-96 animate-blob bg-forest-300/25 blur-3xl" />
      <div className="absolute top-40 -left-20 h-80 w-80 animate-blob bg-sage-300/30 blur-3xl [animation-delay:3s]" />
      <div className="absolute bottom-0 right-1/3 h-72 w-72 animate-blob bg-earth-200/30 blur-3xl [animation-delay:6s]" />

      {/* Falling leaves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: '10%', delay: '0s', dur: '9s' },
          { left: '30%', delay: '2s', dur: '11s' },
          { left: '55%', delay: '4s', dur: '8s' },
          { left: '75%', delay: '1s', dur: '10s' },
          { left: '90%', delay: '5s', dur: '12s' },
        ].map((leaf, i) => (
          <div
            key={i}
            className="absolute top-0 text-forest-400/30 animate-leaf-fall"
            style={{ left: leaf.left, animationDelay: leaf.delay, animationDuration: leaf.dur }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left column */}
        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-forest-300/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest-700 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-forest-500" />
            AI-Powered Waste Intelligence for Campuses
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl font-bold leading-[1.05] text-forest-900 text-balance sm:text-6xl lg:text-7xl">
            Cut campus food waste by{' '}
            <span className="gradient-text">40%</span>
            <br />
            with intelligent insights
          </h1>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-forest-800/70">
            WasteHero gives hostel and canteen managers AI-driven predictions,
            procurement guidance, and sustainability dashboards — all in a
            lightweight platform that deploys in days, not months.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-forest-700/30"
            >
              Request a Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-300/70 bg-white/60 px-7 py-3.5 text-base font-semibold text-forest-800 backdrop-blur-sm transition-all hover:border-forest-500 hover:bg-white"
            >
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              { icon: TrendingDown, label: '40% less food waste' },
              { icon: Recycle, label: 'Deployed in 7 days' },
              { icon: Sparkles, label: 'No hardware required' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest-100">
                  <badge.icon className="h-4.5 w-4.5 text-forest-600" />
                </div>
                <span className="text-sm font-medium text-forest-800/80">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — floating dashboard card */}
        <div className="reveal reveal-delay-2 relative">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-forest-400/30 to-sage-400/20 blur-2xl" />

            {/* Main card */}
            <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-2xl shadow-forest-900/10 backdrop-blur-xl">
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-sand-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage-500">
                    Sustainability Dashboard
                  </p>
                  <p className="font-display text-lg font-bold text-forest-900">
                    Campus Overview
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500 to-forest-700">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Metric tiles */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-forest-50 to-forest-100 p-4">
                  <p className="text-xs font-medium text-forest-600">Waste Reduced</p>
                  <p className="mt-1 font-display text-2xl font-bold text-forest-800">
                    312 kg
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs font-medium text-forest-600">
                    <TrendingDown className="h-3.5 w-3.5" />
                    38% this month
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-sand-50 to-sand-100 p-4">
                  <p className="text-xs font-medium text-earth-600">Cost Saved</p>
                  <p className="mt-1 font-display text-2xl font-bold text-earth-700">
                    ₹48,200
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-xs font-medium text-earth-600">
                    <TrendingDown className="h-3.5 w-3.5" />
                    27% vs last term
                  </div>
                </div>
              </div>

              {/* Animated bar chart */}
              <div className="mt-4 rounded-2xl bg-sand-50/80 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-forest-700">Weekly Waste Trend</p>
                  <span className="text-xs font-medium text-forest-500">Mon–Sun</span>
                </div>
                <div className="mt-3 flex h-24 items-end gap-2">
                  {[
                    { h: '85%', delay: '0s' },
                    { h: '72%', delay: '0.1s' },
                    { h: '60%', delay: '0.2s' },
                    { h: '45%', delay: '0.3s' },
                    { h: '38%', delay: '0.4s' },
                    { h: '30%', delay: '0.5s' },
                    { h: '22%', delay: '0.6s' },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-forest-600 to-forest-400 animate-grow-bar"
                      style={{ height: bar.h, animationDelay: bar.delay }}
                    />
                  ))}
                </div>
              </div>

              {/* AI suggestion */}
              <div className="mt-3 flex items-start gap-3 rounded-2xl border border-forest-200/60 bg-gradient-to-r from-forest-50 to-sage-50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-500 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-forest-700">
                    AI Procurement Tip
                  </p>
                  <p className="mt-0.5 text-xs text-forest-800/70">
                    Reduce rice order by 12 kg — forecast shows lower demand Thu–Sat based on attendance patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="absolute -right-4 -top-4 animate-float rounded-2xl border border-white bg-white p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-100">
                  <Recycle className="h-5 w-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-sage-500">Segregation</p>
                  <p className="text-sm font-bold text-forest-800">92% accuracy</p>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-5 -left-4 animate-float-slow rounded-2xl border border-white bg-white p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-earth-100">
                  <TrendingDown className="h-5 w-5 text-earth-600" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-earth-500">Forecast</p>
                  <p className="text-sm font-bold text-forest-800">7-day ahead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="h-[60px] w-full lg:h-[100px]">
          <path
            d="M0,80 C240,120 480,20 720,50 C960,80 1200,120 1440,70 L1440,120 L0,120 Z"
            fill="#fbf9f5"
          />
        </svg>
      </div>
    </section>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  );
}
