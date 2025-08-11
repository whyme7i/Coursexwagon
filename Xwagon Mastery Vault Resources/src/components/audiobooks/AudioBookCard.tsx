import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Info, ShoppingCart, Play, Pause, Download } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface AudioBookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: string;
  category: string;
  audioPreview: string;
  duration: string;
}

export const AudioBookCard = ({ 
  title, 
  author, 
  cover, 
  price, 
  duration 
}: AudioBookCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control audio playback
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-vault-blue/30 bg-card/50 backdrop-blur-sm hover:border-vault-blue/60 transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 aspect-[2/3] relative group overflow-hidden">
          <img 
            src={cover} 
            alt={`${title} cover`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isPlaying ? (
              <Pause className="w-12 h-12 text-white" />
            ) : (
              <Play className="w-12 h-12 text-white" />
            )}
          </button>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{author}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-vault-blue/20 rounded-full overflow-hidden">
              {/* Audio waveform visualization */}
              <div className="flex h-full">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1 mx-[1px] bg-vault-blue ${isPlaying ? 'animate-pulse' : ''}`} 
                    style={{ 
                      height: '100%',
                      opacity: isPlaying ? 0.5 + Math.random() * 0.5 : 0.4
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{duration}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0 gap-2">
          <div className="text-lg font-semibold text-vault-blue">{price}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-vault-blue/30 hover:bg-vault-blue/10 hover:text-vault-blue">
              <Download className="w-4 h-4" />
            </Button>
            <Button className="bg-vault-blue hover:bg-vault-blue/90 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};