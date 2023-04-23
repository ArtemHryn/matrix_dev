import React, { useEffect, useState } from 'react';
import DataInput from './DataInput/DataInput';
import { useMatrix } from 'pages/Calculator';
import { allData, getCompatData } from 'helper/calculateMatrix';
import { Box } from 'components/Box';
import PartnerMatrix from './PartnerMatrix/PartnerMatrix';
import ResultMatrix from './ResultMatrix/ResultMatrix';

const Partners = () => {
  const [resultData, setResultData] = useState();
  const [partnersMatrixData, setPartnersMatrixData] = useState([]);
  const { partnersDate, showMatrix } = useMatrix();

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const partners = [];
    partnersDate.forEach((element, index) => {
      const partnerInfo = allData(element, element.isGenerated);
      partnerInfo.order = `МАТРИЦА ${index + 1}`;
      partners.push(partnerInfo);
    });
    setPartnersMatrixData(partners);
  }, [partnersDate, showMatrix]);

  useEffect(() => {
    setResultData(getCompatData(partnersMatrixData));
  }, [partnersMatrixData]);

  return (
    <>
      <DataInput />
      {showMatrix && (
        <>
          <Box
            display={[null, null, 'flex']}
            justifyContent="space-between"
            gridGap="40px"
            mb={['40px', '60px', '80px']}
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
          <ResultMatrix resultData={resultData} />
        </>
      )}
    </>
  );
};

export default Partners;
