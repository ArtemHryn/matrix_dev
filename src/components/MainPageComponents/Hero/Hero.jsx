import { Box } from 'components/Box';
import dariPhoto from '../../../images//hero/hero_image_mob.png';
import dariPhotoTab from '../../../images//hero/DarinaInHero.png';
import { Image, MatrxiLink, MoveText, ProjectText, ServicesLink, Title } from './Hero.styled';

export const MainHero = () => {
  return (
    <Box as="section" pt="40px" pb="40px">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Box
          display={[null, 'flex', 'flex']}
          flexDirection="column"
          alignItems="center"
        >
          <ProjectText>Проект трансформации сознания</ProjectText>
          <Title>Dari.Karma</Title>
          <MoveText>
            Выбери своё действие, которое изменит тебя и весь мир!
          </MoveText>
        </Box>
        <picture>
          <source srcSet={dariPhotoTab} media="(min-width: 768px)" />
          <source srcSet={dariPhoto} />
          <Image srcSet={dariPhoto} alt="Darina" />
        </picture>
        <Box display={[null, 'flex', 'flex']}>
          <ServicesLink href="#consultation">Перейти к услугам</ServicesLink>
          <MatrxiLink to="calculator">Калькулятор матрицы</MatrxiLink>
        </Box>
      </Box>
    </Box>
  );
};
