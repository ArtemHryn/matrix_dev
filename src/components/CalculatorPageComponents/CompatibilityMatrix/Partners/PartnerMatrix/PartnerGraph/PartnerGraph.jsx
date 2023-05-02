import { Box } from 'components/Box';

import {
  TopElements,
  Left,
  Right,
  Bottom,
  Center,
  SoulCrystal,
  Balances,
  InnerBox,
} from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/MatrixGraph/MatrixElements/Sides';
import { PartnerMatrixImg } from './PartnerGraph.styled';
import AnnualArcanes from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/MatrixGraph/MatrixElements/Sides/AnnualArcanes';

const PartnerGraph = ({
  partnerMatrix,
  matrix: Matrix,
  hideDigitsForResult,
  isAnual,
  yearArcanes,
  ...props
}) => {
  return (
    <Box position="relative" mb={['50px', '70px', '0px']} {...props}>
      <PartnerMatrixImg as={Matrix} />
      <TopElements
        matrixData={partnerMatrix}
        hideDigitsForResult={hideDigitsForResult}
      />
      <Left matrixData={partnerMatrix} />
      <Right matrixData={partnerMatrix} />
      <Bottom
        matrixData={partnerMatrix}
        hideDigitsForResult={hideDigitsForResult}
      />
      <Center matrixData={partnerMatrix} />
      {!isAnual && <SoulCrystal matrixData={partnerMatrix} />}
      <Balances matrixData={partnerMatrix} />
      <InnerBox matrixData={partnerMatrix} />
      {isAnual && yearArcanes && <AnnualArcanes yearArcanes={yearArcanes} />}
    </Box>
  );
};

export default PartnerGraph;
