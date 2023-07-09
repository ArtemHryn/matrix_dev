import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { allData, getCompatData } from 'helper/calculateMatrix';
import { useMatrix } from 'pages/Calculator';
import DataInput from './DataInput/DataInput';
import { Box } from 'components/Box';
import ResultMatrix from '../Partners/ResultMatrix/ResultMatrix';
import PartnerMatrix from '../Partners/PartnerMatrix/PartnerMatrix';
import { ReactComponent as Matrix } from 'images/Calculator/AnnualMatrix/yearResultMatrix.svg';
import AnnualPeriodTable from './AnnualPeriodTable/AnnualPeriodTable';

const Annual = () => {
  const { partnersDate, showMatrix } = useMatrix();
  const { t } = useTranslation('calc');

  const [resultData, setResultData] = useState();
  const [annualMatrixData, setAnnualMatrixData] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);

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
    setAnnualMatrixData(partners);
  }, [partnersDate, t]);

  useEffect(() => {
    setResultData(getCompatData(annualMatrixData));
  }, [annualMatrixData]);

  return (
    <Box>
      <DataInput />
      {showMatrix && (
        <>
          <ResultMatrix
            resultData={resultData}
            matrix={Matrix}
            isAnual={true}
            yearArcanes={tableInfo.filter((element, index) => index % 2 !== 0)}
          />
          <Box
            display={[null, null, 'flex']}
            justifyContent="center"
            gridGap="40px"
            mb={['60px', '70px']}
          >
            {annualMatrixData.map((partner, index) => (
              <PartnerMatrix
                key={partner.order}
                partner={partner}
                date={partnersDate[index]}
                lastIndex={index === annualMatrixData.length - 1 ? true : false}
                matrix={Matrix}
                isAnual={true}
              />
            ))}
          </Box>
          <AnnualPeriodTable
            resultData={resultData}
            matrixYear={partnersDate[1].year}
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
          />
        </>
      )}
    </Box>
  );
};

export default Annual;
