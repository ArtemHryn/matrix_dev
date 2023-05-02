import styled from 'styled-components';
import { color, space } from 'styled-system';

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 26px;
    line-height: 1.27;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 24px;
  }
  ${space}
`;

export const ElementsList = styled.ul`
  display: flex;
  gap: 4px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    gap: 8px;
  }
`;

export const Element = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;

  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 11px;
  line-height: 0.53;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};

  border: 0.5px solid #9071af;
  border-radius: 50%;
  background-color: #ffffff;
  ${color}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 21px;
    width: 39px;
    height: 39px;
  }
`;
