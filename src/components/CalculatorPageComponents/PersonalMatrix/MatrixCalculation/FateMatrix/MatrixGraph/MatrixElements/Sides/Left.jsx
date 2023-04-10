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
          top={['47.3%', '48.4%']}
          left={['2.8%', '3.8%']}
        />
        <MatrixElementsItem
          element={left2}
          top={['47.3%', '48.4%']}
          left={['9.2%', '10.1%']}
        />
        <MatrixElementsItem
          element={left3}
          top={['47.3%', '48.4%']}
          left={['15.7%', '16.8%']}
        />
      </>
    );
};

export default Left;
