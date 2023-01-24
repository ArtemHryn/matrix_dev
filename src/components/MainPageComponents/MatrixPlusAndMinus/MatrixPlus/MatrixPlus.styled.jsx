import styled from 'styled-components';
import { position } from 'styled-system';

export const PuzzleTextPlus = styled.p`
  position: absolute;

  max-width: ${p => p.maxWidth};
  font-family: ${p => p.theme.fonts.main};
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;

  color: #000000;
  ${position}
`;
