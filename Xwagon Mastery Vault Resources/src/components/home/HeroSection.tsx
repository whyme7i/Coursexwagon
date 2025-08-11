import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VaultDoor from './VaultDoor';

const HeroSection = () => {
  const [vaultOpen, setVaultOpen] = useState(false);
  
  // Handle vault door animation completion
  const handleVaultOpen = () => {
    setVaultOpen(true);
  };
  
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="container">
        <VaultDoor onOpenComplete={handleVaultOpen} />
        
        {/* Content that appears after vault opens */}
        {vaultOpen && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ebooks">
                <Button 
                  size="lg" 
                  className="bg-gold text-primary-foreground hover:bg-gold/90 group"
                >
                  Start The Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gold/50 text-gold hover:bg-gold/10"
                >
                  Browse Courses
                </Button>
              </Link>
            </div>
            
            <motion.div 
              className="flex justify-center items-center gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-center px-4">
                <p className="text-3xl font-bold text-gold mb-1">500+</p>
                <p className="text-sm text-foreground/70">Premium Ebooks</p>
              </div>
              
              <div className="h-10 w-px bg-border"></div>
              
              <div className="text-center px-4">
                <p className="text-3xl font-bold text-gold mb-1">200+</p>
                <p className="text-sm text-foreground/70">Audiobooks</p>
              </div>
              
              <div className="h-10 w-px bg-border"></div>
              
              <div className="text-center px-4">
                <p className="text-3xl font-bold text-gold mb-1">50+</p>
                <p className="text-sm text-foreground/70">Expert Courses</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;