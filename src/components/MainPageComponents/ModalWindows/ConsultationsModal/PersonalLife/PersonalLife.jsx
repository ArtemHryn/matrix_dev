import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './PersonalLife.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const PersonalLife = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('personalLife.title')}
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
            {t('personalLife.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text>{t('personalLife.listTitle')}</Text>
          <List>
            <li>
              <Text>{t('personalLife.listEl1')}</Text>
            </li>
            <li>
              <Text>{t('personalLife.listEl2')}</Text>
            </li>
            <li>
              <Text>{t('personalLife.listEl3')}</Text>
            </li>
            <li>
              <Text>{t('personalLife.listEl4')}</Text>
            </li>
          </List>
          <Text>{t('personalLife.desc1')}</Text>
          <Text>{t('personalLife.desc2')}</Text>
          <Text>{t('personalLife.desc3')}</Text>
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
              <Text mb={['20px', '0px']} width={[null, '420px']}>
                {t('personalLife.videoMeeting')}
              </Text>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
