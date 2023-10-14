import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatrix } from 'pages/Calculator';
import { Box } from 'components/Box';
import DeepTablesBtn from './DeepTablesBtn/DeepTablesBtn';
import { Title } from './DeepTables.styled';

import getGenericTablesData from 'helper/genericTablesData';
import GenericTables from './GenericTables/GenericTables';
import HolisticTables from './GenericTables/HolisticTables';

const DeepTables = () => {
  const [tableId, setTableId] = useState(1);
  const [tablesData, setTablesData] = useState([]);
  const { i18n, t } = useTranslation('calc');
  const { matrixData } = useMatrix();

  useEffect(() => {
    if (Object.keys(matrixData).length === 0) {
      return;
    }
    const result = getGenericTablesData(matrixData, i18n.language);
    console.log(result);
    setTablesData(result);
  }, [i18n.language, matrixData]);
  return (
    <Box>
      <Title>{t('deepCalcProg')}</Title>
      <DeepTablesBtn tableId={tableId} setTableId={setTableId} />
      {Object.keys(matrixData).length !== 0 && (
        <>
          {tableId === 1 && <GenericTables tables={tablesData.generic} />}
          {tableId === 2 && <HolisticTables tables={tablesData.holistic} />}
        </>
      )}
    </Box>
  );
};

export default DeepTables;
