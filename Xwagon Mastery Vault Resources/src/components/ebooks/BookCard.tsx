import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Info, ShoppingCart, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: string;
  isPremium: boolean;
  category: string;
}

export const BookCard = ({ title, author, cover, price, isPremium }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-gold/20 bg-card/50 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 aspect-[2/3] relative group overflow-hidden">
          <img 
            src={cover} 
            alt={`${title} cover`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {isPremium && (
            <div className="absolute top-2 right-2 bg-gold text-black text-xs font-semibold py-1 px-2 rounded-full">
              PREMIUM
            </div>
          )}
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0 gap-2">
          <div className="text-lg font-semibold text-gold">{price}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
              <Info className="w-4 h-4" />
            </Button>
            <Button className="bg-gold hover:bg-gold/90 text-black">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};