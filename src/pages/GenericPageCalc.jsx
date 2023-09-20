import { useEffect } from 'react';
import { intervalToDuration } from 'date-fns';
import { useMatrix } from './Calculator';
import DataInput from 'components/CalculatorPageComponents/DeepMatrix/DataInput/DataInput';
import AboutCustomer from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTableDesktop from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AssignmentTabledMobTabled from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';

import { ReactComponent as Generic } from 'images/Calculator/deepCalc/generic_matrix.svg';
import DeepTables from 'components/CalculatorPageComponents/DeepMatrix/DeepTables/DeepTables';

const GenericPageCalc = () => {
  const { showMatrix, date, setAge, isGenerated } = useMatrix();
  const { day, month, year } = date;

  useEffect(() => {
    if (day && month && year) {
      (() => {
        const { years, months } = intervalToDuration({
          start: new Date(),
          end: new Date(year, month - 1, day),
        });
        setAge({ years, months });
      })();
    }
  }, [date, day, month, setAge, year]);
  return (
    <>
      <DataInput />
      {showMatrix && (
        <>
          {!isGenerated && <AboutCustomer />}{' '}
          <Box
            m="0 auto"
            mb={['50px', '70px', '0px']}
            display={[null, null, 'flex']}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <MatrixGraph matrix={Generic} hideInner hideBalance/>
            <AssignmentTableDesktop />
          </Box>
          <AssignmentTabledMobTabled mb={['24px', '40px']} />
          <DeepTables />
        </>
      )}
    </>
  );
};

export default GenericPageCalc;
