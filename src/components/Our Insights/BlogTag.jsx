import React from 'react';

export function BlogTag({ tag, size = 'sm' }) {
  return (
    <span 
      className={`inline-block px-2 py-1 rounded-full transition-colors ${
        size === 'sm' ? 'text-xs' : 'text-sm'
      }`}
      style={{
        backgroundColor: '#E3F2FD',
        color: '#1976D2'
      }}
    >
      {tag}
    </span>
  );
} 