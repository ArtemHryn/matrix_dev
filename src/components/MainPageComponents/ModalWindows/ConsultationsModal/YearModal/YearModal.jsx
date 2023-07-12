import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  MainTitle,
  Requests,
  Text,
} from './YearModal.styled';
import { useTranslation } from 'react-i18next';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const YearModal = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('year.title')}
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
            {t('year.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('year.desc1')}</Text>
          <Text mb="25px">{t('year.desc2')}</Text>
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
              <Text mb={['20px', '0px']} width={[null, '320px']}>
                {t('year.videoMeeting')}
              </Text>
            </Box>
            <Box display={[null, null, 'flex']}>
              <AdditionalInfo>{t('year.additionalInfo2')}</AdditionalInfo>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
