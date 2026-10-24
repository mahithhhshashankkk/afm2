import { Check, ArrowRight, Sparkles, FlaskConical, Rocket } from 'lucide-react';

const plans = [
  {
    icon: FlaskConical,
    name: 'Pilot Project',
    phase: 'Phase 1',
    price: 'Free',
    period: 'for 1 hostel, 4 weeks',
    desc: 'Validate WasteHero on your campus with a no-cost pilot. Full feature access for a single hostel or canteen.',
    features: [
      'Waste logging for 1 hostel / canteen',
      'Basic dashboard & weekly trend reports',
      'Email onboarding for up to 3 staff',
      'Sustainability snapshot at end of pilot',
    ],
    cta: 'Start a Free Pilot',
    highlight: false,
    accent: 'earth',
  },
  {
    icon: Sparkles,
    name: 'MVP Subscription',
    phase: 'Phase 2',
    price: '₹4,999',
    period: 'per month, per campus',
    desc: 'Full platform for all hostels and canteens. AI predictions, procurement guidance, and sustainability reporting.',
    features: [
      'Unlimited hostels & canteens on campus',
      'AI predictive consumption models',
      'Procurement suggestions & alerts',
      'Segregation guidance & compliance tracking',
      'Full sustainability dashboard + exportable reports',
      'Priority email & phone support',
    ],
    cta: 'Request a Demo',
    highlight: true,
    accent: 'forest',
  },
  {
    icon: Rocket,
    name: 'Multi-Campus',
    phase: 'Phase 3',
    price: 'Custom',
    period: 'for university networks',
    desc: 'For university systems managing multiple campuses. Centralized reporting, custom integrations, and dedicated success management.',
    features: [
      'Everything in MVP Subscription',
      'Cross-campus comparison & rollup dashboards',
      'Custom integrations with ERP / procurement systems',
      'Dedicated account manager & quarterly reviews',
      'On-site training for kitchen staff',
      'Custom sustainability report branding',
    ],
    cta: 'Talk to Sales',
    highlight: false,
    accent: 'sage',
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; gradient: string; ring: string }> = {
  forest: {
    border: 'border-forest-300',
    bg: 'bg-forest-50',
    text: 'text-forest-600',
    gradient: 'from-forest-500 to-forest-700',
    ring: 'ring-forest-400/50',
  },
  earth: {
    border: 'border-earth-300',
    bg: 'bg-earth-50',
    text: 'text-earth-600',
    gradient: 'from-earth-500 to-earth-700',
    ring: 'ring-earth-400/50',
  },
  sage: {
    border: 'border-sage-300',
    bg: 'bg-sage-50',
    text: 'text-sage-600',
    gradient: 'from-sage-500 to-sage-700',
    ring: 'ring-sage-400/50',
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-300/60 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
            <Rocket className="h-4 w-4" />
            Pricing & Deployment
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
            Start free.{' '}
            <span className="gradient-text">Scale when ready.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-800/70">
            Three phases designed to match your campus journey — from first
            pilot to university-wide deployment.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const a = accentMap[plan.accent];
            return (
              <div
                key={plan.name}
                className={`reveal reveal-delay-${i + 1} card-hover relative flex flex-col rounded-3xl border-2 p-8 ${
                  plan.highlight
                    ? `border-forest-400 bg-white shadow-2xl shadow-forest-700/15 ring-2 ${a.ring} lg:-mt-4 lg:mb-4`
                    : `border-sand-200 bg-white shadow-sm`
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Phase badge */}
                <div className="flex items-center justify-between">
                  <span className={`rounded-full ${a.bg} px-3 py-1 text-xs font-semibold ${a.text}`}>
                    {plan.phase}
                  </span>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.bg}`}>
                    <plan.icon className={`h-5.5 w-5.5 ${a.text}`} />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <p className="font-display text-4xl font-bold text-forest-900">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-sm text-forest-800/50">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${a.bg} mt-0.5`}>
                        <Check className={`h-3 w-3 ${a.text}`} strokeWidth={3} />
                      </div>
                      <span className="text-sm leading-relaxed text-forest-800/75">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? `btn-primary bg-gradient-to-br ${a.gradient} text-white shadow-lg`
                      : `border-2 border-sand-200 text-forest-800 hover:border-forest-300 hover:bg-forest-50`
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
