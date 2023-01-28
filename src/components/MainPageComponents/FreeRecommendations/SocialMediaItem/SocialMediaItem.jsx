import { ReactComponent as Arrow } from 'images/FreeRecommendations/rightArrow.svg';
import {
  Description,
  SocialLink,
  SocialMediaItemElement,
  SocialName,
  SocialNameContainer,
} from './SocialMediaItem.styled';

export const SocialMediaItem = ({ name, link, info }) => {
  return (
    <SocialMediaItemElement>
      <SocialNameContainer>
        <SocialName>{name}</SocialName>
        <SocialLink
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          display={['flex', 'none']}
        >
          <Arrow />
        </SocialLink>
      </SocialNameContainer>
      <Description>{info}</Description>
      <SocialLink
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        display={['none', 'flex']}
      >
        <Arrow />
      </SocialLink>
    </SocialMediaItemElement>
  );
};
