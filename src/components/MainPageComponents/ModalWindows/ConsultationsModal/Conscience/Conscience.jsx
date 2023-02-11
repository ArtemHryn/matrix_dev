import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './Conscience.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const Conscience = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Осознанность</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Осознанность</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            Данная консультация вскрывает глубинную проблематику жизни и её
            исцеление, выход на новый уровень духовного развития. Проработка
            внутренней кармы. Открытие сердечной чакры, кристалла души и
            глубинных способностей личности.
          </Text>
          <Text mb="25px">
            Данный расчёт показывает полный сценарий ситуаций в жизни человека и
            кармические истории, которые прорабатываются. В итоге человек
            получает алмазную огранку матрицы, то есть защиту судьбы. Включает в
            себя большое количество практической и ритуальной работы. Процесс
            исцеления может проходить через обострение.
          </Text>
          <Text>Входят расчет таких матриц:</Text>
          <List>
            <li>
              <Text>матрица души;</Text>
            </li>
            <li>
              <Text>матрица внутренней кармы;</Text>
            </li>
            <li>
              <Text>матрица осознанности; </Text>
            </li>
            <li>
              <Text>матрица врат света.</Text>
            </li>
          </List>
        </Box>
        <Box>
          <Box
            display={[null, 'flex']}
            alignItems="center"
            py={['25px', '40px']}
            backgroundImage={dotGradient}
            backgroundPosition="bottom"
            backgroundSize="15px 2px"
            backgroundRepeat="repeat-x"
            flexDirection={[null, null, 'column']}
          >
            <Box width="100%" mb={[null, null, '20px']}>
              <HowIsGoingConsultation>
                Как проходит консультация?
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px']} width={[null, '320px']}>
                видеовстреча 90 минут + трансформация
              </Text>
            </Box>
            <Box display={[null, null, 'flex']} flexDirection='column'>
              <AdditionalInfo mb='15px'>
                Требует минимального знакомства с базовым уровнем собственной
                матрицы!
              </AdditionalInfo>
              <AdditionalInfo>
                <AdditionalInfo>
                  !Включает в себя большое количество практической и ритуальной
                  работы. Процесс исцеления может проходить через обострение.
                </AdditionalInfo>
              </AdditionalInfo>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
