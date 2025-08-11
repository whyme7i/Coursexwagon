import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VaultDoorProps {
  onOpenComplete?: () => void;
}

const VaultDoor = ({ onOpenComplete }: VaultDoorProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onOpenComplete) onOpenComplete();
    }, 2000); // Time after which vault door fully opens

    return () => clearTimeout(timer);
  }, [onOpenComplete]);

  // Vault door animation variants
  const doorVariants = {
    closed: { 
      rotateY: -90,
      opacity: 0.8
    },
    open: { 
      rotateY: 0,
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.33, 1, 0.68, 1],
        delay: 0.5
      }
    }
  };

  // Inner content variants
  const contentVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 1.8 // Show after door is mostly open
      }
    }
  };

  return (
    <div className="relative w-full min-h-[85vh] flex justify-center items-center overflow-hidden">
      {/* Vault frame - always visible */}
      <div className="absolute inset-0 border-8 border-gold/20 rounded-md m-8 z-10 pointer-events-none"></div>
      
      {/* Vault door */}
      <motion.div 
        className="w-full h-full bg-gradient-to-br from-card to-muted rounded-md p-8
                   shadow-[inset_0_0_30px_rgba(255,215,0,0.2)] relative z-20 overflow-hidden"
        initial="closed"
        animate="open"
        variants={doorVariants}
        style={{ transformOrigin: "left center", perspective: "1000px" }}
      >
        {/* Vault door details */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gold/20"></div>
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 rounded-full
                        bg-card border-4 border-gold flex items-center justify-center">
          <div className="w-6 h-6 bg-gold rounded-full"></div>
        </div>
        
        {/* Vault contents */}
        <motion.div
          className="w-full h-full flex flex-col items-center justify-center"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content will be added as children */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              <svg className="w-full h-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <circle cx="256" cy="256" r="240" fill="currentColor" className="text-midnight" />
                <path d="M180 170 L180 340 Q180 350, 190 350 L322 350 Q332 350, 332 340 L332 170 Q332 160, 322 160 L190 160 Q180 160, 180 170 Z" fill="none" stroke="currentColor" strokeWidth="12" className="text-gold" />
                <path d="M210 250 L302 250" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
                <path d="M256 190 L256 310" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-gold" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gold">
                CX
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight heading-gradient">
              The Vault of Mastery
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Start the journey. Master everything.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Vault door hinges */}
      <div className="absolute left-8 inset-y-0 z-30 flex flex-col justify-between py-16 pointer-events-none">
        <div className="w-6 h-16 bg-gold/30 rounded-md"></div>
        <div className="w-6 h-16 bg-gold/30 rounded-md"></div>
        <div className="w-6 h-16 bg-gold/30 rounded-md"></div>
      </div>
    </div>
  );
};

export default VaultDoor;