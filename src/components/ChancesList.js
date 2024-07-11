import React from 'react';

const chances = [
  "Antioqueñita 1", "Antioqueñita 2", "Astro Luna", "Astro Sol", "Cafeterito Noche", "Cafeterito Tarde",
  "Caribeña Día", "Caribeña Noche", "Chontico Día", "Chontico Noche", "Culona Día", "Culona Noche",
  "Dorado Mañana", "Dorado Noche", "Dorado Tarde", "Fantastica Día", "Fantastica Noche", "Motilon Noche",
  "Motilon Tarde", "Paisita 3", "Paisita Día", "Paisita Noche", "Pick 3 Día", "Pick 3 Noche", "Pick 4 Día",
  "Pick 4 Noche", "Pijao de Oro", "Saman", "Sinuano Día", "Sinuano Noche", "Super Chontico Noche"
];

const ChancesList = () => {
  // Función para dividir el array de chances en múltiples columnas con una cantidad igual de datos por columna
  const chunkArray = (array, columns) => {
    const chunkedArray = [];
    const chunkSize = Math.ceil(array.length / columns);
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Dividir la lista en 4 columnas con la misma cantidad de datos por columna
  const chunkedChances = chunkArray(chances, 4);

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 text-center mt-2">Lista de Chances</h2>
      <div className="grid grid-cols-4 gap-2">
        {chunkedChances.map((chunk, index) => (
          <div key={index} className="flex flex-col">
            {chunk.map((chance, idx) => (
              <p key={idx} className="mb-2 cursor-pointer hover:text-blue-500">{chance}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChancesList;
