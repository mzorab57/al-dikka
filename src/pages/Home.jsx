import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "https://arkio-next.netlify.app/images/slider/slide-6.jpg" },
    { image: "https://arkio-next.netlify.app/images/slider/slide-5.jpg" },
    { image: "https://arkio-next.netlify.app/images/slider/slide-4.jpg" },
  ];

  const services = [
    {
      image: "/images/services/service1.jpg",
      title: "Process Engineering",
      text: "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare.",
      link: "/services/process-engineering",
    },
    {
      image: "/images/services/service2.jpg",
      title: "Chemistry and Metallurgy",
      text: "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare.",
      link: "/services/chemistry",
    },
    {
      image: "/images/services/service3.jpg",
      title: "Electrical Engineering",
      text: "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare.",
      link: "/services/electrical",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-red-500">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden ">
        {/* Animated Lines */}
        <div className="absolute inset-0 flex justify-around z-10">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="relative">
              {/* Static Gray Line */}
              <div className="absolute w-[3px] h-full bg-gray-500 opacity-20" />

              {/* Animated Yellow Line */}
              <div
                className="absolute w-[4px] bg-yellow-400 opacity-70 shadow-lg shadow-yellow-400/50"
                style={{
                  animation: `lineMove 8s linear infinite ${index * 0.8}s`,
                  transformOrigin: "top",
                  position: "absolute",
                  top: "0",
                  height: "15px",
                }}
              />
            </div>
          ))}
        </div>

        {/* Hero Slider */}
        <div className="relative h-full ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="container mx-auto h-full flex items-center justify-center text-center">
                <div className="text-white z-20">
                  <h2 className="text-6xl font-bold mb-8 animate-fadeIn">
                    Best Interior Design
                  </h2>
                  <Link
                    to="/about"
                    className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-yellow-400 scale-125"
                    : "bg-white bg-opacity-40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-lg font-semibold uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <div className="relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-white">
                    <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-300 mb-8">{service.text}</p>
                    <Link
                      to={service.link}
                      className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
                    >
                      Service Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-yellow-400 scale-125"
                    : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
