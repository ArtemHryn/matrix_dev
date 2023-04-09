import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const SoulCrystal = () => {
  const { matrixData } = useMatrix();
  const { innerTop2, innerLeft2, innerRight2, innerBottom2 } = matrixData;

  return (
    <>
      <MatrixElementsItem element={innerTop2} top={['24.7%', '25.5%']} left={['47.8%', '48.6%']} />
      <MatrixElementsItem element={innerLeft2} top={['47.5%', '48.5%']} left={['24.4%', '25.7%']} />
      <MatrixElementsItem element={innerRight2} top={['47.5%', '48.5%']} right={['25%', '26%']} />
      <MatrixElementsItem element={innerBottom2} bottom={['25.5%', '26.3%']} left={['47.8%', '48.6%']} />
    </>
  );
};

export default SoulCrystal;
