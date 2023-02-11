import { Box } from 'components/Box';
import {
  BuyButton,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Price,
  Requests,
  Text,
} from './ParentChildren.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const ParentChildren = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        Детско-родительские отношения
      </MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
          width={[null, null, 'calc((100% - 100px) / 2)']}
        >
          <MainTitle display={[null, null, 'none']}>
            Детско-родительские отношения
          </MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text>Данная консультация поможет:</Text>
          <List>
            <li>
              <Text>понять себя и своего ребёнка;</Text>
            </li>
            <li>
              <Text>выстроить правильную коммуникацию;</Text>
            </li>
            <li>
              <Text>уделить внимание определённым качествам ребёнка;</Text>
            </li>
            <li>
              <Text>направить в нужную сферу деятельности;</Text>
            </li>
            <li>
              <Text>эффективно решать конфликтные ситуации;</Text>
            </li>
            <li>
              <Text>выбрать верную модель поведения родителя;</Text>
            </li>
            <li>
              <Text>
                узнать таланты, способности, задачи и ключевые энергии ребёнка.
              </Text>
            </li>
          </List>
        </Box>
        <Box>
          <Box
            display={[null, null, 'flex']}
            alignItems="center"
            py={['25px', '40px']}
            flexDirection={[null, null, 'column']}
          >
            <Box
              width="100%"
              backgroundImage={dotGradient}
              backgroundPosition="bottom"
              backgroundSize="15px 2px"
              backgroundRepeat="repeat-x"
              pb={['25px', '40px']}
            >
              <HowIsGoingConsultation>
                Как проходит консультация?
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px']}>
                Видеовстреча 60 - 90 минут + индивидуальные рекомендации для
                ребенка и дето-родительских отношений + трансформация для
                родителя исходя из запроса
              </Text>
            </Box>
            <Box pt={['25px', '25px', '25px']} display={[null, 'flex']}>
              <Box
                mb={['25px', '0px']}
                mr={[null, '25px']}
                width={[null, 'calc((100% - 42px) / 2)']}
                display={[null, 'flex']}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text mb="15px">
                  Матрица ребёнка, Совместимость 1 родителя с ребёнком
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={['space-between', 'flex-start']}
                >
                  <Price>{price}</Price>
                  <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
                </Box>
              </Box>
              <Box
                width={[null, 'calc((100% - 42px) / 2)']}
                display={[null, 'flex']}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text mb="15px" maxWidth={[null, null, '230px']}>
                  Комплексная консультация: Счастливая семья (матрица ребёнка,
                  совместимость ребёнка с каждым родителем, совместимость
                  родителей)
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={['space-between', 'flex-start']}
                >
                  <Price>$90</Price>
                  <BuyButton href="https://t.me/DariKarma">Купить</BuyButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
