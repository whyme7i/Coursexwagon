import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Ebooks', link: '/ebooks' },
    { name: 'Audiobooks', link: '/audiobooks' },
    { name: 'Courses', link: '/courses' },
    { name: 'Market Growth', link: '/market' },
    { name: 'Chatrooms', link: '/chatrooms' },
    { name: 'Founders', link: '/founders' },
    { name: 'Testimonials', link: '/testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <svg className="w-full h-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="240" fill="currentColor" className="text-midnight" />
              <path d="M180 170 L180 340 Q180 350, 190 350 L322 350 Q332 350, 332 340 L332 170 Q332 160, 322 160 L190 160 Q180 160, 180 170 Z" fill="none" stroke="currentColor" strokeWidth="12" className="text-gold" />
              <path d="M210 250 L302 250" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
              <path d="M256 190 L256 310" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-gold">
              CX
            </div>
          </div>
          <span className="font-montserrat font-bold text-xl tracking-tight">
            <span className="text-gold">COURSE</span>
            <span className="text-foreground">.</span>
            <span className="text-gold">X</span>
            <span className="text-foreground">WAGON</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-foreground/80 hover:text-gold transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link to="/adults" className="hidden md:flex">
            <Button variant="outline" size="sm" className="border-gold/50 text-gold flex items-center gap-1">
              <Shield size={16} />
              18+ Vault
            </Button>
          </Link>
          <Button className="bg-gold text-primary-foreground hover:bg-gold/90">
            Start The Journey
          </Button>

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-foreground/80 hover:text-gold transition-colors py-2 px-4 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/adults"
              className="flex items-center gap-2 text-gold py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Shield size={16} />
              18+ Vault
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;