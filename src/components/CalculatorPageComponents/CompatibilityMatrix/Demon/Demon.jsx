import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { useTranslation } from 'react-i18next';

import { useMatrix } from 'pages/Calculator';
import ResultMatrix from '../Partners/ResultMatrix/ResultMatrix';
import PartnerMatrix from '../Partners/PartnerMatrix/PartnerMatrix';
import DataInputDemon from './DataInput/DataInput';

import { allData, getCompatData } from 'helper/calculateMatrix';
import { getStaticDemonMatrix } from 'helper/demonCalculator';

const Demon = () => {
  const [isFullOverlap, setIsFullOverlap] = useState(false);
  const [isMethod2023, setIsMethod2023] = useState(false);
  const [demonMatrix, setDemonMatrix] = useState([]);
  const { partnersDate, showMatrix } = useMatrix();

  const [resultData, setResultData] = useState();

  const { t } = useTranslation('calc');

  useEffect(() => {
    if (partnersDate.length === 0) {
      return;
    }
    const result = [
      allData({ date: partnersDate[0] }),
      getStaticDemonMatrix(partnersDate[1].demonMatrix),
    ];
    result[0].order = `${t('tableMatrix')} 1`;
    result[0].isGenerated = false;
    result[1].order = `${t('tableMatrix')} 2`;
    result[1].isGenerated = true;
    setDemonMatrix(result);
  }, [partnersDate, t]);

  useEffect(() => {
    setResultData(getCompatData(demonMatrix, isFullOverlap, isMethod2023));
  }, [demonMatrix, isFullOverlap, isMethod2023]);

  return (
    <Box>
      <DataInputDemon setIsFullOverlap={setIsFullOverlap} setIsMethod2023={setIsMethod2023} />
      {showMatrix && (
        <>
          <ResultMatrix resultData={resultData} />
          <Box
            display={['flex']}
            justifyContent="center"
            flexDirection={['column', 'column', 'row']}
            gridGap={['20px', '40px']}
            mb={['60px', '70px']}
          >
            {demonMatrix.map((partner, index) => (
              <PartnerMatrix key={partner.order} partner={partner} date={partnersDate[index]} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Demon;
