import React from 'react';
import MatrixElementsItem from '../MatrixElementsItem';
import { useMatrix } from 'pages/Calculator';

const Center = () => {
  const { matrixData } = useMatrix();
  const { center, center2 } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={center}
        top={['47.5%', '48.8%']}
        left={['47.5%', '48.6%']}
        fontSize={['18px', '33px']}
      />
      <MatrixElementsItem
        element={center2}
        top={['50.8%', '52%']}
        left={['51%', '51.9%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default Center;
