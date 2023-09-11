import styled from 'styled-components';

export const InstructionBtnSvg = styled.svg`
  width: 52px;
  height: 52px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 98px;
    height: 98px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 110px;
    height: 110px;
  }
`;
