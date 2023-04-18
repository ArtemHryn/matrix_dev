import React, { useEffect } from 'react';
import { Box } from 'components/Box';
import { MatrixImg } from './MatrixGraph.styled';
import TopElements from './MatrixElements/Sides/TopElements';
import { useMatrix } from 'pages/Calculator';
import { allData, getPeriod } from 'helper/calculateMatrix';
import SoulCrystal from './MatrixElements/Sides/SoulCrystal';
import Balances from './MatrixElements/Sides/Balances';
import Left from './MatrixElements/Sides/Left';
import Right from './MatrixElements/Sides/Right';
import Bottom from './MatrixElements/Sides/Bottom';
import Center from './MatrixElements/Sides/Center';
import InnerBox from './MatrixElements/Sides/InnerBox';
import Health from './MatrixElements/Sides/Health';
import PeriodCircle from '../../PeriodMatrix/PeriodCircle/PeriodCircle';

const MatrixGraph = ({
  matrix: Matrix,
  hideSoul,
  hideInner,
  hideBalance,
  showPeriodCircle,
}) => {
  const { setMatrixData, isGenerated, date, setAgeList } = useMatrix();
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
        <TopElements />
        <Left />
        <Right />
        <Bottom />
        <Center />

        {!hideSoul && <SoulCrystal />}

        {!hideBalance && <Balances />}
        {hideBalance && <Health />}
        {!hideInner && <InnerBox />}
        {showPeriodCircle && <PeriodCircle />}
      </Box>
    </Box>
  );
};

export default MatrixGraph;
