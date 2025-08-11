import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p>We value your feedback and are here to assist you with any questions or concerns. Please feel free to reach out to us using any of the methods below.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">General Inquiries</h3>
            <p>
              <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a>
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Content Requests</h3>
            <p>
              For specific book, audiobook, or course requests, please join our WhatsApp group:
              <br />
              <a href="https://chat.whatsapp.com/Ikfz9473Vg27LPmayyKU2e?mode=ac_t" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                Join Our Request Group
              </a>
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Social Media</h3>
            <ul className="list-disc pl-6">
              <li>
                <a href="https://www.tiktok.com/@course.xwagon" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  TikTok: @course.xwagon
                </a>
              </li>
              <li>
                <a href="https://share.google/9HsRYn5RGCD50asZ1" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  Reddit
                </a>
              </li>
              <li>
                <a href="https://t.me/+AhEmrpuZzsE3NTdk" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  Telegram Channel
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Our Store</h3>
            <p>
              <a href="https://masteredpath.gumroad.com" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                Visit Our Gumroad Store
              </a>
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Response Time</h3>
            <p>We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate so in your subject line.</p>
          </div>
        </div>
        
        <div>
          <form className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 bg-background rounded-md border border-input focus:ring-1 focus:ring-gold focus:outline-none" 
                placeholder="Your name" 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 bg-background rounded-md border border-input focus:ring-1 focus:ring-gold focus:outline-none" 
                placeholder="your.email@example.com" 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 bg-background rounded-md border border-input focus:ring-1 focus:ring-gold focus:outline-none" 
                placeholder="How can we help?" 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full p-2 bg-background rounded-md border border-input focus:ring-1 focus:ring-gold focus:outline-none" 
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-bold py-2 px-4 rounded-md transition-colors duration-200 mt-2"
            >
              Send Message
            </button>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              We'll get back to you as soon as possible!  
            </p>
          </form>
        </div>
      </div>
      
      <div className="flex mt-12">
        <a href="/privacy" className="text-gold hover:underline flex items-center gap-1">
          → View our Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default ContactPage;