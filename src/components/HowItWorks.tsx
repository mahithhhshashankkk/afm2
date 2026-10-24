import { UserPlus, ClipboardCheck, Sparkles, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Onboard Your Campus',
    desc: 'Share your hostel or canteen details, meal schedule, and resident count. Setup takes under 30 minutes — no hardware, no IT team needed.',
    duration: 'Day 1',
    color: 'forest',
  },
  {
    num: '02',
    icon: ClipboardCheck,
    title: 'Start Logging Waste',
    desc: 'Staff log waste after each meal on any phone or tablet. The interface is so simple that new users get productive in under 5 minutes.',
    duration: 'Days 2–7',
    color: 'sage',
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'AI Learns Your Patterns',
    desc: 'Within a week, the platform builds predictive models from your data — forecasting demand, suggesting procurement quantities, and flagging waste hotspots.',
    duration: 'Week 2',
    color: 'earth',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Act on Insights & Save',
    desc: 'Follow AI procurement tips, improve segregation with on-screen guidance, and watch costs drop. Export sustainability reports in one click.',
    duration: 'Week 3+',
    color: 'moss',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; ring: string; dot: string }> = {
  forest: { bg: 'bg-forest-50', text: 'text-forest-600', border: 'border-forest-300', ring: 'ring-forest-200', dot: 'bg-forest-500' },
  sage: { bg: 'bg-sage-50', text: 'text-sage-600', border: 'border-sage-300', ring: 'ring-sage-200', dot: 'bg-sage-500' },
  earth: { bg: 'bg-earth-50', text: 'text-earth-600', border: 'border-earth-300', ring: 'ring-earth-200', dot: 'bg-earth-500' },
  moss: { bg: 'bg-moss-50', text: 'text-moss-600', border: 'border-moss-300', ring: 'ring-moss-200', dot: 'bg-moss-500' },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-b from-sand-50 to-forest-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sage-300/60 bg-sage-50 px-4 py-1.5 text-sm font-medium text-sage-700">
            <ClipboardCheck className="h-4 w-4" />
            How It Works
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
            From signup to savings in{' '}
            <span className="gradient-text">three weeks</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-800/70">
            No lengthy implementations. No consultants. Just a clear path from
            first login to measurable results.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step, i) => {
            const c = colorClasses[step.color];
            return (
              <div key={step.num} className={`reveal reveal-delay-${i + 1} relative`}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-full hidden h-0.5 w-full -translate-x-4 lg:block">
                    <div className={`h-full w-full bg-gradient-to-r ${c.dot} to-transparent opacity-30`} />
                  </div>
                )}

                <div className={`card-hover group relative h-full rounded-3xl border ${c.border}/40 bg-white p-7 shadow-sm ring-1 ${c.ring}/30`}>
                  {/* Number + duration */}
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-5xl font-bold ${c.text} opacity-20 transition-opacity group-hover:opacity-40`}>
                      {step.num}
                    </span>
                    <span className={`rounded-full ${c.bg} px-3 py-1 text-xs font-semibold ${c.text}`}>
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mt-4 flex h-12 w-12 items-center justify-center rounded-2xl ${c.bg} transition-transform group-hover:scale-110`}>
                    <step.icon className={`h-6 w-6 ${c.text}`} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-forest-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/65">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
