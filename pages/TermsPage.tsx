
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>Please read these terms and conditions carefully before using Our Service.</p>

          <h2 className="text-2xl font-semibold pt-4">1. Interpretation and Definitions</h2>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h2 className="text-2xl font-semibold pt-4">2. Acknowledgment</h2>
          <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
          <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
          
          <h2 className="text-2xl font-semibold pt-4">3. User Accounts</h2>
          <p>When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.</p>

          <h2 className="text-2xl font-semibold pt-4">4. Termination</h2>
          <p>We may terminate or suspend Your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
          
          <h2 className="text-2xl font-semibold pt-4">5. Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, You can contact us by email: support@loyalfly.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
