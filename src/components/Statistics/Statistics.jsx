import { Box } from 'components/Box';
import { Title } from './Title/Title';
import { UploadStats } from './UploadStats/UploadStats';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <Box width="boxW" mt={5} bg="white">
      <Title> upload stats</Title>
      <UploadStats data={data} />
    </Box>
  );
};

UploadStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
