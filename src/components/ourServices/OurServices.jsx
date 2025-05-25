import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const OurServices = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const services = [
    {
      id:0,
      title: "Site Support Services",
      description: "Comprehensive site support solutions including modern accommodation, professional catering.",
      features: [
        "Professional catering  ",
        "Comfortable accommodation",
        "Recreation areas",
        "entertainment options",
      ],
      image: "/assets/images/services/siteSuport/site (22).jpg"
    },
    {
      id:1,
      title: "Civil Engineering Design",
      description: "Comprehensive engineering design services for buildings, infrastructure, and industrial facilities.",
      features: [
        "Architectural design",
        "Structural analysis",
        "Infrastructure planning",
        "Technical documentation"
      ],
      image: "/assets/images/services/serviceBg.jpg"
    },
    {
      id:2,
      title: "Construction Supervision",
      description: "Expert oversight and management of construction projects from inception to completion.",
      features: [
        "Quality control",
        "Timeline management",
        "Safety compliance",
        "Progress monitoring"
      ],
      image: "/assets/images/projects/crane/crane5.jpg"
    },
    {
      id:3,
      title: "Equipment Supply and Rental",
      description: "Wide range of construction and industrial equipment available for rent or purchase.",
      features: [
        "Heavy machinery",
        "Construction tools",
        "Equipment maintenance",
        "Technical support"
      ],
       image: "/assets/images/projects/maintenansCrane/mcrane3.jpg"
    },
    {
      id:4,
      title: "Iraqi Manpower Operation",
      description: "Skilled workforce solutions for construction and engineering projects.",
      features: [
        "Skilled labor",
        "Technical staff",
        "Training programs",
        "Workforce management"
      ],
  image: "/assets/images/projects/powerPlanet/amarah/amarah1.jpg"
    },
    {
      id:5,
      title: "General Trading and Logistics",
      description: "Comprehensive trading and logistics support for construction projects.",
      features: [
        "Material procurement",
        "Supply chain management",
        "Import/Export services",
        "Inventory management"
      ],
       image: "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet11.jpg"
    }
  ];

  const displayedServices = isHomePage ? services.slice(0, 3) : services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Comprehensive construction and engineering solutions tailored to meet your project needs
          </p>
        </div>

        <div className="grid grid-cols-1  gap-10 max-w-6xl mx-auto">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0  ? 'lg:lg:flex-row flex items-center flex-col': 'flex lg:flex-row  items-center flex-col'}  bg-white rounded overflow-hidden  transition-all duration-300 `}
            >
              <div className="relative  lg:w-1/2 w-full h-[25rem] overflow-hidden bg-gradient-to-b group from-yellow-600 via-yellow-300 to-white pt-1 px-1">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0  transition-colors duration-300" />
                <h3 className="absolute bottom-10 left-4  text-xl font-bold text-white bg-gradient-to-r from-black/50 to translate-x-0 rounded-full pl-2">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 pb-0 relative w-full max-w-lg">
                <p className="text-gray-800 text-2xl font-semibold  mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 text-xl">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block w-fit text-center py-2 px-10 hover:bg-black border   border-black text-black hover:text-white font-semibold rounded  transition-colors duration-300"
                >
                  Request Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block w-full lg:w-fit py-2 px-8 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;