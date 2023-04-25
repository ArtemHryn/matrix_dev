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

const PartnerGraph = ({ partnerMatrix, matrix: Matrix, ...props }) => {
  return (
    <Box position="relative" mb={['50px', '70px', '0px']} {...props}>
      <PartnerMatrixImg as={Matrix} />
      <TopElements matrixData={partnerMatrix} />
      <Left matrixData={partnerMatrix} />
      <Right matrixData={partnerMatrix} />
      <Bottom matrixData={partnerMatrix} />
      <Center matrixData={partnerMatrix} />
      <SoulCrystal matrixData={partnerMatrix} />
      <Balances matrixData={partnerMatrix} />
      <InnerBox matrixData={partnerMatrix} />
    </Box>
  );
};

export default PartnerGraph;
