import { Box } from 'components/Box';
import FourColumnTable from '../FourColumnTable/FourColumnTable';
import TwoColumnTable from '../TwoColumnTable/TwoColumnTable';

const HolisticTables = ({ tables }) => {
  if (!tables) return null;
  return (
    <Box
      display="flex"
      flexDirection={['column', null, 'row']}
      flexWrap={[null, null, 'wrap']}
      gridGap={['12px', '16px', '20px']}
    >
      <FourColumnTable tableInfo={tables.table1} />
      <FourColumnTable tableInfo={tables.table2} />
      <FourColumnTable tableInfo={tables.table3} />
      <TwoColumnTable tableInfo={tables.table4} />
    </Box>
  );
};

export default HolisticTables;
