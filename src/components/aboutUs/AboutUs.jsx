import React from "react";
import CoreValues from "../coreValues/CoreValues";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="relative py-16 overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 lg:bg-cover -z-10"
        style={{
          // backgroundImage: 'url("/assets/images/shape2.jpg")',
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6">
              About Al-Dikka Engineering
            </h1>
            <p className="text-3xl text-gray-600 mb-8">
              Established in 2004, we are a leading multidisciplinary
              engineering firm in Iraq
            </p>
            {isHomePage && (
              <Link
                to="/about"
                onClick={()=> window.scrollTo(0, 0)} 
                className="inline-block bg-yellow-400/20 border border-yellow-400 hover:bg-yellow-400 text-gray-800 px-8 py-3 rounded transition-colors shadow-lg"
              >
                More About
              </Link>
            )}
          </div>
          {/* Globe Image with Gradient */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/40 via-transparent to-yellow-400/30 rounded-full transition-opacity duration-700 delay-100" />
            <img
              src="/assets/images/earthShape.png"
              alt="Global Presence"
              className="w-full h-auto animate-float relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
