import React from 'react';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';

import FirstTemplate from './TablesTemplates/FirstTemplate/FirstTemplate';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';

const AssignmentTabledMobTabled = () => {
  const { matrixData } = useMatrix();
  const {
    bottom1,
    month,
    sky,
    day,
    year,
    earth,
    personal,
    bottomRight1,
    topLeft1,
    father,
    topRight1,
    bottomLeft1,
    mother,
    social,
  } = matrixData;

  return (
    <Box>
      <Box display="flex" gridGap="4px">
        <FirstTemplate
          firstName={'Небо'}
          secondName={'Земля'}
          thrirdName={'Личное'}
          el1={bottom1}
          el2={month}
          el3={sky}
          el4={day}
          el5={year}
          el6={earth}
          el7={personal}
        />
        <FirstTemplate
          firstName={'Отец'}
          secondName={'Мать'}
          thrirdName={'Социальное'}
          el1={topLeft1}
          el2={bottomRight1}
          el3={father}
          el4={topRight1}
          el5={bottomLeft1}
          el6={mother}
          el7={social}
        />
      </Box>
    </Box>
  );
};

export default AssignmentTabledMobTabled;
