import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HowWeWork = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  const processSteps = [
    {
      step: 1,
      title: "Inquiry & Consultation",
      description: "We start by understanding your needs and vision. And We Our team discusses your goals, project scope, and budget to tailor the perfect solution."
    },
    {
      step: 2,
      title: "Proposal & Agreement",
      description: "Here, we present a detailed plan that outlines deadlines, costs and milestones. This ensures transparency and sets clear expectations from the start."
    },
    {
      step: 3,
      title: "Execution & Collaboration",
      description: "Our experts manage the project with regular updates and open communication. We work closely with you to achieve the best possible outcomes."
    },
    {
      step: 4,
      title: "Delivery & After-Sales Support",
      description: "Once the project is delivered, we conduct a thorough review and provide ongoing aftercare. Your satisfaction is our priority, and we ensure everything meets your expectations."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
        <img 
          src="/assets/images/howWe.webp" 
          alt="" 
          className='absolute right-0 bottom-0' 
       
        />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            How We Work <span className="text-yellow-500">Together</span> ?
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We celebrate the opportunity each project brings and leverage our 30+ years of experience 
            to deliver customized construction solutions.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Center Number */}
      
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-[120px] font-sans font-bold text-yellow-500/50 hidden xl:block">
              04
            </div>
            <div className="text-center font-bold text-gray-600 text-3xl  ">
              STEPS
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center   max-w-5xl mx-auto ">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative "
              >
                <div className={`flex flex-col py-5 h-72 items-center gap-8 
                  ${step.step === 1 ? 'border-r border-b' : 
                    step.step === 2 ? 'border-l border-b' : 
                    step.step === 3 ? 'border-r' : 
                    'border-l'}`}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
       
      </div>
    </section>
  );
};

export default HowWeWork;