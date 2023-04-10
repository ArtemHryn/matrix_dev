import { useMatrix } from 'pages/Calculator';
import React from 'react'
import MatrixElementsItem from '../MatrixElementsItem';

const Right = () => {
    const { matrixData } = useMatrix();
    const { year, right2, right3 } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={year}
        top={['47.3%', '48.3%']}
        right={['2.8%', '3.7%']}
      />
      <MatrixElementsItem
        element={right2}
        top={['47.3%', '48.3%']}
        right={['9.4%', '10.1%']}
      />
      <MatrixElementsItem
        element={right3}
        top={['47.3%', '48.3%']}
        right={['15.8%', '16.9%']}
      />
    </>
  );
}

export default Right
