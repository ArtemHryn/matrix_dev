import React, { useEffect } from 'react';
import { Box } from 'components/Box';
import { MatrixImg } from './MatrixGraph.styled';
import TopElements from './MatrixElements/Sides/TopElements';
import { useMatrix } from 'pages/Calculator';
import { allData } from 'helper/calculateMatrix';
import SoulCrystal from './MatrixElements/Sides/SoulCrystal';
import Balances from './MatrixElements/Sides/Balances';
import Left from './MatrixElements/Sides/Left';
import Right from './MatrixElements/Sides/Right';
import Bottom from './MatrixElements/Sides/Bottom';
import Center from './MatrixElements/Sides/Center';
import InnerBox from './MatrixElements/Sides/InnerBox';

const MatrixGraph = ({ matrix: Matrix, hideSoul, hideInner }) => {
  const { setMatrixData, isGenerated, date } = useMatrix();
  useEffect(() => {
    const result = allData(date, isGenerated);
    setMatrixData(result);
  }, [date, isGenerated, setMatrixData]);

  return (
    <Box>
      <Box position="relative" width={['100%', '667px']} m="0 auto">
        <MatrixImg as={Matrix} />
        <TopElements />
        <Left />
        <Right />
        <Bottom />
        <Center />

        {!hideSoul && <SoulCrystal />}
        <Balances />

        {!hideInner && <InnerBox />}
      </Box>
    </Box>
  );
};

export default MatrixGraph;
