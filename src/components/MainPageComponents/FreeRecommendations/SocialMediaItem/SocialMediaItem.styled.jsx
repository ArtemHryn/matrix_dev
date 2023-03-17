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
    margin-right: 18px;
    width: calc((100% - 10px) / 3);
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
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    margin-bottom: 12px;
  }
`;
export const SocialName = styled.h4`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;

  color: #b388d3;
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 48px;
  }
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

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    margin-top: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 52px;
    height: 52px;
  }
`;

export const Description = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  flex-grow: 1;

  color: ${p => p.theme.colors.secondText};
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 10px;
  }
`;
