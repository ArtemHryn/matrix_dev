import { Box } from 'components/Box';
import AboutCustomerDesk from './AboutCustomerDesk/AboutCustomerDesk';
import InformationTable from './InformationTable/InformationTable';



const AssignmentTableDesktop = () => {
  return (
    <Box display={['none', 'none', 'block']} width="337px">
      <AboutCustomerDesk />
      <InformationTable />
    </Box>
  );
};

export default AssignmentTableDesktop;
