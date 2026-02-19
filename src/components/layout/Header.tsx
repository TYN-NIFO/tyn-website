import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logoDark = '/assets/logo-dark.png';
const logoLight = '/assets/logo-light.png';

interface MenuItem {
  title: string;
  description: string;
  href: string;
  logo?: string;
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: {
    title: string;
    items: MenuItem[];
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'Services',
    megaMenu: [
      {
        title: 'Our Services',
        items: [
          { title: 'BUILD', description: 'Production-Grade AI Systems — Speed, control, and differentiation', href: '/services?tab=build' },
          { title: 'BUY', description: 'Ecosystem-Led Solution Selection — Speed-to-value with right-fit solutions', href: '/services?tab=buy' },
          { title: 'AI COE', description: 'Build the Enterprise Muscle — Scale AI beyond one team', href: '/services/ai-coe' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Solutions',
    href: '/ai-solutions',
  },

  {
    label: 'Accelerators',
    megaMenu: [
      {
        title: 'Programs',
        items: [
          { title: 'NiFo', description: 'The accelerator behind execution', href: '/accelerators/nifo', logo: '/assets/nifo-logo.png' },
          { title: 'yZone', description: 'Where AI talent turns into execution-ready teams', href: '/accelerators/yzone', logo: '/assets/yzone-logo.png' },
          { title: 'Ynfinity', description: 'Powering innovation through convergence of minds', href: '/accelerators/ynfinity', logo: '/assets/ynfinity-logo.png' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    megaMenu: [
      {
        title: 'Learn',
        items: [
          { title: 'Whitepapers', description: 'In-depth research and insights', href: '#' },
          { title: 'Blog', description: 'Latest thoughts on enterprise AI', href: '#' },
          { title: 'Success Stories', description: 'Real impact across industries', href: '/#success-stories' },
        ],
      },
    ],
  },

  {
    label: 'Company',
    megaMenu: [
      {
        title: 'Company',
        items: [
          { title: 'About Us', description: 'Learn about The Yellow Network mission', href: '/about' },
          { title: 'Careers', description: 'Join us in shaping the future of AI', href: '/careers' },
          { title: 'Success Stories', description: 'Real impact across industries', href: '/#success-stories' },
        ],
      },
    ],
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Force solid navbar on specific pages
  const forceSolidNav = pathname === '/about' || pathname === '/careers' || pathname === '/contact';
  const isSolid = isScrolled || forceSolidNav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid
        ? 'bg-background/95 backdrop-blur-md shadow-md'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={isSolid ? logoDark : logoLight}
              alt="The Yellow Network"
              className={isSolid ? 'h-12 md:h-14 w-auto transition-all' : 'h-16 md:h-20 w-auto transition-all'}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.href === pathname || item.megaMenu?.some(section => section.items.some(child => child.href === pathname));

              return (
                <div
                  key={item.label}
                  className="nav-item relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isSolid
                        ? isActive
                          ? 'text-tyn-blue font-bold hover:bg-muted'
                          : 'text-foreground hover:text-tyn-blue hover:bg-muted'
                        : isActive
                          ? 'text-accent font-bold'
                          : 'text-primary-foreground/90 hover:text-accent'
                        }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isSolid
                        ? isActive
                          ? 'text-tyn-blue font-bold hover:bg-muted'
                          : 'text-foreground hover:text-tyn-blue hover:bg-muted'
                        : isActive
                          ? 'text-accent font-bold'
                          : 'text-primary-foreground/90 hover:text-accent'
                        }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Mega Menu */}
                  {item.megaMenu && (
                    <div
                      className={`mega-menu absolute top-full left-0 pt-4 ${activeMenu === item.label ? 'opacity-100 visible translate-y-0' : ''
                        }`}
                    >
                      <div className="bg-card rounded-xl shadow-lg border border-border p-6 min-w-[400px]">
                        <div className="grid gap-6">
                          {item.megaMenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                {section.title}
                              </h3>
                              <div className="space-y-1">
                                {section.items.map((menuItem) => (
                                  <a
                                    key={menuItem.title}
                                    href={menuItem.href}
                                    className="block p-3 rounded-lg hover:bg-muted transition-colors group"
                                  >
                                    <div className="font-medium text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                                      {menuItem.logo ? (
                                        <img src={menuItem.logo} alt={menuItem.title} className="h-6 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all dark:brightness-100 dark:invert-0" />
                                      ) : (
                                        menuItem.title
                                      )}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                      {menuItem.description}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact?source_page=Header&cta=Contact-Us">
              <Button className="btn-hero">Contact Us</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border py-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label} className="px-4 py-2">
                {item.href ? (
                  <a href={item.href} className="block py-2 font-medium">
                    {item.label}
                  </a>
                ) : (
                  <div>
                    <div className="py-2 font-medium flex items-center justify-between">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.megaMenu?.map((section) =>
                        section.items.map((menuItem) => (
                          <a
                            key={menuItem.title}
                            href={menuItem.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {menuItem.title}
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <a href="/contact?source_page=Header&cta=Contact-Us">
                <Button className="btn-hero w-full">Contact Us</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
