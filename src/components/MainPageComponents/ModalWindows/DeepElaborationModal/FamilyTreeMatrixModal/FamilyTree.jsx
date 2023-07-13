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
import { useTranslation } from 'react-i18next';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const FamilyTree = () => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('family.title')}
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
            {t('family.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('family.desc1')}</Text>
          <Text mb="15px">{t('family.desc2')}</Text>
          <Text mb="15px">{t('family.desc3')}</Text>
          <Text>{t('family.desc4')}</Text>
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
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px', '20px']} width={[null, '265px']}>
                {t('family.videoMeeting')}
              </Text>
            </Box>
            <AdditionalInfo>{t('family.additionalInfo1')}</AdditionalInfo>
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
