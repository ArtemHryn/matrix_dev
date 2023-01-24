import { Box } from 'components/Box';
import { Title } from './FreeRecommendations.styled';
import { SocialMediaItem } from './SocialMediaItem/SocialMediaItem';
import socialMediaList from './socialMediaList';

export const FreeRecommendations = () => {
  return (
    <Box as="section" pt="40px" pb="40px">
      <Box maxWidth={['430px', '768px', '1440px']} px="60px" m="0 auto">
        <Title>Бесплатно делюсь полезностями в соц. сетях:</Title>
        <ul>
          {socialMediaList.map(({ name, link, info }) => (
            <SocialMediaItem key={name} name={name} link={link} info={info} />
          ))}
        </ul>
      </Box>
    </Box>
  );
};
