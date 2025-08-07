import React, { useState } from 'react';
import { FiShare2, FiLink, FiTwitter, FiLinkedin, FiFacebook, FiCheck } from 'react-icons/fi';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function ShareButton({ url, title, size = 'sm' }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const buttonSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const iconSize = size === 'sm' ? 16 : 18;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`${buttonSize} p-0 hover:bg-gray-100 transition-colors text-[#626262]`}
        >
          <FiShare2 size={iconSize} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2" align="end">
        <div className="space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 h-8"
            onClick={handleCopyLink}
          >
            {copied ? <FiCheck size={16} /> : <FiLink size={16} />}
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 h-8"
            onClick={() => window.open(shareLinks.twitter, '_blank')}
          >
            <FiTwitter size={16} />
            Twitter
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 h-8"
            onClick={() => window.open(shareLinks.linkedin, '_blank')}
          >
            <FiLinkedin size={16} />
            LinkedIn
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 h-8"
            onClick={() => window.open(shareLinks.facebook, '_blank')}
          >
            <FiFacebook size={16} />
            Facebook
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
} 