import { Box } from 'components/Box';
import {
  ColumnItem,
  ColumnList,
  ColumnListArcanes,
  ColumnName,
  TableTitle,
} from '../FourColumnTable/FourColumnTable.styled';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const TwoColumnTable = ({ tableInfo }) => {
  const { name, columnsName, keys } = tableInfo;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={['4px']}
      width={['100%', '90%', '70%']}
      m={'0 auto'}
    >
      <TableTitle>{name}</TableTitle>
      <ColumnList>
        {columnsName.map((column, index) => (
          <Box as="li" flex={index === 0 ? '2' : '5'} key={column.name}>
            <ColumnName border={index === 0 ? 'none' : null} fontStyle="italic">
              {column.name}
            </ColumnName>
          </Box>
        ))}
      </ColumnList>
      <ColumnListArcanes>
        {keys.map((row, index) => (
          <ColumnItem key={index} border={index === 0 ? 'none' : null}>
            <ColumnName flex={2} borderLeft={'none'} color="#000" fontFamily="digits">
              {index === keys.length - 1 ? 1 : index + 2} &nbsp; <HiOutlineArrowNarrowRight />{' '}
              &nbsp;
              {index + 1}
            </ColumnName>
            <ColumnName flex={5} color="#000" fontFamily="digits">
              {row}
            </ColumnName>
          </ColumnItem>
        ))}
      </ColumnListArcanes>
    </Box>
  );
};

export default TwoColumnTable;
