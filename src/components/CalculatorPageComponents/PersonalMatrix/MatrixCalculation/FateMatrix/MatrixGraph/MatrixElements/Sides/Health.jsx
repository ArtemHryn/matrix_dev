import React from 'react'
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const Health = () => {
      const { matrixData } = useMatrix();
      const {
        healthTopLeft,
        healthTopRight,
        healthBottomRight,
        healthBottomLeft,
      } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={healthTopLeft}
        top={['31%', '32.1%']}
        left={['31.4%', '32.3%']}
      />
      <MatrixElementsItem
        element={healthTopRight}
        top={['31%', '32.1%']}
        right={['31.4%', '32.3%']}
      />
      <MatrixElementsItem
        element={healthBottomRight}
        bottom={['32.4%', '33%']}
        right={['31.7%', '32.7%']}
      />
      <MatrixElementsItem
        element={healthBottomLeft}
        bottom={['31.8%', '32.7%']}
        left={['31.6%', '32.7%']}
      />
    </>
  );
}

export default Health
