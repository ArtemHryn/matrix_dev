import styled from 'styled-components';
import { layout, space, typography, color } from 'styled-system';

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.06;

  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};
  ${space}
  ${typography}
  ${layout}
`;

export const ElementsList = styled.ul`
  display: flex;
  gap: 16px;
  padding-left: 11px;
  ${space}
`;

export const Element = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-family: ${p => p.theme.fonts.digits};
  font-weight: 400;
  font-size: 18px;
  line-height: 0.63;
  letter-spacing: 0.01em;

  color: #000000;

  background: rgba(255, 255, 255, 0.5);
  border: 0.7px solid #9071af;
  border-radius: 50%;
  ${layout}
  ${color}
`;

export const MainElement = styled(Element)`
  width: 41px;
  height: 41px;
  background-color: #f3e8ff;
`;
