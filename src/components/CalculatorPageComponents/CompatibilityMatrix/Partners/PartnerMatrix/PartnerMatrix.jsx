import { Box } from 'components/Box';
import PartnerInfo from './PartnerInfo/PartnerInfo';
import { MatrixNumber } from '../Partners.styled';
import PartnerGraph from './PartnerGraph/PartnerGraph';
import PurposeTable from '../PurposeTable/PurposeTable';

const PartnerMatrix = ({
  partner,
  date,
  lastIndex,
  matrix: Matrix,
  isAnual = false,
}) => {
  return (
    <Box
      flex="1"
      mb={lastIndex ? '0px' : ['50px', '110px', '0px']}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      maxWidth={[null, null, 'calc((100% - 40px) / 2)']}
    >
      <MatrixNumber mb={['21px']}>{partner.order}</MatrixNumber>
      <PartnerInfo date={date} hideInfo={!partner.isGenerated} />
      <PartnerGraph
        partnerMatrix={partner}
        matrix={lastIndex ? Matrix : null}
        hideDigitsForResult={lastIndex && isAnual}
        isAnual={lastIndex && isAnual}
      />
      <PurposeTable partnerMatrix={partner} />
    </Box>
  );
};

export default PartnerMatrix;
