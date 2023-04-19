import React, { useEffect } from 'react';
import { Box } from 'components/Box';

const CompatibilityMatrix = () => {
  useEffect(() => {
    const section = document.getElementById(`compatibility`);
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
      <Box as="section" py={['40px', null, '35px']} id="compatibility">
          
    </Box>
  );
};

export default CompatibilityMatrix;
