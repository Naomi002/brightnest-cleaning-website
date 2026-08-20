import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
  };

  return (
    <div
      className={twMerge(clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className))}
      {...props}
    >
      {children}
    </div>
  );
};
