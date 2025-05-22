import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPowerOff, FaTools, FaTruck, FaIndustry } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  const projects = [
    {
      title: "Crane Evaluation at Rumaila Power Station",
      description: "Comprehensive evaluation and inspection of multiple crane systems including 130-ton, 25-ton, 16-ton, and 3.2-ton capacity cranes.",
      features: [
        "130-ton heavy-duty crane inspection",
        "25-ton medium capacity crane evaluation",
        "16-ton operational assessment",
        "3.2-ton auxiliary crane inspection"
      ],
      date: "July 30, 2024",
      location: "Rumaila",
      category: "Equipment Inspection",
      images: ["/assets/images/bgHome/bg1.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Turbine Inlet Cooling System Project",
      description: "Installation and implementation of advanced cooling system for Unit 1 at Kirkuk Gas Power Plant.",
      features: [
        "Advanced cooling system installation",
        "Performance optimization",
        "System integration",
        "Efficiency enhancement"
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg1.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Maintenance of Cranes at Rumaila Power Plant (RPP)",
      description: "Routine and corrective maintenance services for various crane systems at the Rumaila Power Plant, ensuring optimal performance and safety.",
      features: [
        "Regular maintenance schedule",
        "Safety inspections",
        "Performance optimization",
        "Emergency repairs"
      ],
      date: "2024",
      location: "Rumaila",
      category: "Equipment Maintenance",
      images: ["/assets/images/bgHome/bg5.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Kirkuk Gas Power Plant Projects",
      description: "Various ongoing and completed projects at the Kirkuk Gas Power Plant, focusing on upgrades, maintenance, and efficiency improvements.",
      features: [
        "System upgrades",
        "Maintenance operations",
        "Efficiency improvements",
        "Technical support"
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg4.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Basrah Rumaila Power Plant (RPP) Project",
      description: "Supporting major operations and logistics for the Rumaila Power Plant project in Basrah.",
      features: [
        "Operational support",
        "Logistics management",
        "Technical assistance",
        "Project coordination"
      ],
      date: "2024",
      location: "Basrah, Rumaila",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Transporting Generator Unit to Khurmala Power Plant",
      description: "Specialized heavy transport logistics for delivering a large generator unit to the Khurmala Power Plant site.",
      features: [
        "Heavy transport logistics",
        "Route planning",
        "Safety measures",
        "Equipment handling"
      ],
      date: "2024",
      location: "Khurmala",
      category: "Logistics",
      images: ["/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Kirkuk Gas Power Plant Upgrading and Rehabilitation",
      description: "Comprehensive upgrade and rehabilitation project for the Kirkuk Gas Power Plant, including project crew coordination.",
      features: [
        "System upgrading",
        "Equipment rehabilitation",
        "Crew coordination",
        "Quality assurance"
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg5.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "The Power Plant Project in Amarah Maysan",
      description: "Involvement in the construction and development phases of the power plant project located in Amarah, Maysan province.",
      features: [
        "Construction management",
        "Development planning",
        "Technical implementation",
        "Project oversight"
      ],
      date: "2023",
      location: "Amarah, Maysan",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg4.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Shatt Al-Basra Gas-Fired Power Station Project",
      description: "Contribution to the development of the Shatt Al-Basra Gas-Fired Power Station.",
      features: [
        "Station development",
        "Gas system installation",
        "Infrastructure setup",
        "Technical planning"
      ],
      date: "2023",
      location: "Shatt Al-Basra",
      category: "Power Plant",
      images: ["/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    },
    {
      title: "Industrial Complex Development",
      description: "State-of-the-art industrial facility with modern infrastructure",
      features: [
        "Modern infrastructure",
        "Facility planning",
        "Construction management",
        "Technical implementation"
      ],
      date: "2023",
      location: "Baghdad",
      category: "Construction",
      images: ["/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg2.jpg", "/assets/images/bgHome/bg3.jpg", "/assets/images/bgHome/bg4.jpg"]
    }
  ];

  const categories = ['all', 'Equipment Maintenance', 'Power Plant', 'Logistics', 'Construction'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-l-lg transition-all"
      aria-label="Next slide"
    >
      <MdKeyboardArrowRight className="text-2xl text-yellow-500" />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-r-lg transition-all"
      aria-label="Previous slide"
    >
      <MdKeyboardArrowLeft className="text-2xl text-yellow-500" />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    initialSlide: currentSlide,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    initialSlide: currentSlide,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section
      id="our-projects"
      // style={{ backgroundImage: 'url("/assets/images/shape4.jpg")' }}
      className="relative py-20 overflow-hidden bg-black"
    >
      <img src="/assets/images/shape1.png" className='absolute hidden lg:block -right-5 top-0 rotate-90 brightness-50' />
      <div className="container mx-auto px-4 relative z-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded overflow-hidden ">
              <Slider 
                {...sliderSettings} 
                className="w-full"
                ref={slider => setMainSlider(slider)}
              >
                {filteredProjects.map((project, index) => (
                  <div key={index} className="relative w-full">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                      // style={{
                      //   clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
                      // }}
                    />
                    
                  </div>
                ))}
              </Slider>
              
              <div className="mt-8 w-full">
                <Slider 
                  {...thumbnailSettings} 
                  className="w-full"
                  ref={slider => setThumbnailSlider(slider)}
                >
                  {filteredProjects.map((project, index) => (
                    <div 
                      key={index} 
                      className="px-1 sm:px-2"
                      onClick={() => {
                        setCurrentSlide(index);
                        if (mainSlider) mainSlider.slickGoTo(index);
                        if (thumbnailSlider) thumbnailSlider.slickGoTo(index);
                      }}
                    >
                      <img
                        src={project.images[0]}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-full h-28 object-cover rounded cursor-pointer transition-all duration-300 
                          ${currentSlide === index ? 'opacity-100 border-yellow-500' : 'opacity-75 hover:opacity-100'}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-6xl font-bold text-neutral-100 mb-6">
              Our Projects
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white/10 text-neutral-400 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project Details */}
            {filteredProjects.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500">
                  {filteredProjects[currentSlide].title}
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  {filteredProjects[currentSlide].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {filteredProjects[currentSlide].features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-neutral-400 space-x-2"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-neutral-400 mt-6">
                  <span>Location: {filteredProjects[currentSlide].location}</span>
                  <span>Date: {filteredProjects[currentSlide].date}</span>
                </div>
              </div>
            )}
          <div className='text-white border w-fit px-3 py-1 border-yellow-300 flex items-center gap-2 cursor-pointer hover:bg-yellow-300 hover:text-black transition-all'>
            View All Projects
            <MdKeyboardArrowRight className="text-xl" />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;