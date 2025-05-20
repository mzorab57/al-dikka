import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section
    style={{backgroundImage: 'url("/assets/images/shape4.jpg")',}  }
    className="relative py-20 overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-yellow-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />
      </div>

      <div className="container mx-auto  px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div 
            className="lg:w-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
                       <div className="rounded overflow-hidden shadow-2xl">
             
              
              <img
                style={{
                  clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
                }}
                src="/assets/images/about.jpg"
                alt="Al-Dikka Engineering Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 
              className="text-5xl font-bold text-neutral-200 mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Story
            </h2>
            <div className="space-y-4">
              <p 
                className="text-lg text-neutral-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Al-Dikka Engineering Company for Contracting, General Trading, Preparing and Renting Machinery and Equipment, and Operating Iraqi Manpower Ltd. is a multidisciplinary firm offering integrated solutions across engineering, construction, equipment services, and workforce provision.
              </p>
              <p 
                className="text-lg text-neutral-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We specialize in civil and structural engineering design, construction supervision, and project management for public and private sector projects.
              </p>
              <p 
                className="text-lg text-neutral-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                We go beyond engineering—supplying and renting heavy machinery, and operating a large, skilled Iraqi workforce. Backed by experienced professionals and aligned with international standards, we provide reliable, cost-effective services with a focus on quality and safety.
              </p>
            </div>

            {/* Stats Section */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">19+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">50+</div>
                <div className="text-sm text-gray-600">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
