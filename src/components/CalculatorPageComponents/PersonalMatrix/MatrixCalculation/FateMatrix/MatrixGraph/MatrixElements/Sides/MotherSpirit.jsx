import React from 'react';
import MatrixElementsItem from '../MatrixElementsItem';

const MotherSpirit = ({ matrixData }) => {
  const {
    motherSpirit1,
    motherSpirit2,
    motherSpirit3,
    motherSpirit4,
    motherSpirit6,
    motherSpirit7,
    motherSpirit8,
    motherSpirit9,
  } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={motherSpirit1}
        top={['8.65%', '9.8%']}
        left={['63.9%', '65%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit2}
        top={['14.54%', '15.4%']}
        left={['61.4%', '62.5%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit3}
        top={['20%', '21.1%']}
        left={['59.1%', '60.2%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit4}
        top={['26.85%', '27.9%']}
        left={['56.3%', '57.3%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit6}
        bottom={['28.5%', '29.1%']}
        right={['56.3%', '57.2%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit7}
        bottom={['21.2%', '21.9%']}
        right={['59.6%', '60.5%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit8}
        bottom={['15.6%', '16.1%']}
        right={['62%', '62.9%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherSpirit9}
        bottom={['9.9%', '10.45%']}
        right={['64.5%', '65.3%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default MotherSpirit;
