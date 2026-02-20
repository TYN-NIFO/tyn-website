import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const logoLight = '/assets/logo-light.png';

const footerLinks = {
  services: [
    { label: 'BUY', href: '/services?tab=buy' },
    { label: 'BUILD', href: '/services?tab=build' },
    { label: 'AI COE', href: '/services?tab=ai-coe' },
  ],
  accelerators: [
    { label: 'Nifo', href: '/accelerators/nifo' },
    { label: 'Yzone', href: '/accelerators/yzone' },
    { label: 'Ynfinity', href: '/accelerators/ynfinity' },
  ],
  resources: [
    { label: 'Whitepapers', href: '/resources?tab=whitepapers' },
    { label: 'Blogs', href: '/resources?tab=blogs' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Success Stories', href: '/#success-stories' },
  ],
};

export const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container-main section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logoLight}
                alt="The Yellow Network"
                width={180}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              We help leaders cut through the AI noise, choose what actually matters, and implement systems that intelligently create real business lift.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/the-yellow-network/"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:innovation@theyellow.network"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-2">
            <h4 className="font-display font-semibold mb-4"><b>Services</b></h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <h4 className="font-display font-semibold mb-4"><b>Accelerators</b></h4>
            <ul className="space-y-3">
              {footerLinks.accelerators.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <h4 className="font-display font-semibold mb-4"><b>Ynsights</b></h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <h4 className="font-display font-semibold mb-4"><b>Company</b></h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-8 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>PSG Step, PSG College of Technology, Peelamedu, Coimbatore, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:innovation@theyellow.network" className="hover:text-accent transition-colors">
                innovation@theyellow.network
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+917358295305" className="hover:text-accent transition-colors">Schedule a Call</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} The Yellow Network. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
