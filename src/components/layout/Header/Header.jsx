import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Set loading false after component mounts
    setIsLoading(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return null;

  return (
    <div
      className={`fixed w-full z-50 transition-all font-serif text-xl duration-300  ${
        isSticky ? "shadow-md bg-white text-gray-800 " : "text-white"
      }`}
    >
      <Navbar  />
    </div>
  );
};

export default Header;
