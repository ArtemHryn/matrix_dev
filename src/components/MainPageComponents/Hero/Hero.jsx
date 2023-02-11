import { Box } from 'components/Box';
import dariPhoto from 'images//hero/dariPhoto.png';
import dariPhotoTab from 'images/hero/DarinaInHero.png';
import dariPhotoDesk from 'images/hero/heroDariPhoto.png';
import heroStar from 'images//hero/hero_star.png';
import {
  Image,
  ImgStar,
  MatrxiLink,
  MoveText,
  ProjectText,
  ServicesLink,
  Title,
} from './Hero.styled';
import { useState } from 'react';

export const MainHero = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box as="section" py={['40px', '40px', '90px']}>
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        display={[null, null, 'flex']}
        position="relative"
      >
        <Box pt={[null, null, '124px']}>
          <Box
            display={[null, 'flex', 'flex']}
            flexDirection="column"
            alignItems={['center', 'center', 'flex-start']}
            mb={[null, null, '80px']}
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
            <Image srcSet={dariPhoto} alt="Darina" loading="lazy" />
          </picture>
          <Box display={[null, 'flex', 'flex']}>
            <ServicesLink
              href="#4methods"
              onMouseEnter={() => setClicked(true)}
              clicked={clicked}
            >
              Перейти к услугам
            </ServicesLink>
            <MatrxiLink to="calculator">Калькулятор матрицы</MatrxiLink>
          </Box>
        </Box>
        <Box
          as="img"
          src={dariPhotoDesk}
          alt="Darina"
          width="624"
          display={['none', 'none', 'block']}
          loading="lazy"
        />
        <ImgStar src={heroStar} alt="star" loading="lazy" />
      </Box>
    </Box>
  );
};
