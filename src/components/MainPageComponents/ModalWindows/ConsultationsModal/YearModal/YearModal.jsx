import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  MainTitle,
  Requests,
  Text,
} from './YearModal.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const YearModal = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Прогноз на год</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Прогноз на год</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            Позволяет узнать свои энергии в прошлом, текущем или будущем году.
            Включает в себя прогностику на каждые 22 дня, где прописаны все
            ключи данного периода и дана вариативность, как позитивных, так и
            негативных событий.
          </Text>
          <Text mb="25px">
            Раскрытие задач, возможностей, испытаний данного года. Денежные и
            любовные аспекты года и возможности их реализаций.
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
                Видеовстреча 30 - 40 минут + файл с прогностикой на каждые 22
                дня + материалы для гармонизации года на усмотрение мастера
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>
                *Возможность обратиться к мастеру за дополнительными
                разъяснениями и рекомендациями в течение всего года.
              </AdditionalInfo>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
