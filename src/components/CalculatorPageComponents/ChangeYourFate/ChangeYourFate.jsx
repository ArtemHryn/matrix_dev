import { Box } from 'components/Box';
import React from 'react';
import {
  AssistanseText,
  CalcAuthor,
  ConsultationBtn,
  Image,
  Karmolog,
  Line,
  Logo,
  Title,
} from './ChangeYourFate.styled';
import authorMob from 'images/Calculator/ChangeYourFate/AuthorPhoto.webp';
import authorTab from 'images/Calculator/ChangeYourFate/authorTab.webp'
import authorDesk from 'images/Calculator/ChangeYourFate/authorDesk.webp'


export const ChangeYourFate = () => {
  return (
    <Box id="ChangeYourFate" as="section" py={['40px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['37px', '32px', '192px']}
        m="0 auto"
      >
        <Box
          backgroundColor={[null, 'rgba(255, 255, 255, 0.5);']}
          borderRadius={[null, '23px']}
          display={[null, 'flex']}
          overflow="hidden"
          mb={['25px', '29px']}
          
        >
          <Box
            mb={['7px', '0px']}
            py={[null, '42px']}
            pl={[null, '40px', '66px']}
            pr={[null, '11px']}
            maxWidth={[null, '50%']}
          >
            {' '}
            <Logo>Dari.Karma</Logo>
            <Line>
              <Karmolog>Кармолог</Karmolog>
            </Line>
            <Title>
              Хочешь больше узнать о своей судьбе и изменить её к лучшему?
            </Title>
            <AssistanseText>
              Я буду рада стать твоим проводником на прекрасном пути
              трансформации.
            </AssistanseText>
            <ConsultationBtn to="/" state={{ from: '4methods' }}>
              Записаться на консультацию
            </ConsultationBtn>
          </Box>
          <picture>
            <source srcSet={authorDesk} media="(min-width: 1440px)" />
            <source srcSet={authorTab} media="(min-width: 768px)" />
            <Image src={authorMob} alt="author" />
          </picture>
        </Box>
        <CalcAuthor>
          Обучиться всем профессиональным расчётам можно у{' '}
          <CalcAuthor as="span" fontWeight="700" fontStyle="italic">
            Наталии Ладини
          </CalcAuthor>{' '}
          и{' '}
          <CalcAuthor as="span" fontWeight="700" fontStyle="italic">
            Сергея Скляренко
          </CalcAuthor>
        </CalcAuthor>
      </Box>
    </Box>
  );
};
