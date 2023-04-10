import React from 'react';
import { useMatrix } from 'pages/Calculator';
import MatrixElementsItem from '../MatrixElementsItem';

const SoulCrystal = () => {
  const { matrixData } = useMatrix();
  const { innerTop2, innerLeft2, innerRight2, innerBottom2 } = matrixData;

  return (
    <>
      <MatrixElementsItem element={innerTop2} top={['24.4%', '25.5%']} left={['47.7%', '48.6%']} />
      <MatrixElementsItem element={innerLeft2} top={['47.2%', '48%']} left={['24.5%', '26%']} />
      <MatrixElementsItem element={innerRight2} top={['47.2%', '48.5%']} right={['25%', '26%']} />
      <MatrixElementsItem element={innerBottom2} bottom={['25.7%', '26.3%']} left={['47.7%', '48.6%']} />
    </>
  );
};

export default SoulCrystal;
