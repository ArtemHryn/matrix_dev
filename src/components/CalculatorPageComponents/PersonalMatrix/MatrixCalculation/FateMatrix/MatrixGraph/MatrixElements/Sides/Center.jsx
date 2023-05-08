import MatrixElementsItem from '../MatrixElementsItem';

const Center = ({ matrixData }) => {
  const { center, center2 } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={center}
        top={['47.3%', '48.2%']}
        left={['47.6%', '48.6%']}
        fontSize={['18px', '33px']}
      />
      <MatrixElementsItem
        element={center2}
        top={['50.9%', '52%']}
        left={['51%', '52%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default Center;
