import { Box } from 'components/Box';
import DataInput from './DataInput/DataInput';
import { useMatrix } from 'pages/Calculator';
import { useEffect, useState } from 'react';
import PartnerMatrix from '../Partners/PartnerMatrix/PartnerMatrix';
import { allData, getCompatData } from 'helper/calculateMatrix';
import ResultMatrix from '../Partners/ResultMatrix/ResultMatrix';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { partnersDate, showMatrix } = useMatrix();

  const [resultData, setResultData] = useState();
  const [teamMatrixData, setTeamMatrixData] = useState([]);
  const [isFullOverlap, setIsFullOverlap] = useState(false);
  const { t } = useTranslation('calc');

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const members = [];
    partnersDate.forEach((element, index) => {
      const memberInfo = allData(element, false);
      memberInfo.name = element.name;
      memberInfo.order = `${t('tableMatrix')} ${index + 1}`;
      members.push(memberInfo);
    });
    setTeamMatrixData(members);
  }, [partnersDate, t]);

  useEffect(() => {
    setResultData(getCompatData(teamMatrixData, isFullOverlap));
  }, [isFullOverlap, teamMatrixData]);

  return (
    <Box>
      <DataInput setIsFullOverlap={setIsFullOverlap} />
      {showMatrix && (
        <>
          <ResultMatrix resultData={resultData} />
          <Box
            display={[null, null, 'flex']}
            justifyContent="center"
            gridGap="40px"
            flexWrap="wrap"
          >
            {teamMatrixData.map((partner, index) => (
              <PartnerMatrix
                key={partner.order}
                partner={partner}
                date={partnersDate[index]}
                lastIndex={index === teamMatrixData.length - 1 ? true : false}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Team;
