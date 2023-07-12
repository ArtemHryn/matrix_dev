import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  AdditionalInfo,
  BuyButton,
  HowIsGoingConsultation,
  List,
  ListTitle,
  MainTitle,
  Price,
  Requests,
  Text,
} from './ProsperityStar.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const ProsperityStar = () => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('prosperity.title')}
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
            {t('prosperity.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('prosperity.desc1')}</Text>
          <Text mb="15px">{t('prosperity.desc2')}</Text>
          <Text mb="15px">{t('prosperity.desc3')}</Text>
          <ListTitle>{t('prosperity.listTitle')}</ListTitle>
          <List>
            <li>
              <Text>{t('prosperity.listEl1')}</Text>
            </li>
            <li>
              <Text>{t('prosperity.listEl2')}</Text>
            </li>
            <li>
              <Text>{t('prosperity.listEl3')}</Text>
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
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px']} width={['200px', '220px']}>
                {t('prosperity.videoMeeting')}
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>{t('prosperity.additionalInfo1')}</AdditionalInfo>
              <AdditionalInfo>{t('prosperity.additionalInfo2')}</AdditionalInfo>
            </Box>
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
