import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './MoneyModal.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const MoneyModal = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Деньги</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Деньги</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <List>
            <li>
              <Text>
                Данная консультация поможет решить любые запросы на тему денег,
                а также раскрыть потенциал финансов в вашей жизни.
              </Text>
            </li>
            <li>
              <Text>Выбрать самый комфортный способ заработка;</Text>
            </li>
            <li>
              <Text>Oткрыть свой бизнес или пойти работать в найм;</Text>
            </li>
            <li>
              <Text>Mонетизировать любимой дело.</Text>
            </li>
          </List>
          <Text mb="15px">
            Поможет узнать каких условий придерживаться, чтоб увеличить доход.
          </Text>
          <Text>
            Фишки кармической финансовой грамотности, изобильности и
            экологичного заработка
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
              <Text mb={['20px', '0px']} width={[null, '420px']}>
                видеовстреча 60 минут + трансформация 1 блок
              </Text>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
