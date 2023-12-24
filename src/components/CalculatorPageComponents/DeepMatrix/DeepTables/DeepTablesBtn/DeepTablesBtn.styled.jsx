import styled from 'styled-components';
import { color } from 'styled-system';

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 12px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    gap: 10px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    gap: 16px;
  }
`;

export const ChangeTableBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 34px;

  border-radius: 10px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.button};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  transition: scale 250ms ease;
  &:is(:hover, :focus) {
    scale: 1.05;
  }
  &:disabled {
    opacity: 0.5;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    width: 310px;
    height: 44px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 24px;
    width: 410px;
    height: 44px;
  }
  ${color}
`;
