import { ReactComponent as CloseModal } from 'images/modals/closeModal.svg';

import star from 'images/modals/star.png';
import { Box } from 'components/Box';
import {
  AdditionalInfo,
  Button,
  BuyButton,
  HowIsGoingConsultation,
  List,
  ListElemet,
  ListTitle,
  MainTitle,
  Price,
  Requests,
  Text,
} from './Awareness.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const Awareness = ({ setShowModal }) => {
  return (
    <>
      <Button onClick={() => setShowModal(false)}>
        <CloseModal />
      </Button>
      <Box
        position="absolute"
        backgroundColor="#FFFFFF"
        border="1px solid #C8B3E6;"
        borderRadius="50%"
        top={['15px', '26px', '36px']}
        right={['15px', '26px', '36px']}
        width={['40px', '49px']}
        height={['40px', '49px']}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="5px"
      >
        <img src={star} alt="star" />
      </Box>
      <MainTitle display={['none', 'none', 'block']}>
        Матрица осознанности
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
            Матрица осознанности
          </MainTitle>
          <Requests>
            <strong>Матрица осознанности</strong>
          </Requests>
          <Text mb="15px">
            3 ступень Матрицы судьбы. Проработка внутренней и внешней кармы.
            Получение своего кристалла души. Прохождение пути трансформации от
            12 до 15 архетипа. Трансформация матрицы жертвы в матрицу нового
            видения. Избавление от душевных и физических страданий; стабилизация
            психологического состояния; понимание истинных желаний. Познание
            более глубинных процессов души и тела. Развитие телесности.
            Раскрытие и проработка подсознательных негативных сценариев и
            установок.
          </Text>
          <Text mb="25px">
            Выявление теневой стороны личности и приумножение собственного
            ресурса. Создание духовного стержня. Освобождение от старых циклов,
            токсичных связей, переход в состояние любви и принятия. Данные
            расчёты показывают сценарии ситуаций в жизни человека и кармические
            истории, которые прорабатываются. В итоге человек получает алмазную
            огранку матрицы, то есть защиту судьбы.
          </Text>
          <ListTitle>Какие запросы разберем?</ListTitle>
          <List>
            <ListElemet>
              <Text>Демон-Жертва;</Text>
            </ListElemet>
            <ListElemet>
              <Text>16 Карм;</Text>
            </ListElemet>
            <ListElemet>
              <Text>Кристалл души;</Text>
            </ListElemet>
            <ListElemet>
              <Text>Матрица осознанности; </Text>
            </ListElemet>
            <ListElemet>
              <Text>Матрица внутренней кармы</Text>
            </ListElemet>
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
              <Text mb={['20px', '0px', '20px']} width={[null, '220px']}>
                видеовстреча 2 - 3 часа + трансформация от 60 дней
              </Text>
            </Box>
            <AdditionalInfo>
              *Большое количество ритуальной работы и практик. Трансформации и
              исцеления могут проходить через обострения
            </AdditionalInfo>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={['space-between', 'flex-start']}
            pt={['25px', '40px']}
          >
            <Price>$117</Price>
            <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
