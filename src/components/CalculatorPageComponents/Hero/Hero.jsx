import { Box } from 'components/Box';
import React from 'react';
import img from 'images/Calculator/Hero/img.webp';
import img2 from 'images/Calculator/Hero/img2.webp';
import img2Desk from 'images/Calculator/Hero/img2Desk.webp';
import star from 'images/Calculator/Hero/star.webp';
import {
  AboutCalc,
  Authoring,
  Img,
  Logo,
  SecondTitle,
  Title,
} from './Hero.styled';
import { ButtonList } from './ButtonList/ButtonList';

export const Hero = () => {
  return (
    <Box as="section" py={['40px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        {' '}
        <picture>
          <source srcSet={img2Desk} media="(min-width: 1440px)" />
          <Img
            src={img}
            alt="img"
            width={['130px', '220px', '450px']}
            top={['-11%', null, '-18%']}
            right="0%"
          />
        </picture>
        <Img
          src={img2}
          alt="img"
          width={['130px', '230px', '320px']}
          top={['-80px', '-90px', '-120px']}
          left={[null, '-7%', '0%']}
        />
        <Img
          src={star}
          alt="star"
          width={['20px', '32px']}
          top={['8%', null, '37%']}
          left={['10%', null, '15%']}
        />
        <Logo>Dari.Karma</Logo>
        <Title>
          Калькулятор <SecondTitle>матрицы судьбы</SecondTitle>
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
