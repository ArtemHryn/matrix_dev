import styled from 'styled-components';
import { layout } from 'styled-system';

export const ScrollToTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: 0.5px solid #9071af;
  border-radius: 50%;
  transform: rotate(-90deg);
  z-index: 100;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: scale(1.1) rotate(-90deg);
  }
  ${layout}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 52px;
    height: 52px;
  }
`;
