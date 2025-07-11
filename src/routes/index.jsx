import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from "../components/layout/Main";

// Lazy load page components
const Projects = lazy(() => import("../pages/Projects"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Service = lazy(() => import("../pages/Service"));
const SiteSuport = lazy(() => import("../pages/SiteSuport"));

// Lazy load home page components
import Hero from "../components/Hero/Hero";
import OurSiteSuport from "../components/siteSuport/OurSiteSuport";
import OurServices from "../components/ourServices/OurServices";
import OurProjects from "../components/ourProjects/OurProjects";
import OurLocation from "../components/location/OurLocation";
import AboutUs from '../components/aboutUs/AboutUs';
import CoreValues from '../components/coreValues/CoreValues';
import OurStory from '../components/ourStory/OurStory';
import HowWeWork from '../components/howWeWork/HowWeWork';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-500"></div>
  </div>
);

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
        <Route index element={
          <>
            <Hero />
            <AboutUs />
            <OurStory />
            <CoreValues />
            <HowWeWork />
            <OurSiteSuport />
            <OurServices />
            <OurProjects />
            <OurLocation />
          </>
        } />
        <Route path="about" element={<About /> }/>
        <Route path="contact" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<LoadingSpinner />}><Service /></Suspense>} />
        <Route path="projects" element={<Suspense fallback={<LoadingSpinner />}><Projects /></Suspense>} />
        <Route path="site-support" element={<Suspense fallback={<LoadingSpinner />}><SiteSuport /></Suspense>} />
        <Route path="*" element={<ErrorElement />} />
      </Route>
    </Routes>
  );
};

export default Router;
