import {
  AdditionalInfo,
  BuyButton,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Price,
  Requests,
  Text,
} from './PersonalMatrix.styled';
import { Box } from 'components/Box';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const PersonalMatrix = () => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        Целостная личная матрица
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
            Целостная личная матрица
          </MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="20px">
            1 ступень Матрицы Судьбы является идеальной базой для старта в
            познании себя и своих глубинных процессов. Матрица отвечает на
            большинство вопросов, таких как:
          </Text>
          <List>
            <li>
              <Text>Какие у меня сильные качества? </Text>
            </li>
            <li>
              <Text>Какое моё предназначениe? </Text>
            </li>
            <li>
              <Text>Какие у меня таланты? </Text>
            </li>
            <li>
              <Text>Как мне реализовать себя? </Text>
            </li>
            <li>
              <Text>Как заработать деньги? </Text>
            </li>
            <li>
              <Text>Как построить личную жизнь? </Text>
            </li>
            <li>
              <Text>Куда пойти учиться? </Text>
            </li>
            <li>
              <Text>Могу ли я открыть свой бизнес? </Text>
            </li>
            <li>
              <Text>Почему сложные отношения с родными? И т.д.</Text>
            </li>
          </List>
          <Text mb="20px">
            Также, матрица расскажет какие склонности, изюминки и
            сверхспособности заложены в вашей личности. Возможные трудности,
            испытания и негативные установки с прошлых воплощений, которые нужно
            проработать и преобразовать в ресурс. Личная матрица раскроет тему
            здоровья и психосоматических процессов в вашем теле.
          </Text>
          <Text mb="20px">
            Личная матрица раскроет тему здоровья и психосоматических процессов
            в вашем теле.Самая глубокая и самая фундаментальная трансформация в
            вашей жизни.
          </Text>
          <Text>
            Самая глубокая и самая фундаментальная трансформация в вашей жизни.
            В дальнейшем можно наслаивать на эту базу изучения своей личности с
            помощью других методов, а также спускаться на более глубинные уровни
            своей души. И выходить на новые уровни понимания и осознанности.
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
              <Text mb={['20px', '0px']} width={[null, '220px']}>
                видеовстреча 2 - 3 часа + трансформация от 60 дней
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>
                + Дополнительно входит разбор совместимости с 1 человеком или
                разбор периода (на выбор)
              </AdditionalInfo>
              <AdditionalInfo>
                *Процесс исцеления может проходить через обострение.
              </AdditionalInfo>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={['space-between', 'flex-start']}
            pt={['25px', '40px']}
          >
            <Price>$119</Price>
            <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
