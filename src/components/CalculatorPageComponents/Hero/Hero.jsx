import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  AboutCalc,
  Authoring,
  HeroStar,
  Logo,
  SecondTitle,
  Title,
} from './Hero.styled';
import { ReactComponent as HeroStar2 } from '../../../images/Calculator/Hero/heroStar2.svg';
import { ReactComponent as HeroStar1 } from '../../../images/Calculator/Hero/heroStar1.svg';
import { ButtonList } from './ButtonList/ButtonList';

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" py={['40px', null, '35px']} position="relative">
      <HeroStar
        top={['11%', '15%', '8%']}
        right={['57vw', '63vw']}
        initial={{ x: -200, rotateZ: '360deg' }}
        animate={{ x: 0, rotateZ: '0deg' }}
        transition={{ duration: 2 }}
      >
        <HeroStar2 />
      </HeroStar>
      <HeroStar
        top={['12%', '44%', '35%']}
        left={['62vw', '66vw']}
        initial={{ x: 200, rotateZ: '360deg' }}
        animate={{ x: 0, rotateZ: '0deg' }}
        transition={{ duration: 2 }}
      >
        <HeroStar1 />
      </HeroStar>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
        pt={['25px', '55px']}
        zIndex="20"
      >
        <Logo>Dari.Karma</Logo>
        <Title>
          Калькулятор <SecondTitle>{t('about')}</SecondTitle>
        </Title>
        <AboutCalc>
          Продвинутый калькулятор для быстрого и профессионального расчета.
        </AboutCalc>
        <ButtonList />
        <Authoring>
          Калькулятор на 100% соответствует классическому вычислению «Матрицы
          Судьбы» Наталии Ладини
        </Authoring>
      </Box>
    </Box>
  );
};
