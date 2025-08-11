import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AudioBookCard, AudioBookCardProps } from '@/components/audiobooks/AudioBookCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ChevronDown, Headphones, Music, Flame, BookText } from 'lucide-react';

// Sample audiobook data
const AUDIOBOOKS_DATA: Record<string, AudioBookCardProps[]> = {
  motivation: [
    {
      id: "motiv1",
      title: "Rise Above: Daily Motivation",
      author: "James Peterson",
      cover: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=450&fit=crop",
      price: "$24.99",
      category: "motivation",
      audioPreview: "#",
      duration: "5:23:45"
    },
    {
      id: "motiv2",
      title: "The Champion's Mindset",
      author: "Michael Torres",
      cover: "https://images.unsplash.com/photo-1554668048-34d9df91e0f2?w=300&h=450&fit=crop",
      price: "$29.99",
      category: "motivation",
      audioPreview: "#",
      duration: "7:12:08"
    },
    {
      id: "motiv3",
      title: "Limitless: Break Your Barriers",
      author: "Rachel Green",
      cover: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=300&h=450&fit=crop",
      price: "$19.99",
      category: "motivation",
      audioPreview: "#",
      duration: "4:58:32"
    },
    {
      id: "motiv4",
      title: "The Disciplined Mind",
      author: "Thomas Scott",
      cover: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=300&h=450&fit=crop",
      price: "$22.99",
      category: "motivation",
      audioPreview: "#",
      duration: "6:45:17"
    }
  ],
  business: [
    {
      id: "bus1",
      title: "Building Wealth: Strategy Guide",
      author: "William Chen",
      cover: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=450&fit=crop",
      price: "$34.99",
      category: "business",
      audioPreview: "#",
      duration: "8:42:55"
    },
    {
      id: "bus2",
      title: "The Art of Negotiation",
      author: "Sarah Johnson",
      cover: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=450&fit=crop",
      price: "$29.99",
      category: "business",
      audioPreview: "#",
      duration: "5:18:40"
    },
    {
      id: "bus3",
      title: "Digital Empire Building",
      author: "Robert Maxwell",
      cover: "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=300&h=450&fit=crop",
      price: "$32.99",
      category: "business",
      audioPreview: "#",
      duration: "9:27:18"
    },
    {
      id: "bus4",
      title: "The Online Business Blueprint",
      author: "Emma Thompson",
      cover: "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?w=300&h=450&fit=crop",
      price: "$26.99",
      category: "business",
      audioPreview: "#",
      duration: "7:53:21"
    }
  ],
  fiction: [
    {
      id: "fic1",
      title: "The Silent Witness",
      author: "Daniel Harris",
      cover: "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?w=300&h=450&fit=crop",
      price: "$18.99",
      category: "fiction",
      audioPreview: "#",
      duration: "12:45:38"
    },
    {
      id: "fic2",
      title: "Whispers of the Past",
      author: "Jessica Miller",
      cover: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=300&h=450&fit=crop",
      price: "$21.99",
      category: "fiction",
      audioPreview: "#",
      duration: "10:22:14"
    },
    {
      id: "fic3",
      title: "The Last Kingdom",
      author: "Alexander Wright",
      cover: "https://images.unsplash.com/photo-1518744386442-2d48ac55d18f?w=300&h=450&fit=crop",
      price: "$23.99",
      category: "fiction",
      audioPreview: "#",
      duration: "14:36:52"
    },
    {
      id: "fic4",
      title: "Echoes in the Night",
      author: "Olivia Parker",
      cover: "https://images.unsplash.com/photo-1604433203533-7b7684d926fd?w=300&h=450&fit=crop",
      price: "$19.99",
      category: "fiction",
      audioPreview: "#",
      duration: "11:08:27"
    }
  ],
  erotic: [
    {
      id: "erot1",
      title: "Midnight Desires",
      author: "Victoria Chase",
      cover: "https://images.unsplash.com/photo-1523856574285-e5e1eb7b0378?w=300&h=450&fit=crop",
      price: "$24.99",
      category: "erotic",
      audioPreview: "#",
      duration: "6:48:15"
    },
    {
      id: "erot2",
      title: "Forbidden Pleasures",
      author: "Richard Stone",
      cover: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=300&h=450&fit=crop",
      price: "$27.99",
      category: "erotic",
      audioPreview: "#",
      duration: "7:25:42"
    },
    {
      id: "erot3",
      title: "Secret Encounters",
      author: "Elizabeth Black",
      cover: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=300&h=450&fit=crop",
      price: "$25.99",
      category: "erotic",
      audioPreview: "#",
      duration: "5:54:36"
    },
    {
      id: "erot4",
      title: "Passionate Nights",
      author: "Michael Rivers",
      cover: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=300&h=450&fit=crop",
      price: "$22.99",
      category: "erotic",
      audioPreview: "#",
      duration: "8:12:19"
    }
  ]
};

