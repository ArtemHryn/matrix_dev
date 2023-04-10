import React from 'react';
import AboutCustomer from './AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from './MatrixGraph/MatrixGraph';
import AssignmentTabledMobTabled from './AssignmentTable/MobTable/AssignmentTabledMobTable';
import AssignmentTableDesktop from './AssignmentTable/Desktop/AssignmentTableDesktop';

const FateMatrix = () => {
  return (
    <>
      <AboutCustomer display={[null, null, 'none']} mb={['50px', '70px']} />
      <Box
        m="0 auto"
        mb={['50px', '70px', '0px']}
        display={[null, null, 'flex']}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <MatrixGraph />
        <AssignmentTableDesktop />
      </Box>
      <AssignmentTabledMobTabled />
    </>
  );
};

export default FateMatrix;
