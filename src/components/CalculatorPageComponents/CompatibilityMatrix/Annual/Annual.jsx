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

  const [isMethod2023, setIsMethod2023] = useState(false);
  const [resultData, setResultData] = useState();
  const [annualMatrixData, setAnnualMatrixData] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [isFullOverlap, setIsFullOverlap] = useState(false);

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const partners = [];
    partnersDate.forEach((element, index) => {
      const partnerInfo = allData({ date: element, isGenerated: element.isGenerated });
      partnerInfo.order = `${t('tableMatrix')} ${index + 1}`;
      partners.push(partnerInfo);
    });
    setAnnualMatrixData(partners);
  }, [partnersDate, t]);

  useEffect(() => {
    setResultData(getCompatData(annualMatrixData, isFullOverlap, isMethod2023));
  }, [annualMatrixData, isFullOverlap, isMethod2023]);

  return (
    <Box>
      <DataInput setIsFullOverlap={setIsFullOverlap} setIsMethod2023={setIsMethod2023} />
      {showMatrix && (
        <>
          <ResultMatrix
            resultData={resultData}
            matrix={Matrix}
            isAnual={true}
            yearArcanes={tableInfo.filter((element, index) => index % 2 !== 0)}
          />
          <AnnualPeriodTable
            resultData={resultData}
            matrixYear={partnersDate[1].year}
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
          />
          <Box
            display={['flex']}
            flexDirection={['column', 'column', 'row']}
            justifyContent="center"
            gridGap={["20px",'40px']}
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
        </>
      )}
    </Box>
  );
};

export default Annual;
