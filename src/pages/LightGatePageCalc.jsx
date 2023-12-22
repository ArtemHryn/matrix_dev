import { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useMatrix } from './Calculator';
import DataInput from 'components/CalculatorPageComponents/DeepMatrix/DataInput/DataInput';
import AboutCustomer from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AboutCustomer/AboutCustomer';
import { Box } from 'components/Box';
import MatrixGraph from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/MatrixGraph/MatrixGraph';
import AssignmentTableDesktop from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';

import { ReactComponent as LightGateMatrix } from 'images/Calculator/deepCalc/lightGateMatrix.svg';
import AssignmentTabledMobTabled from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import Buttons from 'components/CalculatorPageComponents/DeepMatrix/LightGateCalc/Buttons/Buttons';
import { getLightGate } from 'helper/deepCalculator/lightGateCalc';
import KarmaList from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/KarmaIssues/KarmaList/KarmaList';
import HealingTable from 'components/CalculatorPageComponents/DeepMatrix/LightGateCalc/HealingTable/HealingTable';

const LightGatePageCalc = () => {
  const [table, setTable] = useState(1);
  const [lightGateTableInfo, setLightGateTableInfo] = useState({});
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
    if (Object.keys(matrixData).length === 0) return;
    const lightGateTables = getLightGate(matrixData, i18n.language);
    setLightGateTableInfo(lightGateTables);
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
              matrix={LightGateMatrix}
              isLightGate
            />
            <AssignmentTableDesktop />
          </Box>
          <AssignmentTabledMobTabled mb={['24px', '40px']} />
          <Buttons setTable={setTable} table={table} />
          {Object.keys(lightGateTableInfo).length !== 0 && (
            <>
              {table === 1 && <KarmaList list={lightGateTableInfo.karma} />}
              {table === 2 && <HealingTable tablesList={lightGateTableInfo.healing} />}
            </>
          )}
        </>
      )}
    </>
  );
};

export default LightGatePageCalc;
