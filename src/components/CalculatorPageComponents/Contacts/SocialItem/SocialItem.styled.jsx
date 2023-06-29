import styled from 'styled-components';
import { layout } from 'styled-system';

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  width: 66px;
  height: 39px;
  ${layout}
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 97px;
  }
`;

export const Info = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;

  color: ${p => p.theme.colors.main};
  margin: 10px 0;
`;
