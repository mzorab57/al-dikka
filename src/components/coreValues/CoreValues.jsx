import React from 'react'

const CoreValues = () => {
  return (
    <section className='container mx-auto'>
       <div className="cs-feature-card-wrap lg-gutter-control py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center flex flex-col justify-center items-center">
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
    </section>
  )
}

export default CoreValues
