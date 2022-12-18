import { Box } from 'components/Box';
import { Key } from '../AssignmentTable.styled';
import { Name, RowElement, RowList } from './Row.styled';

export const Row = ({ name, first, second, result, mb }) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={mb ? mb : '0px'}>
      <Name>{name}</Name>
      <RowList>
        <RowElement>
          <Key>{second}</Key>
        </RowElement>
        <RowElement>
          <Key>{first}</Key>
        </RowElement>
        <RowElement>
          <Key>{result}</Key>
        </RowElement>
      </RowList>
    </Box>
  );
};
