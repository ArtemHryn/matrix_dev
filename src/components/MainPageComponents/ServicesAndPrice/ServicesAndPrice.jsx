import { Box } from 'components/Box';

import {
  FourStagesTitle,
  ServiceAndPriceTitle,
  ServiceWarning,
} from './ServicesAndPrice.styled';
import { Consultations } from './Consultations/Consultations';
import { ExpressServices } from './ExpressServices/ExpressServices';
import { AuthorMasterClass } from './AuthorMasterClass/AuthorMasterClass';
import { DeepElaboration } from './DeepElaboration/DeepElaboration';
import { useTranslation } from 'react-i18next';

const sectionGradient =
  'linear-gradient(to bottom,#fff,rgba(158, 118, 255, 0.1) 16%,rgba(158, 118, 255, 0.1) 26%,#fff 100%)';

export const ServicesAndPrice = () => {
  const {t} = useTranslation()
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      backgroundImage={sectionGradient}
      id="4methods"
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['40px', '33px', '100px']}
        m="0 auto"
      >
        <ServiceAndPriceTitle>
          {t('ServicesAndPriceTitle')}
        </ServiceAndPriceTitle>
        <FourStagesTitle>{t('ServicesAndPriceFourStages')}</FourStagesTitle>
        <DeepElaboration />
        <ServiceWarning>{t('ServicesAndPriceWarning')}</ServiceWarning>
        <Consultations />

        <ExpressServices />
        <AuthorMasterClass />
      </Box>
    </Box>
  );
};
