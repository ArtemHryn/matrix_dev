import styled, { keyframes } from 'styled-components';
import { layout } from 'styled-system';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }`;

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

export const CalcContainer = styled.div`
  background-image: linear-gradient(
    90deg,
    #fdfcfe 0%,
    #e7e0f3 13.01%,
    #ece6f6 25.18%,
    #ede1f4 36.71%,
    #f5e8f3 47.22%,
    #f6ecf5 54.89%,
    #f4ecfa 71.18%,
    #f4ebf9 79.3%,
    #f7edf8 88.76%,
    #f7ebf6 100%
  );
  @media (prefers-color-scheme: dark) {
    background-image: linear-gradient(
      90deg,
      #fdfcfe 0%,
      #e7e0f3 13.01%,
      #ece6f6 25.18%,
      #ede1f4 36.71%,
      #f5e8f3 47.22%,
      #f6ecf5 54.89%,
      #f4ecfa 71.18%,
      #f4ebf9 79.3%,
      #f7edf8 88.76%,
      #f7ebf6 100%
    );
  }
  background-size: 400% 400%;
  animation: ${gradientAnimation} 5s ease infinite;
  overflow: hidden;
`;
