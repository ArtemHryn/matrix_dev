import { Container } from 'components/Container/Container';
import { ButtonList } from './ButtonList/ButtonList';
import {
  CalcInfo,
  SunImg,
  Title,
  TitleMatrix,
  UnderTitle,
} from './Hero.styled';
import sunPicture from '../../images/sun.png';

export const Hero = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Title>Калькулятор</Title>
      <TitleMatrix>матрицы судьбы</TitleMatrix>
      <UnderTitle>
        Продвинутый калькулятор для быстрого и профессионального расчета
      </UnderTitle>
      <ButtonList />
      <CalcInfo>
        Калькулятор на 100% соответствует классическому вычислению «Матрицы
        Судьбы» Наталии Ладини
      </CalcInfo>
      <SunImg src={sunPicture} alt="sun" />
    </Container>
  );
};
