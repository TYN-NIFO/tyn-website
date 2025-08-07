import React from 'react';

export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children, ...props }) {
  return (
    <div
      className={`grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children, ...props }) {
  return (
    <h4
      className={`leading-none ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}

export function CardDescription({ className = '', children, ...props }) {
  return (
    <p
      className={`text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div
      className={`px-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }) {
  return (
    <div
      className={`flex items-center px-6 pb-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 