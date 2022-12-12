import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { MatrixData } from './MatrixData/MatrixData';

export const MatrixCalc = () => {
  return (
    <Container pl="113px" ps="62px 0">
      <Box
        width="813px"
        height="357px"
        backgroundColor="#FFFFFF"
        borderRadius="29px"
        p="48px"
      >
        <MatrixData />
      </Box>
    </Container>
  );
};
