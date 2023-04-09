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
          top={['47.5%', '48.4%']}
          left={['3%', '3.8%']}
        />
        <MatrixElementsItem
          element={left2}
          top={['47.5%', '48.4%']}
          left={['9.3%', '10.1%']}
        />
        <MatrixElementsItem
          element={left3}
          top={['47.5%', '48.4%']}
          left={['16%', '16.8%']}
        />
      </>
    );
};

export default Left;
