import Image from 'next/image';

const nifoLogo = '/assets/nifo-logo.png';

interface NifoInlineLogoProps {
  className?: string;
  invert?: boolean;
}

export const NifoInlineLogo = ({ className = 'h-6', invert = false }: NifoInlineLogoProps) => (
  <Image
    src={nifoLogo}
    alt="NiFo"
    width={80}
    height={24}
    className={`inline-block align-baseline ${invert ? 'brightness-0 invert' : ''} ${className}`}
  />
);
