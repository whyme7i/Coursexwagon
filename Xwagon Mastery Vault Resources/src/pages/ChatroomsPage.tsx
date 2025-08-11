import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Sparkles, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ChatroomsPage = () => {
  useEffect(() => {
    document.title = "Chatrooms | COURSE.XWAGON";
  }, []);

  // WhatsApp group link provided in the request
  const whatsAppGroupLink = "https://chat.whatsapp.com/Ikfz9473Vg27LPmayyKU2e?mode=ac_t";

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 heading-gradient">Community Chatrooms</h1>
        <p className="text-foreground/70 mb-8 max-w-3xl">
          Connect with fellow knowledge seekers, request specific books or courses,
          and join the conversation in our vibrant community spaces.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp Group Link */}
          <div className="lg:col-span-2">
            <Card className="border-border/40 shadow-lg overflow-hidden bg-card">
              <CardHeader className="bg-card/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <CardTitle>Join Our WhatsApp Group</CardTitle>
                  <a 
                    href={whatsAppGroupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-gold"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> Open WhatsApp
                  </a>
                </div>
                <CardDescription>
                  Make requests and connect with our community
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6">
                <div className="text-center py-10 space-y-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="h-10 w-10 text-green-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Request Books, Courses & More</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Join our active WhatsApp group to request specific content, get recommendations,
                      and connect with fellow COURSE.XWAGON members.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      <div className="bg-card/60 p-3 rounded-lg border border-border/40 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-gold" />
                        <span>Book Requests</span>
                      </div>
                      <div className="bg-card/60 p-3 rounded-lg border border-border/40 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-gold" />
                        <span>Course Requests</span>
                      </div>
                      <div className="bg-card/60 p-3 rounded-lg border border-border/40 flex items-center gap-2">
                        <Users className="h-5 w-5 text-gold" />
                        <span>Community Discussion</span>
                      </div>
                    </div>
                    
                    <a
                      href={whatsAppGroupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Join WhatsApp Group
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Connect Panel */}
          <div>
            <Card className="border-border/40 shadow-lg overflow-hidden bg-card h-full">
              <CardHeader>
                <CardTitle>Other Communities</CardTitle>
                <CardDescription>
                  Connect with COURSE.XWAGON members on multiple platforms
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <a
                  href="https://t.me/+AhEmrpuZzsE3NTdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-card/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telegram</h3>
                    <p className="text-sm text-muted-foreground">Secondary community</p>
                  </div>
                </a>
                
                <a
                  href="https://share.google/9HsRYn5RGCD50asZ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-card/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reddit</h3>
                    <p className="text-sm text-muted-foreground">Discussion forum</p>
                  </div>
                </a>
                
                <a
                  href="https://www.tiktok.com/@course.xwagon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-card/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">TikTok</h3>
                    <p className="text-sm text-muted-foreground">Video content & updates</p>
                  </div>
                </a>
                
                <Separator />
                
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Chat Rules</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span>Be respectful to all members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span>No spamming or self-promotion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span>Keep discussions relevant to the channel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span>Report any inappropriate behavior</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Ready to join the conversation?</h2>
          <p className="text-foreground/70 max-w-xl mx-auto mb-6">
            Our community is active 24/7 with knowledge seekers from around the world.
            Join us and be part of the movement.
          </p>
          <a 
            href={whatsAppGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-gold/80 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Join WhatsApp Group Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatroomsPage;