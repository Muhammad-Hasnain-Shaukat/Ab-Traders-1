import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';

export const ClosingCTA: React.FC = () => {
  return (
    <section className="bg-charcoal text-ivory py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle gold decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Label */}
          <p className="text-[11px] uppercase tracking-luxury text-gold font-medium mb-3">
            Wholesale Packaging Sourcing
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight leading-tight mb-4">
            Let’s find your packaging.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-charcoal-200 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
            Share your project requirements, quantities, and branding goals. Receive tailored wholesale quotation and technical advice from our packaging specialists.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal-900 text-sm font-semibold px-7 py-3.5 rounded-md tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Get Bulk Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923008472910?text=Hello%20AB%20TRADERS,%20I%20am%20enquiring%20about%20wholesale%20packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal-800 hover:bg-charcoal-700 text-ivory border border-charcoal-600 text-sm font-semibold px-6 py-3.5 rounded-md tracking-wide transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-charcoal-400">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-gold" />
              <span>+92 300 8472910</span>
            </span>
            <span>•</span>
            <span>Direct Wholesale Desk</span>
            <span>•</span>
            <span>Pakistan Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
