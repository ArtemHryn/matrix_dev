import MatrixElementsItem from '../MatrixElementsItem';

const SoulCrystal = ({ matrixData }) => {
  const { innerTop2, innerLeft2, innerRight2, innerBottom2 } = matrixData;

  return (
    <>
      <MatrixElementsItem
        element={innerTop2}
        top={['24.4%', '25.2%']}
        left={['47.5%', '48.5%']}
      />
      <MatrixElementsItem
        element={innerLeft2}
        top={['47.5%', '48.5%', '48.5%']}
        left={['24.5%', '25.4%', '25.4%']}
      />
      <MatrixElementsItem
        element={innerRight2}
        top={['47.5%', '48.5%']}
        right={['25%', '25.8%', '26%']}
      />
      <MatrixElementsItem
        element={innerBottom2}
        bottom={['25.7%', '26.3%']}
        left={['47.5%', '48.5%']}
      />
    </>
  );
};

export default SoulCrystal;
