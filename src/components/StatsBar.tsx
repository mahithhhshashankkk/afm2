import { TrendingDown, IndianRupee, Leaf, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: '40%',
    label: 'Less Food Waste',
    sublabel: 'Average within 3 months',
    color: 'forest',
  },
  {
    icon: IndianRupee,
    value: '₹3.2L',
    label: 'Annual Savings',
    sublabel: 'Per 500-resident campus',
    color: 'earth',
  },
  {
    icon: Leaf,
    value: '1.8T',
    label: 'CO₂ Prevented',
    sublabel: 'Per semester, per hostel',
    color: 'sage',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Residents Supported',
    sublabel: 'Minimum campus size',
    color: 'moss',
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  forest: { bg: 'bg-forest-50', text: 'text-forest-600', ring: 'ring-forest-200' },
  earth: { bg: 'bg-earth-50', text: 'text-earth-600', ring: 'ring-earth-200' },
  sage: { bg: 'bg-sage-50', text: 'text-sage-600', ring: 'ring-sage-200' },
  moss: { bg: 'bg-moss-50', text: 'text-moss-600', ring: 'ring-moss-200' },
};

export default function StatsBar() {
  return (
    <section className="relative -mt-2 bg-sand-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color];
            return (
              <div
                key={stat.label}
                className={`card-hover group relative overflow-hidden rounded-3xl border border-sand-200/70 bg-white p-6 shadow-sm ring-1 ${c.ring}/40 lg:p-7`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.bg} transition-transform group-hover:scale-110`}>
                  <stat.icon className={`h-6 w-6 ${c.text}`} />
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-forest-900 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-forest-800">{stat.label}</p>
                <p className="text-xs text-forest-800/50">{stat.sublabel}</p>
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 ${c.bg.replace('-50', '-400')} transition-all duration-500 group-hover:w-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
