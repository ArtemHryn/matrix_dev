import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  TipDesc,
  TipDescName,
  TipGoalText,
  TipHeaderText,
  TipHeaderBox,
} from '../../HealthMatrix.styled';

const HealthCardTip = ({
  tip: {
    goal,
    bodyPart,
    purpose,
    internalCondition,
    disturbance,
    archangel,
    verb,
    bgColor,
    img,
    chakraName,
  },
}) => {
  const { t } = useTranslation('calc');
  return (
    <Box
      backgroundImage={bgColor}
      border="0.6px solid #72499B"
      borderRadius="8px"
      py={['15px']}
      maxWidth={['280px', '500px']}
    >
      <TipHeaderBox>
        <img src={img} alt={chakraName} />
        <TipHeaderText>{chakraName}</TipHeaderText>
      </TipHeaderBox>
      <TipGoalText>{goal}</TipGoalText>
      <Box p={['15px 15px 25px']} display="flex" flexDirection="column" gridGap={['6px', '10px']}>
        <TipDesc>
          <TipDescName as="span">Область: </TipDescName> {bodyPart}
        </TipDesc>
        <TipDesc>
          <TipDescName as="span">{t('healthCardTipPurpose')}: </TipDescName> {purpose}
        </TipDesc>
        {internalCondition && (
          <TipDesc>
            <TipDescName as="span">{t('healthCardTipInternalCondition')}: </TipDescName>{' '}
            {internalCondition}
          </TipDesc>
        )}
        {disturbance && (
          <TipDesc>
            <TipDescName as="span">{t('healthCardTipDisturbance')}: </TipDescName> {disturbance}
          </TipDesc>
        )}
        <TipDesc>
          <TipDescName as="span">Архангел: </TipDescName> {archangel}
        </TipDesc>
        {verb && (
          <TipDesc>
            <TipDescName as="span">{t('healthCardTipVerb')}: </TipDescName> {verb}
          </TipDesc>
        )}
      </Box>
    </Box>
  );
};

export default HealthCardTip;
