import { useMatrix } from 'pages/Calculator';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import { AgeCircle } from './PeriodMatrix.styled';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/periodMatrix.svg';
import PeriodTable from './PeriodTable/PeriodTable';

const PeriodMatrix = () => {
  const { isGenerated } = useMatrix();

  return (
    <>
      {!isGenerated && <AboutCustomer />}
      <Box
        m="0 auto"
        mb={['50px', '70px', '70px']}
        display={[null, null, 'flex']}
        alignItems="center"
        justifyContent="space-evenly"
        position="relative"
      >
        <MatrixGraph matrix={Matrix} showPeriodCircle={true} />
        <AgeCircle />
        <AssignmentTableDesktop />
      </Box>
      <AssignmentTabledMobTabled mb={['90px']} />
      <PeriodTable />
    </>
  );
};

export default PeriodMatrix;
