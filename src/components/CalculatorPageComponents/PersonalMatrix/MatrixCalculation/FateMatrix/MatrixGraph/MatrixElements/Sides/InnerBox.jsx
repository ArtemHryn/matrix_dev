import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const InnerBox = () => {
  const { matrixData } = useMatrix();
  const {
    innerLeft1,
    innerLeft3,
    innerTop1,
    innerTop3,
    innerRight1,
    innerRight3,
    innerBottom1,
    innerBottom3,
  } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={innerTop1}
        top={['25%', '25.9%']}
        left={['38%', '38.9%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerTop3}
        top={['25%', '25.9%']}
        right={['38%', '38.9%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerLeft1}
        top={['38.3%', '39.1%']}
        left={['25%', '25.9%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerLeft3}
        bottom={['39%', '40%']}
        left={['25%', '25.9%']}
        fontSize={['11px', '24px']}
      />

      <MatrixElementsItem
        element={innerRight1}
        top={['38.3%', '39.3%']}
        right={['25.2%', '26.2%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerRight3}
        bottom={['39%', '39.8%']}
        right={['25.2%', '26.2%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerBottom1}
        bottom={['25.7%', '26.6%']}
        left={['38%', '38.8%']}
        fontSize={['11px', '24px']}
      />
      <MatrixElementsItem
        element={innerBottom3}
        bottom={['25.7%', '26.5%']}
        right={['38%', '39%']}
        fontSize={['11px', '24px']}
      />
    </>
  );
};

export default InnerBox;
