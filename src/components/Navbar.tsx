import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'For You', href: '#stakeholders' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_4px_24px_-8px_rgba(30,63,28,0.15)] py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 shadow-lg shadow-forest-700/20 transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-xl border border-white/20" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-forest-800">
              waste<span className="text-forest-500">hero</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-sage-500">
              AI Waste Platform
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-forest-800/80 transition-colors hover:text-forest-700 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-forest-500 after:transition-all hover:after:w-2/3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="text-sm font-semibold text-forest-700 transition-colors hover:text-forest-500"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-forest-700/25"
          >
            Request Demo
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-forest-800 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl border border-forest-200/60 bg-white/95 p-4 shadow-xl backdrop-blur-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Request Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
