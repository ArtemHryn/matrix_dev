import { Box } from "components/Box"
import phones from 'images/CalculateYourMatrix/Phones.png'
import { AboutCalculator, ImgPhones, Info, LinkToCalculator, Title } from "./CalculateYourMatrix.styled";

export const CalculateYourMatrix = () => {
    return (
      <Box as="section" pt="40px" pb="40px" id="calculateMatrix">
        <Box
          maxWidth={['430px', '768px', '1440px']}
          px="60px"
          m="0 auto"
          position="relative"
        >
          <Title>Рассчитай свою Матрицу Судьбы</Title>
          <ImgPhones src={phones} alt="phones with calc" />
          <AboutCalculator>
            Продвинутый бесплатный калькулятор для быстрого и профессионального
            расчета
          </AboutCalculator>
          <LinkToCalculator to="calculator">Рассчитать</LinkToCalculator>
          <Info>
            * Калькулятор на 100% соответствует классическим расчётам метода
            «Матрица Судьбы» Наталии Ладини
          </Info>
        </Box>
      </Box>
    );
}