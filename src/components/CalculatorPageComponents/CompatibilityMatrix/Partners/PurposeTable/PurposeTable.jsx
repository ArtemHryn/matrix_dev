import { Box } from 'components/Box';
import FirstTemplate from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/TablesTemplates/FirstTemplate/FirstTemplate';
import SecondsTemplate from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/TablesTemplates/SecondsTemplate/SecondsTemplate';
import {
  Name,
  Element,
  ElementsList,
} from 'components/CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/AssignmentTable/MobTable/TablesTemplates/FirstTemplate/FirstTemplate.styled';
import { useTranslation } from 'react-i18next';

const gradient =
  'linear-gradient(89.9deg, rgba(255, 255, 255, 0.7) 9.56%, rgba(251, 244, 255, 0.7) 85.28%);';

const PurposeTable = ({ partnerMatrix, display = null }) => {
  const { t } = useTranslation('calc');
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
  } = partnerMatrix;

  if (isNaN(partnerMatrix.center)) {
    return null;
  }

  return (
    <Box display={display}>
      <Box display="flex" gridGap={['4px', '8px']} mb={['2px', '4px']}>
        <FirstTemplate
          firstName={t('assignmentTabledfirstName1')}
          secondName={t('assignmentTabledsecondName1')}
          thrirdName={t('assignmentTabledthrirdName1')}
          el1={month}
          el2={bottom1}
          el3={sky}
          el4={day}
          el5={year}
          el6={earth}
          el7={personal}
        />
        <FirstTemplate
          firstName={t('assignmentTabledfirstName2')}
          secondName={t('assignmentTabledsecondName2')}
          thrirdName={t('assignmentTabledthrirdName2')}
          el1={topLeft1}
          el2={bottomRight1}
          el3={father}
          el4={topRight1}
          el5={bottomLeft1}
          el6={mother}
          el7={social}
        />
      </Box>
      <Box display="flex" gridGap={['4px', '8px']} mb={['2px', '4px']}>
        <SecondsTemplate
          name={t('assignmentTabledname1')}
          el1={personal}
          el2={social}
          el3={spirit}
        />
        <SecondsTemplate
          name={t('assignmentTabledname2')}
          el1={social}
          el2={spirit}
          el3={planet}
        />
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

export default PurposeTable;
