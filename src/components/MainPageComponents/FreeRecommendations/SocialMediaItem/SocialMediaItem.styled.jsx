import styled from 'styled-components';
import { layout } from 'styled-system';

export const SocialMediaItemElement = styled.li`
  margin-bottom: 35px;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
    margin-right: 38px;
    width: calc((100% - 76px) / 3);
  }
`;
export const SocialNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
    margin-bottom: 0;
  }
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
  ${layout}
`;

export const Description = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;

  color: ${p => p.theme.colors.secondText};

`;
