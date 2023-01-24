import { Box } from 'components/Box';
import { ConsultationWay } from './ConsultationWay/ConsultationWay';
import { TransformationWay } from './TransformationWay/TransformationWay';
import { About, Title, TransformationWarning } from './WaysToTransformation.styled';

export const WaysToTransformation = () => {
  return (
    <Box as="section" pt="40px" pb="40px">
      <Box maxWidth={['430px', '768px', '1440px']} px="60px" m="0 auto">
        <Title>Я проведу тебя к истинным желаниям твоей души</Title>
        <About>
          Ты не останешься один с багажом новой информации о себе - так как я
          гарантирую:
        </About>
        <Box>
          <ConsultationWay />
          <TransformationWay />
        </Box>
        <TransformationWarning>
          *Беспечное вскрытие судьбоносных программ без готовности работать над
          ними чревато последствиями. Поэтому, для вашей безопасности и блага
          все полноценные разборы матрицы НЕ проводятся без готовности идти в
          трансформацию.
        </TransformationWarning>
      </Box>
    </Box>
  );
};
