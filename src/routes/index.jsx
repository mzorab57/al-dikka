import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../components/layout/Main";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MattSchool from "../pages/pages/MattSchool";
import MattFurnishing from "../pages/pages/MattFurnishing";
import MattModel from "../pages/pages/MattModel";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/aboutUs/AboutUs";
import OurSiteSuport from "../components/siteSuport/OurSiteSuport";
import HowWeWork from "../components/howWeWork/HowWeWork";
import OurServices from "../components/ourServices/OurServices";
import OurProjects from "../components/ourProjects/OurProjects";
import OurLocation from "../components/location/OurLocation";
import Service from "../pages/Service";
import OurStory from "../components/ourStory/OurStory";
import CoreValues from "../components/coreValues/CoreValues";
import Projects from "../pages/Projects";
import SiteSuport from "../pages/SiteSuport";

const ErrorElement = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  </div>
);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<><Hero /> <AboutUs /><OurStory /><CoreValues />  <OurSiteSuport /> <HowWeWork /> <OurServices /> <OurProjects/> <OurLocation /></>} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        
          <Route path="projects" element={<Projects />} />
          <Route path="site-support" element={<SiteSuport />} />
        
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorElement />} />
    </Routes>
  );
};

export default Router;
