import AboutUs from "../components/aboutUs/AboutUs";
import CoreValues from "../components/coreValues/CoreValues";
import HowWeWork from "../components/howWeWork/HowWeWork";
import OurStory from "../components/ourStory/OurStory";
import PagesHeader from "../components/ui/PagesHeader";

const About = () => {
  return (
    <div className=" mx-auto">
      <PagesHeader img={'/assets/images/about.jpg'} />
     <AboutUs />
     <CoreValues />
     <OurStory />
     <HowWeWork />
    </div>
  );
};

export default About;