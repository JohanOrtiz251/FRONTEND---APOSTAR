import React from 'react';
import { toJpeg} from 'html-to-image';

const Ganadores = ({ chances }) => {
  const generatePDF = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ganadores</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
        <style>
          .item {
            @apply py-4 px-6 hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105;
          }
          .name {
            @apply text-lg font-semibold;
          }
          .date {
            @apply text-gray-500;
          }
          .numbers {
            @apply flex space-x-2 mt-4;
          }
          .number {
            @apply flex items-center justify-center bg-yellow-500 text-white w-12 h-12 rounded-full shadow-md;
          }
          .number span {
            @apply text-base font-bold; /* Asegura que el texto sea centrado vertical y horizontalmente */
          }
          .serie {
            @apply text-gray-600;
          }
          .footer {
            @apply mt-8 text-center text-gray-500;
          }
          .chance-container {
            @apply mt-6; /* Espacio entre cada 'chance' */
          }
          .separator {
            @apply my-4; /* Espacio alrededor de la línea separadora */
          }
          .pdf-title {
            @apply text-2xl font-bold mb-4; /* Título del PDF */
          }
        </style>
      </head>
      <body class="bg-white p-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-6 text-center">Ganadores</h2>
          <ul class="divide-y divide-gray-200">
            ${chances.map((chance) => `
              <li class="item chance-container">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="name">${chance.nombre}</p>
                    <p class="date">${chance.fecha}</p>
                  </div>
                  <div class="numbers flex space-x-2 mt-4"> <!-- Espacio entre los números -->
                    ${chance.numeros.map((numero, index) => `
                      <div class="flex items-center justify-center bg-yellow-500 text-white w-12 h-12 rounded-full shadow-md">
                        <span class="text-base font-bold">${numero}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div>
                    <p class="serie">${`Serie: ${chance.serie}`}</p>
                  </div>
                </div>
                <hr class="my-4"> <!-- Línea separadora -->
              </li>
            `).join('')}
          </ul>
          <div class="footer text-center text-gray-500">
            <p>Derechos Reservados &copy; ${new Date().getFullYear()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Crear un objeto Blob para el contenido HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // Crear un objeto URL para el Blob
    const url = URL.createObjectURL(blob);

    // Abrir una nueva ventana con el archivo HTML para imprimir o guardar como PDF
    const pdfWindow = window.open();
    if (pdfWindow) {
      pdfWindow.document.open();
      pdfWindow.document.write(`
        <iframe width="100%" height="100%" src="${url}" frameborder="0"></iframe>
      `);
      pdfWindow.document.title = 'Ganadores';
      pdfWindow.document.close();
    }
  };

  const generateImage = () => {
    const element = document.getElementById('ganadoresList');

    // Utilizar html-to-image para generar una imagen JPG
    toJpeg(element)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'ganadores.jpg';
        link.click();
      })
      .catch(function (error) {
        console.error('Error al generar la imagen:', error);
      });
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Ganadores</h2>
      <div className="max-w-4xl mx-auto">
        <ul id="ganadoresList" className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {chances.map((chance) => (
            <li key={chance.id} className="py-4 px-6 hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{chance.nombre}</p>
                  <p className="text-gray-500">{chance.fecha}</p>
                </div>
                <div className="flex space-x-2 mt-4"> {/* Espacio entre los números */}
                  {chance.numeros.map((numero, index) => (
                    <div key={index} className="flex items-center justify-center bg-yellow-500 text-white w-12 h-12 rounded-full shadow-md">
                      <span className="text-base font-bold">{numero}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-gray-600">{`Serie: ${chance.serie}`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={generatePDF}
          className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generar PDF Personalizado
        </button>
        <button
          onClick={generateImage}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generar Imagen
        </button>
      </div>
    </div>
  );
};

export default Ganadores;
