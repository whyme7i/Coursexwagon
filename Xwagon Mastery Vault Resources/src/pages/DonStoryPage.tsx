import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonStoryPage = () => {
  useEffect(() => {
    document.title = "Don's Story | COURSE.XWAGON";
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
        <h1 className="text-4xl font-bold mb-6 heading-gradient">Don's Story</h1>
        
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 relative">
            <div className="h-64 md:h-80 overflow-hidden rounded-xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=600&fit=crop" 
                alt="Don Kyono" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 items-center mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop" 
                  alt="Don Kyono" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Don Kyono</h2>
                <p className="text-muted-foreground">Co-Founder & CEO, COURSE.XWAGON</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>
                Don Kyono's journey to becoming the content visionary behind COURSE.XWAGON is a testament to the power of resilience and self-education. His story begins in an environment where traditional success seemed out of reach, but his hunger for knowledge knew no bounds.
              </p>
              
              <h3>Early Years</h3>
              <p>
                Growing up with limited resources, Don discovered early on that books and digital content could transport him beyond his circumstances. While others saw barriers, he saw doorways to new possibilities through learning. This perspective would later become the foundation of his business philosophy.
              </p>
              
              <h3>The Search for Meaning</h3>
              <p>
                After years of consuming content across various platforms, Don became frustrated with the scattered nature of quality educational materials online. "Why should someone have to search through dozens of sites to find what they need?" he would ask. This frustration sparked the idea that would eventually lead to COURSE.XWAGON.
              </p>
              
              <h3>Finding Purpose</h3>
              <p>
                The turning point came when Don met Ignacio Chamboko. Their shared vision of creating a centralized knowledge vault resonated deeply with both of them. While Ignacio brought technical expertise, Don contributed his exceptional eye for quality content and understanding of what truly helps people transform their lives.
              </p>
              
              <h3>Building the Vault</h3>
              <p>
                As Co-Founder, Don has been instrumental in curating the vast library of ebooks, audiobooks, and courses that make COURSE.XWAGON unique. His insistence on quality over quantity ensures that every piece of content on the platform delivers genuine value.
              </p>
              
              <h3>The Mission Continues</h3>
              <p>
                Today, Don remains deeply involved in the day-to-day content curation of COURSE.XWAGON, personally reviewing materials to ensure they meet the platform's high standards. His commitment to providing life-changing knowledge remains unwavering.
              </p>
              
              <p>
                "What we're building isn't just a website," Don often says. "It's a movement—a community of people committed to mastering their lives through knowledge."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonStoryPage;