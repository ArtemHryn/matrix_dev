import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import { HowIsGoingConsultation, List, MainTitle, Requests, Text } from './Proforientation.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const Proforientation = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Профориентация</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Профориентация</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text>Данная консультация </Text>
          <List>
            <li>
              <Text>
                Поможет определиться с дальнейшим направлением в жизни и выбрать
                специальность для поступления.
              </Text>
            </li>
            <li>
              <Text>
                Поможет выбрать направление, которое будет соответствовать
                задачам предназначения.
              </Text>
            </li>
            <li>
              <Text>
                Ответит на вопрос: "Стоит ли переквалифицироваться или пойти на
                глубинное обучение?", учитывая таланты и предрасположенность к
                определенным сферам деятельности, а также хобби и интересы.
              </Text>
            </li>
            <li>
              <Text>
                Выяснит, стоит ли делать свой продукт или работать в команде;
                структура или творческий поток; работать дистанционно или в
                офисе и т.д.
              </Text>
            </li>
            <li>
              <Text>
                Поможет раскрыть и приумножить свои таланты, начать зарабатывать
                легко и в удовольствие.
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
