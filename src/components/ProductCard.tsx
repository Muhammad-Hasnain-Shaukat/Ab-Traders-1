import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import type { Product } from '../types';
import { useQuote } from '../context/QuoteContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useQuote();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(
      {
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        categoryName: product.categoryName,
        material: product.material,
        image: product.images[0],
        capacity: product.capacities[0] || 'Standard',
        moq: product.moq,
        customBranding: false,
      },
      product.moq
    );
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-beige/80 p-3 sm:p-4 shadow-2xs hover:shadow-soft-hover hover:border-gold/40 transition-all duration-300">
      {/* Product Image */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-square bg-ivory/70 rounded-lg p-3 sm:p-4 overflow-hidden mb-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Material Badge */}
        <span className="absolute top-2 left-2 bg-ivory/90 backdrop-blur-xs text-[10px] font-semibold tracking-wider uppercase text-charcoal-700 px-2 py-0.5 rounded border border-beige">
          {product.material}
        </span>
      </Link>

      {/* Category & Name */}
      <div className="flex-1 flex flex-col mb-3">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-luxury text-charcoal-400 font-medium mb-1">
          {product.categoryName}
        </p>
        <Link
          to={`/product/${product.slug}`}
          className="text-xs sm:text-sm font-semibold text-charcoal group-hover:text-gold-dark transition-colors line-clamp-2 leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
        >
          {product.name}
        </Link>

        {/* Capacity Tags */}
        <div className="mt-2 flex flex-wrap gap-1 items-center">
          <span className="text-[11px] text-charcoal-400">Sizes:</span>
          {product.capacities.slice(0, 3).map((cap) => (
            <span
              key={cap}
              className="text-[10px] font-medium bg-ivory px-1.5 py-0.5 rounded border border-beige/60 text-charcoal-700"
            >
              {cap}
            </span>
          ))}
          {product.capacities.length > 3 && (
            <span className="text-[10px] text-charcoal-400">+{product.capacities.length - 3}</span>
          )}
        </div>

        {/* Wholesale Pricing Status & MOQ */}
        <div className="mt-2.5 pt-2 border-t border-beige/50 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-gold-dark">Request pricing</span>
          <span className="text-charcoal-400">MOQ: {product.moq.toLocaleString()} pcs</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2 pt-1">
        <Link
          to={`/product/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-medium text-charcoal bg-beige/45 hover:bg-beige py-1.5 sm:py-2 px-2 rounded-md transition-colors text-center leading-none whitespace-nowrap"
        >
          <Eye className="w-3 h-3 text-charcoal-600 shrink-0" />
          <span>Details</span>
        </Link>

        <button
          onClick={handleQuickAdd}
          type="button"
          className="w-full inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-medium text-ivory bg-charcoal hover:bg-charcoal-800 py-1.5 sm:py-2 px-2 rounded-md transition-colors shadow-2xs active:scale-[0.98] leading-none whitespace-nowrap"
        >
          <ShoppingBag className="w-3 h-3 text-gold shrink-0" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
