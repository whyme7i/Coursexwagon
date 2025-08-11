import { useEffect } from 'react';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">Terms and Conditions</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: August 2025</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">1. Acceptance of Terms</h2>
        <p>By accessing or using COURSE.XWAGON, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">2. Use License</h2>
        <p>Upon purchasing our digital products, you are granted a limited, non-exclusive, non-transferable license to access and use the content for personal, non-commercial purposes. This license does not include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The right to modify or copy the materials</li>
          <li>The right to use the materials for any commercial purpose</li>
          <li>The right to transfer the materials to another person or mirror the materials on any other server</li>
          <li>The right to share access credentials with others</li>
        </ul>
        <p>This license shall automatically terminate if you violate any of these restrictions.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">3. Digital Products and Services</h2>
        <p>All digital products sold through our platform are subject to the following conditions:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>We reserve the right to modify content or discontinue services at any time without notice</li>
          <li>Due to the digital nature of our products, all sales are final unless otherwise stated in our refund policy</li>
          <li>Access to certain premium content requires age verification and adherence to our content guidelines</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">4. User Accounts</h2>
        <p>When creating an account on our website, you must provide accurate and complete information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">5. Intellectual Property</h2>
        <p>All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of COURSE.XWAGON or its content suppliers and protected by international copyright laws.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">6. Disclaimer of Warranties</h2>
        <p>The materials on COURSE.XWAGON's website are provided on an 'as is' basis. COURSE.XWAGON makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">7. Limitation of Liability</h2>
        <p>In no event shall COURSE.XWAGON or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on COURSE.XWAGON's website.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">8. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">9. Changes to Terms</h2>
        <p>COURSE.XWAGON may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">10. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a>.</p>
      </div>
      
      <div className="flex mt-8">
        <a href="/refund" className="text-gold hover:underline flex items-center gap-1">
          → Go to Refund Policy
        </a>
      </div>
    </div>
  );
};

export default TermsPage;