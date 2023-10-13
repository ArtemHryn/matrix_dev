import { Box } from 'components/Box';
import FourColumnTable from '../FourColumnTable/FourColumnTable';
import TwoColumnTable from '../TwoColumnTable/TwoColumnTable';

const GenericTables = ({ tables }) => {
  if (!tables) return null;

  return (
    <Box display="flex" flexDirection={['column', null, 'row']} gridGap={['12px', '16px', '20px']}>
      <FourColumnTable tableInfo={tables.table1} />
      <TwoColumnTable tableInfo={tables.table2} />
    </Box>
  );
};

export default GenericTables;
