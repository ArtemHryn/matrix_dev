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
import { useTranslation } from 'react-i18next';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const ParentChildren = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('parentChildren.title')}
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
            {t('parentChildren.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text>{t('parentChildren.listTitle')}</Text>
          <List>
            <li>
              <Text>{t('parentChildren.listEl1')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl2')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl3')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl4')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl5')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl6')}</Text>
            </li>
            <li>
              <Text>{t('parentChildren.listEl7')}</Text>
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
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Text mb={['20px', '0px']}>
                {t('parentChildren.videoMeeting')}
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
                <Text mb="15px">{t('parentChildren.additionalInfo1')}</Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={['space-between', 'flex-start']}
                >
                  <Price>{price}</Price>
                  <BuyButton href="https://t.me/DariKarma">
                    {t('buy')}
                  </BuyButton>
                </Box>
              </Box>
              <Box
                width={[null, 'calc((100% - 42px) / 2)']}
                display={[null, 'flex']}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text mb="15px" maxWidth={[null, null, '230px']}>
                  {t('parentChildren.additionalInfo2')}
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={['space-between', 'flex-start']}
                >
                  <Price>$90</Price>
                  <BuyButton href="https://t.me/DariKarma">
                    {t('buy')}
                  </BuyButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
