import { Box } from 'components/Box';
import PartnerInfo from './PartnerInfo/PartnerInfo';
import { MatrixNumber } from '../Partners.styled';
import PartnerGraph from './PartnerGraph/PartnerGraph';
import PurposeTable from '../PurposeTable/PurposeTable';
import FourColumnTable from 'components/CalculatorPageComponents/DeepMatrix/DeepTables/FourColumnTable/FourColumnTable';

const PartnerMatrix = ({
  partner,
  date,
  lastIndex,
  hideSoulCrystal,
  matrix: Matrix,
  matrixForAll: MatrixForAll,
  isAnual = false,
  showFourColumns,
}) => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      maxWidth={[null, null, 'calc((100% - 40px) / 2)']}
      gridGap={['20px']}
    >
      <MatrixNumber mb={['21px']}>{partner.order}</MatrixNumber>
      <PartnerInfo date={date} hideInfo={!partner.isGenerated} />
      <PartnerGraph
        partnerMatrix={partner}
        matrix={lastIndex ? Matrix : null}
        matrixForAll={MatrixForAll}
        hideDigitsForResult={lastIndex && isAnual}
        hideSoulCrystal={hideSoulCrystal}
        isAnual={lastIndex && isAnual}
      />
      <PurposeTable partnerMatrix={partner} />
      {showFourColumns && (
        <FourColumnTable tableInfo={partner.table} width={['100%', '100%', '100%']} />
      )}
    </Box>
  );
};

export default PartnerMatrix;
