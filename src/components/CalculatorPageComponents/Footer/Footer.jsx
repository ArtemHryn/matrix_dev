import React from 'react';
import { Box } from 'components/Box';
import star from 'images/Calculator/Hero/star.webp';
import {
  DariLogo,
  DariLogoImg,
  LogoStar,
  NavigationElement,
  NavigationLink,
  NavigationList,
  PoliticList,
  PoliticText,
} from './Footer.styled';
import list from '../navigationLisCalc';

const Footer = () => {
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
            Dari.Karma <LogoStar src={star} alt="star" />
          </DariLogo>
          <NavigationList>
            {list.map(item => (
              <NavigationElement key={item.name}>
                <NavigationLink href={item.href}>{item.name}</NavigationLink>
              </NavigationElement>
            ))}
          </NavigationList>
          <PoliticList>
            <li>
              <PoliticText>Политика конфиденциальности</PoliticText>
            </li>
            <li>
              <PoliticText>Дизайн сайта by aleomore и dari.karma</PoliticText>
            </li>
          </PoliticList>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
