import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AgeVerification } from '@/components/adults/AgeVerification';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookCard, BookCardProps } from '@/components/ebooks/BookCard';
import { AudioBookCard, AudioBookCardProps } from '@/components/audiobooks/AudioBookCard';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Headphones, Heart, Lock, BookMarked } from 'lucide-react';

// Sample adult ebooks data
const ADULT_EBOOKS: BookCardProps[] = [
  {
    id: "adult1",
    title: "Midnight Desires",
    author: "Victoria Chase",
    cover: "https://images.unsplash.com/photo-1517990567126-1079aad11b1d?w=300&h=450&fit=crop",
    price: "$19.99",
    isPremium: true,
    category: "adult"
  },
  {
    id: "adult2",
    title: "Forbidden Fantasies",
    author: "Richard Stone",
    cover: "https://images.unsplash.com/photo-1519567770579-c8ea0aaf8df4?w=300&h=450&fit=crop",
    price: "$24.99",
    isPremium: true,
    category: "adult"
  },
  {
    id: "adult3",
    title: "Secret Encounters",
    author: "Elizabeth Black",
    cover: "https://images.unsplash.com/photo-1484566674415-6951046a82ea?w=300&h=450&fit=crop",
    price: "$22.99",
    isPremium: false,
    category: "adult"
  },
  {
    id: "adult4",
    title: "Passionate Nights",
    author: "Michael Rivers",
    cover: "https://images.unsplash.com/photo-1545022388-6a14a89dfbad?w=300&h=450&fit=crop",
    price: "$18.99",
    isPremium: true,
    category: "adult"
  },
  {
    id: "adult5",
    title: "Temptations",
    author: "Sophia Adams",
    cover: "https://images.unsplash.com/photo-1515926561573-155e785f0cbd?w=300&h=450&fit=crop",
    price: "$21.99",
    isPremium: true,
    category: "adult"
  },
  {
    id: "adult6",
    title: "Dark Pleasures",
    author: "James Knight",
    cover: "https://images.unsplash.com/photo-1556806779-ad192df90a21?w=300&h=450&fit=crop",
    price: "$23.99",
    isPremium: false,
    category: "adult"
  }
];

// Sample adult audiobooks data
const ADULT_AUDIOBOOKS: AudioBookCardProps[] = [
  {
    id: "audio1",
    title: "Whispers in the Dark",
    author: "Rebecca Taylor",
    cover: "https://images.unsplash.com/photo-1542219550-37153d387c27?w=300&h=450&fit=crop",
    price: "$24.99",
    category: "adult",
    audioPreview: "#",
    duration: "6:23:45"
  },
  {
    id: "audio2",
    title: "Passionate Confessions",
    author: "Alexander Reed",
    cover: "https://images.unsplash.com/photo-1620818236314-c76e1dfceb21?w=300&h=450&fit=crop",
    price: "$29.99",
    category: "adult",
    audioPreview: "#",
    duration: "5:47:12"
  },
  {
    id: "audio3",
    title: "Forbidden Desires",
    author: "Victoria Price",
    cover: "https://images.unsplash.com/photo-1588250318421-2d766111204e?w=300&h=450&fit=crop",
    price: "$26.99",
    category: "adult",
    audioPreview: "#",
    duration: "7:35:21"
  },
  {
    id: "audio4",
    title: "Night of Passion",
    author: "Jonathan Graves",
    cover: "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?w=300&h=450&fit=crop",
    price: "$22.99",
    category: "adult",
    audioPreview: "#",
    duration: "4:52:38"
  }
];

// Content bundles
const BUNDLES = [
  {
    title: "The Complete Fantasies Collection",
    description: "Get all 12 ebooks and 8 audiobooks in our premium fantasy collection at a special bundle price.",
    price: "$149.99",
    savings: "Save 40%",
    image: "https://images.unsplash.com/photo-1543394863-cb343cd7227c?w=300&h=450&fit=crop"
  },
  {
    title: "Ultimate Romance Package",
    description: "Access our complete library of erotic romance content including exclusive titles not sold separately.",
    price: "$199.99",
    savings: "Save 35%",
    image: "https://images.unsplash.com/photo-1574532184174-15a09bb2e322?w=300&h=450&fit=crop" 
  }
];

const AdultsPage = () => {
  useEffect(() => {
    document.title = "18+ Content | COURSE.XWAGON";
  }, []);

  const [verified, setVerified] = useState(false);

  const handleVerification = () => {
    setVerified(true);
  };

  return (
    <div className="container py-20">
      {!verified ? (
        <AgeVerification onVerify={handleVerification} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2 heading-gradient">Adults-Only Vault</h1>
            <p className="text-xl text-foreground/70">
              Explore our exclusive collection of premium adult content
            </p>
          </motion.div>

          <Tabs defaultValue="ebooks" className="mb-12">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="ebooks" className="flex-1">
                <BookOpen className="w-4 h-4 mr-2" />
                Ebooks
              </TabsTrigger>
              <TabsTrigger value="audiobooks" className="flex-1">
                <Headphones className="w-4 h-4 mr-2" />
                Audiobooks
              </TabsTrigger>
              <TabsTrigger value="bundles" className="flex-1">
                <BookMarked className="w-4 h-4 mr-2" />
                Bundles
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ebooks" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <Heart className="w-6 h-6 text-accent mr-2" />
                  <h2 className="text-2xl font-bold">Erotic Fiction Collection</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {ADULT_EBOOKS.map((book) => (
                    <BookCard key={book.id} {...book} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="audiobooks" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <Headphones className="w-6 h-6 text-vault-blue mr-2" />
                  <h2 className="text-2xl font-bold">NSFW Audiobooks</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {ADULT_AUDIOBOOKS.map((audiobook) => (
                    <AudioBookCard key={audiobook.id} {...audiobook} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="bundles" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <BookMarked className="w-6 h-6 text-gold mr-2" />
                  <h2 className="text-2xl font-bold">Premium Bundles</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {BUNDLES.map((bundle, index) => (
                    <Card key={index} className="overflow-hidden border border-gold/30 bg-card/50 backdrop-blur-sm hover:border-gold/60 transition-all duration-300">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-1/3 h-48 md:h-auto relative">
                          <img 
                            src={bundle.image} 
                            alt={bundle.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold py-1 px-3 rounded-full">
                            {bundle.savings}
                          </div>
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col">
                          <h3 className="font-bold text-xl mb-2">{bundle.title}</h3>
                          <p className="text-muted-foreground mb-4 flex-1">{bundle.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gold">{bundle.price}</span>
                            <button className="bg-gold hover:bg-gold/90 text-primary-foreground font-medium py-2 px-4 rounded-md flex items-center">
                              <Lock className="w-4 h-4 mr-2" />
                              Unlock Bundle
                            </button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-accent/20 rounded-lg p-6 text-center"
          >
            <div className="max-w-xl mx-auto">
              <h3 className="text-xl font-bold mb-2">VIP Membership Access</h3>
              <p className="mb-6">
                Upgrade to VIP membership for unlimited access to all adult content, new weekly additions, 
                and exclusive creator content not available anywhere else.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-md">
                Learn About VIP Membership
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdultsPage;