import { Box } from 'components/Box';
import { ConsultationWay } from './ConsultationWay/ConsultationWay';
import { TransformationWay } from './TransformationWay/TransformationWay';
import { About, Title, TransformationWarning } from './WaysToTransformation.styled';

import line from 'images/WaysToTransformation/line.png';
import titleLineDesc from 'images/WaysToTransformation/titleLineDesc.png';


export const WaysToTransformation = () => {
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      backgroundImage={[null, `url(${line})`, `url(${titleLineDesc})`]}
      backgroundSize="contain"
      backgroundPosition={[null, '0 -5vw', '0 -15vw']}
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>Я проведу тебя к истинным желаниям твоей души</Title>
        <About>
          Ты не останешься один с багажом новой информации о себе - так как я
          гарантирую:
        </About>
        <Box display={[null, 'flex', 'flex']}>
          <ConsultationWay />
          <TransformationWay />
        </Box>
        <TransformationWarning>
          *Беспечное вскрытие судьбоносных программ, без готовности работать над
          ними, чревато последствиями. Поэтому для вашей безопасности и блага
          все полноценные разборы матрицы НЕ проводятся без готовности идти в
          трансформацию.
        </TransformationWarning>
      </Box>
    </Box>
  );
};
