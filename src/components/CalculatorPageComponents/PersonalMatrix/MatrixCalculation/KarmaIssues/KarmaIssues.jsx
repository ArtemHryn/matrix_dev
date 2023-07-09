import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import { useEffect, useState } from 'react';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/karmaMatrix.svg';
import KarmaList from './KarmaList/KarmaList';
import { getKarmaIssueData } from 'helper/calculateMatrix';
import { useTranslation } from 'react-i18next';

const KarmaIssues = () => {
  const { isGenerated, matrixData } = useMatrix();
  const [list, setList] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const karmaIssueResult = getKarmaIssueData(matrixData, i18n.language);
    setList(karmaIssueResult);
  }, [i18n.language, matrixData]);

  return (
    <>
      {!isGenerated && <AboutCustomer />}
      <Box
        m="0 auto"
        mb={['50px', '70px', '68px']}
        display={[null, null, 'flex']}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <MatrixGraph matrix={Matrix} hideSoul={true} />
        <AssignmentTableDesktop />
      </Box>

      <AssignmentTabledMobTabled mb={['90px']} />
      <KarmaList list={list} />
    </>
  );
};

export default KarmaIssues;
