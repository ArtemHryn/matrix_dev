import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  FooterTitle,
  NavigationElement,
  NavigationLink,
  NavigationList,
  PoliticsAndDesign,
} from './Footer.styled';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer" py={['40px', '40px', '90px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <FooterTitle>Dari.Karma</FooterTitle>
        <Box display={[null, 'flex']} alignItems="center">
          <NavigationList>
            <NavigationElement>
              <NavigationLink href="#author">
                {t('projectAuthor')}
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#4methods">
                {t('FourLevels')}
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#aboutMatrix">
                {t('aboutMethods')}
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#consultations">
                {t('ServicesAndPriceConsultationsTitle')}
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#feedback">{t('feedback')}</NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#calculateMatrix">
                Калькулятор
              </NavigationLink>
            </NavigationElement>
          </NavigationList>
          <Box display="flex" flexDirection="column" alignItems="center">
            <PoliticsAndDesign>{t('policy')}</PoliticsAndDesign>
            <PoliticsAndDesign>{t('designedBy')}</PoliticsAndDesign>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
