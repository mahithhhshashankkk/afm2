import { useState } from 'react';
import {
  Building2,
  ChefHat,
  Leaf,
  GraduationCap,
  Check,
  ArrowRight,
} from 'lucide-react';

const stakeholders = [
  {
    id: 'admin',
    icon: Building2,
    role: 'Campus Administrators',
    title: 'Sustainability that earns accreditation',
    desc: 'Generate compliance-ready reports for NAAC, NIRF green rankings, and environmental audits — without chasing down data from every canteen manager.',
    benefits: [
      'One-click sustainability reports for accreditation bodies',
      'Track progress toward carbon-neutral campus goals',
      'Compare waste performance across hostels and canteens',
      'Demonstrate ESG commitment to stakeholders and funders',
    ],
    image: 'campus2',
  },
  {
    id: 'manager',
    icon: ChefHat,
    role: 'Hostel & Canteen Managers',
    title: 'Stop guessing. Start saving.',
    desc: 'Know exactly how much to cook and order each day. The AI does the math — you just follow the suggestions and watch your waste bills shrink.',
    benefits: [
      'Daily procurement quantities recommended by AI',
      'Log waste in under 60 seconds after each meal',
      'Spot which meals or days generate the most waste',
      'Reduce kitchen stress with predictable demand planning',
    ],
    image: 'kitchen',
  },
  {
    id: 'eco',
    icon: Leaf,
    role: 'Eco Club & Faculty',
    title: 'Turn data into campus action',
    desc: 'Use real dashboards to run awareness campaigns, measure their impact, and engage students with visible, tangible sustainability progress.',
    benefits: [
      'Real-time data for awareness campaigns and events',
      'Track before-and-after impact of student initiatives',
      'Gamify waste reduction with inter-hostel competitions',
      'Publish sustainability achievements with real numbers',
    ],
    image: 'segregation',
  },
  {
    id: 'student',
    icon: GraduationCap,
    role: 'Students & Residents',
    title: 'A greener campus, powered by you',
    desc: 'See the direct environmental impact of your hostel and contribute to a culture of mindful consumption — without changing your routine.',
    benefits: [
      'Visible impact boards in common areas build awareness',
      'Inter-hostel competitions make sustainability engaging',
      'Feedback on plate waste helps the kitchen improve menus',
      'A campus culture that values every meal served',
    ],
    image: 'campus4',
  },
];

const imageMap: Record<string, string> = {
  campus2: 'https://images.pexels.com/photos/37145891/pexels-photo-37145891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen: 'https://images.pexels.com/photos/17318176/pexels-photo-17318176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  segregation: 'https://images.pexels.com/photos/17869493/pexels-photo-17869493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  campus4: 'https://images.pexels.com/photos/5147362/pexels-photo-5147362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export default function Stakeholders() {
  const [active, setActive] = useState(0);
  const current = stakeholders[active];

  return (
    <section id="stakeholders" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-300/60 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
            <Users className="h-4 w-4" />
            Built For Everyone On Campus
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
            One platform.{' '}
            <span className="gradient-text">Every stakeholder</span>{' '}
            wins.
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal reveal-delay-1 mt-12 flex flex-wrap justify-center gap-3">
          {stakeholders.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'bg-gradient-to-br from-forest-500 to-forest-700 text-white shadow-lg shadow-forest-700/25'
                  : 'border border-sand-200 bg-white text-forest-800/70 hover:border-forest-300 hover:bg-forest-50'
              }`}
            >
              <s.icon className="h-4.5 w-4.5" />
              {s.role}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="reveal reveal-delay-2 mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-sand-200 shadow-xl">
            <div className="relative aspect-[4/3]">
              <img
                key={current.id}
                src={imageMap[current.image]}
                alt={current.role}
                className="h-full w-full object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <current.icon className="h-4 w-4 text-forest-600" />
                  <span className="text-sm font-semibold text-forest-800">{current.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text + benefits */}
          <div key={current.id} className="animate-fade-in">
            <h3 className="font-display text-2xl font-bold leading-tight text-forest-900 lg:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-forest-800/70">
              {current.desc}
            </p>

            <ul className="mt-6 space-y-3">
              {current.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-forest-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed text-forest-800/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 transition-colors hover:text-forest-800"
            >
              See how it works for your campus
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
