import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  HowIsGoingConsultation,
  MainTitle,
  Requests,
  Text,
  Warning,
} from './CoupleTherapy.styled';
import { useTranslation } from 'react-i18next';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const CoupleTherapy = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('coupleTherapy.title')}
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
            {t('coupleTherapy.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('coupleTherapy.desc1')}</Text>
          <Text mb="15px">{t('coupleTherapy.desc2')}</Text>
          <Text>{t('coupleTherapy.desc3')}</Text>
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
              <Text mb={['20px']} width={[null, '485px', '100%']}>
                {t('coupleTherapy.videoMeeting')}
              </Text>
              <Warning>{t('coupleTherapy.warning')}</Warning>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
