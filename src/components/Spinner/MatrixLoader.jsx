import { Box } from 'components/Box';
import { MatrixLoaderImg } from './Spinner.styled';

const MatrixLoader = () => {
  return (
    <Box widtj='100%' display='flex' alignItems='center' justifyContent='center'>
      <MatrixLoaderImg />
    </Box>
  );
};

export default MatrixLoader;
