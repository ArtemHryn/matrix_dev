import styled from 'styled-components';
import { grid } from 'styled-system';

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.06;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
`;

export const ElementsList = styled.ul`
  align-items: center;
  display: flex;
  gap: 16px;
  ${grid}
`;
