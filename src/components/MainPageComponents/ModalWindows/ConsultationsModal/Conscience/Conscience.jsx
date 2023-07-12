import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { BuyContainer } from '../../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  List,
  MainTitle,
  Requests,
  Text,
} from './Conscience.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const Conscience = ({ price }) => {
  const { t } = useTranslation('modals');
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>
        {t('conscience.title')}
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
            {t('conscience.title')}
          </MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          <Text mb="15px">{t('conscience.desc1')}</Text>
          <Text mb="25px">{t('conscience.desc2')}</Text>
          <Text>{t('conscience.listTitle')}</Text>
          <List>
            <li>
              <Text>{t('conscience.listEl1')}</Text>
            </li>
            <li>
              <Text>{t('conscience.listEl2')}</Text>
            </li>
            <li>
              <Text>{t('conscience.listEl3')}</Text>
            </li>
            <li>
              <Text>{t('conscience.listEl4')}</Text>
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
              <Text mb={['20px', '0px']} width={[null, '320px']}>
                {t('conscience.videoMeeting')}
              </Text>
            </Box>
            <Box display={[null, null, 'flex']} flexDirection="column">
              <AdditionalInfo mb="15px" fontSize={[null, null, '14px']}>
                {t('conscience.additionalInfo1')}
              </AdditionalInfo>
              <AdditionalInfo>
                <AdditionalInfo fontSize={[null, null, '14px']}>
                  {t('conscience.additionalInfo2')}
                </AdditionalInfo>
              </AdditionalInfo>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
