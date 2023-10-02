import React from 'react'
import MatrixElementsItem from '../MatrixElementsItem';

const FatherEarth = ({ matrixData }) => {
    const {
      fatherEarth1,
      fatherEarth2,
      fatherEarth3,
      fatherEarth4,
      fatherEarth6,
      fatherEarth7,
      fatherEarth8,
      fatherEarth9,
    } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={fatherEarth1}
        top={['31%', '32.1%']}
        left={['8.4%', '9.3%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth2}
        top={['33.4%', '34.6%']}
        left={['13.9%', '14.9%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth3}
        top={['35.8%', '36.9%']}
        left={['19.7%', '20.8%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth4}
        top={['39.2%', '40%']}
        left={['27.3%', '28.3%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth6}
        bottom={['39.7%', '40.3%']}
        right={['27.8%', '28.7%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth7}
        bottom={['36.9%', '37.5%']}
        right={['21%', '22%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth8}
        bottom={['34.8%', '35.3%']}
        right={['15.2%', '16.3%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={fatherEarth9}
        bottom={['32%', '32.8%']}
        right={['9.6%', '10.5%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default FatherEarth
