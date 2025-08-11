import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  ShoppingBag, 
  Mail,
  ChevronRight,
  MessageCircle,
  Share2,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  // Define social links
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/feed/' 
    },
    { 
      name: 'TikTok', 
      icon: <Share2 className="w-5 h-5" />, 
      url: 'https://www.tiktok.com/@course.xwagon' 
    },
    { 
      name: 'Reddit', 
      icon: <Share2 className="w-5 h-5" />, 
      url: 'https://share.google/9HsRYn5RGCD50asZ1' 
    },
    { 
      name: 'Telegram', 
      icon: <MessageCircle className="w-5 h-5" />, 
      url: 'https://t.me/+AhEmrpuZzsE3NTdk' 
    },
    { 
      name: 'Marketplace', 
      icon: <ShoppingBag className="w-5 h-5" />, 
      url: 'https://masteredpath.gumroad.com' 
    },
  ];

  // Define footer links
  const footerLinks = [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms and Conditions', link: '/terms' },
    { name: 'Refund Policy', link: '/refund' },
    { name: 'DMCA / Copyright', link: '/dmca' },
    { name: 'About Us', link: '/about' },
    { name: 'FAQ / Help', link: '/faq' },
    { name: 'Adult Disclaimer', link: '/adult-disclaimer' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <footer className="bg-card mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding Section */}
          <div className="flex flex-col gap-4">
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
            <p className="text-muted-foreground mt-2">
              Start The Journey. Master Everything.
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-gold transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ebooks" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Ebooks Collection
                </Link>
              </li>
              <li>
                <Link to="/audiobooks" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Audiobooks Library
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Premium Courses
                </Link>
              </li>
              <li>
                <Link to="/market" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/chatrooms" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Community Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link to={link.link} className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <Link to={link.link} className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:coursexwagon@gmail.com" 
                  className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1 mt-4"
                >
                  <Mail className="w-4 h-4" />
                  coursexwagon@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://masteredpath.gumroad.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1 mt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Our Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} COURSE.XWAGON. All rights reserved. 
            Created by Ignacio Chamboko & Don Kyono.
          </p>
          <p className="text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            {" • "}
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            {" • "}
            <Link to="/adult-disclaimer" className="hover:text-gold transition-colors">Adult Content</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;