import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const logoLight = '/assets/logo-light.png';

const footerLinks = {
  services: [
    { label: 'BUY', href: '/services?tab=buy' },
    { label: 'BUILD', href: '/services?tab=build' },
    { label: 'AI COE', href: '/services/ai-coe' },
  ],
  industries: [
    { label: 'Insurance', href: '/industries' },
    { label: 'Supply Chain & Logistics', href: '/industries' },
    { label: 'Financial Services', href: '/industries' },
    { label: 'Manufacturing & Industrial', href: '/industries' },
    { label: 'Energy & Mining', href: '/industries' },
  ],
  resources: [
    { label: 'Whitepapers', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'Use Cases', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Success Stories', href: '/#success-stories' },
    { label: 'Contact', href: '/contact?source_page=Footer&cta=Contact' },
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
            <a href="/" className="inline-block mb-6">
              <img
                src={logoLight}
                alt="The Yellow Network"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              We help leaders cut through the vendor/LLM noise, choose what actually matters, and implement systems that intelligently create real business lift.
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
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
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

          <div>
            <h4 className="font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
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

          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
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

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
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
