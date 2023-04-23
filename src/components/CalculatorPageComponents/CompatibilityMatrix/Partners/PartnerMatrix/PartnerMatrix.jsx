import { Box } from 'components/Box';
import React from 'react';
import PartnerInfo from './PartnerInfo/PartnerInfo';
import { MatrixNumber } from '../Partners.styled';
import PartnerGraph from './PartnerGraph/PartnerGraph';
import PurposeTable from '../PurposeTable/PurposeTable';

const PartnerMatrix = ({ partner, date, lastIndex }) => {
  return (
    <Box flex="1" mb={lastIndex ? '0px' : ['50px', '110px', '0px']}>
      <MatrixNumber mb={['21px']}>{partner.order}</MatrixNumber>
      <PartnerInfo date={date} />
      <PartnerGraph partnerMatrix={partner} />
      <PurposeTable partnerMatrix={partner} />
    </Box>
  );
};

export default PartnerMatrix;
