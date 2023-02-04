import { Box } from 'components/Box';
import {
    AdditionalInfo,

  BuyButton,
  HowIsGoingConsultation,
  MainTitle,
  Price,
  Requests,
  Text,
} from './FamilyTree.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const FamilyTree = () => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>9 колен рода</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>9 колен рода</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text mb="15px">
            2 ступень Матрицы Судьбы. Проработка родовой матрицы дает нам
            социальную реализацию; показывает нам нашу значимость и задачу в
            социуме. Убирает глубинные негативные установки; нейтрализует
            повторение родовых сценариев. Реализация нашей матрицы зависит от
            родового квадрата, который составляет 50 % всей матрицы, поэтому 9
            колен рода является следующим важнейшим этапом трансформации.
            Проработка поможет в реализации социального предназначения; и
            выполнении задач рода для получения дополнительного ресурса.
          </Text>
          <Text mb="15px">
            Задача данного этапа, не столько понять и разобрать все проблемы
            рода, а их исцелить и проработать. Происходит расчет всех 9 колен
            рода, вскрытия энергетических накоплений рода мастером в канале
            инициации(яснознания), расчет примирения всех родов и отработка
            каждого ключа в процессе трансформации.
          </Text>
          <Text mb="15px">
            С помощью данного исцеления вы откроете дверь для своих детей и
            ваших потомков! Вы привлечете в свою жизнь и в свой род любовь,
            изобилие, процветание и глубинное единение. Данная проработка может
            помочь найти родственников, получать дар рода, встретить свою
            любовь, наладить отношения с родными, исцелить физические болезни,
            узнать о долгожданной беременности и т.д.
          </Text>
          <Text>
            Исправление ошибок родовых линий — это длительный и сложный процесс,
            но пройдя его вы получите гораздо больше.
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
            <Box width="100%">
              <HowIsGoingConsultation>
                Как проходит консультация?
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px', '20px']} width={[null, '220px']}>
                видеовстреча 2 часа + трансформация от 70 дней
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
