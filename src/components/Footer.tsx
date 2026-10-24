import { Leaf, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Sustainability Impact', href: '#impact' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Mission', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Waste Management Guide', href: '#' },
    { label: 'Green Campus Toolkit', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-forest-100">
      <div className="absolute inset-0 noise-texture opacity-5" />
      <div className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-forest-700/20 blur-3xl" />

      {/* Top wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="h-[40px] w-full">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="#fbf9f5" opacity="0.03" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-400 to-forest-600 shadow-lg">
                <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">
                  waste<span className="text-forest-400">hero</span>
                </span>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-forest-400/70">
                  AI Waste Platform
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-200/60">
              An AI-driven waste management platform helping Indian colleges and
              universities reduce food waste, cut costs, and build verifiable
              sustainability — one campus at a time.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a href="mailto:hello@wastehero.in" className="flex items-center gap-2.5 text-sm text-forest-200/60 transition-colors hover:text-forest-300">
                <Mail className="h-4 w-4" />
                hello@wastehero.in
              </a>
              <span className="flex items-center gap-2.5 text-sm text-forest-200/60">
                <Phone className="h-4 w-4" />
                +91 80 4567 8900
              </span>
              <span className="flex items-center gap-2.5 text-sm text-forest-200/60">
                <MapPin className="h-4 w-4" />
                Bengaluru, India
              </span>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-forest-800/60 bg-forest-900/50 text-forest-300/60 transition-all hover:border-forest-500/50 hover:bg-forest-800/50 hover:text-forest-300"
                  aria-label="Social media link"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-forest-300">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-forest-200/55 transition-colors hover:text-forest-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-forest-800/50 pt-8 sm:flex-row">
          <p className="text-xs text-forest-300/40">
            © 2026 WasteHero Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-forest-300/40">
            <a href="#" className="transition-colors hover:text-forest-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-forest-300">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-forest-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
