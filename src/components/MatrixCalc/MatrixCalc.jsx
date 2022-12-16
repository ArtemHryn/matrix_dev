import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { useState } from 'react';
import { GenerateMatrix } from './GenerateMatrix/GenerateMatrix';
import { MatrixData } from './MatrixData/MatrixData';
import { MatrixInformation } from './MatrixInformation/MatrixInformation';

export const MatrixCalc = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState({});
  return (
    <Container ps="62px 0" p="0 108px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb="153px"
      >
        <MatrixData
          isShowedMatrix={setShowMatrix}
          addName={setName}
          addDate={setDate}
        />
        <GenerateMatrix isShowedMatrix={setShowMatrix} />
      </Box>
      {showMatrix && <MatrixInformation name={name} date={date} />}
    </Container>
  );
};
