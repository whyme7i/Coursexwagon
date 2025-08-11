import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  text: string;
  product: string;
}

const TestimonialsPage = () => {
  useEffect(() => {
    document.title = "Testimonials | COURSE.XWAGON";
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      role: "Entrepreneur",
      rating: 5,
      text: "COURSE.XWAGON has been a game-changer for me. The business courses have practical strategies that I've implemented in my startup, resulting in 40% growth within 3 months.",
      product: "Business Bootcamp Pro"
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      role: "Marketing Specialist",
      rating: 5,
      text: "I've purchased dozens of marketing ebooks, but the collection here is truly exceptional. The actionable advice and step-by-step guides have transformed my approach to digital campaigns.",
      product: "Digital Marketing Mastery ebook"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      role: "Personal Development Coach",
      rating: 4,
      text: "The mindset audiobooks have been perfect for my daily commute. I've noticed a significant shift in my thinking and approach to challenges. Highly recommend the motivation collection.",
      product: "Ultimate Mindset Audiobook Collection"
    },
    {
      id: 4,
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      role: "Student",
      rating: 5,
      text: "As a student on a budget, I appreciate that COURSE.XWAGON offers both free and premium content. The free resources are valuable, and the premium content has been worth every penny for my career development.",
      product: "Career Accelerator Bundle"
    },
    {
      id: 5,
      name: "David Okafor",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      role: "Software Developer",
      rating: 4,
      text: "The technical courses are comprehensive and up-to-date. I've tried many online learning platforms, but the structure and depth of content here is superior. The community chat is also incredibly helpful.",
      product: "Full-Stack Development Masterclass"
    },
    {
      id: 6,
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      role: "Content Creator",
      rating: 5,
      text: "The resources on content creation and audience building have helped me grow my YouTube channel from 1,000 to 50,000 subscribers in just 6 months. The strategies actually work!",
      product: "Content Creator Blueprint"
    },
    {
      id: 7,
      name: "Thomas Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      role: "Fitness Coach",
      rating: 3,
      text: "Good content overall, though I'd like to see more fitness-related resources added to the library. The business aspects of the fitness courses were excellent and helped me scale my coaching business.",
      product: "Business of Fitness course"
    },
    {
      id: 8,
      name: "Amara Okonkwo",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      role: "Finance Analyst",
      rating: 5,
      text: "The investment ebooks have provided insights I haven't found elsewhere. I've applied several strategies from the Advanced Investing series and seen significant returns on my portfolio.",
      product: "Advanced Investing Strategies ebook"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-6 heading-gradient">Customer Testimonials</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Discover what our community members have to say about their experiences with COURSE.XWAGON's
          ebooks, audiobooks, and courses.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-card border border-border/40 rounded-xl p-6 shadow-lg hover:shadow-gold/5 transition-shadow relative"
          >
            <Quote className="absolute top-4 right-4 h-6 w-6 text-gold/20" />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold' : 'text-muted-foreground/30'}`} 
                  fill={i < testimonial.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            
            <p className="text-foreground/80 mb-4">"{testimonial.text}"</p>
            
            <div className="bg-primary/5 rounded-lg p-2 text-sm">
              <span className="text-gold font-medium">Product: </span>
              <span className="text-foreground/70">{testimonial.product}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Ready to start your journey?</h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-6">
          Join thousands of satisfied customers who have transformed their lives
          with our carefully curated collection of knowledge resources.
        </p>
        <a 
          href="/ebooks"
          className="inline-flex items-center gap-2 bg-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-gold/80 transition-colors"
        >
          Start Exploring
        </a>
      </motion.div>
    </div>
  );
};

export default TestimonialsPage;