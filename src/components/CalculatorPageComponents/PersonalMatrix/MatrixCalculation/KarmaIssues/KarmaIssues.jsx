import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';
import React from 'react';
import AssignmentTableDesktop from '../FateMatrix/AssignmentTable/Desktop/AssignmentTableDesktop';
import AboutCustomer from '../FateMatrix/AboutCustomer/AboutCustomer';
import AssignmentTabledMobTabled from '../FateMatrix/AssignmentTable/MobTable/AssignmentTabledMobTable';
import MatrixGraph from '../FateMatrix/MatrixGraph/MatrixGraph';

import { ReactComponent as Matrix } from 'images/Calculator/personalMatrix/karmaMatrix.svg';
import KarmaList from './KarmaList/KarmaList';

const list = [
  {
    karmaName: 'Some name',
    info: [
      {
        type: 'Pers',
        energyInfo: [
          { name: 'karma1', energy: '20' },
          { name: 'karma2', energy: '2' },
          { name: 'karm3', energy: '21' },
          { name: 'karm4', energy: '22' },
        ],
      },
      {
        type: 'Fam',
        energyInfo: [
          { name: 'karma1', energy: '20' },
          { name: 'karma2', energy: '2' },
          { name: 'karma3', energy: '21' },
          { name: 'karma4', energy: '22' },
        ],
      },
    ],
  },
  {
    karmaName: 'Some name2',
    info: [
      {
        type: 'Pers',
        energyInfo: [
          { name: 'karma1', energy: '20' },
          { name: 'karma2', energy: '2' },
          { name: 'karm3', energy: '21' },
          { name: 'karm4', energy: '22' },
        ],
      },
      {
        type: 'Fam',
        energyInfo: [
          { name: 'karma1', energy: '20' },
          { name: 'karma2', energy: '2' },
          { name: 'karma3', energy: '21' },
          { name: 'karma4', energy: '22' },
        ],
      },
    ],
  },
];

const KarmaIssues = () => {
  const { isGenerated } = useMatrix();

  return (
    <>
      {!isGenerated && (
        <AboutCustomer display={[null, null, 'none']} mb={['50px', '70px']} />
      )}
      <Box
        m="0 auto"
        mb={['50px', '70px', '0px']}
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
