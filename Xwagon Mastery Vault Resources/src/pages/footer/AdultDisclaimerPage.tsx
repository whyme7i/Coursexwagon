import { useEffect } from 'react';

const AdultDisclaimerPage = () => {
  useEffect(() => {
    document.title = "Adult Disclaimer | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">Adult Content Disclaimer</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: August 2025</p>
        
        <div className="bg-accent/20 border border-accent p-4 rounded-md my-6">
          <h2 className="text-xl font-bold mb-2 text-accent-foreground">AGE RESTRICTION NOTICE</h2>
          <p className="text-accent-foreground/90">The adult content sections of COURSE.XWAGON contain explicit material intended for adults 18 years of age or older. By accessing these sections, you certify that you are at least 18 years old and are not offended by sexually explicit material.</p>
        </div>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Content Description</h2>
        <p>The Adults-Only Vault section of COURSE.XWAGON contains explicit adult content including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Adult-themed ebooks and literature</li>
          <li>Explicit audiobooks</li>
          <li>Adult educational content</li>
          <li>Other materials of a sexually explicit nature</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Age Verification</h2>
        <p>We implement age verification measures to restrict access to adult content. By attempting to access the adult content sections of our website:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You confirm that you are at least 18 years old or the legal age to view such content in your jurisdiction (whichever is higher)</li>
          <li>You acknowledge that you are accessing such materials by your own choice</li>
          <li>You accept full responsibility for your actions</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Legal Compliance</h2>
        <p>All adult content available on COURSE.XWAGON complies with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>18 U.S.C. § 2257 Record-Keeping Requirements</li>
          <li>Applicable local, state, and federal laws regarding the distribution of adult content</li>
          <li>International regulations where such content is legally accessible</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Content Standards</h2>
        <p>COURSE.XWAGON strictly prohibits and does not host or distribute any content that:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Depicts minors or individuals under 18 years of age</li>
          <li>Contains non-consensual content of any kind</li>
          <li>Portrays extreme or illegal acts</li>
          <li>Violates copyright or other intellectual property rights</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Privacy & Discretion</h2>
        <p>We understand the sensitive nature of adult content consumption. COURSE.XWAGON implements the following measures:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Discreet billing descriptions for all purchases</li>
          <li>Secure, encrypted transactions</li>
          <li>Private browsing history within your account</li>
          <li>No sharing of your viewing or purchase history with third parties except as required by law</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Parental Controls</h2>
        <p>Parents and guardians are encouraged to use parental control protections to prevent minors from accessing adult content. These include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Web filtering software</li>
          <li>Browser restrictions</li>
          <li>Operating system parental controls</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Report Violations</h2>
        <p>If you believe content violates our standards or applicable laws, please report it immediately to <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a>.</p>
      </div>
      
      <div className="flex mt-8">
        <a href="/contact" className="text-gold hover:underline flex items-center gap-1">
          → Contact Us
        </a>
      </div>
    </div>
  );
};

export default AdultDisclaimerPage;