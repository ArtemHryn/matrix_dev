import { Box } from 'components/Box';
import {
  BuyButton,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Price,
  Requests,
  Text,
} from './GameModal.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const GameModal = () => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        Трансформационная игра “Кармические Путешествия”
      </MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>
            Трансформационная игра “Кармические Путешествия”
          </MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            В основе игры лежат два метода: ТАРО и «Диагностика предназначения
            судьбы по дате рождения» Наталии Ладини. Форматы игры хорошо
            раскравают практически любые запросы. Ведущая игры поможет игрокам
            исследовать свой запрос, найти причинно-следственные связи ситуаций,
            получить конкретные рекомендации.
          </Text>
          <Text>Спектр запросов для игры:</Text>
          <List>
            <li>
              <Text>жизненное предназначение;</Text>
            </li>
            <li>
              <Text>личностное развитие;</Text>
            </li>
            <li>
              <Text>вопросы здоровья;</Text>
            </li>
            <li>
              <Text>финансовые затруднения;</Text>
            </li>
            <li>
              <Text>поиск работы;</Text>
            </li>
            <li>
              <Text>цикличные ситуации;</Text>
            </li>
            <li>
              <Text>межличностные отношения и т.д.</Text>
            </li>
          </List>
          <Text>
            ! В игре можно принимать участие без определенного запроса. В таком
            случае, игра послужит отличным диагностическим инстументом
            нескольких жизненных сфер.
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
              <Text>
                <span>ONLINE: </span>Видеовстреча от 90 минут
              </Text>
              <Text>
                <span>OFFLINE: </span>Встреча в г. Киев (локация согласовывается
                с участниками)
              </Text>
            </Box>
          </Box>
          <Box pt={['25px', '40px']} display={[null, 'flex']}>
            <Box mb={['40px']} mr={[null, '20px']}>
              <Text>ONLINE:</Text>
              <List>
                <li>
                  <Text maxWidth={['125px']}>
                    Групповая игра (2-4 человека)
                  </Text>
                </li>
                <li>
                  <Text>Индивидульная игра</Text>
                </li>
              </List>
              <Box
                display="flex"
                alignItems={['center', null, 'flex-start']}
                justifyContent={['space-between', 'flex-start']}
                flexDirection={[null, null, 'column']}
              >
                <Price>$14/чел.</Price>
                <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
              </Box>
            </Box>
            <Box>
              <Text>OFFLINE:</Text>
              <List>
                <li>
                  <Text maxWidth={['125px']}>
                    Групповая игра (2-4 человека)
                  </Text>
                </li>
                <li>
                  <Text>Индивидульная игра</Text>
                </li>
              </List>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={['space-between', 'flex-start']}
                flexDirection={[null, null, 'column']}
              >
                <Price>$18/чел.</Price>
                <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
