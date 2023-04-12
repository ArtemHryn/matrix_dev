import React, { useEffect } from 'react';
import { Box } from 'components/Box';
import DataInput from './DataInput/DataInput';
import MatrixBtn from './MatrixBtn/MatrixBtn';
import { useMatrix } from 'pages/Calculator';
import FateMatrix from './MatrixCalculation/FateMatrix/FateMatrix';
import KarmaIssues from './MatrixCalculation/KarmaIssues/KarmaIssues';
import HealthMatrix from './MatrixCalculation/HealthMatrix/HealthMatrix';
import PeriodMatrix from './MatrixCalculation/PeriodMatrix/PeriodMatrix';

const PersonalMatrix = () => {
  const { showMatrix, matrixType } = useMatrix();

  useEffect(() => {
    const section = document.getElementById(`personal`);
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const getMatrixComponent = () => {
    switch (matrixType) {
      case 'fateMatrix':
        return <FateMatrix />;
      case 'karmaIssues':
        return <KarmaIssues />;
      case 'healthMatrix':
        return <HealthMatrix />;
      case 'prognosis':
        return <PeriodMatrix />;
      default:
        break;
    }
  };

  return (
    <Box as="section" py={['40px', null, '35px']} id="personal">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        <DataInput />

        {showMatrix && (
          <>
            <MatrixBtn />
            {getMatrixComponent()}
          </>
        )}
      </Box>
    </Box>
  );
};

export default PersonalMatrix;
