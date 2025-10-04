
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const linkStyle = "text-sm hover:text-gray-600 transition-colors py-2";
  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  const navLinks = (
    <>
      <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Home</NavLink>
      <NavLink to="/pricing" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Pricing</NavLink>
      {user ? (
        <>
          <NavLink to="/app/dashboard" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Dashboard</NavLink>
          <NavLink to="/app/tarjeta" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : {}}>My Card</NavLink>
          <button onClick={handleLogout} className={`${linkStyle} text-left`}>Logout</button>
        </>
      ) : (
        <NavLink to="/login" className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">Login</NavLink>
      )}
    </>
  );

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold">Loyalfly</NavLink>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
