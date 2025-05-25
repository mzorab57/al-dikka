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
    image: "/assets/images/bgHome/bg1.jpg",
  },
  {
    title: "Chemistry and Metallurgy",
    
    image: "/assets/images/bgHome/bg2.jpg",
  },
  {
    title: "Electrical Engineering",
    
    image: "/assets/images/bgHome/bg3.jpg",
  },
  {
    title: "Specialty Services",
    
    image: "/assets/images/bgHome/bg4.jpg",
  },
  {
    title: "Renovation Services",
    
    image: "/assets/images/bgHome/bg5.jpg",
  },
];

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
       {/* Sun rays effect */}
       <div className="absolute inset-0  animate-float  z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute -top-4  -right-10 w-full mt-24 h-1 rounded-full bg-gradient-to-r from-yellow-300/50 via-yellow-200/10 to-transparent"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    // transform: `translateX(100%, 100%) )`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
            </div>
       <div className="absolute inset-0  animate-float  z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute -top-4  -right-10 w-full mt-[6.4rem] h-2 rounded-full bg-gradient-to-r from-yellow-300/15 via-yellow-200/10 to-transparent"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    // transform: `translateX(100%, 100%) )`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
            </div>
            
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
              <div className="relative h-full flex justify-center items-center">
                <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                  <div className="max-w-3xl text-center     rounded-lg">
                    <h2 className="text-gray-300 uppercase text-4xl md:text-7xl font-semibold mb-2 drop-shadow-lg">
                    Engineering Iraq's Future
                    </h2>
                    <p className="text-gray-300 w-full place-self-center max-w-xl uppercase text-base md:text-lg  drop-shadow-md">
                    From Design to Delivery - Your Trusted Partner in Engineering Excellence
                    </p>
                    <a
                      href="single-service.html"
                      className="inline-block p-[2px] bg-yellow-400 border uppercase border-yellow-400 hover:bg-yellow-500 text-white b0 px-5 py-2 rounded  transition-colors  text-x shadow-lg"
                    >
                      Service Details
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* <div className="hero_slider-nav absolute   top-[26.5rem]  transform  flex flex-col space-y-4 z-10" /> */}
      </div>

      {/* Vertical Navigation */}

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
          position: relative;
       
        }
        
        .custom-bullet::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 100%;
          border: 2px solid rgba(234, 179, 8, 0.3);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .custom-bullet:hover::before {
          opacity: 1;
        }
        
        .custom-bullet-active {
          background: #EAB308;
          box-shadow: 0 0 0 2px rgba(234, 179, 8, 0.3);
        }
        
        .custom-bullet-active::before {
          opacity: 1;
          border-color: #EAB308;
        }
      `}</style>
    </section>
  );
};

export default Hero;
