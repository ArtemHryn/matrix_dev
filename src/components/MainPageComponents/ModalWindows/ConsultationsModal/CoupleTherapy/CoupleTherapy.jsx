import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  HowIsGoingConsultation,
  MainTitle,
  Requests,
  Text,
  Warning,
} from './CoupleTherapy.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const CoupleTherapy = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Парная терапия</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Парная терапия</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            Диагностика взаимоотношений с партнёром (вторая половинка, родители,
            дети, друзья, знакомые, братья/сестры, коллеги).
          </Text>
          <Text mb="15px">
            Поможет выявить цели и проблемы коммуникации; точки роста; задачи
            партнёров; ресурсное состояние. Работа с негативными и позитивными
            качествами каждого из партнёров; проработка факторов, которые мешают
            гармоничному существованию партнёров; разбор плюсов и минусов
            совместимости.
          </Text>
          <Text>
            + Заключительные рекомендации для эффективного решения проблем,
            достижения общих целей и баланса в партнёрстве по итогам терапии.
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
              <Text mb={['20px']} width={[null, '485px', '100%']}>
                Личная встреча или видеовстреча от 3-х часов ( 1-2 перерыва по
                10 минут) + трансформация для партнеров
              </Text>
              <Warning>*ТРЕБУЕТСЯ ПРИСУТСТВИЕ ДВУХ ПАРТНЁРОВ!</Warning>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
