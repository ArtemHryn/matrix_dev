import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import phones from 'images/CalculateYourMatrix/Phones.webp';
import phonesTab from 'images/CalculateYourMatrix/phonesTab.webp';
import phonesDesc from 'images/CalculateYourMatrix/desktopPhone.webp';
import {
  AboutCalculator,
  DescTopImg,
  ImgPhones,
  Info,
  LinkToCalculator,
  Title,
  TitleAdditional,
} from './CalculateYourMatrix.styled';

const sectionGradient =
  'radial-gradient(circle,rgba(236, 229, 255, 0.72) 18%,rgba(255, 255, 255, 0.38) 52%, rgba(255, 255, 255, 0.72) 90%)';

export const CalculateYourMatrix = () => {
  const { t } = useTranslation();
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      id="calculateMatrix"
      backgroundImage={[null, sectionGradient]}
      backgroundPosition="100px"
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        position="relative"
        display={[null, null, 'flex']}
      >
        <Box display={[null, null, 'flex']} flexDirection={'column'}>
          <Title>
            {t('calculate')}{' '}
            <TitleAdditional fontStyle="normal" m="0px">
              {t('yourMatrix')}
            </TitleAdditional>
          </Title>
          <Box display={[null, 'flex']} flexDirection="row-reverse">
            <picture>
              <source srcSet={phonesTab} media="(min-width: 768px)" />
              <ImgPhones
                srcSet={phones}
                alt="phones with calc"
                loading="lazy"
              />
            </picture>
            <Box ml="10px">
              <AboutCalculator>{t('aboutCalc')}</AboutCalculator>
              <LinkToCalculator to="calculator">
                {t('calcBtn')}
              </LinkToCalculator>
              <Info>{t('infoAboutCalc')}</Info>
            </Box>
          </Box>
        </Box>
        <DescTopImg src={phonesDesc} alt="phone" loading="lazy" />
      </Box>
    </Box>
  );
};
