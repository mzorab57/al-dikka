import  { useState } from 'react'
import PagesHeader from '../components/ui/PagesHeader'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const SiteSuport = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const services = [
    {
      title: "Professional Catering Services",
      description: "Diverse menu options prepared by experienced chefs, ensuring your workforce enjoys nutritious and delicious meals.",
      image: "/assets/images/services/siteSuport/site (35).jpg",
      features: [
        "International cuisine options",
        "Special dietary accommodations",
        "Hygienic food preparation",
        "Regular menu rotation"
      ]
    },
    {
      title: "Comfortable Accommodation",
      description: "Modern and well-maintained living spaces designed for comfort and rest after long work hours.",
      image: "/assets/images/services/siteSuport/site (56).jpg",
      features: [
        "Clean and spacious rooms",
        "Climate-controlled environments",
        "Regular maintenance",
        "24/7 security"
      ]
    },
    {
      title: "Recreation Areas",
      description: "Entertainment facilities to help your workforce relax and maintain high morale during off-hours.",
      image: "/assets/images/services/siteSuport/site (40).jpg",
      features: [
        "Entertainment centers",
        "Fitness facilities",
        "Common areas",
        "Outdoor spaces"
      ]
    }
  ];

  const galleryImages = [
    "/assets/images/services/siteSuport/site (1).jpg",
    "/assets/images/services/siteSuport/site (2).jpg",
    "/assets/images/services/siteSuport/site (3).jpg",
    "/assets/images/services/siteSuport/site (4).jpg",
    "/assets/images/services/siteSuport/site (5).jpg",
    "/assets/images/services/siteSuport/site (6).jpg",
    "/assets/images/services/siteSuport/site (7).jpg",
    "/assets/images/services/siteSuport/site (8).jpg",
    "/assets/images/services/siteSuport/site (9).jpg",
    "/assets/images/services/siteSuport/site (10).jpg",
    "/assets/images/services/siteSuport/site (11).jpg",
    "/assets/images/services/siteSuport/site (12).jpg",
    "/assets/images/services/siteSuport/site (13).jpg",
    "/assets/images/services/siteSuport/site (14).jpg",
    "/assets/images/services/siteSuport/site (15).jpg",
    "/assets/images/services/siteSuport/site (16).jpg",
    "/assets/images/services/siteSuport/site (17).jpg",
    "/assets/images/services/siteSuport/site (18).jpg",
    "/assets/images/services/siteSuport/site (19).jpg",
    "/assets/images/services/siteSuport/site (20).jpg",
    "/assets/images/services/siteSuport/site (21).jpg",
    "/assets/images/services/siteSuport/site (22).jpg",
    "/assets/images/services/siteSuport/site (23).jpg",
    "/assets/images/services/siteSuport/site (24).jpg",
    "/assets/images/services/siteSuport/site (25).jpg",
    "/assets/images/services/siteSuport/site (26).jpg",
    "/assets/images/services/siteSuport/site (27).jpg",
    "/assets/images/services/siteSuport/site (28).jpg", 
    "/assets/images/services/siteSuport/site (29).jpg",
    "/assets/images/services/siteSuport/site (30).jpg",     
    "/assets/images/services/siteSuport/site (31).jpg",
    "/assets/images/services/siteSuport/site (32).jpg",
    "/assets/images/services/siteSuport/site (33).jpg",
    "/assets/images/services/siteSuport/site (34).jpg",
    "/assets/images/services/siteSuport/site (35).jpg",
    "/assets/images/services/siteSuport/site (36).jpg",
    "/assets/images/services/siteSuport/site (37).jpg",
    "/assets/images/services/siteSuport/site (38).jpg",
    "/assets/images/services/siteSuport/site (39).jpg",
    "/assets/images/services/siteSuport/site (40).jpg",     
    "/assets/images/services/siteSuport/site (41).jpg",
    "/assets/images/services/siteSuport/site (42).jpg",
    "/assets/images/services/siteSuport/site (43).jpg",
    "/assets/images/services/siteSuport/site (44).jpg",
    "/assets/images/services/siteSuport/site (45).jpg", 
    "/assets/images/services/siteSuport/site (46).jpg",
    "/assets/images/services/siteSuport/site (47).jpg",
    "/assets/images/services/siteSuport/site (48).jpg",
    "/assets/images/services/siteSuport/site (49).jpg",
    "/assets/images/services/siteSuport/site (50).jpg",
    "/assets/images/services/siteSuport/site (51).jpg",
    "/assets/images/services/siteSuport/site (52).jpg",
    "/assets/images/services/siteSuport/site (53).jpg",
    "/assets/images/services/siteSuport/site (54).jpg",
    "/assets/images/services/siteSuport/site (55).jpg",     
    "/assets/images/services/siteSuport/site (56).jpg",
    "/assets/images/services/siteSuport/site (57).jpg",
    "/assets/images/services/siteSuport/site (58).jpg",     
    "/assets/images/services/siteSuport/site (59).jpg",
    "/assets/images/services/siteSuport/site (60).jpg",     
    "/assets/images/services/siteSuport/site (61).jpg",
    "/assets/images/services/siteSuport/site (62).jpg",
    "/assets/images/services/siteSuport/site (63).jpg",
    "/assets/images/services/siteSuport/site (64).jpg",
    "/assets/images/services/siteSuport/site (65).jpg",
    

  ];

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <div>
      <PagesHeader img={"/assets/images/services/siteSuport/site (56).jpg"} title={'Site Support Services'} />
      
      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Comprehensive Site Support Solutions</h2>
          <p className="text-gray-600 text-lg">
            We provide modern accommodation, professional catering, and recreational facilities to ensure your workforce's comfort and productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Facilities Gallery</h2>
          <p className="text-gray-600">Take a closer look at our site support facilities and services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image}
                alt={`Site Support Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View Larger
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            >
              <div className="relative max-w-7xl mx-auto flex items-center justify-center">
                <motion.img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="max-h-[90vh] max-w-full object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all"
                >
                  <IoIosArrowBack size={24} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all"
                >
                  <IoIosArrowForward size={24} />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all"
                >
                  <IoClose size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SiteSuport
