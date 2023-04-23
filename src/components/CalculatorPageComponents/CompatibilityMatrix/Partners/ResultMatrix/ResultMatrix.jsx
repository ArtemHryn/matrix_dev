import { Box } from 'components/Box';
import PartnerGraph from '../PartnerMatrix/PartnerGraph/PartnerGraph';
import { NameDate, StarImg } from '../Partners.styled';

import star from 'images/Calculator/personalMatrix/star.webp';
import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/compatibilityMatrix.svg';
import PurposeTable from '../PurposeTable/PurposeTable';
import InformationTable from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/Desktop/InformationTable/InformationTable';

const ResultMatrix = ({ resultData }) => {
  if (!resultData) {
    return null;
  }

  return (
    <Box>
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
      <Box display={[null, null, 'flex']} justifyContent="space-between">
        <PartnerGraph
          partnerMatrix={resultData}
          matrix={Matrix}
          mx="auto"
          width={[null, null, '50%']}
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
