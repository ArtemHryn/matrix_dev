import React from 'react';
import AboutCustomer from './AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from './MatrixGraph/MatrixGraph';
import AssignmentTabledMobTabled from './AssignmentTable/MobTable/AssignmentTabledMobTable';

const FateMatrix = () => {
  return (
    <>
      <AboutCustomer display={[null, null, 'none']} mb={['50px', '70px']} />
      <Box mb={['50px', '70px']}>
        <MatrixGraph />
        <AboutCustomer display={['none', 'none', 'block']} />
      </Box>
      <AssignmentTabledMobTabled />
    </>
  );
};

export default FateMatrix;
