import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from "../components/layout/Main";

// Lazy load page components
const Projects = lazy(() => import("../pages/Projects"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Service = lazy(() => import("../pages/Service"));
const SiteSuport = lazy(() => import("../pages/SiteSuport"));

// Import components used in home page
import Hero from "../components/Hero/Hero";
import OurSiteSuport from "../components/siteSuport/OurSiteSuport";
import OurServices from "../components/ourServices/OurServices";
import OurProjects from "../components/ourProjects/OurProjects";
import OurLocation from "../components/location/OurLocation";

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
            <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
            <OurSiteSuport />
            <OurServices />
            <OurProjects />
            <OurLocation />
          </>
        } />
        <Route path="about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        <Route path="services" element={<Suspense fallback={<div>Loading...</div>}><Service /></Suspense>} />
        <Route path="projects" element={<Suspense fallback={<div>Loading...</div>}><Projects /></Suspense>} />
        <Route path="site-support" element={<Suspense fallback={<div>Loading...</div>}><SiteSuport /></Suspense>} />
        <Route path="*" element={<ErrorElement />} />
      </Route>
    </Routes>
  );
};

export default Router;
