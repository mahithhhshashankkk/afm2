import { Leaf, Cloud, TreePine, Droplets, Award, ArrowUpRight } from 'lucide-react';

const impactMetrics = [
  {
    icon: Leaf,
    value: '1.8T',
    label: 'CO₂ Emissions Prevented',
    desc: 'Per semester per hostel',
    color: 'forest',
  },
  {
    icon: TreePine,
    value: '42',
    label: 'Trees Equivalent Saved',
    desc: 'Carbon sequestration parity',
    color: 'sage',
  },
  {
    icon: Droplets,
    value: '15,000L',
    label: 'Water Footprint Reduced',
    desc: 'From avoided food production',
    color: 'moss',
  },
  {
    icon: Award,
    value: 'A+',
    label: 'Green Campus Rating',
    desc: 'Achievable within one academic year',
    color: 'earth',
  },
];

const colorMap: Record<string, string> = {
  forest: 'text-forest-600 bg-forest-50',
  sage: 'text-sage-600 bg-sage-50',
  moss: 'text-moss-600 bg-moss-50',
  earth: 'text-earth-600 bg-earth-50',
};

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900 py-20 text-white lg:py-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 noise-texture opacity-5" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 animate-blob bg-forest-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 animate-blob bg-sage-600/20 blur-3xl [animation-delay:4s]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: '5%', delay: '0s' },
          { left: '20%', delay: '3s' },
          { left: '50%', delay: '1.5s' },
          { left: '70%', delay: '4s' },
          { left: '85%', delay: '2s' },
          { left: '95%', delay: '5s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute top-0 h-2 w-2 rounded-full bg-forest-300/30 animate-leaf-fall"
            style={{ left: p.left, animationDelay: p.delay, animationDuration: `${10 + i}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-600/50 bg-forest-800/60 px-4 py-1.5 text-sm font-medium text-forest-200">
            <Cloud className="h-4 w-4" />
            Sustainability Impact
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white text-balance lg:text-5xl">
            Every meal saved is a{' '}
            <span className="bg-gradient-to-r from-forest-300 to-sage-300 bg-clip-text text-transparent">
              step toward a greener campus
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-200/70">
            WasteHero doesn't just cut costs — it turns your campus into a
            measurable force for environmental change.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal reveal-delay-1 mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Animated dashboard card */}
          <div className="relative overflow-hidden rounded-3xl border border-forest-700/50 bg-gradient-to-br from-forest-800/80 to-forest-900/80 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-forest-700/40 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-300/70">Campus Impact Report</p>
                <p className="font-display text-xl font-bold text-white">Semester Overview 2026</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-500/20 ring-1 ring-forest-500/30">
                <Leaf className="h-5 w-5 text-forest-300" />
              </div>
            </div>

            {/* Big metric */}
            <div className="mt-6 flex items-end gap-8">
              <div>
                <p className="text-xs font-medium text-forest-300/60">Total Waste Prevented</p>
                <p className="font-display text-5xl font-bold text-white">
                  1,247<span className="text-2xl text-forest-300">kg</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-forest-500/20 px-3 py-1 text-sm font-medium text-forest-300">
                <ArrowUpRight className="h-4 w-4" />
                +38%
              </div>
            </div>

            {/* Animated line chart area */}
            <div className="mt-6 rounded-2xl bg-forest-950/40 p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-forest-200/70">Monthly Trend</p>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-forest-400" />
                  <span className="text-xs text-forest-300/60">Waste Prevented</span>
                </div>
              </div>
              {/* Chart bars */}
              <div className="mt-4 flex h-32 items-end gap-3">
                {[
                  { h: '45%', label: 'Jan' },
                  { h: '55%', label: 'Feb' },
                  { h: '68%', label: 'Mar' },
                  { h: '60%', label: 'Apr' },
                  { h: '78%', label: 'May' },
                  { h: '85%', label: 'Jun' },
                  { h: '92%', label: 'Jul' },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full origin-bottom rounded-t-lg bg-gradient-to-t from-forest-600 to-forest-300 animate-grow-bar"
                      style={{ height: bar.h, animationDelay: `${i * 0.1}s` }}
                    />
                    <span className="text-[10px] font-medium text-forest-300/50">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom stats row */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: 'Meals Saved', value: '3,120' },
                { label: 'Cost Reduced', value: '₹2.1L' },
                { label: 'Compliance', value: '100%' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-forest-800/60 p-3 text-center ring-1 ring-forest-700/40">
                  <p className="font-display text-lg font-bold text-forest-200">{s.value}</p>
                  <p className="text-[10px] text-forest-300/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Impact metric cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {impactMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`reveal reveal-delay-${i + 1} card-hover group relative flex items-center gap-4 rounded-2xl border border-forest-700/40 bg-forest-800/50 p-5 backdrop-blur-sm`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colorMap[metric.color]} transition-transform group-hover:scale-110`}>
                  <metric.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm font-medium text-forest-200/80">{metric.label}</p>
                  <p className="text-xs text-forest-300/50">{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
