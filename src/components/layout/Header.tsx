'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    href: '/services?tab=buy',
    megaMenu: [
      {
        title: 'Our Services',
        items: [
          { title: 'BUY', description: 'Ecosystem Led Solution Selection: Speed to value with right fit solutions', href: '/services?tab=buy' },
          { title: 'BUILD', description: 'Production Grade AI Systems: Speed, control, and differentiation', href: '/services?tab=build' },
          { title: 'AI COE', description: 'Build the Enterprise Muscle: Scale AI beyond one team', href: '/services?tab=ai-coe' },
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
    label: 'Ynsights',
    megaMenu: [
      {
        title: 'Learn',
        items: [
          { title: 'Whitepapers', description: 'In-depth research and insights', href: '/resources?tab=whitepapers' },
          { title: 'Blog', description: 'Latest thoughts on enterprise AI', href: '/resources?tab=blogs' },
        ],
      },
    ],
  },

  {
    label: 'Company',
    href: '/about',
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
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Determine the base path of the clicked link (ignoring query params and hashes)
    const targetPath = href.split('?')[0].split('#')[0];

    // If the path matches the current path and there is no specific element hashtag
    if (targetPath === pathname && !href.includes('#')) {
      e.preventDefault(); // Prevent default link behavior if needed
      window.location.reload();
    }
  };

  // Force solid navbar on specific pages
  const forceSolidNav = pathname === '/about' || pathname === '/careers' || pathname === '/contact' || pathname === '/ynfinity-events' || pathname?.startsWith('/resources');
  const isSolid = isScrolled || forceSolidNav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initialize on mount
    handleScroll();

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
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={(e) => handleLinkClick(e, '/')}>
            <Image
              src={isSolid ? logoDark : logoLight}
              alt="The Yellow Network"
              width={180}
              height={56}
              className="h-12 md:h-14 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = (() => {
                if (pathname === '/') return false;
                if (item.href) {
                  const itemBase = item.href.split('?')[0].split('#')[0];
                  if (pathname === itemBase || (itemBase !== '/' && pathname.startsWith(itemBase))) {
                    return true;
                  }
                }
                if (item.megaMenu) {
                  return item.megaMenu.some(section =>
                    section.items.some(child => {
                      const childBase = child.href.split('?')[0].split('#')[0];
                      return childBase === pathname || (childBase !== '/' && pathname.startsWith(childBase));
                    })
                  );
                }
                return false;
              })();

              // Shared base: identical padding/size in every state — no negative margins
              // Active highlight is done via ring/shadow which doesn't affect layout
              const linkBase = 'flex items-center gap-1 text-sm font-medium rounded-lg transition-all duration-200 px-4 py-2';
              const solidDefault = 'text-foreground hover:text-tyn-blue hover:bg-muted';
              const solidActive = 'text-tyn-blue font-bold bg-background shadow-sm ring-1 ring-border/50';
              const heroDefault = 'text-primary-foreground/90 hover:text-accent';
              const heroActive = 'text-accent font-bold';

              const linkClass = `${linkBase} ${isSolid
                ? (isActive || activeMenu === item.label) ? solidActive : solidDefault
                : isActive ? heroActive : heroDefault
                }`;

              return (
                <div
                  key={item.label}
                  className="nav-item relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.href ? (
                    <Link href={item.href} className={linkClass} onClick={(e) => handleLinkClick(e, item.href!)}>
                      {item.label}
                      {item.megaMenu && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                      )}
                    </Link>
                  ) : (
                    <button className={linkClass}>
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
                              <div className="space-y-1">
                                {section.items.map((menuItem) => (
                                  <Link
                                    key={menuItem.title}
                                    href={menuItem.href}
                                    className="block p-3 rounded-lg hover:bg-muted transition-colors group"
                                    onClick={(e) => handleLinkClick(e, menuItem.href)}
                                  >
                                    <div className="font-medium text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                                      {menuItem.logo ? (
                                        <Image
                                          src={menuItem.logo}
                                          alt={menuItem.title}
                                          width={120}
                                          height={48}
                                          className={`w-auto object-contain transition-all 
                                            ${menuItem.title === 'yZone' ? 'h-12' : menuItem.title === 'Ynfinity' ? 'h-10' : 'h-7'}
                                          `}
                                        />
                                      ) : (
                                        menuItem.title
                                      )}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                      {menuItem.description}
                                    </div>
                                  </Link>
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
            <Link href="/contact?source_page=Header&cta=Contact-Us">
              <Button className="btn-hero">Contact Us</Button>
            </Link>
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
          <div className="lg:hidden bg-card border-t border-border py-4 animate-fade-in max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              const isItemActive = (() => {
                if (pathname === '/') return false;
                if (item.href) {
                  const itemBase = item.href.split('?')[0].split('#')[0];
                  return pathname === itemBase || (itemBase !== '/' && pathname.startsWith(itemBase));
                }
                if (item.megaMenu) {
                  return item.megaMenu.some(section =>
                    section.items.some(child => {
                      const childBase = child.href.split('?')[0].split('#')[0];
                      return childBase === pathname || (childBase !== '/' && pathname.startsWith(childBase));
                    })
                  );
                }
                return false;
              })();

              return (
                <div key={item.label} className="px-4 py-2">
                  {item.megaMenu ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setExpandedMobileMenu((prev) => (prev === item.label ? null : item.label))}
                        className={`flex items-center justify-between w-full py-2 font-medium text-left ${isItemActive ? 'text-tyn-blue font-bold' : ''
                          }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${expandedMobileMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedMobileMenu === item.label && (
                        <div className="pl-4 space-y-1 border-l-2 border-muted ml-1 mt-1">
                          {item.megaMenu.map((section) =>
                            section.items.map((menuItem) => {
                              const childBase = menuItem.href.split('?')[0].split('#')[0];
                              const isChildActive = pathname !== '/' && (childBase === pathname || (childBase !== '/' && pathname.startsWith(childBase)));

                              return (
                                <Link
                                  key={menuItem.title}
                                  href={menuItem.href}
                                  onClick={(e) => {
                                    closeMobileMenu();
                                    handleLinkClick(e, menuItem.href);
                                  }}
                                  className={`block py-2.5 text-sm hover:text-foreground ${isChildActive ? 'text-tyn-blue font-bold' : 'text-muted-foreground'
                                    }`}
                                >
                                  {menuItem.title}
                                </Link>
                              )
                            })
                          )}
                        </div>
                      )}
                    </div>
                  ) : item.href ? (
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        closeMobileMenu();
                        handleLinkClick(e, item.href!);
                      }}
                      className={`flex items-center justify-between py-2 font-medium ${isItemActive ? 'text-tyn-blue font-bold' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </div>
              )
            })}
            <div className="px-4 pt-4">
              <Link href="/contact?source_page=Header&cta=Contact-Us" onClick={closeMobileMenu}>
                <Button className="btn-hero w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
