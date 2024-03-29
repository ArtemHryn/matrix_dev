import { Box } from 'components/Box';
import {
  ColumnName,
  ColumnList,
  TableTitle,
  ColumnListArcanes,
  ColumnItem,
} from './FourColumnTable.styled';

const FourColumnTable = ({ tableInfo, width }) => {
  const { name, columnsName, arcanes } = tableInfo;
  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap={['4px']}
      width={width ? width : ['100%', '90%', 'calc((100% - 20px) / 2)']}
      m={['0 auto', null, '0px']}
    >
      <TableTitle>{name}</TableTitle>
      <ColumnList>
        {columnsName.map((column, index) => (
          <Box as="li" flex={index === 0 ? '2' : '3'} key={column.name}>
            <ColumnName border={index === 0 ? 'none' : null} fontStyle="italic">
              {column.name}
            </ColumnName>
          </Box>
        ))}
      </ColumnList>
      <ColumnListArcanes>
        {arcanes.map((row, index) => (
          <ColumnItem
            key={index}
            border={index === 0 ? 'none' : null}
            bg={index % 2 !== 0 && '#b49bd145'}
          >
            <ColumnName flex={2} borderLeft={'none'} color="#000" fontFamily="digits">
              {row.startColumn ? row.startColumn : index + 1}
            </ColumnName>
            <ColumnName flex={3} color="#000" fontFamily="digits">
              {row.column1}
            </ColumnName>
            <ColumnName flex={3} color="#000" fontFamily="digits">
              {row.column2}
            </ColumnName>
            <ColumnName flex={3} color="#000" fontFamily="digits">
              {row.column3}
            </ColumnName>
          </ColumnItem>
        ))}
      </ColumnListArcanes>
    </Box>
  );
};

export default FourColumnTable;
