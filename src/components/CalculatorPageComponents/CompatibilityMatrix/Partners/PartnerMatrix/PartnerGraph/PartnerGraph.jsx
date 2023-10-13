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
  matrixForAll: MatrixForAll,
  hideDigitsForResult,
  isAnual,
  yearArcanes,
  hideSoulCrystal,
  ...props
}) => {
  return (
    <Box position="relative" mb={['20px', '40px', '0px']} {...props}>
      <PartnerMatrixImg as={MatrixForAll ? MatrixForAll : Matrix} />
      <TopElements matrixData={partnerMatrix} hideDigitsForResult={hideDigitsForResult} />
      <Left matrixData={partnerMatrix} />
      <Right matrixData={partnerMatrix} />
      <Bottom matrixData={partnerMatrix} hideDigitsForResult={hideDigitsForResult} />
      <Center matrixData={partnerMatrix} />
      {!isAnual && (hideSoulCrystal ? null : <SoulCrystal matrixData={partnerMatrix} />)}
      <Balances matrixData={partnerMatrix} />
      <InnerBox matrixData={partnerMatrix} />
      {isAnual && yearArcanes && <AnnualArcanes yearArcanes={yearArcanes} />}
    </Box>
  );
};

export default PartnerGraph;
