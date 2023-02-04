import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import { HowIsGoingConsultation, List, MainTitle, Requests, Text } from './PersonalLife.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const PersonalLife = ({ price }) => {
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>Личная жизнь</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>Личная жизнь</MainTitle>
          <Requests>
            <strong>Какие запросы разберем?</strong>
          </Requests>
          <Text>Данная консультация поможет:</Text>
          <List>
            <li>
              <Text>наладить личную жизнь;</Text>
            </li>
            <li>
              <Text>найти вторую половинку;</Text>
            </li>
            <li>
              <Text>понять какой для вас комфортный тип взаимоотношений;</Text>
            </li>
            <li>
              <Text>прийти к взаимопониманию с партнером.</Text>
            </li>
          </List>
          <Text>
            Разбор личных качеств и почему не удается построить личную жизнь.
            Понять какой партнер подходит и какие потребности вам важно
            закрывать в отношениях.
          </Text>
          <Text>
            На трансформации будет возможность прокачать внутреннюю энергетику,
            усилить свои достоинства и проработать негативные установки,
            мешающие построить гармоничные отношения.
          </Text>
          <Text>Разбор матрицы совместимости с 1 – 2 партнерами</Text>
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
