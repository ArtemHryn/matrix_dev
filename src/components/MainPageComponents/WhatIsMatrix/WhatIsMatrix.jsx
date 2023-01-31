import { Box } from 'components/Box';
import starLine from 'images/whatIsMatrix/starLine.png';
import starLineTab from 'images/whatIsMatrix/starLineTab.png';
import deepDrow from 'images/whatIsMatrix/deepDrow.png';
import saturn from 'images/whatIsMatrix/saturn.png';
import sun from 'images/whatIsMatrix/sun.png';
import { MatrixFact } from './MatrixFact/MatrixFact';
import { AboutMethod, LinkToCalculator, MatrixCreator, MethodList, StarLineImg, Title } from './WhatIsMatrix.styled';

const factsAboutMatrix = [
  {
    name: 'Глубокое погружение',
    img: deepDrow,
    text: 'Метод состоит из множества уровней расчётов, большинство которых нет на просторах интернета. Это симбиоз диагностки и трансформационных практик, медитаций, сенсов исцеления, терапии. ',
  },
  {
    name: 'Научный подход',
    img: saturn,
    text: 'Метод основан на 22 архетипах, которые описывают религии, послания богов, древние цивилизации, теории создания вселенной  и нашего  мира, изучается такими науками как: египтология, археология и востоковедение.',
  },
  {
    name: '“Волшебная таблетка”',
    img: sun,
    text: 'Метод даёт ответы и инструменты для решения практически любых ситуаций, но НЕ решает их по взмаху “волшебной палочки”. Он требует определённых действий и тщательной работы над собой.',
  },
];

export const WhatIsMatrix = () => {
  return (
    <Box as="section" py={['40px', '40px', '90px']} id="aboutMatrix">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>Что такое Матрица Судьбы?</Title>
        <Box
          display={[null, 'flex', 'flex']}
          alignItems="center"
          mb={[null, '40px', '47px']}
        >
          <MatrixCreator>
            Авторский метод Наталии Ладини, которому более 16 лет.
          </MatrixCreator>
          <picture>
            <source srcSet={starLineTab} media="(min-width: 768px)" />
            <StarLineImg srcSet={starLine} alt="star line" />
          </picture>

          <AboutMethod>
            Этот метод фактически является зеркалом вашей кармы и уникальным
            инструментом для диагностики предназначения и исцеления души, разума
            и тела.
          </AboutMethod>
        </Box>
        <MethodList>
          {factsAboutMatrix.map(fact => (
            <MatrixFact
              name={fact.name}
              img={fact.img}
              text={fact.text}
              key={fact.name}
            />
          ))}
        </MethodList>
        <LinkToCalculator to="calculator">
          Расчитать свою матрицу бесплатно
        </LinkToCalculator>
      </Box>
    </Box>
  );
};
