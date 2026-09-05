import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CategoryInfo } from '../data/products';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group flex flex-col bg-white rounded-xl p-3 sm:p-4 border border-beige/80 shadow-2xs hover:shadow-soft-hover hover:border-gold/40 transition-all duration-300 text-center relative overflow-hidden"
    >
      {/* Product Image Stage */}
      <div className="w-full aspect-[4/5] sm:aspect-square bg-ivory/60 rounded-lg flex items-center justify-center p-2 mb-3 overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain drop-shadow-xs"
        />
      </div>

      {/* Category Name */}
      <h3 className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-gold-dark transition-colors line-clamp-1 mb-1">
        {category.name}
      </h3>

      {/* Explore text link with arrow */}
      <div className="mt-auto inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-charcoal-400 group-hover:text-gold transition-colors">
        <span>Explore</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-gold" />
      </div>
    </Link>
  );
};
