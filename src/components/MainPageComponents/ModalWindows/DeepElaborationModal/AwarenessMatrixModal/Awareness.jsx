import { Box } from 'components/Box';
import {
  AdditionalInfo,
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
import { useTranslation } from 'react-i18next';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const Awareness = () => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('awareness.title')}
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
            {t('awareness.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('awareness.desc1')}</Text>
          <Text mb="15px">{t('awareness.desc2')}</Text>
          <Text mb="15px">{t('awareness.desc3')}</Text>
          <ListTitle>{t('awareness.listTitle')}:</ListTitle>
          <List>
            <ListElemet>
              <Text>{t('awareness.listEl1')}</Text>
            </ListElemet>
            <ListElemet>
              <Text>{t('awareness.listEl2')}</Text>
            </ListElemet>
            <ListElemet>
              <Text>{t('awareness.listEl3')}</Text>
            </ListElemet>
            <ListElemet>
              <Text>{t('awareness.listEl4')}</Text>
            </ListElemet>
            <ListElemet>
              <Text>{t('awareness.listEl5')}</Text>
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
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px', '20px']} width={[null, '220px']}>
                {t('awareness.videoMeeting')}
              </Text>
            </Box>
            <AdditionalInfo>{t('awareness.additionalInfo1')}</AdditionalInfo>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={['space-between', 'flex-start']}
            pt={['25px', '40px']}
          >
            <Price>$150</Price>
            <BuyButton href="https://t.me/DariKarma">{t('buy')}</BuyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
