import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { useState } from 'react';
import { AssignmentTable } from './AssignmentTable/AssignmentTable';
import { GenerateMatrix } from './GenerateMatrix/GenerateMatrix';
import { MatrixData } from './MatrixData/MatrixData';
import { MatrixInformation } from './MatrixInformation/MatrixInformation';

export const MatrixCalc = () => {
  const [date, setDate] = useState({});
  const [data, setData] = useState({});
  const [showMatrix, setShowMatrix] = useState(false);
  const [name, setName] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [matrixType, setMatrixType] = useState('personal');

  console.log(matrixType);
  return (
    <Container ps="62px 0" p="0 108px">
      <Box pb="112px">
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
            setIsGenerated={setIsGenerated}
          />
          <GenerateMatrix
            isShowedMatrix={setShowMatrix}
            setIsGenerated={setIsGenerated}
            addDate={setDate}
          />
        </Box>
        {showMatrix && (
          <MatrixInformation
            name={name}
            date={date}
            isGenerated={isGenerated}
            setData={setData}
            matrixType={matrixType}
            setMatrixType={setMatrixType}
          />
        )}
      </Box>
      {showMatrix && data?.day && <AssignmentTable data={data} />}
    </Container>
  );
};
