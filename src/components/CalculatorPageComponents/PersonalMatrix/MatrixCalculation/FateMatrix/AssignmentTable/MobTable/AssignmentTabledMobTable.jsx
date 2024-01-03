import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { useMatrix } from 'pages/Calculator';

import FirstTemplate from './TablesTemplates/FirstTemplate/FirstTemplate';
import {
  Element,
  ElementsList,
  Name,
} from './TablesTemplates/FirstTemplate/FirstTemplate.styled';
import SecondsTemplate from './TablesTemplates/SecondsTemplate/SecondsTemplate';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';

const AssignmentTabledMobTabled = ({ mb }) => {
  const { matrixData } = useMatrix();
  const {t} = useTranslation('calc')
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
    spirit,
    planet,
    center,
    center2,
    insidePower,
  } = matrixData;

  return (
    <Box display={[null, null, 'none']} mb={mb ? mb : null}>
      <Box display="flex" gridGap={['4px', '8px']} mb={['2px', '4px']}>
        <FirstTemplate
          firstName={t('assignmentTabledfirstName1')}
          secondName={t('assignmentTabledsecondName1')}
          thrirdName={t('assignmentTabledthrirdName1')}
          el1={month}
          el2={bottom1}
          el3={day}
          el4={year}
        />
        <FirstTemplate
          firstName={t('assignmentTabledfirstName2')}
          secondName={t('assignmentTabledsecondName2')}
          thrirdName={t('assignmentTabledthrirdName2')}
          el1={topLeft1}
          el2={bottomRight1}
          el3={topRight1}
          el4={bottomLeft1}
        />
      </Box>
      <Box display="flex" gridGap={['4px', '8px']} mb={['2px', '4px']}>
        <SecondsTemplate
          name={t('assignmentTabledname1')}
          el1={personal}
          el2={social}
          el3={spirit}
        />
        <SecondsTemplate name={t('assignmentTabledname2')} el1={social} el2={spirit} el3={planet} />
      </Box>
      <Box
        backgroundImage={gradient}
        border={['0.6px solid #72499B', '1px solid #72499B']}
        borderRadius={['7px', '12px']}
        display="flex"
        justifyContent="space-between"
        py={['19px', '24px']}
        pl={['15px', '30px']}
        pr={['50px', '119px']}
      >
        <Name>{t('assignmentTabledkey')}</Name>
        <ElementsList>
          <li>
            <Element>{center}</Element>
          </li>
          <li>
            <Element>{center2}</Element>
          </li>
          <li>
            <Element>{insidePower}</Element>
          </li>
        </ElementsList>
      </Box>
    </Box>
  );
};

export default AssignmentTabledMobTabled;
