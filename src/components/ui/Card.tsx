import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = false,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-slate-900/80 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm',
          hoverEffect && 'transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:shadow-xl hover:shadow-brand-500/5',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
