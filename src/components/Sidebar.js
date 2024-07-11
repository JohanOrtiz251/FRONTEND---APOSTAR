// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showChances, setShowChances] = useState(false);

  const toggleChances = () => {
    setShowChances(!showChances);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="text-xl font-bold mb-4 text-center text-gray-700">Navegación</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/lotteries-today" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Loterías que juegan hoy
          </Link>
        </li>
        <li>
          <Link to="/previous-lotteries" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Loterías jugadas anteriormente
          </Link>
        </li>
        <li>
          <Link to="/winners" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Ganadores
          </Link>
        </li>
        <li>
          <Link to="/rules" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Reglas
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Contacto
          </Link>
        </li>
        <li>
          <button onClick={toggleChances} className="block w-full text-left py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
            Chances {showChances ? '▲' : '▼'}
          </button>
          {showChances && (
            <ul className="mt-2 space-y-2 ml-4">
              <li>
                <Link to="/chances/option1" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
                  Opción 1
                </Link>
              </li>
              <li>
                <Link to="/chances/option2" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
                  Opción 2
                </Link>
              </li>
              <li>
                <Link to="/chances/option3" className="block py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700">
                  Opción 3
                </Link>
              </li>
              {/* Agrega más opciones de chances según sea necesario */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
