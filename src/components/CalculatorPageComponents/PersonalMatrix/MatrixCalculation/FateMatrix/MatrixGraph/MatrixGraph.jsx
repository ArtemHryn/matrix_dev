import { useEffect } from 'react';
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
  RisingStar,
} from './MatrixElements/Sides';
import PeriodCircle from '../../PeriodMatrix/PeriodCircle/PeriodCircle';
import GenericLines from './MatrixElements/Sides/GenericLines';
import LightGate from './MatrixElements/Sides/LightGate';

const MatrixGraph = ({
  matrix: Matrix,
  hideSoul,
  hideInner,
  hideBalance,
  showPeriodCircle,
  isGeneric,
  hideCenter,
  hideHealth,
  hideInnerLines,
  isRisingStar,
  isLightGate,
}) => {
  const { setMatrixData, isGenerated, date, setAgeList, matrixData } = useMatrix();

  useEffect(() => {
    const result = allData({ date, isGenerated, isGeneric, isRisingStar, isLightGate });
    const ageResult = getPeriod(result);
    setMatrixData(result);
    setAgeList(ageResult);
  }, [date, isGenerated, isGeneric, isRisingStar, setAgeList, setMatrixData, isLightGate]);

  return (
    <Box>
      <Box position="relative" width={['100%', '667px']} m="0 auto" zIndex="20">
        <MatrixImg as={Matrix} />
        <TopElements matrixData={matrixData} hideInnerLines={hideInnerLines} />
        <Left matrixData={matrixData} hideInnerLines={hideInnerLines} />
        <Right matrixData={matrixData} hideInnerLines={hideInnerLines} />
        <Bottom matrixData={matrixData} hideInnerLines={hideInnerLines} />
        {isRisingStar && <RisingStar matrixData={matrixData} />}
        {!hideCenter && <Center matrixData={matrixData} />}

        {!hideSoul && <SoulCrystal matrixData={matrixData} />}

        {!hideBalance && <Balances matrixData={matrixData} />}
        {!hideHealth && <>{hideBalance && <Health matrixData={matrixData} />}</>}
        {!hideInner && <InnerBox matrixData={matrixData} />}
        {showPeriodCircle && <PeriodCircle matrixData={matrixData} />}
        {isGeneric && <GenericLines matrixData={matrixData} />}
        {isLightGate && <LightGate matrixData={matrixData} />}
      </Box>
    </Box>
  );
};

export default MatrixGraph;
