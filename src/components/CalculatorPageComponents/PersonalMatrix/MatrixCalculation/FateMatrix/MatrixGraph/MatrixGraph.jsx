import React, { useEffect } from 'react';
import { Box } from 'components/Box';
import { MatrixImg } from './MatrixGraph.styled';
import { useMatrix } from 'pages/Calculator';
import { allData, getPeriod } from 'helper/calculateMatrix';
import {
  SoulCrystal,
  Balances,
  Left,
  Right,
  Bottom,
  Center,
  InnerBox,
  Health,
  TopElements,
} from './MatrixElements/Sides';
import PeriodCircle from '../../PeriodMatrix/PeriodCircle/PeriodCircle';

const MatrixGraph = ({
  matrix: Matrix,
  hideSoul,
  hideInner,
  hideBalance,
  showPeriodCircle,
}) => {
  const { setMatrixData, isGenerated, date, setAgeList, matrixData } =
    useMatrix();
  useEffect(() => {
    const result = allData(date, isGenerated);
    const ageResult = getPeriod(result);
    setMatrixData(result);
    setAgeList(ageResult);
  }, [date, isGenerated, setAgeList, setMatrixData]);

  return (
    <Box>
      <Box position="relative" width={['100%', '667px']} m="0 auto" zIndex="20">
        <MatrixImg as={Matrix} />
        <TopElements matrixData={matrixData} />
        <Left matrixData={matrixData} />
        <Right matrixData={matrixData} />
        <Bottom matrixData={matrixData} />
        <Center matrixData={matrixData} />

        {!hideSoul && <SoulCrystal matrixData={matrixData} />}

        {!hideBalance && <Balances matrixData={matrixData} />}
        {hideBalance && <Health matrixData={matrixData} />}
        {!hideInner && <InnerBox matrixData={matrixData} />}
        {showPeriodCircle && <PeriodCircle matrixData={matrixData} />}
      </Box>
    </Box>
  );
};

export default MatrixGraph;
