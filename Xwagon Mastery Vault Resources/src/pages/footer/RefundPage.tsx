import { useEffect } from 'react';

const RefundPage = () => {
  useEffect(() => {
    document.title = "Refund Policy | COURSE.XWAGON";
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6 heading-gradient">Refund Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: August 2025</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Refund Policy Overview</h2>
        <p>At COURSE.XWAGON, we want you to be completely satisfied with your purchases. However, due to the digital nature of our products, we have specific refund policies that apply to different types of content.</p>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Digital Products (Ebooks & Audiobooks)</h2>
        <p>Due to the instant delivery and non-returnable nature of digital products:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>All sales of ebooks and audiobooks are final and non-refundable once the download link has been provided</li>
          <li>If you have not downloaded the product and experience technical issues preventing access, you may be eligible for a refund within 48 hours of purchase</li>
          <li>If you received a corrupted or incorrect file, please contact our support team within 7 days of purchase for assistance</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Online Courses</h2>
        <p>For our online courses, the following refund policy applies:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You may request a refund within 7 days of purchase if you have completed less than 20% of the course content</li>
          <li>Refund requests must be submitted in writing with a valid reason for dissatisfaction</li>
          <li>Refunds are processed within 14 business days of approval</li>
          <li>Access to course materials will be revoked upon refund issuance</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Premium Membership</h2>
        <p>For premium membership subscriptions:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Monthly subscriptions may be canceled at any time, but no partial refunds will be issued for the current billing period</li>
          <li>Annual subscriptions may be refunded on a pro-rata basis within the first 30 days if requested in writing</li>
          <li>No refunds will be issued for annual subscriptions after 30 days from purchase</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">How to Request a Refund</h2>
        <p>To request a refund, please contact our support team at <a href="mailto:coursexwagon@gmail.com" className="text-gold hover:underline">coursexwagon@gmail.com</a> with the following information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your name and email address used for purchase</li>
          <li>Order number or transaction ID</li>
          <li>Product name and purchase date</li>
          <li>Reason for requesting a refund</li>
          <li>Any relevant supporting documentation</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-6 mb-3">Final Decision</h2>
        <p>All refund requests are reviewed on a case-by-case basis. COURSE.XWAGON reserves the right to make the final decision regarding refunds. We may offer alternatives such as store credit or product exchanges in certain situations.</p>
        
        <p className="mt-6">If you have any questions about our refund policy, please contact our customer service team.</p>
      </div>
      
      <div className="flex mt-8">
        <a href="/dmca" className="text-gold hover:underline flex items-center gap-1">
          → View DMCA/Copyright
        </a>
      </div>
    </div>
  );
};

export default RefundPage;