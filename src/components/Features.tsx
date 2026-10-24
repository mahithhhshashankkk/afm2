import {
  ClipboardList,
  Brain,
  ShoppingCart,
  Split,
  BarChart3,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Waste Logging',
    desc: 'Record daily waste by meal, type, and reason in under 60 seconds. Works on any phone — no scanners, no scales, no training needed.',
    tag: 'Core',
    gradient: 'from-forest-500 to-forest-700',
    glow: 'bg-forest-300/40',
  },
  {
    icon: Brain,
    title: 'Predictive Consumption Models',
    desc: 'AI analyzes attendance patterns, menus, and seasonal trends to forecast exactly how much food to prepare — days in advance.',
    tag: 'AI-Powered',
    gradient: 'from-sage-500 to-sage-700',
    glow: 'bg-sage-300/40',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Suggestions',
    desc: 'Get quantity recommendations for every ingredient before you order. Stop guessing, start buying exactly what you need.',
    tag: 'Smart',
    gradient: 'from-earth-500 to-earth-700',
    glow: 'bg-earth-300/40',
  },
  {
    icon: Split,
    title: 'Waste Segregation Guidance',
    desc: 'On-screen prompts classify wet, dry, and recyclable waste so staff segregate correctly every time — compliance made effortless.',
    tag: 'Compliance',
    gradient: 'from-moss-500 to-moss-700',
    glow: 'bg-moss-300/40',
  },
  {
    icon: BarChart3,
    title: 'Sustainability Dashboards',
    desc: 'Beautiful, real-time dashboards show waste trends, cost savings, and CO₂ impact — ready for accreditation and green-ranking reports.',
    tag: 'Reporting',
    gradient: 'from-forest-600 to-moss-600',
    glow: 'bg-forest-300/40',
  },
  {
    icon: Smartphone,
    title: 'Lightweight Mobile-First App',
    desc: 'Built for low-bandwidth campus networks. No installations, no hardware — just open a browser and start logging in minutes.',
    tag: 'Easy Deploy',
    gradient: 'from-forest-500 to-sage-600',
    glow: 'bg-sage-300/40',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-300/60 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
            <Brain className="h-4 w-4" />
            Platform Features
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
            Everything you need to{' '}
            <span className="gradient-text">eliminate waste</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-800/70">
            Six powerful modules that work together seamlessly — from the kitchen
            counter to the vice-chancellor's report.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${(i % 3) + 1} card-hover group relative overflow-hidden rounded-3xl border border-sand-200/60 bg-white p-7 shadow-sm`}
            >
              {/* Hover glow */}
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${feature.glow} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative">
                {/* Icon */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Tag */}
                <span className="absolute right-0 top-1 rounded-full bg-sand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-700/60">
                  {feature.tag}
                </span>

                <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/65">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
