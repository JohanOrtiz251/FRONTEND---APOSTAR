import React from 'react';
import PropTypes from 'prop-types';

const GenerateImage = ({ chances }) => {
  // Lógica para generar la imagen basada en los datos de chances
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Generar Imagen</h1>
      <p>Aquí irá la lógica para generar la imagen.</p>
    </div>
  );
};

GenerateImage.propTypes = {
  chances: PropTypes.array.isRequired,
};

export default GenerateImage;
