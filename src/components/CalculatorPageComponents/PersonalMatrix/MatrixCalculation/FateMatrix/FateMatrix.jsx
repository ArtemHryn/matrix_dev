import React from 'react';
import AboutCustomer from './AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from './MatrixGraph/MatrixGraph';

const FateMatrix = () => {
  return (
    <>
      <AboutCustomer display={[null, null, 'none']} mb={['50px', '70px']} />
      <Box>
        <MatrixGraph />
        <AboutCustomer display={['none', 'none', 'block']} />
      </Box>
    </>
  );
};

export default FateMatrix;
