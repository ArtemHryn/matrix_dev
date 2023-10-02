import MatrixElementsItem from '../MatrixElementsItem';

const MotherEarth = ({ matrixData }) => {
  const {
    motherEarth1,
    motherEarth2,
    motherEarth3,
    motherEarth4,
    motherEarth6,
    motherEarth7,
    motherEarth8,
    motherEarth9,
  } = matrixData;
  return (
    <>
      <MatrixElementsItem
        element={motherEarth1}
        top={['31.5%', '32.7%']}
        left={['86.6%', '87.6%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth2}
        top={['33.9%', '35%']}
        left={['80.9%', '82%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth3}
        top={['36.2%', '37.4%']}
        left={['75.1%', '76.2%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth4}
        top={['39.2%', '40.2%']}
        left={['68.1%', '69.2%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth6}
        bottom={['40.1%', '40.8%']}
        right={['68.5%', '69.4%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth7}
        bottom={['37.24%', '37.9%']}
        right={['75.7%', '76.6%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth8}
        bottom={['34.9%', '35.6%']}
        right={['81.5%', '82.4%']}
        fontSize={['9px', '18px']}
      />
      <MatrixElementsItem
        element={motherEarth9}
        bottom={['32.4%', '33.3%']}
        right={['87.2%', '88.1%']}
        fontSize={['9px', '18px']}
      />
    </>
  );
};

export default MotherEarth;
