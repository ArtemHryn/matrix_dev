import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  BuyButton,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './GameModal.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const GameModal = () => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('game.title')}
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
            {t('game.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('game.desc1')}</Text>
          <Text>{t('game.listTitle')}</Text>
          <List>
            <li>
              <Text>{t('game.listEl1')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl2')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl3')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl4')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl5')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl6')}</Text>
            </li>
            <li>
              <Text>{t('game.listEl7')}</Text>
            </li>
          </List>
          <Text>{t('game.desc2')}</Text>
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
              <Text>
                <span>ONLINE: </span>
                {t('game.videoMeeting')}
              </Text>
              <Text>
                <span>OFFLINE: </span>
                {t('game.meeting')}
              </Text>
            </Box>
          </Box>
          <Box pt={['25px', '40px']} display={[null, 'flex']}>
            <Box mb={['40px']} mr={[null, '20px']}>
              <Text>ONLINE:</Text>
              <List>
                <li>
                  <Text>
                    {t('game.groupGame')} -{' '}
                    <Text as="span" fontWeight="700">
                      14$/{t('game.person')}
                    </Text>
                  </Text>
                </li>
                <li>
                  <Text>
                    {t('game.personalGame')} -{' '}
                    <Text as="span" fontWeight="700">
                      26$/{t('game.person')}
                    </Text>
                  </Text>
                </li>
              </List>
              <Box
                display="flex"
                alignItems={['center', null, 'flex-start']}
                justifyContent={['space-between', 'flex-start']}
                flexDirection={[null, null, 'column']}
              >
                <BuyButton href="https://t.me/DariKarma">{t('buy')}</BuyButton>
              </Box>
            </Box>
            <Box>
              <Text>OFFLINE:</Text>
              <List>
                <li>
                  <Text>
                    {t('game.groupGame')} -{' '}
                    <Text as="span" fontWeight="700">
                      21$/{t('game.person')}
                    </Text>
                  </Text>
                </li>
                <li>
                  <Text>
                    {t('game.personalGame')} -
                    <Text as="span" fontWeight="700">
                      35$/{t('game.person')}
                    </Text>
                  </Text>
                </li>
              </List>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={['space-between', 'flex-start']}
                flexDirection={[null, null, 'column']}
              >
                <BuyButton href="https://t.me/DariKarma">{t('buy')}</BuyButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
