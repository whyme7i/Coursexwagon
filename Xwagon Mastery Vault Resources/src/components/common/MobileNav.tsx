import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Headphones, GraduationCap, MessageCircle, Shield, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Hide on scroll down, show on scroll up
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, link: '/' },
    { name: 'Ebooks', icon: <BookOpen size={20} />, link: '/ebooks' },
    { name: 'Audio', icon: <Headphones size={20} />, link: '/audiobooks' },
    { name: 'Courses', icon: <GraduationCap size={20} />, link: '/courses' },
    { name: 'Chat', icon: <MessageCircle size={20} />, link: '/chatrooms' },
    { name: '18+', icon: <Shield size={20} />, link: '/adults' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg border-t border-border/30 z-40 md:hidden"
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? '0%' : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronUp size={24} className="text-black" />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-0">
        {navItems.map((item) => {
          const isActive = location.pathname === item.link || 
            (item.link !== '/' && location.pathname.startsWith(item.link));
          
          return (
            <Link
              key={item.name}
              to={item.link}
              className={`flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-gold' : 'text-foreground/70'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="w-1 h-1 bg-gold rounded-full mt-1"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNav;