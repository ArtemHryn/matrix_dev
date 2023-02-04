import { Box } from 'components/Box';
import { AdditionalInfo, BuyButton, HowIsGoingConsultation, List, ListTitle, MainTitle, Price, Requests, Text } from './ProsperityStar.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const ProsperityStar = () => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        Звезда процветания
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
            Звезда процветания
          </MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            4 ступень Матрицы Судьбы. Выход на новый уровень реализации.
            Раскрытие своей путеводной звезды и энергий материализации желаний.
            Объединение уровней духа и материи, что открывает новый путь и
            методы реализации. Активация нового ключа силы. Осознание
            целостности 2-х миров. Матрица звезды процветания даст понимание как
            формируется идея, на чем она строится и что необходимо для
            реализации. Данная проработка поможет понять, что мешает воплощаться
            желаниям и как их можно реализовывать.
          </Text>
          <Text mb="25px">
            Физически и энергетически слабая личность не способна удержать
            большое количество земных благ, так как все они являются очень
            энергоемкими. Проработка Звезды Процветания создает состояние
            целостности, благодаря которому человек получает более чистый поток
            для осознания истинных желаний и творческой реализации.
          </Text>
          <ListTitle>Какие запросы разберем?</ListTitle>

          <List>
            <li>
              <Text>ключи небесного и земного процветания;</Text>
            </li>
            <li>
              <Text>
                ключи результата и признания, почестей и известности,
                знаменитости;
              </Text>
            </li>
            <li>
              <Text>
                целостную звезду процветания и инструкцию по ее активации.
              </Text>
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
              <Text mb={['20px', '0px']} width={['200px', '220px']}>
                видеовстреча 2 - 3 часа + трансформация от 60 дней
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>
                * Обязательно прохождение исцеления 9 колен рода
              </AdditionalInfo>
              <AdditionalInfo>
                * Включает в себя большое количество практический и ритуальной
                работы.
              </AdditionalInfo>
            </Box>
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
