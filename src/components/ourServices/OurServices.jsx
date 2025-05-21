import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHotel, FaHardHat, FaTools, FaTruck, FaUsers, FaBoxes } from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      title: "Site Support Services",
      description: "Comprehensive site support solutions including modern accommodation, professional catering, and recreational facilities for your workforce.",
      features: [
        "Professional catering services with diverse menu options",
        "Comfortable accommodation facilities",
        "Recreation areas with entertainment options"
      ],
      icon: <FaHotel className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Civil and Structural Engineering Design",
      description: "Comprehensive engineering design services for buildings, infrastructure, and industrial facilities.",
      features: [
        "Architectural design",
        "Structural analysis",
        "Infrastructure planning",
        "Technical documentation"
      ],
      icon: <FaHardHat className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Construction Supervision & Project Management",
      description: "Expert oversight and management of construction projects from inception to completion.",
      features: [
        "Quality control",
        "Timeline management",
        "Safety compliance",
        "Progress monitoring"
      ],
      icon: <FaTools className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Equipment Supply and Rental",
      description: "Wide range of construction and industrial equipment available for rent or purchase.",
      features: [
        "Heavy machinery",
        "Construction tools",
        "Equipment maintenance",
        "Technical support"
      ],
      icon: <FaTruck className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "Iraqi Manpower Operation",
      description: "Skilled workforce solutions for construction and engineering projects.",
      features: [
        "Skilled labor",
        "Technical staff",
        "Training programs",
        "Workforce management"
      ],
      icon: <FaUsers className="w-16 h-16 text-yellow-500" />
    },
    {
      title: "General Trading and Logistics",
      description: "Comprehensive trading and logistics support for construction projects.",
      features: [
        "Material procurement",
        "Supply chain management",
        "Import/Export services",
        "Inventory management"
      ],
      icon: <FaBoxes className="w-16 h-16 text-yellow-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and engineering solutions tailored to meet your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
           
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center py-8 bg-gray-50 bg-yellow-500/10 transition-colors duration-300">
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-yellow-500/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 relative">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 relative">
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
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
                  }}
                  to="/contact"
                  className="inline-block w-full text-center py-3 px-6  bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300 relative"
                >
                  Request Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;