import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Crane Evaluation at Rumaila Power Station",
      description:
        "Comprehensive evaluation and inspection of multiple crane systems including 130-ton, 25-ton, 16-ton, and 3.2-ton capacity cranes.",
      features: [
        "130-ton heavy-duty crane inspection",
        "25-ton medium capacity crane evaluation",
        "16-ton operational assessment",
        "3.2-ton auxiliary crane inspection",
      ],
      date: "July 30, 2024",
      location: "Rumaila",
      category: "Equipment Inspection",
      images: [
        "/assets/images/projects/crane/crane1.jpg",
        "/assets/images/projects/crane/crane2.jpg",
        "/assets/images/projects/crane/crane3.jpg",
        "/assets/images/projects/crane/crane4.jpg",
        "/assets/images/projects/crane/crane5.jpg",
        "/assets/images/projects/crane/crane6.jpg",
        "/assets/images/projects/crane/crane7.jpg",
        "/assets/images/projects/crane/crane8.jpg",
        "/assets/images/projects/crane/crane9.jpg",
        "/assets/images/projects/crane/crane10.jpg",
  
      ],
    },
    {
      title: "Turbine Inlet Cooling System Project",
      description:
        "Installation and implementation of advanced cooling system for Unit 1 at Kirkuk Gas Power Plant.",
      features: [
        "Advanced cooling system installation",
        "Performance optimization",
        "System integration",
        "Efficiency enhancement",
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/turbine/turbine1.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine2.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine3.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine4.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine5.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine6.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine7.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine8.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine9.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine10.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine11.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine12.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine13.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine14.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine15.jpg",
        "/assets/images/projects/powerPlanet/turbine/turbine16.jpg",
        
      ],
    },
    {
      title: "Maintenance of Cranes at Rumaila Power Plant (RPP)",
      description:
        "Routine and corrective maintenance services for various crane systems at the Rumaila Power Plant, ensuring optimal performance and safety.",
      features: [
        "Regular maintenance schedule",
        "Safety inspections",
        "Performance optimization",
        "Emergency repairs",
      ],
      date: "2024",
      location: "Rumaila",
      category: "Equipment Maintenance",
      images: [
        "/assets/images/projects/maintenansCrane/mcrane1.jpg",
        "/assets/images/projects/maintenansCrane/mcrane2.jpg",
        "/assets/images/projects/maintenansCrane/mcrane3.jpg",
        "/assets/images/projects/maintenansCrane/mcrane4.jpg",
        "/assets/images/projects/maintenansCrane/mcrane5.jpg",
        "/assets/images/projects/maintenansCrane/mcrane6.jpg",
        "/assets/images/projects/maintenansCrane/mcrane7.jpg",
        "/assets/images/projects/maintenansCrane/mcrane8.jpg",
      ],
    },
    {
      title: "Kirkuk Gas Power Plant Projects",
      description:
        "Various ongoing and completed projects at the Kirkuk Gas Power Plant, focusing on upgrades, maintenance, and efficiency improvements.",
      features: [
        "System upgrades",
        "Maintenance operations",
        "Efficiency improvements",
        "Technical support",
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet1.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet2.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet3.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet4.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet5.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet6.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet7.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet8.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet9.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet10.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet11.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet12.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet13.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet14.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet15.jpg",
        "/assets/images/projects/powerPlanet/kirkuk/kPowerPlanet16.jpg",
      ],
    },
    {
      title: "Basrah Rumaila Power Plant (RPP) Project",
      description:
        "Supporting major operations and logistics for the Rumaila Power Plant project in Basrah.",
      features: [
        "Operational support",
        "Logistics management",
        "Technical assistance",
        "Project coordination",
      ],
      date: "2024",
      location: "Basrah, Rumaila",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/basra/basra1.jpg",
        "/assets/images/projects/powerPlanet/basra/basra2.jpg",
        "/assets/images/projects/powerPlanet/basra/basra3.jpg",
        "/assets/images/projects/powerPlanet/basra/basra4.jpg",
        "/assets/images/projects/powerPlanet/basra/basra5.jpg",
        "/assets/images/projects/powerPlanet/basra/basra6.jpg",
        "/assets/images/projects/powerPlanet/basra/basra7.jpg",
        "/assets/images/projects/powerPlanet/basra/basra8.jpg",
      ],
    },
    {
      title: "Transporting Generator Unit to Khurmala Power Plant",
      description:
        "Specialized heavy transport logistics for delivering a large generator unit to the Khurmala Power Plant site.",
      features: [
        "Heavy transport logistics",
        "Route planning",
        "Safety measures",
        "Equipment handling",
      ],
      date: "2024",
      location: "Khurmala",
      category: "Logistics",
      images: [
       "/assets/images/projects/powerPlanet/khurmala/khurmala1.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala2.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala3.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala4.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala5.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala6.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala7.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala8.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala9.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala10.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala11.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala12.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala13.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala14.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala15.jpg",
        "/assets/images/projects/powerPlanet/khurmala/khurmala16.jpg",
      ],
    },
    {
      title: "Kirkuk Gas Power Plant Upgrading and Rehabilitation",
      description:
        "Comprehensive upgrade and rehabilitation project for the Kirkuk Gas Power Plant, including project crew coordination.",
      features: [
        "System upgrading",
        "Equipment rehabilitation",
        "Crew coordination",
        "Quality assurance",
      ],
      date: "2024",
      location: "Kirkuk",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk1.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk2.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk3.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk4.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk5.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk6.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk7.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk8.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk9.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk10.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk11.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk12.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk13.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk14.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk15.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk16.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk17.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk18.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk19.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk20.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk21.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk22.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk23.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk24.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk25.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk26.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk27.jpg",
        "/assets/images/projects/powerPlanet/upgKirkuk/upgKirkuk28.jpg",
      ],
    },
    {
      title: "The Power Plant Project in Amarah Maysan",
      description:
        "Involvement in the construction and development phases of the power plant project located in Amarah, Maysan province.",
      features: [
        "Construction management",
        "Development planning",
        "Technical implementation",
        "Project oversight",
      ],
      date: "2023",
      location: "Amarah, Maysan",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/amarah/amarah1.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah2.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah3.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah4.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah5.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah6.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah7.jpg",
        "/assets/images/projects/powerPlanet/amarah/amarah8.jpg",
      ],
    },
    {
      title: "Shatt Al-Basra Gas-Fired Power Station Project",
      description:
        "Contribution to the development of the Shatt Al-Basra Gas-Fired Power Station.",
      features: [
        "Station development",
        "Gas system installation",
        "Infrastructure setup",
        "Technical planning",
      ],
      date: "2023",
      location: "Shatt Al-Basra",
      category: "Power Plant",
      images: [
        "/assets/images/projects/powerPlanet/shatt/shatt1.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt2.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt3.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt4.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt5.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt6.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt7.jpg",
        "/assets/images/projects/powerPlanet/shatt/shatt8.jpg",
      ],
    },
    // {
    //   title: "Industrial Complex Development",
    //   description:
    //     "State-of-the-art industrial facility with modern infrastructure",
    //   features: [
    //     "Modern infrastructure",
    //     "Facility planning",
    //     "Construction management",
    //     "Technical implementation",
    //   ],
    //   date: "2023",
    //   location: "Baghdad",
    //   category: "Construction",
    //   images: [
    //     "/assets/images/bgHome/bg2.jpg",
    //     "/assets/images/bgHome/bg2.jpg",
    //     "/assets/images/bgHome/bg3.jpg",
    //     "/assets/images/bgHome/bg4.jpg",
    //   ],
    // },
    // {
    //   title: "Industrial Complex Development",
    //   description:
    //     "State-of-the-art industrial facility with modern infrastructure",
    //   features: [
    //     "Modern infrastructure",
    //     "Facility planning",
    //     "Construction management",
    //     "Technical implementation",
    //   ],
    //   date: "2023",
    //   location: "Baghdad",
    //   category: "Construction",
    //   images: [
    //     "/assets/images/bgHome/bg2.jpg",
    //     "/assets/images/bgHome/bg2.jpg",
    //     "/assets/images/bgHome/bg3.jpg",
    //     "/assets/images/bgHome/bg4.jpg",
    //   ],
    // },
  ];
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Power Plant",
    "Logistics",
    // "Construction",
    "Equipment Inspection",
    "Equipment Maintenance",
  ];

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = projects.filter(
      (project) =>
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
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful projects across Iraq, showcasing
          our expertise in power plant construction, equipment maintenance, and
          logistics.
        </p>
        <Link
          tp="/site-support" 
          className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
        >
          View Site Support
        </Link>
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
                onClick={() => {
                  handleCategoryFilter(category);
                  window.scrollTo({ top: 900, behavior: "smooth" });
                }}
                className={`px-4 py-1  text-sm lg:text-lg rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
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

              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

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
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 p-4 ">
              {project.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${project.title} image ${idx + 1}`}
                  className="w-full h-96 object-cover rounded hover:opacity-90 transition-opacity cursor-pointer"
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
