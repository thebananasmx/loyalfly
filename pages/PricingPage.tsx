
import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#00AA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingTier: React.FC<{ title: string; price: string; description: string; features: string[]; ctaText: string; isFeatured?: boolean; }> = ({ title, price, description, features, ctaText, isFeatured = false }) => (
  <div className={`border rounded-lg p-8 flex flex-col ${isFeatured ? 'border-black' : 'border-gray-200'}`}>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-500">{description}</p>
    <p className="mt-6 text-4xl font-bold">{price}<span className="text-lg font-normal text-gray-500">/mo</span></p>
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon />
          <span className="ml-3 text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-8">
      <Link to="/login" className={`block w-full text-center px-6 py-3 rounded-md font-semibold ${isFeatured ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
        {ctaText}
      </Link>
    </div>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold">Simple Pricing for Every Business</h1>
          <p className="mt-4 text-lg text-gray-500">Choose the plan that's right for you. Start for free.</p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <PricingTier
            title="Free"
            price="$0"
            description="Perfect for getting started."
            features={['Up to 10 active customers', '1 Loyalty Card Design', 'Basic Analytics']}
            ctaText="Start for Free"
          />
          <PricingTier
            title="Entrepreneur"
            price="$19"
            description="For growing businesses."
            features={['Up to 100 active customers', 'Unlimited Card Designs', 'Customer Insights', 'Email Support']}
            ctaText="Get Started"
            isFeatured={true}
          />
          <PricingTier
            title="Pro"
            price="$49"
            description="For established businesses."
            features={['100+ active customers', 'All Entrepreneur features', 'Data Export', 'Priority Support']}
            ctaText="Contact Us"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
