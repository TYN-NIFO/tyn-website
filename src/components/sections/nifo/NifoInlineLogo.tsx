const nifoLogo = '/assets/nifo-logo.png';

interface NifoInlineLogoProps {
  className?: string;
  invert?: boolean;
}

export const NifoInlineLogo = ({ className = 'h-6', invert = false }: NifoInlineLogoProps) => (
  <img
    src={nifoLogo}
    alt="NiFo"
    className={`inline-block align-baseline ${invert ? 'brightness-0 invert' : ''} ${className}`}
  />
);
