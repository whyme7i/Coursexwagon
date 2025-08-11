import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedSection from '@/components/home/FeaturedSection';
import CallToAction from '@/components/home/CallToAction';

function HomePage() {
  // Set page title on component mount
  useEffect(() => {
    document.title = "COURSE.XWAGON | The Vault of Mastery";
  }, []);

  // Scroll animations
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  
  return (
    <>
      {/* Subtle scroll indicator */}
      <motion.div 
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1], y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <span className="text-sm text-foreground/50 mb-2">Scroll to explore</span>
        <div className="w-1 h-10 bg-gradient-to-b from-gold/50 to-transparent rounded-full"></div>
      </motion.div>
      
      {/* Background elements */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-background to-background z-[-1]"
        style={{ opacity: bgOpacity }}
      ></motion.div>
      
      {/* Hero Section with Vault Door */}
      <HeroSection />
      
      {/* Category Showcase */}
      <CategorySection />
      
      {/* Featured Content Tabs */}
      <FeaturedSection />
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
}

export default HomePage;