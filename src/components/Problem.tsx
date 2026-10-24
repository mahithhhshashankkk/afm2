import { AlertTriangle, TrendingUp, FileWarning, EyeOff } from 'lucide-react';
import { IMAGES } from '@/data/images';

const problems = [
  {
    icon: TrendingUp,
    title: 'Rising Procurement Costs',
    desc: 'Canteens over-order food supplies fearing shortages, but surplus perishes — draining budgets semester after semester.',
  },
  {
    icon: FileWarning,
    title: 'No Data, No Accountability',
    desc: "Managers log waste on paper or not at all. There's no visibility into what gets thrown away or why it happens.",
  },
  {
    icon: AlertTriangle,
    title: 'Segregation Confusion',
    desc: 'Mixed wet and dry waste makes recycling impossible and attracts compliance penalties from municipal bodies.',
  },
  {
    icon: EyeOff,
    title: 'Invisible Environmental Impact',
    desc: 'Administrators can not report sustainability metrics to accreditation bodies or green-ranking frameworks.',
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — heading + image */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-earth-300/60 bg-earth-50 px-4 py-1.5 text-sm font-medium text-earth-700">
              <AlertTriangle className="h-4 w-4" />
              The Problem
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
              Indian campuses waste{' '}
              <span className="text-earth-600">crores of rupees</span>{' '}
              in food every year
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-forest-800/70">
              Hostels and canteens serving 200+ residents operate blind — no waste
              tracking, no forecasting, no sustainability reporting. The result is
              overflowing bins, inflated bills, and missed green-certification goals.
            </p>

            {/* Image */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-sand-200 shadow-lg">
              <div className="relative aspect-[16/10]">
                <img
                  src={IMAGES.foodWaste}
                  alt="Food waste from institutional kitchens"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-white/90">
                    Over 15% of institutional food prepared in India is discarded
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — problem cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${i + 1} card-hover group relative rounded-2xl border border-sand-200/70 bg-white p-6 shadow-sm`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-forest-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
