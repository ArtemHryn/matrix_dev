import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './DemonOffering.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const DemonOffering = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Демон-Жертва</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Демон-Жертва</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <List>
            <li>
              <Text>
                Проработка жертвенного состояния; избавления от боли, душевных и
                физических страданий; помогает гармонизировать психологическое
                состояние; ощутить себя на трех уровнях сознания (души, разума и
                тела) в каждом действии; избавится от того, что тормозит
                развитие на каждом уровне.
              </Text>
            </li>
            <li>
              <Text>Проявляет невидимые пороки человека. </Text>
            </li>
            <li>
              <Text>Способствует улучшению интуиции.</Text>
            </li>
            <li>
              <Text>Помогает прийти к принятию и пониманию себя.</Text>
            </li>
            <li>
              <Text>Помогает гармонизировать все виды отношений.</Text>
            </li>
          </List>
          <Text>
            Расчет 4 матриц и их отработка (40 дней ритуальных практик по
            системе матрицы). Отдельная духовная практика для улучшения своей
            судьбы и для развития своих способностей. Пропуск человека в Мир его
            истинного Духа!
          </Text>
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
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>
                ! Требует минимального знакомства с базовым уровнем собственной
                матрицы
              </AdditionalInfo>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
