import React from 'react'
import { Link } from "react-router-dom";

const PagesHeader = ({img, title}) => {
  return (
    <section className="navigation ">
      <div className="relative">
        <img
         style={{
          clipPath:  "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
        }}
          src={img}
          alt="background"
          className=" object-cover  bg-cover  brightness-50  h-[700px] w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          {/* <h2 className="text-3xl lg:text-4xl text-white  font-jost">
            {title || "about"}
          </h2> */}
          <ul className="flex justify-center  space-x-2 text-gray-300 mt-4  p-2 px-5">
            
            <li>
              <Link to="/" className="text-gray-200 text-xl font-jost font-medium ">
                {"home"}
              </Link>
            </li>
            <li className="text-gray-200 text-xl font-jost font-medium">
              //    {title||  "about us"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PagesHeader
