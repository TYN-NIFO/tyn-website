import React, { useState, useRef, useEffect } from 'react';

export function Popover({ children, ...props }) {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

export function PopoverTrigger({ asChild = false, children, ...props }) {
  if (asChild) {
    return React.cloneElement(children, props);
  }
  return <div {...props}>{children}</div>;
}

export function PopoverContent({ 
  className = '', 
  align = 'center', 
  children, 
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'
  };

  return (
    <div
      ref={contentRef}
      className={`absolute z-50 w-48 p-2 bg-white border border-gray-200 rounded-lg shadow-lg ${alignmentClasses[align]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 