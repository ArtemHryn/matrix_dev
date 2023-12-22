import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataInput from './DataInput/DataInput';
import { useMatrix } from 'pages/Calculator';
import {
  allData,
  getCompatData,
  getPartnersChakra,
  partnersAuthorHealthCard,
} from 'helper/calculateMatrix';
import { Box } from 'components/Box';
import PartnerMatrix from './PartnerMatrix/PartnerMatrix';
import ResultMatrix from './ResultMatrix/ResultMatrix';
import HealthCard from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/HealthMatrix/HealthTables/HealthCard/HealthCard';
import { SetCardTypeBtn } from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/HealthMatrix/HealthMatrix.styled';

const btnGradient = 'linear-gradient(180deg, #FFF 19.44%, #F5E9FF 52.78%, #F7C8FF 100%);';
const btnGradientActive = 'linear-gradient(180deg, #765D90 5.73%, rgba(198, 106, 201, 0.51) 100%)';

const Partners = () => {
  const [resultData, setResultData] = useState([]);
  const [cardType, setCardType] = useState(2);
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
      const partnerInfo = allData({date: element, isGenerated: element.isGenerated});
      partnerInfo.order = `${t('tableMatrix')} ${index + 1}`;
      partners.push(partnerInfo);
    });
    setPartnersMatrixData(partners);
  }, [partnersDate, showMatrix, t]);

  useEffect(() => {
    setResultData(getCompatData(partnersMatrixData, isFullOverlap));

    if (partnersMatrixData.length === 0) return;
    const classicTable = getPartnersChakra(partnersMatrixData, i18n.language);
    const authorTable = partnersAuthorHealthCard(partnersMatrixData, i18n.language);
    setPartnersHealthCard([classicTable, authorTable]);
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
            gridGap={['5px', '10px']}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gridGap={['5px', '10px']}
              mb={['12px', '28px']}
            >
              <SetCardTypeBtn
                color={cardType === 1 ? 'white' : null}
                bg={cardType === 1 ? '#765D90' : null}
                onClick={() => setCardType(1)}
              >
                {t('classic')}
              </SetCardTypeBtn>
              <SetCardTypeBtn
                color={cardType === 2 ? 'white' : null}
                background={cardType === 2 ? btnGradientActive : btnGradient}
                onClick={() => setCardType(2)}
                fontSize={['14px']}
              >
                {t('healthAuthor')} INTEGRITY*
              </SetCardTypeBtn>
            </Box>

            {partnersHealthCard.length !== 0 && (
              <HealthCard card={cardType === 1 ? partnersHealthCard[0] : partnersHealthCard[1]} />
            )}
          </Box>
          <Box display={[null, null, 'flex']} justifyContent="space-between" gridGap="40px">
            {partnersMatrixData.map((partner, index) => (
              <PartnerMatrix
                key={partner.order}
                partner={partner}
                date={partnersDate[index]}
                lastIndex={index === partnersMatrixData.length - 1 ? true : false}
              />
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default Partners;
