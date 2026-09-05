import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { IndustryInfo } from '../data/products';

interface IndustryCardProps {
  industry: IndustryInfo;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <Link
      to={`/shop?industry=${industry.id}`}
      className="group relative flex flex-col bg-white rounded-xl border border-beige/80 overflow-hidden shadow-2xs hover:shadow-soft-hover hover:border-gold/40 transition-all duration-300"
    >
      {/* Industry Photography */}
      <div className="aspect-[4/3] bg-beige/30 overflow-hidden relative">
        <img
          src={industry.image}
          alt={`Packaging solutions for ${industry.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-sm sm:text-base font-semibold text-charcoal group-hover:text-gold-dark transition-colors">
            {industry.name}
          </h4>
          <p className="text-[11px] text-charcoal-400 mt-0.5 line-clamp-1">
            {industry.tagline}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-beige/60 flex items-center justify-between text-xs font-semibold text-charcoal-600 group-hover:text-gold transition-colors">
          <span>View packaging</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-gold" />
        </div>
      </div>
    </Link>
  );
};
