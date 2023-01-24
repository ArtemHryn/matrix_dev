import { ReactComponent as Arrow } from 'images/FreeRecommendations/rightArrow.svg';
import { Description, SocialLink, SocialMediaItemElement, SocialName, SocialNameContainer } from './SocialMediaItem.styled';

export const SocialMediaItem = ({ name, link, info }) => {
  return (
    <SocialMediaItemElement>
      <SocialNameContainer>
        <SocialName>{name}</SocialName>
        <SocialLink href={link} target="_blank" rel="noreferrer noopener">
          <Arrow />
        </SocialLink>
      </SocialNameContainer>
      <Description>{info}</Description>
    </SocialMediaItemElement>
  );
};
