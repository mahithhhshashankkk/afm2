import { ArrowRight, Mail, Phone, MapPin, Leaf } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-20 right-1/4 h-80 w-80 animate-blob bg-forest-300/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 animate-blob bg-sage-300/30 blur-3xl [animation-delay:4s]" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-forest-200/60 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 p-10 shadow-2xl shadow-forest-900/20 lg:p-16">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute right-1/3 top-1/2 h-2 w-2 animate-float rounded-full bg-forest-300/40" />
          <div className="absolute left-1/4 top-1/4 h-3 w-3 animate-float-slow rounded-full bg-sage-300/30" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-forest-100 backdrop-blur-sm">
              <Leaf className="h-4 w-4" />
              Ready to Deploy
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-white text-balance lg:text-5xl">
              Start your free pilot this week
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-forest-100/80">
              Join campuses across India cutting waste, saving costs, and building
              a greener future. No hardware. No commitment. Just results.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@wastehero.in"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-forest-700 shadow-xl"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:pilot@wastehero.in"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Start Free Pilot
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-forest-100/70">
              <a href="mailto:hello@wastehero.in" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                hello@wastehero.in
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 80 4567 8900
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bengaluru, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
