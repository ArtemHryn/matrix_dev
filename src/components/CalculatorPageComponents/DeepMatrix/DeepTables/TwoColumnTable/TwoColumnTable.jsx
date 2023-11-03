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
      width={['100%', '90%', 'calc((100% - 20px) / 2)']}
      m={['0 auto', null, '0px']}
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
          <ColumnItem
            key={index}
            border={index === 0 ? 'none' : null}
            bg={index % 2 !== 0 && '#b49bd145'}
          >
            <ColumnName flex={2} borderLeft={'none'} color="#000" fontFamily="digits">
              {index + 1} &nbsp; <HiOutlineArrowNarrowRight /> &nbsp;
              {index === keys.length - 1 ? 1 : index + 2}
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
