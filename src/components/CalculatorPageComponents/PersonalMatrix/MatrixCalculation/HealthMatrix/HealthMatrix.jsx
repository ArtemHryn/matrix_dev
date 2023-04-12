import React from 'react';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/healthMatrix.svg';


const HealthMatrix = () => {
  const { isGenerated } = useMatrix();

  return (
    <>
      {!isGenerated && (
        <AboutCustomer display={[null, null, 'none']} mb={['50px', '70px']} />
      )}
      <Box
        m="0 auto"
        mb={['50px', '70px', '0px']}
        display={[null, null, 'flex']}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <MatrixGraph matrix={Matrix} hideInner={true} />
        <AssignmentTableDesktop />
      </Box>
      <AssignmentTabledMobTabled />
    </>
  );
};

export default HealthMatrix;
