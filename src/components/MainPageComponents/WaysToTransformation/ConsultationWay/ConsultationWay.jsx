import { Box } from 'components/Box';
import { ConsultationList, ConsultationText, ConsultationTitlte } from './ConsultationWas.styled';
import { useTranslation } from 'react-i18next';

export const ConsultationWay = () => {
  const {t} = useTranslation()
  return (
    <Box
      id="consultations"
      mr={[null, '25px', '112px']}
      width={[null, null, '385px']}
    >
      <Box>
        <ConsultationTitlte>
          {t('waysToTransformationConsultationTitle')}
        </ConsultationTitlte>
      </Box>
      <ConsultationList>
        <li>
          <ConsultationText>
            {t('waysToTransformationConsultationText1')}
          </ConsultationText>
        </li>
        <li>
          <ConsultationText>
            {t('waysToTransformationConsultationText2')}
          </ConsultationText>
        </li>
        <li>
          <ConsultationText>
            {t('waysToTransformationConsultationText3')}
          </ConsultationText>
        </li>
      </ConsultationList>
    </Box>
  );
};
