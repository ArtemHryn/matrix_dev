import React from 'react';
import MatrixElementsItem from '../MatrixElementsItem';

const FatherSpiritLine = ({ matrixData }) => {
  const {
    fatherSpirit1,
    fatherSpirit2,
    fatherSpirit3,
    fatherSpirit4,
    fatherSpirit6,
    fatherSpirit7,
    fatherSpirit8,
    fatherSpirit9,
  } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={fatherSpirit1}
        top={['8.25%', '9.3%']}
        left={['31.5%', '32.5%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit2}
        top={['14.1%', '15%']}
        left={['33.8%', '34.8%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit3}
        top={['19.7%', '20.7%']}
        left={['36.3%', '37.3%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit4}
        top={['26.7%', '27.7%']}
        left={['39%', '40.1%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit6}
        bottom={['28.2%', '28.8%']}
        right={['39.9%', '40.8%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit7}
        bottom={['21.4%', '21.9%']}
        right={['37%', '37.9%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit8}
        bottom={['15.8%', '16%']}
        right={['34.6%', '35.5%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherSpirit9}
        bottom={['9.8%', '10.5%']}
        right={['32.2%', '33.2%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default FatherSpiritLine;
