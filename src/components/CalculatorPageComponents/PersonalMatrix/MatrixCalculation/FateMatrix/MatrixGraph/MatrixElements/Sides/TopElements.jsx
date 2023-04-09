import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const TopElements = () => {
  const { matrixData } = useMatrix();
  const {
    topLeft1,
    topLeft2,
    topLeft3,
    month,
    top2,
    top3,
    topRight1,
    topRight2,
    topRight3,
  } = matrixData;

  return (
    <>
      <MatrixElementsItem element={topLeft1} top={['16.2%', '17.5%']} left={['16.2%', '17%']} />
      <MatrixElementsItem element={topLeft2} top={['21%', '21.8%']} left={['20.5%', '21.5%']} />
      <MatrixElementsItem element={topLeft3} top={['25.5%', '26.4%']} left={['25.5%', '26.5%']} />
      <MatrixElementsItem element={month} top={['3%', '3.5%']} left={['47.8%', '48.6%']} />
      <MatrixElementsItem element={top2} top={['9.3%', '10.2%']} left={['47.8%', '48.5%']} />
      <MatrixElementsItem element={top3} top={['15.5%', '16.5%']} left={['47.8%', '48.7%']} />
      <MatrixElementsItem element={topRight1} top={['16.2%', '17.3%']} right={['16.3%', '17.4%']} />
      <MatrixElementsItem element={topRight2} top={['21%', '21.9%']} right={['21%', '22.1%']} />
      <MatrixElementsItem element={topRight3} top={['25.5%', '26.5%']} right={['25.5%', '26.5%']} />
    </>
  );
};

export default TopElements;
