import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  useEffect(() => {
    document.title = "FAQ / Help | COURSE.XWAGON";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 heading-gradient">Frequently Asked Questions</h1>
        <p className="text-foreground/70 mb-10 max-w-3xl">
          Find answers to common questions about COURSE.XWAGON. If you don't see your question answered here,
          feel free to reach out to our support team.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="md:col-span-8" variants={itemVariants}>
          <div className="bg-card border border-border/40 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Common Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  What is COURSE.XWAGON?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  COURSE.XWAGON is a digital knowledge hub designed to host and sell high-quality ebooks, 
                  audiobooks, online courses, and exclusive content. We curate the best resources for personal 
                  growth, business development, and entertainment, all in one centralized vault.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  How do I purchase content on COURSE.XWAGON?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  When you find content you'd like to purchase, simply click the "Buy Now" or "Info" button. 
                  This will direct you to our secure checkout page on Gumroad. After completing the payment, 
                  you'll receive instant access to your purchased content via download links or access credentials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  Are there free resources available?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  Yes! We offer free resources in each category (ebooks, audiobooks, and courses) to help you get started. 
                  These free resources maintain the same quality standards as our premium content. Look for the "Free" 
                  label on content cards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  How do I access adult content?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  Adult content is restricted to users 18 and older. When visiting these sections, you'll need to 
                  verify your age. We take age verification seriously to ensure compliance with legal requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  We accept all major credit cards, PayPal, and selected cryptocurrency payments through our 
                  secure Gumroad checkout system. All transactions are encrypted and processed securely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  What is your refund policy?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  We offer a 7-day satisfaction guarantee on most products. If you're not satisfied with your purchase, 
                  please contact our support team with your order details. Please note that some products, particularly 
                  those with instant digital access, may have different refund terms clearly stated on the product page.
                  <Link to="/refund" className="text-gold hover:underline block mt-2">
                    View our complete Refund Policy →
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  How do I join the community chats?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  You can join our community by clicking on the Chatrooms link in the main navigation. We have 
                  Telegram groups for general discussion, book requests, and course requests. Follow the links 
                  provided to join these communities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  How often do you add new content?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  We add new content weekly across all categories. The "New Uploads" section on the homepage 
                  showcases our latest additions. Follow our social media channels for announcements about 
                  new content releases.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  Can I request specific books or courses?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  Absolutely! Join our Telegram chat groups for book and course requests. Our community is active 
                  and often helps fulfill specific content requests. You can also use the Contact Us form to 
                  send direct requests to our team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-border/40">
                <AccordionTrigger className="hover:text-gold text-left">
                  Is my personal information secure?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  Yes, we take data security seriously. We don't store payment information on our servers, 
                  as all transactions are handled through secure third-party processors. We only collect essential 
                  information needed to deliver your purchases. Please see our Privacy Policy for more details.
                  <Link to="/privacy" className="text-gold hover:underline block mt-2">
                    View our Privacy Policy →
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        <motion.div className="md:col-span-4" variants={itemVariants}>
          <div className="bg-card border border-border/40 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-foreground/70 mb-6">
              If you couldn't find the answer you were looking for, reach out to our support team.
              We typically respond within 24 hours.
            </p>
            
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 w-full bg-gold text-black font-medium py-2 px-4 rounded-lg hover:bg-gold/80 transition-colors mb-4"
            >
              <Mail className="h-4 w-4" />
              Contact Support
            </Link>
            
            <div className="mt-8">
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/refund" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/dmca" className="text-foreground/70 hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    DMCA / Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQPage;