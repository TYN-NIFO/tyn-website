import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function AuthorInfo({ author, showTitle = true, size = 'sm' }) {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarSize = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }[size];

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }[size];

  return (
    <div className="flex items-center gap-3">
      <Avatar className={avatarSize}>
        <AvatarImage src={author.avatar} alt={author.name} />
        {/* <AvatarFallback className="text-xs font-medium bg-gray-200 text-gray-700">
          {getInitials(author.name)}
        </AvatarFallback> */}
      </Avatar>
      <div className="flex flex-col">
        <span className={`font-medium ${textSize} text-[#333333]`}>
          {author.name}
        </span>
        {showTitle && author.title && (
          <span className="text-xs text-[#626262]">
            {author.title}
          </span>
        )}
      </div>
    </div>
  );
} 