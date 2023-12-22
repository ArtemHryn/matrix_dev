import { Box } from 'components/Box';
import HealingTableEl from './HealingTableEl';
import { HealingTableTitle } from './HealingTable.styled';

const HealingTable = ({ tablesList }) => {
  const { tables, tablesName } = tablesList;
  return (
    <Box display="flex" flexDirection="column" gridGap={['10px']}>
      <HealingTableTitle>{tablesName}</HealingTableTitle>
      <Box
        display="flex"
        flexDirection={['column', null, 'row']}
        flexWrap={[null, null, 'wrap']}
        gridGap={(null, null, '16px')}
      >
        {tables.map((t, index) => (
          <HealingTableEl table={t} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default HealingTable;
