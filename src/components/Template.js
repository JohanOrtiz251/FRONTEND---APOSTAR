import React, { useState } from 'react';
import Header from './Header';
import './tp.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Ganadores from './Ganadores';
import ChancesList from './ChancesList';

const Template = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedChance, setSelectedChance] = useState(null);

  const chances = [
    { id: 1, nombre: 'Chance A', numeros: [1, 2, 3, 4], serie: 'Serie A', fecha: '2024-07-10', premio: 1000000, inicio: '2024-07-10', fin: '2024-07-20' },
    { id: 2, nombre: 'Chance B', numeros: [5, 6, 7, 8], serie: 'Serie B', fecha: '2024-07-11', premio: 2000000, inicio: '2024-07-11', fin: '2024-07-21' },
    { id: 3, nombre: 'Chance C', numeros: [9, 10, 11, 12], serie: 'Serie C', fecha: '2024-07-12', premio: 3000000, inicio: '2024-07-12', fin: '2024-07-22' },
    { id: 4, nombre: 'Chance D', numeros: [13, 14, 15, 16], serie: 'Serie D', fecha: '2024-07-13', premio: 4000000, inicio: '2024-07-13', fin: '2024-07-23' },
    { id: 5, nombre: 'Chance E', numeros: [17, 18, 19, 20], serie: 'Serie E', fecha: '2024-07-14', premio: 5000000, inicio: '2024-07-14', fin: '2024-07-24' },
    { id: 6, nombre: 'Chance F', numeros: [21, 22, 23, 24], serie: 'Serie F', fecha: '2024-07-15', premio: 6000000, inicio: '2024-07-15', fin: '2024-07-25' },
    { id: 7, nombre: 'Chance G', numeros: [3, 9, 8, 9], serie: 'Serie G', fecha: '2024-07-16', premio: 9000000, inicio: '2024-07-16', fin: '2024-07-26' },
    { id: 8, nombre: 'Chance H', numeros: [25, 26, 27, 28], serie: 'Serie H', fecha: '2024-07-17', premio: 7000000, inicio: '2024-07-17', fin: '2024-07-27' },
    { id: 9, nombre: 'Chance I', numeros: [29, 30, 31, 32], serie: 'Serie I', fecha: '2024-07-18', premio: 8000000, inicio: '2024-07-18', fin: '2024-07-28' },
    { id: 10, nombre: 'Chance J', numeros: [33, 34, 35, 36], serie: 'Serie J', fecha: '2024-07-19', premio: 10000000, inicio: '2024-07-19', fin: '2024-07-29' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount);
  };

  const handleVerDetalles = (chance) => {
    setSelectedChance(chance);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const generatePDF = () => {
    const input = document.getElementById('ganadoresTable');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('ganadores.pdf');
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4 mt-20">

        <ChancesList />
        {/* Sección de loterías que juegan hoy */}
        <div className="mb-8 mt-8">
          <h2 className="text-xl font-bold mb-4 text-center">Loterías que juegan hoy</h2>
          <div className="grid grid-cols-4 gap-4">
            {chances.slice(0, 4).map((chance) => (
              <div
                key={chance.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden p-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200"
              >
                <h3 className="text-lg font-bold mb-2 text-center">{chance.nombre}</h3>
                <div className="flex justify-center mt-2">
                  {chance.numeros.map((numero, numIndex) => (
                    <div key={numIndex} className="h-8 w-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-base font-bold mr-1">
                      {numero}
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-center">Serie: {chance.serie}</p>
                <p className="text-center">Fecha: {chance.fecha}</p>
                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => handleVerDetalles(chance)}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-110 text-xs"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de loterías jugadas anteriormente */}
        <Ganadores chances={chances} generatePDF={generatePDF} />

        {/* Modal para mostrar detalles del chance */}
        {showModal && selectedChance && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-4 max-w-lg w-full">
              <h3 className="text-xl font-bold mb-2 text-center">{selectedChance.nombre}</h3>
              <div className="flex justify-center mt-2">
                {selectedChance.numeros.map((numero, numIndex) => (
                  <div key={numIndex} className="h-10 w-10 rounded-full bg-yellow-500 text-white flex items-center justify-center text-lg font-bold mr-1">
                    {numero}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center">Serie: {selectedChance.serie}</p>
              <p className="text-center">Fecha: {selectedChance.fecha}</p>
              <p className="text-center mt-4">Premio: {formatCurrency(selectedChance.premio)}</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
