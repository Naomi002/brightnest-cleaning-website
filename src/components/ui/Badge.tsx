import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'brand' | 'neutral' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  className,
  ...props
}) => {
  const variants = {
    brand: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    neutral: 'bg-slate-800 text-slate-300 border-slate-700',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border',
          variants[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </span>
  );
};
