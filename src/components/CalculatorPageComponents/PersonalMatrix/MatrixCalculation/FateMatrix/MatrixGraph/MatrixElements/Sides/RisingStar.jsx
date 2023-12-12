import MatrixElementsItem from "../MatrixElementsItem";

const RisingStar = ({ matrixData }) => {
  const { risingStarTop, risingStarLeft, risingStarBottom, risingStarRight, risingStarCenter } =
    matrixData;
    return (
      <>
        <MatrixElementsItem
          element={risingStarTop}
          top={['15.5%', '16.5%']}
          left={['47.5%', '48.5%']}
        />
        <MatrixElementsItem
          element={risingStarLeft}
          top={['47.5%', '48.5%', '48.6%']}
          left={['15.7%', '16.8%', '16.6%']}
        />
        <MatrixElementsItem
          element={risingStarBottom}
          bottom={['17%', '17.6%', '17.7%']}
          left={['47.5%', '48.5%']}
        />
        <MatrixElementsItem
          element={risingStarRight}
          top={['47.5%', '48.5%', '48.6%']}
          right={['15.8%', '16.8%']}
        />
        <MatrixElementsItem
          element={risingStarCenter}
          top={['47.3%', '48.2%']}
          left={['47.6%', '48.6%']}
          fontSize={['18px', '33px']}
        />
      </>
    );
};

export default RisingStar;
