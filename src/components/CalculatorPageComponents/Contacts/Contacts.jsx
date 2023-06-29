import { Box } from 'components/Box';
import { Title } from 'components/MainPageComponents/FreeRecommendations/FreeRecommendations.styled';

import socialMediaList from 'components/MainPageComponents/FreeRecommendations/socialMediaList';
import SocialItem from './SocialItem/SociaIItem';

const Contacts = () => {
  return (
    <Box as="section" py={['40px', null, '80px']} id="contacts">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['37px', '32px', '60px']}
        m="0 auto"
      >
        <Title
          m={[null, '0 auto 62px']}
          textAlign={[null, 'center']}
          fontSize={[null, '100px', '115px']}
        >
          Контакты
        </Title>
        <Box as="ul" display={[null, 'flex']} gridGap={[null, null, '170px']}>
          {socialMediaList.map(media => (
            <SocialItem key={media.name} item={media} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
