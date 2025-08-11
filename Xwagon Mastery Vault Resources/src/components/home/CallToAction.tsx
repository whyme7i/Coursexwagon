import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative rounded-xl overflow-hidden">
          {/* Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-vault-blue to-midnight opacity-80 z-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1456428746267-a1756408f782?w=1200&h=600&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay'
            }}
          ></div>
          
          {/* Gold accent border */}
          <div className="absolute inset-0 border-2 border-gold/20 rounded-xl z-20 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-30 py-16 px-8 md:py-24 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-6 heading-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Start Your Journey to Mastery Today
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Unlock your potential with premium content designed to help you master new skills, 
                transform your mindset, and achieve success in all aspects of life.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/ebooks">
                  <Button size="lg" className="bg-gold text-primary-foreground hover:bg-gold/90 group">
                    Explore The Vault
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link to="/market">
                  <Button size="lg" variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                    View Market Growth
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;