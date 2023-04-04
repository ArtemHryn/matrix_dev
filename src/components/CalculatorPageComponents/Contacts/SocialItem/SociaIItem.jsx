import React from 'react';
import { ReactComponent as Arrow } from 'images/FreeRecommendations/rightArrow.svg';
import {
  SocialMediaItemElement,
  SocialName,
  SocialNameContainer,
} from 'components/MainPageComponents/FreeRecommendations/SocialMediaItem/SocialMediaItem.styled';
import { Info, SocialLink } from './SocialItem.styled';

const SocialItem = ({ item: { name, link, info } }) => {
  return (
    <SocialMediaItemElement>
      <SocialNameContainer>
        <SocialName>{name}</SocialName>
        <SocialLink href={link} target="_blank" rel="noreferrer noopener" display={[null, 'none']}>
          <Arrow stroke="#9071AF" />
        </SocialLink>
      </SocialNameContainer>
      <Info>{info}</Info>
      <SocialLink href={link} target="_blank" rel="noreferrer noopener" display={['none', 'flex']}>
        <Arrow stroke="#9071AF" />
      </SocialLink>
    </SocialMediaItemElement>
  );
};

export default SocialItem;
