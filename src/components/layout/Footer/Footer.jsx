import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Al-Dikka Engineering</h3>
            <p className="text-gray-400 mb-4">Providing quality engineering services and solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Equipment Maintenance</li>
              <li className="text-gray-400">Power Plant Rehabilitation</li>
              <li className="text-gray-400">Power Plant Construction</li>
              <li className="text-gray-400">Engineering Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center">
                <a href="https://wa.me/9647706141190" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                  <FaPhone className="mr-2" /> 07706141190
                </a>
              </p>
              <p className="text-gray-400 flex items-center">
                <a href="mailto:info@al-dikkaengineering.com" className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                  <FaEnvelope className="mr-2" /> info@al-dikkaengineering.com
                </a>
              </p>
              <p className="text-gray-400 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> صلاح الدين - قضاء بيجي - الحي العسكري -قرب دائرة توزيع كهرباء بيجي
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Al-Dikka Engineering. All rights reserved. | Developed by{' '}
            <a 
              href="https://wa.me/9647701411893" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              TOP SOFT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
