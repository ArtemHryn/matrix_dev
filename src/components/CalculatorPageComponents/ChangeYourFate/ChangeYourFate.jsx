import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  AssistanseText,
  // CalcAuthor,
  ConsultationBtn,
  Image,
  Karmolog,
  Line,
  Logo,
  Title,
} from './ChangeYourFate.styled';
import authorMob from 'images/Calculator/ChangeYourFate/AuthorPhoto.webp';
import authorTab from 'images/Calculator/ChangeYourFate/authorTab.webp';
import authorDesk from 'images/Calculator/ChangeYourFate/authorDesk.webp';

export const ChangeYourFate = () => {
  const {t} =  useTranslation('calc')
  return (
    <Box id="ChangeYourFate" as="section" py={['40px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['37px', '32px', '192px']}
        m="0 auto"
      >
        <Box
          backgroundColor={[null, 'rgba(255, 255, 255, 0.5);']}
          borderRadius={[null, '23px']}
          display={[null, 'flex']}
          overflow="hidden"
          mb={['25px', '29px']}
          justifyContent={[null, 'space-between']}
        >
          <Box
            mb={['7px', '0px']}
            py={[null, '42px', '36px']}
            pl={[null, '40px', '66px']}
            pr={[null, '11px']}
            maxWidth={[null, '60%', '65%']}
          >
            {' '}
            <Box ml={[null, 'auto']}>
              <Logo>Dari.Karma</Logo>
              <Line>
                <Karmolog>Кармолог</Karmolog>
              </Line>
            </Box>
            <Title>{t('changeYourFateTitle')}</Title>
            <AssistanseText>{t('changeYourFateAssistanseText')}</AssistanseText>
            <ConsultationBtn to="/" state={{ from: '4methods' }}>
              {t('changeYourFateConsultationBtn')}
            </ConsultationBtn>
          </Box>
          <picture>
            <source srcSet={authorDesk} media="(min-width: 1440px)" />
            <source srcSet={authorTab} media="(min-width: 768px)" />
            <Image src={authorMob} alt="author" />
          </picture>
        </Box>
        {/* <CalcAuthor>
          {t('changeYourFateCalcAuthor1')}{' '}
          <CalcAuthor as="span" fontWeight="700" fontStyle="italic">
            {t('changeYourFateCalcAuthor2')}
          </CalcAuthor>{' '}
          {t('changeYourFateCalcAuthor3')}{' '}
          <CalcAuthor as="span" fontWeight="700" fontStyle="italic">
            {t('changeYourFateCalcAuthor4')}
          </CalcAuthor>
        </CalcAuthor> */}
      </Box>
    </Box>
  );
};
