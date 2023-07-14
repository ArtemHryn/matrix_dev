import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataInput from './DataInput/DataInput';
import { useMatrix } from 'pages/Calculator';
import {
  allData,
  getCompatData,
  getPartnersChakra,
} from 'helper/calculateMatrix';
import { Box } from 'components/Box';
import PartnerMatrix from './PartnerMatrix/PartnerMatrix';
import ResultMatrix from './ResultMatrix/ResultMatrix';
import HealthCard from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/HealthMatrix/HealthTables/HealthCard/HealthCard';

const Partners = () => {
  const [resultData, setResultData] = useState([]);
  const [partnersMatrixData, setPartnersMatrixData] = useState([]);
  const [partnersHealthCard, setPartnersHealthCard] = useState([]);
  const [isFullOverlap, setIsFullOverlap] = useState(false);
  const { t, i18n } = useTranslation('calc');

  const { partnersDate, showMatrix } = useMatrix();

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const partners = [];
    partnersDate.forEach((element, index) => {
      const partnerInfo = allData(element, element.isGenerated);
      partnerInfo.order = `${t('tableMatrix')} ${index + 1}`;
      partners.push(partnerInfo);
    });
    setPartnersMatrixData(partners);
  }, [partnersDate, showMatrix, t]);

  useEffect(() => {
    setResultData(getCompatData(partnersMatrixData, isFullOverlap));

    if (partnersMatrixData.length === 0) return;
    setPartnersHealthCard(getPartnersChakra(partnersMatrixData, i18n.language));
  }, [i18n.language, isFullOverlap, partnersMatrixData]);

  return (
    <>
      <DataInput setIsFullOverlap={setIsFullOverlap} />
      {showMatrix && (
        <>
          <ResultMatrix resultData={resultData} />
          <Box
            width={[null, null, '900px']}
            m={'0 auto'}
            mb={['40px', '70px', '110px']}
          >
            {' '}
            <HealthCard card={partnersHealthCard} cardType={1} />
          </Box>
          <Box
            display={[null, null, 'flex']}
            justifyContent="space-between"
            gridGap="40px"
          >
            {partnersMatrixData.map((partner, index) => (
              <PartnerMatrix
                key={partner.order}
                partner={partner}
                date={partnersDate[index]}
                lastIndex={
                  index === partnersMatrixData.length - 1 ? true : false
                }
              />
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default Partners;
