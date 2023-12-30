import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import FirstTemplate from './FirstTemplate/FirstTemplate';
import SecondTemplate from './SecondTemplate/SecondTemplate';
import { InformationTableTitle } from './InformationTable.styled';

const gradient =
  'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 237, 255, 0.5) 100%)';

const InformationTable = ({ matrixData, title = null, display = null }) => {
  const { t } = useTranslation('calc');
  const {
    bottom1,
    month,
    day,
    year,

    personal,
    bottomRight1,
    topLeft1,

    topRight1,
    bottomLeft1,

    social,
    spirit,
    planet,
    center,
    center2,
    insidePower,
  } = matrixData;

  if (isNaN(center) || !topLeft1) {
    return null;
  }
  return (
    <Box
      px="35px"
      py="25px"
      backgroundImage={gradient}
      border="0.6px solid #72499B"
      borderRadius="18px"
      display={display}
      minWidth="337px"
    >
      {title && <InformationTableTitle>{title}</InformationTableTitle>}
      <FirstTemplate
        name1={t('assignmentTabledthrirdNameDesk1')}
        name2={t('assignmentTabledfirstName1')}
        name3={t('assignmentTabledsecondName1')}
        el1={month}
        el2={bottom1}
        el3={day}
        el4={year}
      />
      <FirstTemplate
        name1={t('assignmentTabledthrirdNameDesk2')}
        name2={t('assignmentTabledfirstName2')}
        name3={t('assignmentTabledsecondName2')}
        el1={topLeft1}
        el2={bottomRight1}
        el3={topRight1}
        el4={bottomLeft1}
      />
      <SecondTemplate name={t('assignmentTabledname1')} el1={personal} el2={social} el3={spirit} />
      <SecondTemplate name={t('assignmentTabledname2')} el1={social} el2={spirit} el3={planet} />
      <SecondTemplate
        name={t('assignmentTabledkey')}
        el1={center}
        el2={center2}
        el3={insidePower}
        backgroundImage="none"
        isKey={true}
      />
    </Box>
  );
};

export default InformationTable;
