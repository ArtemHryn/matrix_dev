import styled from 'styled-components';

export const IntegrityArrowSvg = styled.svg`
  width: 10px;
  height: 10px;
  fill: ${p => p.theme.colors.main};
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;
