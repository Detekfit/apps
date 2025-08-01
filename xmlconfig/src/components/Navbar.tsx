import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://play-lh.googleusercontent.com/Vl53L60zPmNhyu9vlRbYfryNjD945Unqt3BO2BX-gBWKHx9tizOXchzfv_OPkzk6U6n5=w512-h512-rw"
                alt="Xml Config"
                className="h-7 w-7 rounded"
              />
              <span className="text-sm font-medium text-white">Xml Config: Camera Perest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-black bg-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-100 transition-colors border border-white"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 z-50 transform transition-transform duration-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <span className="text-white text-sm font-medium">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-1"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      isActive(item.href)
                        ? 'text-black bg-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-800 mt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white text-black px-3 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors border border-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;