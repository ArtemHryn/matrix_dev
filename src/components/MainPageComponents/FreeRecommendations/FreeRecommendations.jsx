import { useTranslation } from 'react-i18next';
import socialMediaList from './socialMediaList';
import { Box } from 'components/Box';
import { Title } from './FreeRecommendations.styled';
import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';

export const FreeRecommendations = () => {
  const { i18n, t } = useTranslation();
  return (
    <Box as="section" py={['40px', '40px', '90px']}>
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>{t('freeRecommendationTitle')}</Title>
        <Box as="ul" display={[null, 'flex']}>
          {socialMediaList(i18n.language).map(({ name, link, info }) => (
            <SocialMediaItem key={name} name={name} link={link} info={info} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
