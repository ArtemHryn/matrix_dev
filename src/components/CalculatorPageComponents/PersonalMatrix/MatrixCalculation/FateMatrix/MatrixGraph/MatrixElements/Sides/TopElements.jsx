import MatrixElementsItem from '../MatrixElementsItem';

const TopElements = ({ matrixData, hideDigitsForResult, hideInnerLines }) => {
  const { topLeft1, topLeft2, topLeft3, month, top2, top3, topRight1, topRight2, topRight3 } =
    matrixData;

  return (
    <>
      {!hideInnerLines && (
        <>
          {!hideDigitsForResult && (
            <>
              <MatrixElementsItem
                element={topLeft2}
                top={['20.8%', '21.8%']}
                left={['21%', '22%', '21.8%']}
              />
              <MatrixElementsItem
                element={topLeft3}
                top={['25.4%', '26.4%']}
                left={['25.6%', '26.5%']}
              />

              <MatrixElementsItem
                element={topRight2}
                top={['20.8%', '21.9%']}
                right={['21%', '21.8%', '22%']}
              />
              <MatrixElementsItem
                element={topRight3}
                top={['25.4%', '26.5%']}
                right={['25.6%', '26.5%', '26.7%']}
              />
            </>
          )}
        </>
      )}
      {!hideInnerLines && (
        <>
          {' '}
          <MatrixElementsItem element={top2} top={['9.2%', '10%']} left={['47.5%', '48.5%']} />
          <MatrixElementsItem element={top3} top={['15.5%', '16.5%']} left={['47.5%', '48.5%']} />
        </>
      )}
      <MatrixElementsItem
        element={topLeft1}
        top={['16.2%', '17.3%', '17%']}
        left={['16.3%', '17.4%', '17.1%']}
      />
      <MatrixElementsItem element={month} top={['2.5%', '3.5%']} left={['47.5%', '48.5%']} />
      <MatrixElementsItem
        element={topRight1}
        top={['16.2%', '17.3%', '17%']}
        right={['16.4%', '17.4%']}
      />
    </>
  );
};

export default TopElements;
