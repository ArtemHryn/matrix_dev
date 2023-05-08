import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/healthMatrix.svg';
import HealthTables from './HealthTables/HealthTables';

const HealthMatrix = () => {
  const { isGenerated } = useMatrix();

  return (
    <>
      {!isGenerated && (
        <AboutCustomer  />
      )}
      <Box
        m="0 auto"
        mb={['50px', '70px', '68px']}
        display={[null, null, 'flex']}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <MatrixGraph matrix={Matrix} hideInner={true} hideBalance={true} />
        <AssignmentTableDesktop />
      </Box>
      <AssignmentTabledMobTabled mb={['90px']} />
      <HealthTables />
    </>
  );
};

export default HealthMatrix;
