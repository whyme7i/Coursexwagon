import { useEffect } from 'react';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: August 2025</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">1. Introduction</h2>
        <p>At COURSE.XWAGON ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make purchases.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">2. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide when purchasing our products or services, including but not limited to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name, email address, and contact details</li>
          <li>Payment information (processed securely through our payment processors)</li>
          <li>Account preferences and settings</li>
          <li>Information about your device and how you interact with our website</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and maintaining our services</li>
          <li>Processing transactions and delivering purchased products</li>
          <li>Responding to your inquiries and providing customer support</li>
          <li>Improving our website and user experience</li>
          <li>Sending you updates, promotional materials, and other communications</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">5. Third-Party Services</h2>
        <p>We may use third-party services to facilitate our operations, such as payment processing, email communication, and analytics. These services have their own privacy policies, and we recommend reviewing their terms.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">6. Your Rights</h2>
        <p>You have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">7. Children's Privacy</h2>
        <p>Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">8. Changes to This Privacy Policy</h2>
        <p>We may update our privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">9. Contact Us</h2>
        <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a>.</p>
      </div>
      
      <div className="flex mt-8">
        <a href="/terms" className="text-gold hover:underline flex items-center gap-1">
          → View our Terms
        </a>
      </div>
    </div>
  );
};

export default PrivacyPage;