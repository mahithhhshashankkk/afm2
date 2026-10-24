import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Within three weeks of deploying WasteHero, our canteen reduced rice wastage by 35%. The AI procurement tips are remarkably accurate.',
    name: 'Dr. Anjali Mehta',
    role: 'Hostel Warden, IIT Bombay',
    initials: 'AM',
  },
  {
    quote:
      'We finally have sustainability data we can submit for NAAC accreditation. The dashboards are beautiful and the reports export in one click.',
    name: 'Professor Rajesh Kumar',
    role: 'Sustainability Officer, BITS Pilani',
    initials: 'RK',
  },
  {
    quote:
      'My kitchen staff learned the app in five minutes. No complicated hardware, no downtime. It just works on their phones.',
    name: 'Suresh Nair',
    role: 'Canteen Manager, Christ University',
    initials: 'SN',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber2-400/40 bg-amber2-400/10 px-4 py-1.5 text-sm font-medium text-amber2-600">
            <Star className="h-4 w-4 fill-amber2-400 text-amber2-400" />
            Early Adopter Voices
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-forest-900 text-balance lg:text-5xl">
            Trusted by campus leaders{' '}
            <span className="gradient-text">across India</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} card-hover relative flex flex-col rounded-3xl border border-sand-200/70 bg-white p-7 shadow-sm`}
            >
              <Quote className="h-8 w-8 text-forest-200" fill="currentColor" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-forest-800/75">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-sand-200 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-forest-500 to-forest-700 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-forest-900">{t.name}</p>
                  <p className="text-sm text-forest-800/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
