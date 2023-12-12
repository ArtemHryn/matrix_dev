import MatrixElementsItem from '../MatrixElementsItem';

const Bottom = ({ matrixData, hideDigitsForResult, hideInnerLines }) => {
  const {
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
    bottom1,
    bottom2,
    bottom3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
  } = matrixData;
  return (
    <>
      {!hideInnerLines && (
        <>
          {!hideDigitsForResult && (
            <>
              <MatrixElementsItem
                element={bottomLeft2}
                bottom={['21.6%', '22.3%']}
                left={['21.2%', '22.3%']}
              />
              <MatrixElementsItem
                element={bottomLeft3}
                bottom={['26.2%', '27%']}
                left={['25.8%', '27%', '26.7%']}
              />
              <MatrixElementsItem
                element={bottomRight2}
                bottom={['21.6%', '22.3%']}
                right={['21.1%', '22%']}
              />
              <MatrixElementsItem
                element={bottomRight3}
                bottom={['26.2%', '27%']}
                right={['25.7%', '26.4%', '26.6%']}
              />
            </>
          )}
        </>
      )}
      {!hideInnerLines && (
        <>
          <MatrixElementsItem
            element={bottom2}
            bottom={['10.7%', '11.3%', '11.4%']}
            left={['47.5%', '48.5%']}
          />
          <MatrixElementsItem
            element={bottom3}
            bottom={['17%', '17.6%', '17.7%']}
            left={['47.5%', '48.5%']}
          />
        </>
      )}
      <MatrixElementsItem
        element={bottomLeft1}
        bottom={['17%', '17.6%']}
        left={['16.5%', '17.5%']}
      />

      <MatrixElementsItem
        element={bottom1}
        bottom={['4.3%', '4.8%', '4.8%']}
        left={['47.5%', '48.5%']}
      />

      <MatrixElementsItem
        element={bottomRight1}
        bottom={['17%', '17.6%']}
        right={['16.5%', '17.4%', '17.5%']}
      />
    </>
  );
};

export default Bottom;
