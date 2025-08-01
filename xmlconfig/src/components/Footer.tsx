import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img 
                src="https://play-lh.googleusercontent.com/Vl53L60zPmNhyu9vlRbYfryNjD945Unqt3BO2BX-gBWKHx9tizOXchzfv_OPkzk6U6n5=w512-h512-rw"
                alt="Xml Config"
                className="h-6 w-6 rounded"
              />
              <span className="text-sm font-medium text-white">Xml Config: Camera Perest</span>
            </div>
            <p className="text-gray-400 text-xs mb-4 max-w-sm">
              Camera configuration tool for Android. Download and apply XML configs to optimize camera performance.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-100 transition-colors border border-white"
            >
              Get App
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-xs transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © 2025 Wriink. All rights reserved.
          </p>
          <div className="flex items-center mt-3 sm:mt-0">
            <a
              href="https://www.wriink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;