import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoundersPage = () => {
  useEffect(() => {
    document.title = "Founders | COURSE.XWAGON";
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="container py-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 heading-gradient"
      >
        Meet Our Founders
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-foreground/80 mb-12 max-w-3xl"
      >
        COURSE.XWAGON was created by two visionaries who saw a need for a centralized knowledge vault
        that could help people master everything. Meet the minds behind the movement.
      </motion.p>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
      >
        {/* Founder 1 */}
        <motion.div 
          variants={itemVariants}
          className="bg-card rounded-xl overflow-hidden border border-border/40 shadow-lg hover:shadow-gold/10 transition-shadow"
        >
          <div className="h-64 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop" 
              alt="Founder Avatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-white/80 text-sm">Founder & CEO</p>
              <h3 className="text-white text-2xl font-bold">Ignacio Chamboko</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?w=80&h=80&fit=crop" 
                  alt="Mikey Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Anime Avatar</p>
                <p className="font-medium">"Mikey" (Tokyo Revengers)</p>
              </div>
            </div>
            <p className="text-foreground/70 mb-6">
              Ignacio's journey from humble beginnings to digital entrepreneur is one of perseverance
              and vision. His mission is to make premium knowledge accessible to everyone.
            </p>
            <Link 
              to="/ignacio-story"
              className="inline-flex items-center text-gold hover:underline group"
            >
              Read Story <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Founder 2 */}
        <motion.div 
          variants={itemVariants}
          className="bg-card rounded-xl overflow-hidden border border-border/40 shadow-lg hover:shadow-gold/10 transition-shadow"
        >
          <div className="h-64 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=400&fit=crop" 
              alt="Founder Avatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-white/80 text-sm">Co-Founder & CEO</p>
              <h3 className="text-white text-2xl font-bold">Don Kyono</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop" 
                  alt="Dragon Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Anime Avatar</p>
                <p className="font-medium">"Dragon" (Tokyo Revengers)</p>
              </div>
            </div>
            <p className="text-foreground/70 mb-6">
              Don's expertise in content curation and business development has been instrumental
              in creating the vault of knowledge that is COURSE.XWAGON.
            </p>
            <Link 
              to="/don-story"
              className="inline-flex items-center text-gold hover:underline group"
            >
              Read Story <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Together, Ignacio and Don are on a mission to revolutionize how people learn and grow online.
          Their combined expertise and passion have created a platform unlike any other.
        </p>
        <Link 
          to="/about"
          className="inline-flex items-center text-gold hover:underline group"
        >
          Learn more about our company <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FoundersPage;