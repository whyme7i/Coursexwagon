import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const IgnacioStoryPage = () => {
  useEffect(() => {
    document.title = "Ignacio's Story | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <Link 
        to="/founders"
        className="inline-flex items-center text-gold hover:underline group mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Founders
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 heading-gradient">Ignacio's Story</h1>
        
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 relative">
            <div className="h-64 md:h-80 overflow-hidden rounded-xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=600&fit=crop" 
                alt="Ignacio Chamboko" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 items-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                <img 
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?w=100&h=100&fit=crop" 
                  alt="Ignacio Chamboko" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ignacio Chamboko</h2>
                <p className="text-muted-foreground">Founder & CEO, COURSE.XWAGON</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>
                Born into humble circumstances, Ignacio's early life was marked by challenges that would have broken most spirits. Growing up in a neighborhood where opportunities were scarce and the future often seemed bleak, he found his escape in books and knowledge.
              </p>
              
              <h3>The Beginning</h3>
              <p>
                With limited resources but unlimited determination, Ignacio began his journey by consuming every piece of knowledge he could find. Libraries became his sanctuary, and the internet his gateway to worlds beyond his physical reach. What started as a personal quest for growth soon turned into a vision: to create a platform that would make premium knowledge accessible to everyone.
              </p>
              
              <h3>The Struggle</h3>
              <p>
                The path wasn't easy. Working multiple jobs while building his vision, Ignacio faced countless rejections, financial struggles, and moments of doubt. There were nights when the only light came from his laptop screen as he coded, designed, and planned what would eventually become COURSE.XWAGON.
              </p>
              
              <h3>The Turning Point</h3>
              <p>
                The breakthrough came when Ignacio met Don Kyono, whose expertise in content curation complemented his technical skills perfectly. Together, they refined the concept of a digital vault for knowledge—a place where quality content would be carefully selected, organized, and made available to those hungry to learn.
              </p>
              
              <h3>The Vision Becomes Reality</h3>
              <p>
                Today, Ignacio leads COURSE.XWAGON with the same passion that fueled his initial journey. His story of transformation from consumer to creator, from seeker to provider, embodies the very essence of what the platform offers: the tools for self-transformation through knowledge.
              </p>
              
              <p>
                "Knowledge changed my life," Ignacio often says. "And through COURSE.XWAGON, I hope it changes yours too."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IgnacioStoryPage;