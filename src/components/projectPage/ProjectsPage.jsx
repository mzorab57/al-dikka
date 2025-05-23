import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';

const ProjectsPage = () => {
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
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Power Plant','Logistics', , 'Construction','Equipment Inspection', 'Equipment Maintenance' ];

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = projects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query)
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our portfolio of successful projects across Iraq, showcasing our expertise in power plant construction, equipment maintenance, and logistics.</p>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-16 lg:top-20 z-10 bg-white py-4 mb-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="space-x-1 space-y-1  overflow-x-auto ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {handleCategoryFilter(category); window.scrollTo({ top: 900, behavior: 'smooth' })}}
                className={`px-4 py-1  text-sm lg:text-lg rounded-full transition-all ${activeCategory === category
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1  gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden  "
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <BsCalendar3 className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-500">
                  <MdLocationOn className="mr-2" />
                  <span>{project.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 p-4 ">
              {project.images.slice(0, 4).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${project.title} image ${idx + 1}`}
                  className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity cursor-pointer"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
