import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

export interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  cover: string;
  price: string;
  isPremium: boolean;
  description: string;
  payhipLink?: string;
}

export const CourseCard = ({ 
  title, 
  instructor, 
  cover, 
  price, 
  isPremium, 
  description,
  payhipLink 
}: CourseCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[400px] perspective-1000">
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div 
          className={`absolute inset-0 backface-hidden border border-accent/30 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden ${
            isFlipped ? "invisible" : "visible"
          }`}
        >
          <div className="h-48 overflow-hidden">
            <img src={cover} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl">{title}</h3>
              {isPremium && (
                <span className="bg-accent text-white text-xs font-semibold py-1 px-2 rounded-full">
                  PREMIUM
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{instructor}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-accent">{price}</span>
              <Button
                onClick={() => setIsFlipped(true)}
                variant="outline"
                className="border-accent/30 hover:bg-accent/10 hover:text-accent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className={`absolute inset-0 backface-hidden border border-accent/30 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden ${
            isFlipped ? "visible" : "invisible"
          } [transform:rotateY(180deg)]`}
        >
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">By {instructor}</p>
            
            <div className="overflow-y-auto flex-1 mb-4 text-sm">
              <p>{description}</p>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <span className="text-lg font-bold text-accent">{price}</span>
              <Button
                onClick={() => window.open(payhipLink || "#", "_blank")}
                className="bg-accent hover:bg-accent/90"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Buy on Payhip
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};