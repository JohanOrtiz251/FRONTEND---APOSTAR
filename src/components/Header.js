import React, { useState, useEffect } from 'react';
import logo from './logo_pie_apostar-removebg-preview.png';  // Asegúrate de que la ruta sea correcta

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-10 ${scrolling ? 'bg-red-800 shadow-md' : 'bg-red-800'} transition duration-300 ease-in-out`}>
      <div className="bg-red-800 flex items-center justify-center">
        <div className="w-full">
          <img src={logo} alt="Logo de la empresa" className="mx-auto max-h-16 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
