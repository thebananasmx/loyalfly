
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Loyalfly. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/terminos" className="text-sm text-gray-500 hover:text-black">Terms of Service</Link>
            <Link to="/pricing" className="text-sm text-gray-500 hover:text-black">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