// Featured audiobooks (sample data)
const FEATURED_AUDIOBOOKS: AudioBookCardProps[] = [
  {
    id: "feat1",
    title: "Master the Game: Life Strategy",
    author: "Andrew Tate",
    cover: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?w=300&h=450&fit=crop",
    price: "$39.99",
    category: "featured",
    audioPreview: "#",
    duration: "10:14:28"
  },
  {
    id: "feat2",
    title: "The Hustler's Bible",
    author: "Don Kyono",
    cover: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=300&h=450&fit=crop",
    price: "$34.99",
    category: "featured",
    audioPreview: "#",
    duration: "8:57:42"
  },
  {
    id: "feat3",
    title: "Elite Mindset Development",
    author: "Ignacio Chamboko",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=450&fit=crop",
    price: "$36.99",
    category: "featured",
    audioPreview: "#",
    duration: "9:18:53"
  }
];

const CategorySection = ({ 
  title, 
  icon: Icon, 
  audiobooks 
}: { 
  title: string; 
  icon: React.ComponentType<{ className?: string }>;
  audiobooks: AudioBookCardProps[]; 
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedBooks = showAll ? audiobooks : audiobooks.slice(0, 4);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center mb-6">
        <Icon className="w-6 h-6 text-vault-blue mr-2" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedBooks.map((book) => (
          <AudioBookCard key={book.id} {...book} />
        ))}
      </div>
      
      {audiobooks.length > 4 && (
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="border-vault-blue/30 text-vault-blue hover:bg-vault-blue/10 group"
          >
            {showAll ? "Show Less" : "View More"}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      )}
    </motion.div>
  );
};

const AudiobooksPage = () => {
  useEffect(() => {
    document.title = "Audiobooks | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 heading-gradient">Audiobook Collection</h1>
        <p className="text-xl text-foreground/70 mb-12">Learn on the go with our premium audio content</p>
      </motion.div>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center mb-6">
          <Flame className="w-6 h-6 text-accent mr-2" />
          <h2 className="text-2xl font-bold">Featured Audiobooks</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_AUDIOBOOKS.map((book) => (
            <AudioBookCard key={book.id} {...book} />
          ))}
        </div>
      </motion.div>

      {/* Main Categories */}
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="all" className="flex-1">All Categories</TabsTrigger>
          <TabsTrigger value="motivation" className="flex-1">Motivation</TabsTrigger>
          <TabsTrigger value="business" className="flex-1">Business</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <CategorySection title="Motivation & Personal Growth" icon={Headphones} audiobooks={AUDIOBOOKS_DATA.motivation} />
          <CategorySection title="Business & Entrepreneurship" icon={BookText} audiobooks={AUDIOBOOKS_DATA.business} />
          <CategorySection title="Fiction & Storytelling" icon={Music} audiobooks={AUDIOBOOKS_DATA.fiction} />
          <div className="border-t border-muted my-12"></div>
          <div className="bg-card rounded-lg p-6 border border-muted">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Flame className="w-5 h-5 text-accent mr-2" />
              Adults-Only Audio Content
            </h3>
            <p className="mb-4">Explore our collection of erotic audiobooks in our Adults-Only section.</p>
            <Button 
              onClick={() => window.location.href = '/adults'}
              className="bg-accent hover:bg-accent/90"
            >
              Go to Adults-Only Vault
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="motivation" className="mt-0">
          <CategorySection title="Motivation & Personal Growth" icon={Headphones} audiobooks={AUDIOBOOKS_DATA.motivation} />
        </TabsContent>
        
        <TabsContent value="business" className="mt-0">
          <CategorySection title="Business & Entrepreneurship" icon={BookText} audiobooks={AUDIOBOOKS_DATA.business} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AudiobooksPage;