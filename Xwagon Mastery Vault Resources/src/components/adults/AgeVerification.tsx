import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface AgeVerificationProps {
  onVerify: () => void;
}

export const AgeVerification = ({ onVerify }: AgeVerificationProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto text-center"
    >
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/20">
        <ShieldAlert className="w-10 h-10 text-accent" />
      </div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Age Verification Required
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-foreground/70 mb-8"
      >
        This section contains age-restricted content suitable only for adults 18 years or older.
        By proceeding, you confirm that you are at least 18 years of age.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-center mb-4">
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                           peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                           peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                           after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                           after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            <span className="ms-3 text-sm font-medium">I confirm I am 18 or older</span>
          </label>
        </div>

        <Button 
          onClick={onVerify} 
          disabled={!isChecked}
          className="bg-accent text-white hover:bg-accent/90 disabled:bg-muted disabled:text-muted-foreground"
        >
          Enter Adults-Only Vault
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => window.history.back()} 
          className="border-gold/30 text-gold hover:bg-gold/10"
        >
          Go back
        </Button>
      </motion.div>
    </motion.div>
  );
};