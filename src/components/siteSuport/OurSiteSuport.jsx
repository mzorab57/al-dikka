import React from 'react';
import { Link } from 'react-router-dom';

const OurSiteSuport = () => {
  const siteSuportData = {
    projects: [
      {
        id: 1,
        title: "Professional Catering Services",
        category: ["Services", "Catering"],
        image: "/assets/images/bgHome/bg1.jpg",
        link: "/services/catering",
        size: "2x",
        description: "Diverse menu options tailored to your workforce needs"
      },
      {
        id: 2,
        title: "Comfortable Accommodation",
        category: ["Services", "Accommodation"],
        image: "/assets/images/bgHome/bg3.jpg",
        link: "/services/accommodation",
        description: "Modern and comfortable living spaces for your team"
      },
      {
        id: 3,
        title: "Recreation Facilities",
        category: ["Services", "Recreation"],
        image: "/assets/images/bgHome/bg4.jpg",
        link: "/services/recreation",
        description: "Entertainment and relaxation areas for workforce"
      },
      {
        id: 4,
        title: "Comfortable Accommodation",
        category: ["Services", "Accommodation"],
        image: "/assets/images/bgHome/bg4.jpg",
        link: "/services/accommodation",
        description: "Modern and comfortable living spaces for your team"
      },
      {
        id: 5,
        title: "Recreation Facilities",
        category: ["Services", "Recreation"],
        image: "/assets/images/bgHome/bg5.jpg",
        link: "/services/recreation",
        description: "Entertainment and relaxation areas for workforce"
      }
    ]
  };

  return (
    <section className="">
      <div className="container mx-auto mb-16">
        <div className=" mb-12  ">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 w-full">
            Site Support Services
          </h2>
          {/* <div className="border-r-gray-900 mb-4 border-r h-12" /> */}
          <p className="text-xl text-gray-600 px-2 w-full">
            Comprehensive site support solutions including modern accommodation, <br/> professional catering, 
            and recreational facilities for your workforce.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
        {siteSuportData.projects.map((project) => (
          <div
            key={project.id}
            className={`relative group overflow-hidden ${project.size === '2x' ? 'sm:col-span-2 sm:row-span-2' : ''}`}
          >
            <div className="relative">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Link to={project.link}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h5 className="text-white text-xl font-semibold">{project.title}</h5>
                  <i className="text-white text-2xl ml-2">+</i>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <h5>
                    <Link to={project.link} className="text-xl font-semibold hover:text-primary">
                      {project.title}
                    </Link>
                  </h5>
                  <p className="mt-2">
                    {Array.isArray(project.category) ? (
                      project.category.map((cat, index) => (
                        <span key={index}>
                          <Link to={`/category/${cat.toLowerCase()}`} className="text-gray-600 hover:text-primary">
                            {cat}
                          </Link>
                          {index < project.category.length  ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      <Link to={`/category/${project.category.toLowerCase()}`} className="text-gray-600 hover:text-primary">
                        {project.category}
                      </Link>
                    )}
                  </p>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSiteSuport;