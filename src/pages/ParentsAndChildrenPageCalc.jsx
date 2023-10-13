import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatrix } from './Calculator';
import ParentsAndChildrenDataInput from 'components/CalculatorPageComponents/DeepMatrix/ParentsAndChildrenDataInput/ParentsAndChildrenDataInput';
import PartnerMatrix from 'components/CalculatorPageComponents/CompatibilityMatrix/Partners/PartnerMatrix/PartnerMatrix';
import { Box } from 'components/Box';
import { allData } from 'helper/calculateMatrix';
import { getParentTable, getChildrenTable } from 'helper/deepCalculator/parentsAndChildrenTables';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/karmaMatrix.svg';

const ParentsAndChildrenPageCalc = () => {
  const [parentsMatrixDate, setParentsMatrixDate] = useState([]);
  const { t, i18n } = useTranslation('calc');

  const { partnersDate, showMatrix } = useMatrix();

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const partners = [];
    partnersDate.forEach((element, index) => {
      const partnerInfo = allData(element, element.isGenerated);
      partnerInfo.order = index === 0 ? 'МАТРИЦА МАТЕРИ' : 'МАТРИЦА РЕБЕНКА';
      partnerInfo.table =
        index === 0
          ? getParentTable(partnerInfo, i18n.language)
          : getChildrenTable(partnerInfo, i18n.language);
      partners.push(partnerInfo);
    });
    setParentsMatrixDate(partners);
  }, [i18n.language, partnersDate, t]);
  return (
    <>
      <ParentsAndChildrenDataInput />
      {showMatrix && (
        <>
          <Box
            display={'flex'}
            flexDirection={['column', null, 'row']}
            justifyContent="space-between"
            gridGap={['50px']}
          >
            {parentsMatrixDate.map((parent, index) => (
              <>
                <PartnerMatrix
                  key={parent.order}
                  partner={parent}
                  date={partnersDate[index]}
                  matrixForAll={Matrix}
                  hideSoulCrystal={true}
                  showFourColumns={true}
                />
              </>
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default ParentsAndChildrenPageCalc;
