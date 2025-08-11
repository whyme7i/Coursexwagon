import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Headphones, GraduationCap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const CategorySection = () => {
  const isMobile = useIsMobile();
  
  const categories = [
    {
      id: 'ebooks',
      title: 'Premium Ebooks',
      description: 'Expand your knowledge with our comprehensive collection of ebooks spanning various genres.',
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      link: '/ebooks',
      color: 'from-gold/20 to-transparent',
      delay: 0.1,
    },
    {
      id: 'audiobooks',
      title: 'Audiobooks',
      description: 'Listen to captivating audiobooks narrated by professionals for an immersive experience.',
      icon: <Headphones className="w-8 h-8 text-gold" />,
      link: '/audiobooks',
      color: 'from-gold/20 to-transparent',
      delay: 0.2,
    },
    {
      id: 'courses',
      title: 'Expert Courses',
      description: 'Master skills with courses designed by industry experts and successful entrepreneurs.',
      icon: <GraduationCap className="w-8 h-8 text-gold" />,
      link: '/courses',
      color: 'from-gold/20 to-transparent',
      delay: 0.3,
    },
    {
      id: 'adults',
      title: 'Adult Content',
      description: 'Age-restricted content for adults featuring premium collections for mature audiences.',
      icon: <Shield className="w-8 h-8 text-gold" />,
      link: '/adults',
      color: 'from-accent/20 to-transparent',
      delay: 0.4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Explore Our Categories
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Discover a wealth of knowledge across multiple formats. From insightful ebooks to immersive 
            courses, we have everything you need to master your journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className={`vault-card bg-gradient-to-br ${category.color} hover:-translate-y-1`}
              variants={itemVariants}
              transition={{ delay: category.delay }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-foreground/70 mb-4 flex-1">{category.description}</p>
                <Link to={category.link}>
                  <Button className="w-full bg-card hover:bg-card/80 border border-gold/30 text-foreground">
                    Explore {category.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;