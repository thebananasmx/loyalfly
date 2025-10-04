
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Customer Loyalty, Simplified.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">Create a digital loyalty card for your business in minutes. No apps, no plastic cards. Just happy, returning customers.</p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/pricing" className="bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-transform hover:scale-105">View Pricing</Link>
            <Link to="/login" className="bg-white text-black border border-gray-300 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-transform hover:scale-105">Business Login</Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Loyalfly?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Increase Customer Retention</h3>
              <p className="text-gray-500">Reward your most loyal customers and give them a reason to come back again and again.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Simple & Digital</h3>
              <p className="text-gray-500">No need for customers to download another app. Everything works through their phone's web browser.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Gain Insights</h3>
              <p className="text-gray-500">Understand your customer base better with simple analytics on stamps and rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">For Businesses That Value Loyalty</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-500">
            Loyalfly is the perfect tool for coffee shops, barbers, small retailers, and any business that thrives on repeat customers.
            Stop printing paper cards that get lost or thrown away. Go digital and create a seamless loyalty experience your customers will love.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
