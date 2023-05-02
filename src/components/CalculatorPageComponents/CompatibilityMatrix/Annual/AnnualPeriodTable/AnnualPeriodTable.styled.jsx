import styled from 'styled-components';
import { border, color, flexbox } from 'styled-system';

export const TableTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  font-style: italic;
  font-size: 16px;
  line-height: 1.22;
  letter-spacing: 0.01em;

  color: #72499b;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(249, 237, 255, 0.7) 100%
  );
  border: 1px solid #72499b;
  border-radius: 12px;

  margin-bottom: 3px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 30px;
    height: 95px;
  }
`;

export const PeriodCircle = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  ${color}
  border-radius: 50%;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
`;

export const KeyText = styled.p`
  font-family: ${p => p.theme.fonts.digits};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  line-height: 15px;

  color: #000000;
  height: 30px;
  flex: 2;
  border-bottom: 0.6px solid #9071af;
  border-right: 0.6px solid #9071af;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 56px;
    font-size: 20px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
  }
  ${flexbox};
  ${border}
  ${color}
`;
