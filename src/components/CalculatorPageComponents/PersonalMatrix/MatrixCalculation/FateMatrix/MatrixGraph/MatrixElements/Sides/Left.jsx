import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const Left = () => {
  const { matrixData } = useMatrix();
  const { day, left2, left3 } = matrixData;
    return (
      <>
        <MatrixElementsItem
          element={day}
          top={['47.5%', '48.5%', '48.6%']}
          left={['2.7%', '3.7%']}
        />
        <MatrixElementsItem
          element={left2}
          top={['47.5%', '48.5%', '48.6%']}
          left={['9.2%', '10.4%', '10.2%']}
        />
        <MatrixElementsItem
          element={left3}
          top={['47.5%', '48.5%', '48.6%']}
          left={['15.7%', '16.8%', '16.6%']}
        />
      </>
    );
};

export default Left;
