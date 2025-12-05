import React from 'react';
import { MapPin, Sprout } from 'lucide-react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const iconSize = size === 'sm' ? 24 : size === 'md' ? 32 : 48;
  const textSize = size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : 'text-4xl';

  return (
    <div className="flex items-center gap-2 select-none group">
      <div className="relative flex items-center justify-center">
        <MapPin 
          size={iconSize} 
          className="text-eco-primary fill-eco-light/50" 
          strokeWidth={1.5}
        />
        <Sprout 
          size={iconSize * 0.5} 
          className="absolute -top-0.5 text-eco-dark" 
          strokeWidth={2}
        />
      </div>
      <span className={`font-display font-bold text-eco-dark tracking-tight ${textSize}`}>
        EcoLink
      </span>
    </div>
  );
};