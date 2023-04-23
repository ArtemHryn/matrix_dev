import { Box } from 'components/Box';
import AboutCustomerDesk from './AboutCustomerDesk/AboutCustomerDesk';
import InformationTable from './InformationTable/InformationTable';
import { useMatrix } from 'pages/Calculator';

const AssignmentTableDesktop = () => {
  const { isGenerated, matrixData } = useMatrix();

  return (
    <Box display={['none', 'none', 'block']} width="337px">
      {!isGenerated && <AboutCustomerDesk />}
      <InformationTable matrixData={matrixData} />
    </Box>
  );
};

export default AssignmentTableDesktop;
