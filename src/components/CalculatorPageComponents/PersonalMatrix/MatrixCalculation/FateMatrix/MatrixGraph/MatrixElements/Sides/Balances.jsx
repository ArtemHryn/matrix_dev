import React from 'react';
import MatrixElementsItem from '../MatrixElementsItem';
import { useMatrix } from 'pages/Calculator';

const Balances = () => {
  const { matrixData } = useMatrix();
  const { innerTopLeft, innerTopRight, innerBottomLeft, innerBottomRight } =
    matrixData;
  return (
    <>
      <MatrixElementsItem
        element={innerTopLeft}
        top={['31%', '32.1%']}
        left={['31.4%', '32.3%']}
      />
      <MatrixElementsItem
        element={innerTopRight}
        top={['31%', '32%']}
        right={['31.8%', '32.6%']}
      />
      <MatrixElementsItem
        element={innerBottomLeft}
        bottom={['32.2%', '33%']}
        left={['31.3%', '32.3%']}
      />
      <MatrixElementsItem
        element={innerBottomRight}
        bottom={['32.3%', '33%']}
        right={['31.5%', '32.5%']}
      />
    </>
  );
};

export default Balances;
