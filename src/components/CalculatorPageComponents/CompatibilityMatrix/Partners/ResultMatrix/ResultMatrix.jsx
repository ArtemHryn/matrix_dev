import { Box } from 'components/Box';
import PartnerGraph from '../PartnerMatrix/PartnerGraph/PartnerGraph';
import { NameDate, StarImg } from '../Partners.styled';

import star from 'images/Calculator/personalMatrix/star.webp';
import { ReactComponent as Matrix } from 'images/Calculator/CompatibilityMatrix/resultMatrix.svg';
import PurposeTable from '../PurposeTable/PurposeTable';
import InformationTable from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/Desktop/InformationTable/InformationTable';

const ResultMatrix = ({
  resultData,
  matrix: MatrixChange,
  isAnual = false,
  yearArcanes,
}) => {
  if (!resultData) {
    return null;
  }
  return (
    <Box mb={['40px', '70px', '110px']}>
      <Box
        position="relative"
        height={['75px', '100px']}
        display={['flex', null, 'none']}
        alignItems="center"
        justifyContent="center"
        border="0.8px solid #72499B"
        borderRadius={['17px']}
        width={['100%', '70%']}
        mx="auto"
        mb={['50px', '70px']}
      >
        <NameDate fontFamily={'main'} fontSize={['24px', '36px']}>
          Совместимость
        </NameDate>
        <StarImg src={star} alt="star" />
      </Box>
      <Box
        display={[null, null, 'flex']}
        justifyContent="center"
        gridGap="120px"
        alignItems="center"
      >
        <PartnerGraph
          partnerMatrix={resultData}
          matrix={MatrixChange ? MatrixChange : Matrix}
          hideDigitsForResult={true}
          isAnual={isAnual}
          yearArcanes={
            yearArcanes && yearArcanes.map(element => element.arcane)
          }
        />
        <PurposeTable
          partnerMatrix={resultData}
          display={[null, null, 'none']}
        />
        <InformationTable
          matrixData={resultData}
          title="МАТРИЦА СОВМЕСТИМОСТИ"
          display={['none', 'none', 'block']}
        />
      </Box>
    </Box>
  );
};

export default ResultMatrix;
