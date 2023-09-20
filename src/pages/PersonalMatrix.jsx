import { useEffect } from 'react';
import { Box } from 'components/Box';
import DataInput from '../components/CalculatorPageComponents/PersonalMatrix/DataInput/DataInput';
import MatrixBtn from '../components/CalculatorPageComponents/PersonalMatrix/MatrixBtn/MatrixBtn';
import { useMatrix } from 'pages/Calculator';
import FateMatrix from '../components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/FateMatrix';
import KarmaIssues from '../components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/KarmaIssues/KarmaIssues';
import HealthMatrix from '../components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/HealthMatrix/HealthMatrix';
import PeriodMatrix from '../components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/PeriodMatrix/PeriodMatrix';
import { intervalToDuration } from 'date-fns';

const PersonalMatrix = () => {
  const { showMatrix, matrixType, date, setAge } = useMatrix();
  const { day, month, year } = date;

  useEffect(() => {
    const section = document.getElementById(`personal`);
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (date.day && date.month && date.year) {
      (() => {
        const { years, months } = intervalToDuration({
          start: new Date(),
          end: new Date(year, month - 1, day),
        });
        setAge({ years, months });
      })();
    }
  }, [date, day, month, setAge, year]);

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
