import React from 'react';
import { useMatrix } from 'pages/Calculator';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import { AgeCircle } from './PeriodMatrix.styled';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/periodMatrix.svg';

const PeriodMatrix = () => {
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
        position="relative"
      >
        <MatrixGraph matrix={Matrix} />
        <AgeCircle />
        <AssignmentTableDesktop />
      </Box>
      <AssignmentTabledMobTabled />
    </>
  );
};

export default PeriodMatrix;
