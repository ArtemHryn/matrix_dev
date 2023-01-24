import styled from 'styled-components';

export const SocialMediaItemElement = styled.li`
  margin-bottom: 35px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const SocialNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const SocialName = styled.h4`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  color: #b388d3;
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #9071af;
  border-radius: 50%;
`;

export const Description = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
