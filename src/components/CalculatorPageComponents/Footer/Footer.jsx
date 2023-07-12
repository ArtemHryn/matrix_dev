import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  DariLogo,
  DariLogoImg,
  NavigationElement,
  NavigationLink,
  NavigationList,
  PoliticList,
  PoliticText,
} from './Footer.styled';
import getNavList from '../navigationLisCalc';

const Footer = () => {
  const { i18n, t } = useTranslation('calc');
  const getNavCalList = () => {
    const lng = i18n.language;
    return getNavList(lng);
  };
  return (
    <Box as="footer" py={['40px', null, '80px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px="37px"
        m="0 auto"
        display={[null, null, 'flex']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" justifyContent="center" flex="1">
          <DariLogoImg />
        </Box>
        <Box flex="2">
          <DariLogo>
            Dari.Karma
          </DariLogo>
          <NavigationList>
            {getNavCalList().map(item => (
              <NavigationElement key={item.name}>
                <NavigationLink href={item.href}>{item.name}</NavigationLink>
              </NavigationElement>
            ))}
          </NavigationList>
          <PoliticList>
            <li>
              <PoliticText>{t('footerPoliticText1')}</PoliticText>
            </li>
            <li>
              <PoliticText>{t('footerPoliticText2')}</PoliticText>
            </li>
          </PoliticList>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
