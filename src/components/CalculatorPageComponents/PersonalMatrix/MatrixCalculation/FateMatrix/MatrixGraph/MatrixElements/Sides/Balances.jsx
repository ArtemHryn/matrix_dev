import MatrixElementsItem from '../MatrixElementsItem';

const Balances = ({ matrixData }) => {
  const { innerTopLeft, innerTopRight, innerBottomLeft, innerBottomRight } =
    matrixData;
  return (
    <>
      <MatrixElementsItem
        element={innerTopLeft}
        top={['31%', '32.1%']}
        left={['31.4%', '32.3%']}
      />
      <MatrixElementsItem
        element={innerTopRight}
        top={['31%', '32.1%']}
        right={['31.4%', '32.3%']}
      />
      <MatrixElementsItem
        element={innerBottomLeft}
        bottom={['31.8%', '32.7%']}
        left={['31.6%', '32.7%']}
      />
      <MatrixElementsItem
        element={innerBottomRight}
        bottom={['32.4%', '33%']}
        right={['31.7%', '32.7%']}
      />
    </>
  );
};

export default Balances;
