import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const OurStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

 

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    if (mainSlider) {
      mainSlider.slickGoTo(index);
    }
    if (thumbnailSlider) {
      thumbnailSlider.slickGoTo(index);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // چارەسەری نوێ بۆ کێشەی scroll
    const preventAutoScroll = () => {
      if (window.location.hash === '#our-story') {
        window.history.pushState(null, '', window.location.pathname);
        const currentPosition = window.pageYOffset;
        window.location.hash = '';
        window.scrollTo(0, currentPosition);
      }
    };

    // چاودێریکردنی گۆڕانی hash و load بوونی پەڕە
    window.addEventListener('load', preventAutoScroll);
    window.addEventListener('hashchange', preventAutoScroll);
    preventAutoScroll();

    return () => {
      window.removeEventListener('load', preventAutoScroll);
      window.removeEventListener('hashchange', preventAutoScroll);
    };
  }, []);

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

  const images = [
    "/assets/images/about.jpg",
    "/assets/images/bgHome/bg2.jpg",
    "/assets/images/bgHome/bg3.jpg",
    "/assets/images/bgHome/bg4.jpg",
    "/assets/images/bgHome/bg4.jpg",
    "/assets/images/bgHome/bg3.jpg",
    "/assets/images/bgHome/bg2.jpg",
    "/assets/images/about.jpg",
  ];

  return (
    <section
      id="our-story"
      style={{ backgroundImage: 'url("/assets/images/shape4.jpg")' }}
      className="relative py-20 overflow-hidden"
    >
   

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Slider 
                {...sliderSettings} 
                className="w-full"
                ref={slider => setMainSlider(slider)}
              >
                {images.map((img, index) => (
                  <div key={index} className="relative w-full">
                    <img
                      src={img}
                      alt={`Al-Dikka Project ${index + 1}`}
                      className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                      style={{
                        clipPath: "polygon(10% 0%, 100% 0%, 89% 100%, 0% 100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/50 via-transparent to-transparent" />
                  </div>
                ))}
              </Slider>
              
              <div className="mt-4 w-full">
                <Slider 
                  {...thumbnailSettings} 
                  className="w-full"
                  ref={slider => setThumbnailSlider(slider)}
                >
                  {images.map((img, index) => (
                    <div 
                      key={index} 
                      className="px-1 sm:px-2"
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-full h-28 object-cover rounded-bl-xl rounded-tr-xl  cursor-pointer transition-all duration-300 
                          ${currentSlide === index ? 'opacity-100 border-yellow-500' : 'opacity-75 hover:opacity-100'}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2
              className="text-6xl font-bold text-neutral-200 mb-6"
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
                Al-Dikka Engineering Company for Contracting, General Trading,
                Preparing and Renting Machinery and Equipment, and Operating
                Iraqi Manpower Ltd. is a multidisciplinary firm offering
                integrated solutions across engineering, construction, equipment
                services, and workforce provision.
              </p>
              <p
                className="text-lg text-neutral-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We specialize in civil and structural engineering design,
                construction supervision, and project management for public and
                private sector projects.
              </p>
              <p
                className="text-lg text-neutral-400 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                We go beyond engineering—supplying and renting heavy machinery,
                and operating a large, skilled Iraqi workforce. Backed by
                experienced professionals and aligned with international
                standards, we provide reliable, cost-effective services with a
                focus on quality and safety.
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
