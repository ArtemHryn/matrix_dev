import { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useMatrix } from './Calculator';
import { Box } from 'components/Box';
import DataInput from 'components/CalculatorPageComponents/DeepMatrix/DataInput/DataInput';
import AboutCustomer from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AboutCustomer/AboutCustomer';
import MatrixGraph from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTableDesktop from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AssignmentTabledMobTabled from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import { getRisingStarTable } from 'helper/deepCalculator/risingStarTable';
import KarmaList from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/KarmaIssues/KarmaList/KarmaList';
import { ReactComponent as RisingStar } from 'images/Calculator/deepCalc/rising_star.svg';

const RisingStarPageCalc = () => {
  const [starTable, setStarTable] = useState([]);
  const { i18n } = useTranslation();
  const { showMatrix, date, setAge, isGenerated, matrixData } = useMatrix();
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

  useEffect(() => {
    const table = getRisingStarTable(matrixData, i18n.language);
    setStarTable(table);
  }, [i18n.language, matrixData]);

  return (
    <>
      <DataInput />
      {showMatrix && (
        <>
          {!isGenerated && <AboutCustomer />}
          <Box
            m="0 auto"
            mb={['50px', '70px', '70px']}
            display={[null, null, 'flex']}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <MatrixGraph
              hideSoul
              hideInner
              hideBalance
              hideHealth
              hideInnerLines={true}
              isRisingStar
              matrix={RisingStar}
              hideCenter
            />
            <AssignmentTableDesktop />
          </Box>
          <AssignmentTabledMobTabled mb={['24px', '40px']} />
          <KarmaList list={starTable} />
        </>
      )}
    </>
  );
};

export default RisingStarPageCalc;
