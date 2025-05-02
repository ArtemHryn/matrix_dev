import { useState } from 'react';
import {
  AdvertisingContainer,
  BottomWrapper,
  CloseBtn,
  GetInfo,
  Image,
  LinkToCourse,
  MatrixIgm,
  MiniCourse,
  Psychology,
  TextWrapper,
  Title,
} from './Advertising.styled';
import CloseBtnSvg from './CloseBtnSvg';

import AdvertisingImg from 'images/Advertising/advertising.webp';
import matrix from 'images/Advertising/matrix.webp';

const Advertising = () => {
  const [visible, setVisible] = useState(true);

  const now = new Date();
  const cutoff = new Date('2025-06-01T00:00:00');

  if (now > cutoff) {
    return null; // Don't show the component if the date is before the cutoff
  }

  return (
    <AdvertisingContainer $visible={visible}>
      <CloseBtn onClick={() => setVisible(false)}>
        <CloseBtnSvg />
      </CloseBtn>
      <Image src={AdvertisingImg} alt="advertising" />
      <MatrixIgm src={matrix} alt="matrix" />
      <div>
        <TextWrapper>
          <MiniCourse>МИНИ-КУРС</MiniCourse>
          <Title>"Код твоей реальности"</Title>
          <Psychology>Психологи — это кармологи? </Psychology>
          <GetInfo>Узнай, как работает настоящая карма и Матрица Судьбы вместе!</GetInfo>
        </TextWrapper>
      </div>
      <BottomWrapper>
        <LinkToCourse
          href="https://course.dari-code.com.ua/?lang=ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подробнее о курсе
          <svg viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.20117 1.86726L0.573579 3.60487V0.129649L3.20117 1.86726Z" fill="#9071AF" />
          </svg>
        </LinkToCourse>
      </BottomWrapper>
    </AdvertisingContainer>
  );
};

export default Advertising;
