import { Box } from 'components/Box';
import dariPhoto from '../../../images/hero_image_mob.png';
import { Image, MatrxiLink, MoveText, ProjectText, SectionBox, ServicesLink, Title } from './Hero.styled';

export const MainHero = () => {
  return (
    <SectionBox>
      <Box maxWidth={['430px', '768px', '1440px']} px="60px" m="0 auto">
        <Box>
          <ProjectText>Проект трансформации сознания</ProjectText>
          <Title>Dari.Karma</Title>
          <MoveText>
            Выбери своё действие, которое изменит тебя и весь мир!
          </MoveText>
        </Box>
        <picture>
          <source srcSet={dariPhoto} />
          <Image srcSet={dariPhoto} alt="Darina" />
        </picture>
        <ServicesLink href="#consultation">Перейти к услугам</ServicesLink>
        <MatrxiLink to="calculator">Калькулятор матрицы</MatrxiLink>
      </Box>
    </SectionBox>
  );
};
