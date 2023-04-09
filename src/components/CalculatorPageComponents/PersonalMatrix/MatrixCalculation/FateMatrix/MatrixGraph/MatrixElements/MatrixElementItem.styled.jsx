import styled from 'styled-components';
import { position, typography } from 'styled-system';

export const MatrixKey = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 13px;
  line-height: 0.53;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.secondText};
  ${position}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
  }
  ${typography}
`;
