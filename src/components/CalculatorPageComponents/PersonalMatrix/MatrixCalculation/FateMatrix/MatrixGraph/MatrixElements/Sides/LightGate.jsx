import MatrixElementsItem from '../MatrixElementsItem';

const LightGate = ({ matrixData }) => {
  const {
    lightLeft1,
    lightLeft2,
    lightRight2,
    lightRight1,
    lightTop1,
    lightTop2,
    lightBottom2,
    lightBottom1,
    lightTopLeft1,
    lightTopLeft2,
    lightBottomRight1,
    lightBottomRight2,
    lightTopRight1,
    lightTopRight2,
    lightBottomLeft1,
    lightBottomLeft2,
  } = matrixData;

  return (
    <>
      <MatrixElementsItem
        element={lightLeft1}
        top={['44.9%', '46.2%']}
        left={['6.2%', '7.2%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightLeft2}
        top={['44.9%', '46.5%']}
        left={['12.8%', '13.7%', '13.5%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightRight2}
        top={['44.9%', '46.5%']}
        right={['12.8%', '7%', '7.4%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightRight1}
        top={['44.9%', '46.5%']}
        right={['6%', '13.4%', '13.5%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTop1}
        top={['5.7%', '6.8%']}
        right={['45.4%', '46.7%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTop2}
        top={['12.2%', '13.2%']}
        right={['45.8%', '46.8%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottom2}
        bottom={['14.2%', '14.7%']}
        left={['45.6%', '46.5%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottom1}
        bottom={['7.7%', '8.3%']}
        left={['45.6%', '46.5%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTopLeft1}
        top={['16.7%', '17.8%']}
        left={['21%', '21.7%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTopLeft2}
        top={['21.3%', '22.3%']}
        left={['25.5%', '26%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottomRight1}
        bottom={['17.8%', '18.5%']}
        right={['20.5%', '21.8%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottomRight2}
        bottom={['21.9%', '23%']}
        right={['25.5%', '26%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTopRight1}
        top={['16.9%', '17.8%']}
        right={['20.7%', '21.7%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightTopRight2}
        top={['21.4%', '22.5%']}
        right={['25%', '25.8%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottomLeft1}
        bottom={['17.5%', '18.5%']}
        left={['21.2%', '22%']}
        fontSize={['8px', '12px']}
      />
      <MatrixElementsItem
        element={lightBottomLeft2}
        bottom={['22.4%', '23%']}
        left={['26%', '26.5%']}
        fontSize={['8px', '12px']}
      />
    </>
  );
};

export default LightGate;
