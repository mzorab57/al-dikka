import React from "react";
import OurStory from "../ourStory/OurStory";

const AboutUs = () => {
  return (
    <section className="relative py-16 overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 lg:bg-cover -z-10"
        style={{
          backgroundImage: 'url("/assets/images/shape2.jpg")',
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            {/* Sun rays effect */}
            <div className="absolute inset-0 max-w-md lg:max-w-full animate-float  -z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 lg:top-0 lg:-left-20 w-full mt-1 h-1 rounded-full bg-gradient-to-r from-yellow-100/10 via-yellow-300/10 to-blue-50"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    // transform: `translateX(100%, 100%) )`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 max-w-md lg:max-w-full animate-float  -z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2  lg:top-0 lg:-left-20 w-full h-5 rounded-full  bg-gradient-to-r from-yellow-100/5 via-yellow-300/5 to-blue-50"
                  style={{
                    transform: `translate(-49%, -20%) rotate(${i * 30}deg)`,
                    // transform: `translateX(100%, 100%) )`,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6">
              About Al-Dikka Engineering
            </h1>
            <p className="text-3xl text-gray-600 mb-8">
              Established in 2004, we are a leading multidisciplinary
              engineering firm in Iraq
            </p>
            <a
              href="single-service.html"
              className="inline-block p-[2px]   bg-yellow-400/20 border border-yellow-400 hover:bg-yellow-400 text-gray-800 b0 px-8 py-3 rounded  transition-colors  text-x shadow-lg"
            >
              More About
            </a>
          </div>
          {/* Globe Image with Gradient */}
          <div className="lg:w-1/2 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 via-yellow-100/20 to-transparent rounded-full blur-2xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/30 via-transparent to-yellow-400/30 rounded-full transition-opacity duration-700 delay-100" />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 via-transparent to-blue-500/20 rounded-full transition-opacity duration-700" />
            <img
              src="/assets/images/earthShape.png"
              alt="Global Presence"
              className="w-full h-auto animate-float relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Our Story Section */}
     <OurStory />

      {/* Core Values Section */}
      <div className="cs-feature-card-wrap lg-gutter-control py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 ">
            <h2 className="text-6xl font-bold text-gray-900 mb-4 ">
              Our Core Values
            </h2>
            {/* <h3>We Have Do Any Services</h3> */}
            {/* <div className="border-r-gray-900 mb-4 border-r h-12" /> */}
            <p className="text-xl text-gray-600 mb-3">
              The principles that guide our work
            </p>
          </div>

          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "Maintaining the highest standards in all our work",
                  icon: "/assets/images/coreIcon/icon2.svg",
                  bg: "/assets/images/coreIcon/coreBg.jpg",
                },
                {
                  title: "Teamwork",
                  description: "Collaborating to achieve exceptional results",
                  icon: "/assets/images/coreIcon/icon3.svg",
                  bg: "/assets/images/coreIcon/coreBg2.png",
                },
                {
                  title: "Reliability",
                  description: "Delivering on our promises, on time, every time",
                  icon: "/assets/images/coreIcon/icon1.svg",
                bg: "/assets/images/coreIcon/coreBg.jpg",
              },
           
            ].map((value, index) => (
              <div
                key={index}
                className=" relative border border-neutral-100 overflow-hidden bg-black/80  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent opacity-0 -hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-12 bg-contain"
                style={{ backgroundImage:`url(${value.bg})`} }
               
                >
                  <div className="size-16 mb-6   flex items-center justify-center -hover:scale-110 transition-transform duration-500">
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="size-24"
                    />
                  </div>
                  <h3 className={`text-2xl font-bold  mb-4 ${index === 1?  'text-white' :'text-gray-900'} `} >
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 -hover:text-gray-700 transition-colors duration-300 ${index === 1?  'text-neutral-300' :'text-gray-900'}`}>
                    {value.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 -hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>




      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
