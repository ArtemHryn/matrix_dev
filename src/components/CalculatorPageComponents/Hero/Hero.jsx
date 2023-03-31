import { Box } from 'components/Box';
import React from 'react';
import img from 'images/Calculator/Hero/img.webp';
import img2 from 'images/Calculator/Hero/img2.webp';
import star from 'images/Calculator/Hero/star.webp';
import { AboutCalc, Authoring, Img, Logo, SecondTitle, Title } from './Hero.styled';
import { ButtonList } from './ButtonList/ButtonList';

export const Hero = () => {
  return (
    <Box as="section" py={['40px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px="15px"
        m="0 auto"
      >
        <Img src={img} alt="img" width="130px" top="-11%" right="0%" />
        <Img src={img2} alt="img" width="130px" top="-80px" />
        <Img src={star} alt="star" width="20px" top="8%" left='10%' />
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
