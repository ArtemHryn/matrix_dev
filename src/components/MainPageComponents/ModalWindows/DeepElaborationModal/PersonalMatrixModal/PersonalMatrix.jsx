import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('personal.title')}
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
            {t('personal.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="20px">{t('personal.firstStep')}</Text>
          <List>
            <li>
              <Text>{t('personal.stepsList1')} </Text>
            </li>
            <li>
              <Text>{t('personal.stepsList2')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList3')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList4')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList5')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList6')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList7')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList8')}</Text>
            </li>
            <li>
              <Text>{t('personal.stepsList9')}</Text>
            </li>
          </List>
          <Text mb="20px">{t('personal.desc1')}</Text>
          <Text mb="20px">{t('personal.desc2')}</Text>
          <Text>{t('personal.desc3')}</Text>
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
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px']} width={[null, '220px']}>
                {t('personal.videoMeeting')}
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>{t('personal.additionalInfo1')}</AdditionalInfo>
              <AdditionalInfo>{t('personal.additionalInfo2')}</AdditionalInfo>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={['space-between', 'flex-start']}
            pt={['25px', '40px']}
          >
            <Price>$133</Price>
            <BuyButton href="https://t.me/DariKarma">{t('buy')}</BuyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
