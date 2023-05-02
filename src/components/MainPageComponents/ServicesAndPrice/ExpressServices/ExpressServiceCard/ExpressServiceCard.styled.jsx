import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExpressServiceCardElement = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    :last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    border-radius: 27px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    border-radius: 33px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) and (max-width: ${p => p.theme.sizes.desktop}) {
    width: 232px;
    li:nth-last-child(-n + 2) & {
      width: 350px;
    }
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    flex-wrap: nowrap;
  }
`;
export const ExpressServiceCardText = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 16px;
  line-height: 1.25;
  text-align: center;

  color: ${p => p.theme.colors.main};

  li:last-child & {
    transform: translate(-50%, 50%);
  }

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 25px;
    line-height: 1.2;
    li:last-child & {
      transform: translate(-50%, -50%);
    }
  }
`;

export const DetailsContainer = styled(motion.div)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: 97%;
  background-color: rgba(216, 166, 255, 0.07);
  backdrop-filter: blur(7.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowDetailsButton = styled.button`
  width: 93.83px;
  height: 30px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 50px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: 300;
  font-size: 12px;
  line-height: 1.1;

  letter-spacing: 0.03em;

  color: ${p => p.theme.colors.main};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 147px;
    height: 47px;
    font-size: 18px;
    line-height: 1.22;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 220px;
    height: 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
