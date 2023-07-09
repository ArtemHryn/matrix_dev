import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataInput from './DataInput/DataInput';
import { useMatrix } from 'pages/Calculator';
import { allData, getCompatData } from 'helper/calculateMatrix';
import { Box } from 'components/Box';
import PartnerMatrix from './PartnerMatrix/PartnerMatrix';
import ResultMatrix from './ResultMatrix/ResultMatrix';

const Partners = () => {
  const [resultData, setResultData] = useState([]);
  const [partnersMatrixData, setPartnersMatrixData] = useState([]);
  const { t } = useTranslation('calc');

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
    setResultData(getCompatData(partnersMatrixData));
  }, [partnersMatrixData]);

  return (
    <>
      <DataInput />
      {showMatrix && (
        <>
          <ResultMatrix resultData={resultData} />
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
