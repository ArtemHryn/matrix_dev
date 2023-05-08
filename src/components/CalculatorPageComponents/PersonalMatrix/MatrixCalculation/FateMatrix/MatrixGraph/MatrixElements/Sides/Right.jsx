import MatrixElementsItem from '../MatrixElementsItem';

const Right = ({ matrixData }) => {
  const { year, right2, right3 } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={year}
        top={['47.5%', '48.5%', '48.6%']}
        right={['2.7%', '3.7%']}
      />
      <MatrixElementsItem
        element={right2}
        top={['47.5%', '48.5%', '48.6%']}
        right={['9.4%', '10.3%']}
      />
      <MatrixElementsItem
        element={right3}
        top={['47.5%', '48.5%', '48.6%']}
        right={['15.8%', '16.8%']}
      />
    </>
  );
};

export default Right
