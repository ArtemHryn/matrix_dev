import styled from 'styled-components';
import { position, layout } from 'styled-system';

export const PuzzleTextPlus = styled.p`
  position: absolute;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 17px;
  line-height: 1.24;
  text-align: center;

  color: ${p => p.theme.colors.secondText};
  ${position}
  ${layout}
  :last-child {
    display: none;
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
    text-align: left;
    :last-child {
      display: block;
    }
  }
`;
