import { useEffect } from 'react';

const DMCAPage = () => {
  useEffect(() => {
    document.title = "DMCA/Copyright | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">DMCA/Copyright</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: August 2025</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Copyright Policy</h2>
        <p>COURSE.XWAGON respects the intellectual property rights of others and expects its users to do the same. It is our policy to respond to notices of alleged copyright infringement that comply with applicable intellectual property law and the Digital Millennium Copyright Act (DMCA).</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">DMCA Notice Requirements</h2>
        <p>If you believe that material available on our website infringes on your copyright, you (or your agent) may send us a notice requesting that the material be removed or access to it blocked. The notice must include the following information:</p>
        
        <ol className="list-decimal pl-6 mb-4">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material</li>
          <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail address at which you may be contacted</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</li>
        </ol>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">How to Submit a DMCA Notice</h2>
        <p>You may submit your DMCA notice to:</p>
        <p>Email: <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a></p>
        <p>Subject Line: "DMCA Copyright Notification"</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Counter-Notification Procedures</h2>
        <p>If you believe that your material has been removed by mistake or misidentification, you may provide us with a written counter-notification. The counter-notice must include the following information:</p>
        
        <ol className="list-decimal pl-6 mb-4">
          <li>Your physical or electronic signature</li>
          <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled</li>
          <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification</li>
          <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided the original notification or an agent of such person</li>
        </ol>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Repeat Infringers</h2>
        <p>We have a policy of terminating the accounts of users who repeatedly infringe copyright in appropriate circumstances.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Changes to Our Policy</h2>
        <p>COURSE.XWAGON reserves the right to update or modify this DMCA/Copyright Policy at any time without prior notice. Please review this policy periodically for any changes.</p>
      </div>
      
      <div className="flex mt-8">
        <a href="/about" className="text-gold hover:underline flex items-center gap-1">
          → About Us
        </a>
      </div>
    </div>
  );
};

export default DMCAPage;