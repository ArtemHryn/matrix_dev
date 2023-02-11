import { Box } from 'components/Box';
import { FooterTitle, NavigationElement, NavigationLink, NavigationList, PoliticsAndDesign } from './Footer.styled';

export const Footer = () => {
  return (
    <Box as="footer" py={['40px', '40px', '90px']}>
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <FooterTitle>Dari.Karma</FooterTitle>
        <Box display={[null, 'flex']} alignItems="center">
          <NavigationList>
            <NavigationElement>
              <NavigationLink href="#author">Автор проекта</NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#4methods">4 уровня матрицы</NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#aboutMatrix">
                О методе Матрицы
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#consultations">
                Консультации
              </NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#feedback">Отзывы</NavigationLink>
            </NavigationElement>
            <NavigationElement>
              <NavigationLink href="#calculateMatrix">
                Калькулятор
              </NavigationLink>
            </NavigationElement>
          </NavigationList>
          <Box display="flex" flexDirection="column" alignItems="center">
            <PoliticsAndDesign>Политика конфиденциальности</PoliticsAndDesign>
            <PoliticsAndDesign>Дизайн сайта by shlm.anna</PoliticsAndDesign>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
