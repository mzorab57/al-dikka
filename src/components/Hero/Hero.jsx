import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const services = [
  {
    title: "Process Engineering",
    description:
      "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi",
    image: "/assets/images/bgHome/bg1.jpg",
  },
  {
    title: "Chemistry and Metallurgy",
    description:
      "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi",
    image: "/assets/images/bgHome/bg2.jpg",
  },
  {
    title: "Electrical Engineering",
    description:
      "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi",
    image: "/assets/images/bgHome/bg3.jpg",
  },
  {
    title: "Specialty Services",
    description:
      "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi",
    image: "/assets/images/bgHome/bg4.jpg",
  },
  {
    title: "Renovation Services",
    description:
      "Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi",
    image: "/assets/images/bgHome/bg5.jpg",
  },
];

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/videos/bgVideo.MP4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

      {/* Main Content */}
      <div className="container mx-auto relative z-20 h-full">
    

        <Swiper
          modules={[Autoplay, EffectFade, Thumbs, Pagination]}
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{
            clickable: true,
            el: ".hero_slider-nav",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
            vertical: true,
          }}
          loop
          className="h-[calc(100vh-100px)]"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                  <div className="max-w-3xl  p-8 rounded-lg">
                    <h2 className="text-gray-300 text-4xl md:text-5xl font-semibold mb-6 drop-shadow-lg">
                      Process Engineering
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mb-8 drop-shadow-md">
                      {service.description}
                    </p>
                    <a
                      href="single-service.html"
                      className="inline-block p-[2px]  bg-yellow-500 text-white b0 px-8 py-3 rounded  transition-colors  text-x shadow-lg"
                    >
                      Service Details
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Vertical Navigation */}
      <div className="hero_slider-nav absolute right-8 top-1/2 transform  translate-y-1/2 flex flex-col space-y-3 z-30" />

      {/* Thumbnails Slider */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Thumbs]}
            watchSlidesProgress
            className="mt-8"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer group">
                  <div className="relative h-56 md:h-60 overflow-hidden rounded transform transition-all duration-500 hover:scale-105">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 p-[2px] rounded bg-gradient-to-r from-yellow-400 via-yellow-500  to-yellow-600">
                      <div className="h-full w-full rounded overflow-hidden ">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity group-hover:opacity-75" />
                        
                        {/* Title Container with Gradient */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                          <h4 className="text-gray-300/80 text-sm md:text-base font-semibold truncate transform transition-transform group-hover:translate-y-[-4px]">
                            {service.title}
                          </h4>
                          <p className="text-yellow-400 text-xs md:text-sm opacity-100  transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            View Details
                          </p>
                        </div>  
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .custom-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
          
        }
        .custom-bullet-active {
          background: #EAB308;
          box-shadow: 0 0 0 2px rgba(234, 179, 8, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
