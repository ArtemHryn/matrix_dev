import { Box } from 'components/Box';
import phones from 'images/CalculateYourMatrix/Phones.png';
import phonesTab from 'images/CalculateYourMatrix/phonesTab.png';
import {
  AboutCalculator,
  ImgPhones,
  Info,
  LinkToCalculator,
  Title,
} from './CalculateYourMatrix.styled';

const sectionGradient =
  'radial-gradient(circle,rgba(236, 229, 255, 0.72) 34%,rgba(255, 255, 255, 0.38) 69%, rgba(255, 255, 255, 0.72) 90%)';

export const CalculateYourMatrix = () => {
  return (
    <Box
      as="section"
      pt="40px"
      pb="40px"
      id="calculateMatrix"
      backgroundImage={[null, sectionGradient]}
      backgroundPosition="100px"
    >
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        position="relative"
      >
        <Title>Рассчитай свою Матрицу Судьбы</Title>
        <Box display={[null, 'flex']} flexDirection="row-reverse">
          <picture>
            <source srcSet={phonesTab} media="(min-width: 768px)" />
            <ImgPhones srcSet={phones} alt="phones with calc" />
          </picture>
          <Box ml="10px">
            <AboutCalculator>
              Продвинутый бесплатный калькулятор для быстрого и
              профессионального расчета
            </AboutCalculator>
            <LinkToCalculator to="calculator">Рассчитать</LinkToCalculator>
            <Info>
              * Калькулятор на 100% соответствует классическим расчётам метода
              «Матрица Судьбы» Наталии Ладини
            </Info>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
