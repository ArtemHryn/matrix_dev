import { Box } from 'components/Box';
import { Title } from './Title/Title';

export const Statistics = ({ title, data }) => {
  return (
    <Box width="boxW" height="boxH" mt={5} bg="white">
      <Title title={title} />
    </Box>
  );
};
