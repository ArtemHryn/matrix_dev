import { Box } from 'components/Box';
import React from 'react';
import DataInput from './DataInput/DataInput';

const PersonalMatrix = () => {
  return (
    <Box as="section" py={['40px', null, '35px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        <DataInput />
      </Box>
    </Box>
  );
};

export default PersonalMatrix;
