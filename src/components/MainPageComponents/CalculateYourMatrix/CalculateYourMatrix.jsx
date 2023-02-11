import { Box } from 'components/Box';
import phones from 'images/CalculateYourMatrix/Phones.png';
import phonesTab from 'images/CalculateYourMatrix/phonesTab.png';
import phonesDesc from 'images/CalculateYourMatrix/desktopPhone.png';
import {
  AboutCalculator,
  DescTopImg,
  ImgPhones,
  Info,
  LinkToCalculator,
  Title,
  TitleAdditional,
} from './CalculateYourMatrix.styled';

const sectionGradient =
  'radial-gradient(circle,rgba(236, 229, 255, 0.72) 18%,rgba(255, 255, 255, 0.38) 52%, rgba(255, 255, 255, 0.72) 90%)';

export const CalculateYourMatrix = () => {
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      id="calculateMatrix"
      backgroundImage={[null, sectionGradient]}
      backgroundPosition="100px"
    >
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        position="relative"
        display={[null, null, 'flex']}
      >
        <Box display={[null, null, 'flex']} flexDirection={'column'}>
          <Title>
            Рассчитай{' '}
            <TitleAdditional fontStyle="normal" m="0px">
              свою Матрицу Судьбы
            </TitleAdditional>
          </Title>
          <Box display={[null, 'flex']} flexDirection="row-reverse">
            <picture>
              <source srcSet={phonesTab} media="(min-width: 768px)" />
              <ImgPhones
                srcSet={phones}
                alt="phones with calc"
                loading="lazy"
              />
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
        <DescTopImg src={phonesDesc} alt="phone" loading="lazy" />
      </Box>
    </Box>
  );
};
