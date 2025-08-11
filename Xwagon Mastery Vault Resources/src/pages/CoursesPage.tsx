import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CourseCard, CourseCardProps } from '@/components/courses/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Trophy, Crown } from 'lucide-react';

// Sample course data
const PREMIUM_COURSES: CourseCardProps[] = [
  {
    id: "course1",
    title: "Hustlers University 3.0",
    instructor: "Andrew Tate",
    cover: "https://images.unsplash.com/photo-1633157671113-e74af59741ca?w=800&h=400&fit=crop",
    price: "$49.99/month",
    isPremium: true,
    description: "Join the most comprehensive money-focused community on the planet. Learn skills including copywriting, e-commerce, crypto trading, and more from industry experts who are making over $10,000 per month.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  },
  {
    id: "course2",
    title: "Business Bootcamp Elite",
    instructor: "Don Kyono",
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    price: "$199.99",
    isPremium: true,
    description: "A complete A-Z system for building profitable online businesses from scratch. Master marketing, sales psychology, and scaling strategies that have generated millions in revenue for successful entrepreneurs.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  },
  {
    id: "course3",
    title: "Wealth Mastery Academy",
    instructor: "Ignacio Chamboko",
    cover: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=800&h=400&fit=crop",
    price: "$149.99",
    isPremium: true,
    description: "Learn advanced wealth building strategies from industry experts. This comprehensive course covers investment principles, asset allocation, passive income streams, tax optimization and long-term wealth preservation.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  },
  {
    id: "course4",
    title: "The Real World MBA",
    instructor: "Elizabeth Warren",
    cover: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&h=400&fit=crop",
    price: "$299.99",
    isPremium: true,
    description: "Skip the traditional business school and learn practical skills that actually make money. This no-nonsense program covers business fundamentals, market analysis, growth hacking, and financial management in the modern economy.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  }
];

const FREE_COURSES: CourseCardProps[] = [
  {
    id: "free1",
    title: "Financial Freedom Fundamentals",
    instructor: "COURSE.XWAGON Team",
    cover: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&h=400&fit=crop",
    price: "FREE",
    isPremium: false,
    description: "Start your journey to financial literacy with this foundational course covering budgeting, saving strategies, debt management, and building your first emergency fund.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  },
  {
    id: "free2",
    title: "Digital Marketing Essentials",
    instructor: "Sarah Johnson",
    cover: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=400&fit=crop",
    price: "FREE",
    isPremium: false,
    description: "Learn the fundamentals of digital marketing, including social media strategy, content creation basics, SEO introduction, and how to analyze your marketing performance.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  },
  {
    id: "free3",
    title: "Productivity Masterclass",
    instructor: "Michael Roberts",
    cover: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=800&h=400&fit=crop",
    price: "FREE",
    isPremium: false,
    description: "Maximize your efficiency and get more done in less time. This course covers time management techniques, focus strategies, habit formation, and workflow optimization.",
    payhipLink: "https://payhip.com/COURSEXWAGON"
  }
];

const CoursesPage = () => {
  useEffect(() => {
    document.title = "Courses | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 heading-gradient">Elite Knowledge Vault</h1>
        <p className="text-xl text-foreground/70 mb-12">Master new skills with our premium courses led by industry experts</p>
      </motion.div>

      <Tabs defaultValue="premium" className="mb-12">
        <TabsList className="w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="premium" className="flex-1">Premium Courses</TabsTrigger>
          <TabsTrigger value="free" className="flex-1">Free Courses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="premium" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <div className="flex items-center mb-8">
              <Crown className="w-6 h-6 text-gold mr-2" />
              <h2 className="text-2xl font-bold">Premium Guru Courses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {PREMIUM_COURSES.slice(0, 2).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center mb-8">
              <Trophy className="w-6 h-6 text-gold mr-2" />
              <h2 className="text-2xl font-bold">Business Excellence Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PREMIUM_COURSES.slice(2, 4).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="free" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-gold mr-2" />
              <h2 className="text-2xl font-bold">Free Learning Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FREE_COURSES.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-16 p-6 bg-card border border-gold/20 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">Ready to upgrade your knowledge?</h3>
              <p className="mb-6 max-w-xl mx-auto">
                Access our premium courses to gain insights from industry leaders and accelerate your growth with exclusive content and strategies.
              </p>
              <button 
                onClick={() => document.querySelector('[value="premium"]')?.dispatchEvent(new Event('click'))}
                className="bg-gold hover:bg-gold/90 text-black font-semibold py-2 px-6 rounded-md"
              >
                Explore Premium Courses
              </button>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoursesPage;