import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState("new");
  
  const newUploads = [
    {
      id: 'new-1',
      title: "Mindset Mastery",
      category: "Ebook",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
      author: "Jason Clarke",
    },
    {
      id: 'new-2',
      title: "Business Success Roadmap",
      category: "Audiobook",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop",
      author: "Sarah Williams",
    },
    {
      id: 'new-3',
      title: "Hustler's University",
      category: "Course",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop",
      author: "Andrew Tate",
    },
    {
      id: 'new-4',
      title: "Twilight Secrets",
      category: "Adult Fiction",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      author: "Elena Blackwood",
    },
  ];
  
  const bestSellers = [
    {
      id: 'best-1',
      title: "Financial Freedom",
      category: "Ebook",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=600&fit=crop",
      author: "Michael Robertson",
    },
    {
      id: 'best-2',
      title: "Motivation Unleashed",
      category: "Audiobook",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop",
      author: "David Peterson",
    },
    {
      id: 'best-3',
      title: "Real Estate Mastery",
      category: "Course",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=600&fit=crop",
      author: "Jessica Morgan",
    },
    {
      id: 'best-4',
      title: "Forbidden Desires",
      category: "Adult Fiction",
      image: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=400&h=600&fit=crop",
      author: "Ryan Blaze",
    },
  ];
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <h3 className="text-lg font-medium text-gold">Featured Content</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Discover Excellence</h2>
          </div>
          
          <Tabs defaultValue="new" className="w-full md:w-auto">
            <TabsList className="grid w-full md:w-[300px] grid-cols-2">
              <TabsTrigger 
                value="new" 
                onClick={() => setActiveTab("new")}
                className={activeTab === "new" ? "text-gold data-[state=active]:bg-card/90" : ""}
              >
                New Uploads
              </TabsTrigger>
              <TabsTrigger 
                value="best" 
                onClick={() => setActiveTab("best")}
                className={activeTab === "best" ? "text-gold data-[state=active]:bg-card/90" : ""}
              >
                Best Sellers
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
        
        <Tabs defaultValue="new" value={activeTab}>
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newUploads.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[2/3] overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-gold/20 text-gold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-foreground/70">by {item.author}</p>
                  </div>
                  <div className="absolute inset-0 bg-card/80 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                    <Button className="bg-gold text-primary-foreground hover:bg-gold/90">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="best" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-[2/3] overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-gold/20 text-gold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-foreground/70">by {item.author}</p>
                  </div>
                  <div className="absolute inset-0 bg-card/80 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                    <Button className="bg-gold text-primary-foreground hover:bg-gold/90">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button variant="outline" className="border-gold/30 text-gold">
            View All Content
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;