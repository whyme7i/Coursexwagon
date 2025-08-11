import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">About Us</h1>
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mt-6 mb-3">Our Mission</h2>
        <p>
          COURSE.XWAGON is a modern digital hub designed to host and sell high-quality ebooks, audiobooks, legendary online courses, and adult content. Our mission is to provide a comprehensive learning platform where individuals can access knowledge and skills across various disciplines, all within a secure and premium environment.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">The Vault of Mastery</h2>
        <p>
          We've built COURSE.XWAGON as a digital vault of knowledge—a place where valuable information is stored securely and made accessible to those seeking self-improvement and mastery. Our platform is structured with professional design, intelligent page linking, smooth animations, business analytics, and real-time user interaction systems.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Our Story</h2>
        <p>
          Founded by Ignacio Chamboko and Don Kyono, COURSE.XWAGON was born from a shared vision to create a platform that democratizes access to premium educational content. Both founders experienced firsthand the transformative power of quality education and wanted to make this accessible to everyone, regardless of their location or background.
        </p>
        <p>
          What began as a small collection of curated ebooks has grown into a comprehensive platform offering various forms of educational content, from in-depth courses to audiobooks, all designed to help our users master new skills and knowledge areas.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Our Values</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><span className="font-semibold">Quality:</span> We carefully curate all content to ensure it meets our high standards.</li>
          <li><span className="font-semibold">Accessibility:</span> We believe knowledge should be available to everyone who seeks it.</li>
          <li><span className="font-semibold">Innovation:</span> We continuously improve our platform to enhance the user experience.</li>
          <li><span className="font-semibold">Integrity:</span> We operate with transparency and honesty in all our dealings.</li>
          <li><span className="font-semibold">Community:</span> We foster a supportive environment for learning and growth.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Meet Our Founders</h2>
        <p>
          To learn more about our founders and their personal journeys, please visit our <a href="/founders" className="text-gold hover:underline">Founders Page</a>.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Join The Movement</h2>
        <p>
          COURSE.XWAGON is more than just a platform—it's a movement toward accessible, high-quality education for all. Whether you're looking to enhance your professional skills, explore new interests, or simply expand your knowledge, we have content that will help you on your journey to mastery.
        </p>
        <p className="mt-4">
          We invite you to explore our vault of knowledge and start your journey toward mastery today.
        </p>
      </div>
      
      <div className="flex mt-8">
        <a href="/faq" className="text-gold hover:underline flex items-center gap-1">
          → FAQ/Help
        </a>
      </div>
    </div>
  );
};

export default AboutPage;