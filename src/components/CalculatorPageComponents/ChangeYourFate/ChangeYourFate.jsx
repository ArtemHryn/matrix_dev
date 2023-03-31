import { Box } from 'components/Box';
import React from 'react';
import { Karmolog, Line, Logo } from './ChangeYourFate.styled';

export const ChangeYourFate = () => {
  return (
    <Box as="section" py={['40px']}>
      <Box maxWidth={['400px', '768px', '1440px']} px="15px">
        <Logo>Dari.Karma</Logo>
        <Line>
          <Karmolog>Кармолог</Karmolog>
        </Line>
        <h2>Хочешь больше узнать о своей судьбе и изменить её к лучшему?</h2>
        <p>
          Я буду рада стать твоим проводником на прекрасном пути транформации.
        </p>
        <a href="https://t.me/DariKarma">Записаться на консультацию</a>
      </Box>
    </Box>
  );
};

