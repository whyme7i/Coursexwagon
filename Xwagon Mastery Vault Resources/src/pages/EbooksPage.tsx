import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookCard, BookCardProps } from '@/components/ebooks/BookCard';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles } from 'lucide-react';

// Raw book data from your provided source
const RAW_BOOKS = [
  { id: "book1", title:"Quantum Legacy: The Ignition", cover:"covers/IMG-20250809-WA0028.jpg", link:"https://upfiles.com/dyMeFU0", rating:"4.7/5", price:"$19.99" },
  { id: "book2", title:"Neural Genesis: Code of the Mind", cover:"covers/IMG-20250809-WA0029.jpg", link:"https://upfiles.com/oPeNyB2", rating:"4.5/5", price:"$19.99" },
  { id: "book3", title:"Silent Cipher: Shadows of Infinity", cover:"covers/IMG-20250809-WA0031.jpg", link:"https://upfiles.com/y1zJ", rating:"4.2/5", price:"$0" },
  // ... continue for all your books
  { id: "bookLast", title:"Nova Core: Genesis Spark", cover:"covers/file_00000000344061f983aa60ec2e9d61ab.png", link:"https://upfiles.com/ihA7", rating:"4.6/5", price:"$24.99" }
];

// Convert raw data into BookCardProps, assign isPremium based on price > 0
const processedBooks: BookCardProps[] = RAW_BOOKS.map(book => {
  const isFree = book.price === "FREE" || book.price === "$0" || /free/i.test(book.title);
  return {
    id: book.id,
    title: book.title,
    author: "Unknown Author", // No author info provided, assign default or extend your data
    cover: book.cover, 
    price: isFree ? "FREE" : book.price || "$19.99",
    isPremium: !isFree,
    category: isFree ? "free" : "premium",
    rating: book.rating, // add rating prop to BookCard if supported, else ignore
    downloadLink: book.link // custom prop to pass download link
  };
});

// Split books into free and premium categories dynamically
const freeBooks = processedBooks.filter(b => !b.isPremium);
const premiumBooks = processedBooks.filter(b => b.isPremium);

const CategorySection = ({ 
  title, 
  books 
}: { 
  title: string; 
  books: BookCardProps[]; 
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedBooks = showAll ? books : books.slice(0, 8); // show 8 by default
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {displayedBooks.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      {books.length > 8 && (
        <div className="flex justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="border-gold/30 text-gold hover:bg-gold/10 group"
          >
            {showAll ? "Show Less" : "View More"}
          </Button>
        </div>
      )}
    </motion.div>
  );
};

const EbooksPage = () => {
  useEffect(() => {
    document.title = "Ebooks | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold heading-gradient">The Vault of Knowledge</h1>
        <p className="text-xl text-foreground/70 mt-2">Explore all unlocked books, free and premium</p>
      </motion.div>

      <Tabs defaultValue="premium" className="max-w-5xl mx-auto">
        <TabsList className="mb-8">
          <TabsTrigger value="premium" className="flex-1 flex justify-center items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold" /> Premium Collection
          </TabsTrigger>
          <TabsTrigger value="free" className="flex-1 flex justify-center items-center gap-2">
            <Crown className="w-5 h-5 text-gold" /> Free Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="premium">
          <CategorySection title="Premium Books" books={premiumBooks} />
        </TabsContent>

        <TabsContent value="free">
          <CategorySection title="Free Books" books={freeBooks} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EbooksPage;
