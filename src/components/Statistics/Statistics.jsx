import { Box } from 'components/Box';
import { Title } from './Title/Title';
import { UploadStats } from './UploadStats/UploadStats';

export const Statistics = ({ data }) => {
  return (
    <Box width="boxW" mt={5} bg="white">
      <Title> upload stats</Title>
      <UploadStats data={ data } />
    </Box>
  );
};
